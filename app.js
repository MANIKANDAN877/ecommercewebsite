// Curated Organic Coconut Products
const PRODUCTS = [
    {
        id: 13,
        name: "OFFICE RUBBER ERASER",
        category: "crafts",
        price: 1.00,
        badge: "Essential",
        description: "Premium grade non-dust rubber eraser, perfect for quick and clean corrections.",
        sizes: ["Standard Box"],
        colors: ["#ffffff"],
        images: [
            "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&auto=format&fit=crop&q=60"
        ]
    },
    {
        id: 14,
        name: "PREMIUM A4 SHEET",
        category: "crafts",
        price: 1.00,
        badge: "Stationery",
        description: "High brightness 75GSM white A4 paper sheet, perfect for office printing and sketching.",
        sizes: ["Single Pack"],
        colors: ["#ffffff"],
        images: [
            "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?w=600&auto=format&fit=crop&q=60"
        ]
    },
    {
        id: 1,
        name: "FRESH TENDER COCONUT (PACK OF 6)",
        category: "raw",
        price: 240.00,
        badge: "Harvest Fresh",
        description: "Naturally sweet, hydration-packed tender coconuts plucked straight from Nagercoil groves. Shaved, top-cut, and ready with straws. Best fresh tender coconut delivery in Nagercoil and Chennai.",
        sizes: ["Standard Box", "Large Box (12 pcs)"],
        colors: ["#ffffff"],
        images: [
            "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?w=600&auto=format&fit=crop&q=60"
        ]
    },
    {
        id: 2,
        name: "COLD PRESSED EXTRA VIRGIN COCONUT OIL",
        category: "processed",
        price: 320.00,
        badge: "100% Pure",
        description: "Zero heat processing. Premium quality virgin coconut oil cold-extracted from fresh coconut milk in Nagercoil. Rich in MCFAs, perfect for culinary and cosmetic luxury. Purest cold pressed coconut oil.",
        sizes: ["500ml", "1 Litre"],
        colors: ["#ffffff"],
        images: [
            "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=600&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1506224477000-07aa8a76be89?w=600&auto=format&fit=crop&q=60"
        ]
    },
    {
        id: 3,
        name: "ROYAL KING TENDER COCONUT",
        category: "raw",
        price: 65.00,
        badge: "Premium Sweet",
        description: "The famous orange-skin Sevvilani (King Coconut). Renowned for its rich nutrient profile and exceptionally high sugar-water concentration. Sweetest tender coconut from Nagercoil.",
        sizes: ["Single Piece", "Pack of 3"],
        colors: ["#ffa500"],
        images: [
            "https://images.unsplash.com/photo-1543218024-57a70143c369?w=600&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&auto=format&fit=crop&q=60"
        ]
    },
    {
        id: 4,
        name: "ARTISANAL COCONUT SHELL BOWLS",
        category: "crafts",
        price: 290.00,
        badge: "Eco-Friendly",
        description: "Reclaimed coconut shells handcrafted by local artisans in Nagercoil. Sanded smooth, polished with virgin coconut oil. Set of 2 eco bowls.",
        sizes: ["Standard Set"],
        colors: ["#8b5a2b"],
        images: [
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60"
        ]
    },
    {
        id: 5,
        name: "ORGANIC COCONUT FLOWER NECTAR",
        category: "processed",
        price: 450.00,
        badge: "Low GI Sweetener",
        description: "100% natural, unrefined syrup tapped from the coconut palm blossom in Nagercoil. A highly nutritious alternative to honey or refined sugar.",
        sizes: ["250ml"],
        colors: ["#d2b48c"],
        images: [
            "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=600&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=60"
        ]
    },
    {
        id: 6,
        name: "PREMIUM COCONUT MILK COLD EXTRACT",
        category: "processed",
        price: 120.00,
        badge: "Fresh Batch",
        description: "Rich, creamy milk extracted from first-press mature coconut meat in Nagercoil. Unsweetened, free from thickeners and preservatives. Fresh coconut milk delivery.",
        sizes: ["500ml"],
        colors: ["#ffffff"],
        images: [
            "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&auto=format&fit=crop&q=60",
            "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600&auto=format&fit=crop&q=60"
        ]
    },
    {
        id: 7,
        name: "VINTAGE HANDLOOM SAREES",
        category: "crafts",
        price: 1200.00,
        badge: "Traditional",
        description: "Authentic, high-quality old sarees preserved and refurbished with traditional handloom work by weavers in Nagercoil.",
        sizes: ["Standard Size"],
        colors: ["#ff0000", "#0000ff"],
        images: [
            "images/vintage_sarees.png"
        ]
    },
    {
        id: 8,
        name: "AMMA MILAGAI PODI (SPICY GUNPOWDER)",
        category: "processed",
        price: 150.00,
        badge: "Homemade Style",
        description: "Authentic homemade style spicy chili powder blend, ground to perfection in Nagercoil. Perfect with idli and dosa.",
        sizes: ["250g", "500g"],
        colors: ["#ff0000"],
        images: [
            "images/milagai_podi.png"
        ]
    },
    {
        id: 9,
        name: "TRADITIONAL URUGAI PODI",
        category: "processed",
        price: 180.00,
        badge: "Hot & Aromatic",
        description: "Aromatic blend of spices for making home-style pickles or seasoning side dishes, made traditionally in Nagercoil.",
        sizes: ["200g"],
        colors: ["#ff0000"],
        images: [
            "images/urugai_podi.png"
        ]
    },
    {
        id: 10,
        name: "CRUNCHY COCONUT OIL CHIPS",
        category: "processed",
        price: 95.00,
        badge: "Freshly Fried",
        description: "Crisp and delicious banana chips fried in 100% pure cold-pressed coconut oil sourced from Nagercoil.",
        sizes: ["150g", "300g"],
        colors: ["#ffff00"],
        images: [
            "images/chips_packet.png"
        ]
    },
    {
        id: 11,
        name: "FRESH COCONUT (SINGLE PIECE)",
        category: "raw",
        price: 27.00,
        badge: "Organic Fresh",
        description: "Single whole organic coconut, plucked fresh from our Nagercoil coastal groves. Order fresh coconut delivery in Nagercoil.",
        sizes: ["1 Piece"],
        colors: ["#8b5a2b"],
        images: [
            "images/fresh_coconut.png"
        ]
    },
    {
        id: 12,
        name: "FRESH JACKFRUIT (SINGLE PIECE)",
        category: "raw",
        price: 25.00,
        badge: "Sweet & Ripe",
        description: "Sweet and delicious farm-fresh ripe jackfruit piece, locally sourced from organic gardens in Nagercoil.",
        sizes: ["1 Piece"],
        colors: ["#00ff00"],
        images: [
            "images/jackfruit.png"
        ]
    }
];

// App State Management
let state = {
    products: [...PRODUCTS],
    cart: JSON.parse(localStorage.getItem('aura_coco_cart')) || [],
    filters: {
        category: 'all',
        search: '',
        sort: 'default'
    }
};

// EmailJS Configuration
const EMAILJS_CONFIG = {
    serviceId: 'service_4v90p4q',
    templateId: 'aqfw1st', // EmailJS Template ID
    publicKey: 'Q462ZGqIi5J63iocg'      // Replace with your EmailJS Public Key
};

// DOM Cache
const dom = {
    productsGrid: document.getElementById('products-grid'),
    cartBtn: document.getElementById('cart-btn'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartOverlay: document.getElementById('cart-overlay'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    cartItemsContainer: document.getElementById('cart-items-container'),
    cartBadgeCount: document.getElementById('cart-badge-count'),
    cartCount: document.getElementById('cart-count'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartFooter: document.getElementById('cart-footer'),
    checkoutBtn: document.getElementById('checkout-btn'),
    searchToggleBtn: document.getElementById('search-toggle-btn'),
    searchDropdown: document.getElementById('search-dropdown'),
    searchInput: document.getElementById('search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    categoryFilters: document.getElementById('category-filters'),
    sortSelect: document.getElementById('sort-select'),
    productModal: document.getElementById('product-modal'),
    closeModalBtn: document.getElementById('close-modal-btn'),
    modalBodyContent: document.getElementById('modal-body-content'),
    toastContainer: document.getElementById('toast-container'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileNav: document.getElementById('mobile-nav'),
    closeMobileNavBtn: document.getElementById('close-mobile-nav-btn'),
    navbar: document.getElementById('navbar'),
    orderInquiryForm: document.getElementById('order-inquiry-form')
};

// Initialize Application
function init() {
    // Initialize EmailJS if public key is configured
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
        emailjs.init({
            publicKey: EMAILJS_CONFIG.publicKey
        });
    }
    renderProducts();
    updateCartUI();
    registerEventListeners();
    handleNavbarScroll();
}

// Event Listeners Registration
function registerEventListeners() {
    // Navbar Scroll Effect
    window.addEventListener('scroll', handleNavbarScroll);

    // Cart Drawer Toggle
    dom.cartBtn.addEventListener('click', openCart);
    dom.closeCartBtn.addEventListener('click', closeCart);
    dom.cartOverlay.addEventListener('click', closeCart);
    
    // Close Empty Cart Redirect Action
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-cart-action')) {
            closeCart();
        }
    });

    // Mobile Menu Toggle
    dom.mobileMenuBtn.addEventListener('click', () => dom.mobileNav.classList.add('open'));
    dom.closeMobileNavBtn.addEventListener('click', () => dom.mobileNav.classList.remove('open'));
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => dom.mobileNav.classList.remove('open'));
    });

    // Search Toggle
    dom.searchToggleBtn.addEventListener('click', toggleSearch);
    dom.searchClearBtn.addEventListener('click', () => {
        dom.searchInput.value = '';
        state.filters.search = '';
        filterAndRenderProducts();
    });
    dom.searchInput.addEventListener('input', (e) => {
        state.filters.search = e.target.value;
        filterAndRenderProducts();
    });

    // Category Filter Selection
    dom.categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-tag')) {
            document.querySelectorAll('.filter-tag').forEach(tag => tag.classList.remove('active'));
            e.target.classList.add('active');
            state.filters.category = e.target.dataset.category;
            filterAndRenderProducts();
        }
    });

    // Sort selection
    dom.sortSelect.addEventListener('change', (e) => {
        state.filters.sort = e.target.value;
        filterAndRenderProducts();
    });

    // Close Modal Events
    dom.closeModalBtn.addEventListener('click', closeModal);
    dom.productModal.addEventListener('click', (e) => {
        if (e.target === dom.productModal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeCart();
        }
    });

    // Order Inquiry Form Handler
    if (dom.orderInquiryForm) {
        dom.orderInquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('order-name').value;
            const phone = document.getElementById('order-phone').value;
            const city = document.getElementById('order-city').value;
            const msg = document.getElementById('order-message').value;

            // Submit using EmailJS if configured
            if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
                showToast("Sending inquiry...");
                emailjs.send(
                    EMAILJS_CONFIG.serviceId,
                    EMAILJS_CONFIG.templateId,
                    {
                        from_name: name,
                        name: name,
                        phone: phone,
                        phone_number: phone,
                        school: city, // Mapping city to school
                        role: "Customer",
                        message: msg,
                        title: `New Aura Coco Order Inquiry - ${city}`
                    },
                    EMAILJS_CONFIG.publicKey
                ).then(() => {
                    showToast(`Inquiry sent successfully for ${city}!`);
                }).catch((error) => {
                    console.error('EmailJS Error:', error);
                    showToast("Failed to send inquiry via email. Sourcing locally...");
                });
            } else {
                showToast(`Inquiry received for ${city}! Contacting you soon.`);
            }
            dom.orderInquiryForm.reset();
        });
    }
}

// Navbar scroll logic (hides on scroll down, reveals on scroll up)
let lastScrollY = window.scrollY;
function handleNavbarScroll() {
    if (window.scrollY > 100) {
        dom.navbar.style.backgroundColor = 'var(--bg-secondary)';
        if (window.scrollY > lastScrollY) {
            dom.navbar.classList.add('scroll-down');
        } else {
            dom.navbar.classList.remove('scroll-down');
        }
    } else {
        dom.navbar.style.backgroundColor = 'var(--glass-bg)';
        dom.navbar.classList.remove('scroll-down');
    }
    lastScrollY = window.scrollY;
}

// Search dropdown logic
function toggleSearch() {
    dom.searchDropdown.classList.toggle('open');
    if (dom.searchDropdown.classList.contains('open')) {
        dom.searchInput.focus();
    }
}

// Render dynamic products grid
function renderProducts() {
    dom.productsGrid.innerHTML = '';
    
    if (state.products.length === 0) {
        dom.productsGrid.innerHTML = `
            <div class="loading-spinner">
                <p style="color: var(--fg-secondary);">No items match your criteria.</p>
            </div>
        `;
        return;
    }

    state.products.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-media-wrapper">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <img src="${product.images[0]}" alt="${product.name}" class="product-img main-img" loading="lazy">
                <img src="${product.images[1] || product.images[0]}" alt="${product.name}" class="product-img alt-img" loading="lazy">
                <div class="product-card-actions">
                    <button class="card-action-btn view-details" data-id="${product.id}" aria-label="View Details">
                        <i class="fa-solid fa-expand"></i>
                    </button>
                    <button class="card-action-btn quick-add" data-id="${product.id}" aria-label="Quick Add to Bag">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-price">₹${product.price.toFixed(2)}</span>
            </div>
        `;
        
        // Event handlers for action items
        card.querySelector('.view-details').addEventListener('click', () => openProductModal(product.id));
        card.querySelector('.quick-add').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product.id, product.sizes[0], product.colors[0]);
        });
        
        dom.productsGrid.appendChild(card);
    });
}

// Filters & Sorting Execution
function filterAndRenderProducts() {
    let filtered = [...PRODUCTS];

    // Category Filter
    if (state.filters.category !== 'all') {
        filtered = filtered.filter(p => p.category === state.filters.category);
    }

    // Search Query
    if (state.filters.search.trim() !== '') {
        const query = state.filters.search.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query));
    }

    // Sorting
    if (state.filters.sort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (state.filters.sort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (state.filters.sort === 'name-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    state.products = filtered;
    renderProducts();
}

// Cart functionality
function openCart() {
    dom.cartDrawer.classList.add('open');
    dom.cartOverlay.classList.add('open');
}

function closeCart() {
    dom.cartDrawer.classList.remove('open');
    dom.cartOverlay.classList.remove('open');
}

function addToCart(productId, size, color) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => item.id === productId && item.size === size && item.color === color);

    if (existingIndex > -1) {
        state.cart[existingIndex].quantity += 1;
    } else {
        state.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            size: size || product.sizes[0],
            color: color || product.colors[0],
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`Added ${product.name} to harvest box.`);
}

function removeFromCart(productId, size, color) {
    state.cart = state.cart.filter(item => !(item.id === productId && item.size === size && item.color === color));
    saveCart();
    updateCartUI();
}

function changeQty(productId, size, color, delta) {
    const item = state.cart.find(item => item.id === productId && item.size === size && item.color === color);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId, size, color);
    } else {
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('aura_coco_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Update Badges
    dom.cartBadgeCount.textContent = totalItems;
    dom.cartCount.textContent = totalItems;
    dom.cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;

    // Render cart items
    dom.cartItemsContainer.innerHTML = '';
    
    if (state.cart.length === 0) {
        dom.cartItemsContainer.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Your harvest box is currently empty.</p>
                <button class="btn btn-primary close-cart-action">CONTINUE BROWSING</button>
            </div>
        `;
        dom.cartFooter.style.display = 'none';
    } else {
        dom.cartFooter.style.display = 'flex';
        
        state.cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <div>
                        <h4 class="cart-item-name">${item.name}</h4>
                        <p class="cart-item-meta">Size: ${item.size}</p>
                    </div>
                    <div class="cart-item-qty">
                        <button class="qty-btn dec-qty" aria-label="Decrease quantity">-</button>
                        <span class="qty-val">${item.quantity}</span>
                        <button class="qty-btn inc-qty" aria-label="Increase quantity">+</button>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <span class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</span>
                    <button class="remove-cart-item" aria-label="Remove item"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            `;

            // Cart item triggers
            itemElement.querySelector('.dec-qty').addEventListener('click', () => changeQty(item.id, item.size, item.color, -1));
            itemElement.querySelector('.inc-qty').addEventListener('click', () => changeQty(item.id, item.size, item.color, 1));
            itemElement.querySelector('.remove-cart-item').addEventListener('click', () => removeFromCart(item.id, item.size, item.color));

            dom.cartItemsContainer.appendChild(itemElement);
        });
    }
}

// Product detail modal control
function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let selectedSize = product.sizes[0];
    let selectedColor = product.colors[0];
    let activeImage = product.images[0];

    // Build modal body
    function renderModalBody() {
        dom.modalBodyContent.innerHTML = `
            <div class="detail-grid">
                <div class="detail-gallery">
                    <img src="${activeImage}" alt="${product.name}" class="detail-main-img" id="modal-main-image">
                    <div class="detail-thumbs">
                        ${product.images.map((img, index) => `
                            <img src="${img}" alt="${product.name} alternate view" class="thumb-img ${img === activeImage ? 'active' : ''}" data-img="${img}">
                        `).join('')}
                    </div>
                </div>
                <div class="detail-info">
                    <div>
                        <span class="detail-category">${product.category}</span>
                        <h2 class="detail-title">${product.name}</h2>
                    </div>
                    <span class="detail-price">₹${product.price.toFixed(2)}</span>
                    <p class="detail-desc">${product.description}</p>
                    
                    ${product.sizes.length > 1 ? `
                        <div class="option-group">
                            <span class="option-label">Select Options</span>
                            <div class="size-selector">
                                ${product.sizes.map(size => `
                                    <button class="size-btn ${size === selectedSize ? 'selected' : ''}" data-size="${size}">${size}</button>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}

                    <button class="btn btn-primary add-to-bag-modal" style="margin-top: 1.5rem;">
                        <span>ADD TO BOX</span>
                        <i class="fa-solid fa-bag-shopping"></i>
                    </button>
                </div>
            </div>
        `;

        // Register interactive events inside modal
        const thumbImages = dom.modalBodyContent.querySelectorAll('.thumb-img');
        thumbImages.forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                activeImage = e.target.dataset.img;
                thumbImages.forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                document.getElementById('modal-main-image').src = activeImage;
            });
        });

        const sizeBtns = dom.modalBodyContent.querySelectorAll('.size-btn');
        sizeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                selectedSize = e.target.dataset.size;
                sizeBtns.forEach(b => b.classList.remove('selected'));
                e.target.classList.add('selected');
            });
        });

        dom.modalBodyContent.querySelector('.add-to-bag-modal').addEventListener('click', () => {
            addToCart(product.id, selectedSize, selectedColor);
            closeModal();
            openCart();
        });
    }

    renderModalBody();
    dom.productModal.classList.add('open');
}

// Razorpay Integration Checkout Flow
dom.checkoutBtn.addEventListener('click', async () => {
    if (state.cart.length === 0) {
        showToast("Your cart is empty.");
        return;
    }

    // Disable button to prevent double submission
    dom.checkoutBtn.disabled = true;
    const originalBtnText = dom.checkoutBtn.innerHTML;
    dom.checkoutBtn.innerHTML = '<span>Processing...</span><i class="fa-solid fa-spinner fa-spin"></i>';

    try {
        // Calculate subtotal in paise (amount * 100)
        const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const amountInPaise = Math.round(subtotal * 100);

        if (amountInPaise < 100) {
            showToast("Minimum order amount is ₹1.00.");
            dom.checkoutBtn.disabled = false;
            dom.checkoutBtn.innerHTML = originalBtnText;
            return;
        }

        // 1. Fetch Razorpay key configuration from backend
        const configResponse = await fetch('/api/config');
        if (!configResponse.ok) {
            throw new Error('Failed to load payment configuration.');
        }
        const { keyId } = await configResponse.json();

        // 2. Create the order in the backend
        const orderResponse = await fetch('/api/create-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: amountInPaise, currency: 'INR' })
        });
        if (!orderResponse.ok) {
            const errData = await orderResponse.json();
            throw new Error(errData.error || 'Failed to create order.');
        }
        const orderData = await orderResponse.json();

        // 3. Open Razorpay payment modal
        const options = {
            key: keyId,
            amount: orderData.amount,
            currency: orderData.currency,
            name: "Aura Coco",
            description: "Premium Organic Coconut Products",
            order_id: orderData.order_id,
            handler: async function (response) {
                try {
                    // Send signature/payment details to backend for verification
                    const verifyResponse = await fetch('/api/verify-payment', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            items: state.cart,
                            amount: amountInPaise
                        })
                    });

                    const verifyData = await verifyResponse.json();
                    if (verifyResponse.ok && verifyData.success) {
                        showToast("Payment successful! Order processed.");
                        state.cart = [];
                        saveCart();
                        updateCartUI();
                        closeCart();
                    } else {
                        showToast(verifyData.error || "Payment verification failed.");
                    }
                } catch (err) {
                    console.error("Verification error:", err);
                    showToast("Error verifying payment.");
                }
            },
            modal: {
                ondismiss: function () {
                    showToast("Payment cancelled by user.");
                }
            },
            prefill: {
                name: "",
                email: "",
                contact: ""
            },
            theme: {
                color: "#1e3a1e" // Forest green styling to match Aura Coco brand
            }
        };

        const rzp = new window.Razorpay(options);
        
        rzp.on('payment.failed', function (response) {
            showToast(`Payment failed: ${response.error.description}`);
            console.error("Payment failed detail:", response.error);
        });

        rzp.open();
    } catch (error) {
        console.error("Checkout error:", error);
        showToast(error.message || "An error occurred during checkout.");
    } finally {
        dom.checkoutBtn.disabled = false;
        dom.checkoutBtn.innerHTML = originalBtnText;
    }
});

function closeModal() {
    dom.productModal.classList.remove('open');
}

// Premium Toast Alert system
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <span>${message}</span>
    `;
    dom.toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// Start Application on Load
document.addEventListener('DOMContentLoaded', init);
