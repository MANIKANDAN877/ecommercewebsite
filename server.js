require('dotenv').config();
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const Razorpay = require('razorpay');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

// Initialize Razorpay client
let razorpay;
try {
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
        console.error('CRITICAL ERROR: Razorpay keys are missing from environment variables.');
    } else {
        razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });
    }
} catch (error) {
    console.error('Failed to initialize Razorpay SDK:', error);
}

// Local Inventory Database Helper functions
const inventoryFilePath = path.join(__dirname, 'products.json');

function getInventory() {
    if (!fs.existsSync(inventoryFilePath)) {
        return [];
    }
    try {
        const data = fs.readFileSync(inventoryFilePath, 'utf8');
        return JSON.parse(data || '[]');
    } catch (e) {
        console.error('Error reading products.json:', e);
        return [];
    }
}

function saveInventory(inventory) {
    try {
        fs.writeFileSync(inventoryFilePath, JSON.stringify(inventory, null, 2), 'utf8');
    } catch (e) {
        console.error('Error writing products.json:', e);
    }
}

// Endpoint to fetch public configurations safely
app.get('/api/config', (req, res) => {
    if (!process.env.RAZORPAY_KEY_ID) {
        return res.status(500).json({ error: 'Razorpay Key ID is not configured on the server.' });
    }
    res.json({ keyId: process.env.RAZORPAY_KEY_ID });
});

// Endpoint to get inventory stock levels
app.get('/api/products/inventory', (req, res) => {
    res.json(getInventory());
});

// Endpoint to create an order
app.post('/api/create-order', async (req, res) => {
    try {
        const { amount, currency = 'INR', receipt, items } = req.body;

        // Inventory check before creating order
        if (items && Array.isArray(items)) {
            const inventory = getInventory();
            for (const item of items) {
                const productStock = inventory.find(p => p.id === parseInt(item.id, 10));
                if (!productStock) {
                    return res.status(400).json({ error: `Product ID ${item.id} not found in inventory.` });
                }
                if (productStock.stock < item.quantity) {
                    return res.status(400).json({ error: `Insufficient stock for product: "${item.name || item.id}". Available: ${productStock.stock}` });
                }
            }
        }

        // Basic validations
        if (!amount) {
            return res.status(400).json({ error: 'Amount is required' });
        }

        const parsedAmount = parseInt(amount, 10);
        if (isNaN(parsedAmount) || parsedAmount < 100) {
            return res.status(400).json({ error: 'Amount must be at least 100 paise (₹1.00)' });
        }

        if (!razorpay) {
            return res.status(500).json({ error: 'Razorpay client is not initialized.' });
        }

        const options = {
            amount: parsedAmount,
            currency,
            receipt: receipt || `receipt_${Date.now()}`
        };

        const order = await razorpay.orders.create(options);
        
        res.status(200).json({
            order_id: order.id,
            amount: order.amount,
            currency: order.currency
        });
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        
        // Handle authentication or invalid key errors specifically
        if (error.statusCode === 401) {
            return res.status(401).json({ error: 'Razorpay authentication failed. Verify keys.' });
        }
        
        res.status(500).json({ error: error.description || 'Internal server error while creating order.' });
    }
});

// Endpoint to verify payment signature
app.post('/api/verify-payment', (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, items, amount } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ error: 'Missing required signature verification fields.' });
        }

        const secret = process.env.RAZORPAY_KEY_SECRET;
        if (!secret) {
            return res.status(500).json({ error: 'Razorpay Key Secret is not configured on the server.' });
        }

        // Generate expected signature
        const generatedSignature = crypto
            .createHmac('sha256', secret)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest('hex');

        // Compare signatures securely
        const isValid = crypto.timingSafeEqual(
            Buffer.from(generatedSignature, 'utf-8'),
            Buffer.from(razorpay_signature, 'utf-8')
        );

        if (isValid) {
            // Deduct from inventory stock
            if (items && Array.isArray(items)) {
                const inventory = getInventory();
                items.forEach(item => {
                    const productStock = inventory.find(p => p.id === parseInt(item.id, 10));
                    if (productStock) {
                        productStock.stock = Math.max(0, productStock.stock - item.quantity);
                    }
                });
                saveInventory(inventory);
            }

            // Save order to local orders.json database
            const ordersFilePath = path.join(__dirname, 'orders.json');
            let orders = [];
            
            if (fs.existsSync(ordersFilePath)) {
                try {
                    const data = fs.readFileSync(ordersFilePath, 'utf8');
                    orders = JSON.parse(data || '[]');
                } catch (e) {
                    console.error('Error reading orders.json:', e);
                }
            }

            const newOrder = {
                order_id: razorpay_order_id,
                payment_id: razorpay_payment_id,
                amount: amount ? amount / 100 : 0, // Store in Rupees
                items: items || [],
                timestamp: new Date().toISOString()
            };

            orders.push(newOrder);

            fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2), 'utf8');

            res.status(200).json({ success: true, message: 'Payment verified successfully.' });
        } else {
            res.status(400).json({ success: false, error: 'Signature verification failed. Invalid payment.' });
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({ error: 'Internal server error during verification.' });
    }
});

// Endpoint to view all orders for admin
app.get('/api/admin/orders', (req, res) => {
    try {
        const ordersFilePath = path.join(__dirname, 'orders.json');
        if (!fs.existsSync(ordersFilePath)) {
            return res.json([]);
        }
        const data = fs.readFileSync(ordersFilePath, 'utf8');
        res.json(JSON.parse(data || '[]'));
    } catch (error) {
        console.error('Error reading orders:', error);
        res.status(500).json({ error: 'Failed to read orders database.' });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
