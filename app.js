// Curated Organic Coconut Products
const PRODUCTS = [
    {
        id: 13,
        name: "PEN",
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
        name: "LED LIGHT",
        category: "crafts",
        price: 450.00,
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
            "https://6a4b7b721e75414caa998993.imgix.net/sandbox/Screenshot%202026-07-06%20153121.png"
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
            "https://6a4b7b721e75414caa998993.imgix.net/sandbox/Screenshot%202026-07-06%20161323.png",
            "https://6a4b7b721e75414caa998993.imgix.net/sandbox/Screenshot%25202026-07-06%2520154252.png"
        ]
    },
    {
        id: 3,
        name: "BANANA",
        category: "raw",
        price: 65.00,
        badge: "FRUITS",
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
    },
    {
        id: 15,
        name: "ALL MEDICINES AVAILABLE",
        category: "medicine",
        price: 0.00,
        badge: "50% OFFER",
        description: "Get all medicines with flat 50% discount. Enter your medicine details and phone number below to order directly. We will contact you immediately.",
        sizes: ["Single Pack"],
        colors: ["#ffffff"],
        images: [
            "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=60"
        ]
    }
];

// App State Management
let state = {
    products: [...PRODUCTS],
    cart: JSON.parse(localStorage.getItem('aura_coco_cart')) || [],
    inventory: [],
    filters: {
        category: 'all',
        search: '',
        sort: 'default'
    }
};

// Base API URL configuration
// Replace 'https://auracoco-backend.onrender.com' with your actual Render/Railway backend URL once deployed.
const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.hostname.startsWith('192.168.') 
    ? '' 
    : 'https://auracoco-backend.onrender.com';

// EmailJS Configuration
const EMAILJS_CONFIG = {
    serviceId: 'service_4v90p4q',
    templateId: 'template_d5ih6mv', // EmailJS Template ID
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
async function init() {
    // Initialize EmailJS if public key is configured
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
        emailjs.init({
            publicKey: EMAILJS_CONFIG.publicKey
        });
    }

    // Fetch product stock inventory from backend
    try {
        const response = await fetch(`${API_BASE_URL}/api/products/inventory`);
        if (response.ok) {
            state.inventory = await response.json();
        }
    } catch (e) {
        console.error('Failed to fetch product inventory:', e);
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

    // Redirect / Scroll to Medicine form logic
    const handleMedicineRedirect = () => {
        state.filters.category = 'medicine';
        document.querySelectorAll('.filter-tag').forEach(tag => {
            if (tag.dataset.category === 'medicine') {
                tag.classList.add('active');
            } else {
                tag.classList.remove('active');
            }
        });
        filterAndRenderProducts();
        setTimeout(() => {
            const productsGrid = document.getElementById('products-grid');
            if (productsGrid) {
                productsGrid.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    const medInput = document.querySelector('.med-details-input');
                    if (medInput) medInput.focus();
                }, 800);
            }
        }, 100);
    };

    const navMedLink = document.getElementById('nav-medicine-link');
    if (navMedLink) {
        navMedLink.addEventListener('click', (e) => {
            e.preventDefault();
            handleMedicineRedirect();
        });
    }

    const mobileNavMedLink = document.getElementById('mobile-nav-medicine-link');
    if (mobileNavMedLink) {
        mobileNavMedLink.addEventListener('click', (e) => {
            e.preventDefault();
            handleMedicineRedirect();
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

// Handle Medicine Inquiry Submission
function sendMedicineInquiry(details, phone) {
    const msg = `Medicine Request Details: ${details}\nContact Number: ${phone}`;
    
    // Submit using EmailJS if configured
    if (typeof emailjs !== 'undefined' && EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
        showToast("Sending request...");
        emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            {
                from_name: "Medicine Customer",
                name: "Medicine Customer",
                phone: phone,
                phone_number: phone,
                school: "Medicine Request",
                role: "Customer",
                message: msg,
                title: `Medicine 50% Off Request - ${phone}`
            },
            EMAILJS_CONFIG.publicKey
        ).then(() => {
            showToast(`Medicine request sent successfully! We will contact you soon.`);
        }).catch((error) => {
            console.error('EmailJS Error:', error);
            showToast(`Medicine request received! We will contact you soon at ${phone}.`);
        });
    } else {
        showToast(`Medicine request received! We will contact you soon at ${phone}.`);
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
        // Find stock inventory level
        const inventoryItem = state.inventory.find(inv => inv.id === product.id);
        const stock = inventoryItem ? inventoryItem.stock : 100;
        const isOutOfStock = false;

        const card = document.createElement('article');
        card.className = 'product-card';
        if (isOutOfStock) {
            card.classList.add('out-of-stock-card');
        }

        if (product.id === 15) {
            card.innerHTML = `
                <div class="product-media-wrapper">
                    ${product.badge ? `<span class="product-badge" style="background: #e11d48; color: #fff;">${product.badge}</span>` : ''}
                    <img src="${product.images[0]}" alt="${product.name}" class="product-img main-img" loading="lazy">
                    <img src="${product.images[1] || product.images[0]}" alt="${product.name}" class="product-img alt-img" loading="lazy">
                </div>
                <div class="product-info" style="padding: 1.25rem; display: flex; flex-direction: column; height: 100%;">
                    <span class="product-category" style="color: #e11d48; font-weight: bold; text-transform: uppercase;">${product.category}</span>
                    <h3 class="product-name" style="margin-top: 0.25rem; font-size: 1.1rem; line-height: 1.4;">${product.name}</h3>
                    <p style="font-size: 0.85rem; color: var(--fg-secondary); margin: 0.5rem 0 1rem 0;">${product.description}</p>
                    
                    <form class="med-inquiry-form" style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: auto; width: 100%;">
                        <button type="submit" class="btn-submit-med" style="width: 100%; background: #e11d48; color: #ffffff; border: none; padding: 10px; border-radius: 6px; font-weight: 600; cursor: pointer; transition: background 0.2s; font-size: 0.9rem;">
                            Submit Request (50% Off)
                        </button>
                    </form>
                </div>
            `;
            
            card.querySelector('.med-inquiry-form').addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Populate the contact form fields
                const orderMessageInput = document.getElementById('order-message');
                
                if (orderMessageInput) {
                    orderMessageInput.value = "Medicine Request (50% Off): ";
                }
                
                // Scroll to the contact form section
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Focus the message input field in the contact form
                if (orderMessageInput) {
                    setTimeout(() => {
                        orderMessageInput.focus();
                        const len = orderMessageInput.value.length;
                        orderMessageInput.setSelectionRange(len, len);
                    }, 800);
                }
            });
        } else {
            card.innerHTML = `
                <div class="product-media-wrapper">
                    ${isOutOfStock ? `<span class="product-badge" style="background: #ef4444; color: #fff;">SOLD OUT</span>` : (product.badge ? `<span class="product-badge">${product.badge}</span>` : '')}
                    <img src="${product.images[0]}" alt="${product.name}" class="product-img main-img" loading="lazy" style="${isOutOfStock ? 'filter: grayscale(0.8) opacity(0.6);' : ''}">
                    <img src="${product.images[1] || product.images[0]}" alt="${product.name}" class="product-img alt-img" loading="lazy" style="${isOutOfStock ? 'filter: grayscale(0.8) opacity(0.6);' : ''}">
                    <div class="product-card-actions">
                        <button class="card-action-btn view-details" data-id="${product.id}" aria-label="View Details">
                            <i class="fa-solid fa-expand"></i>
                        </button>
                        <button class="card-action-btn quick-add" ${isOutOfStock ? 'disabled style="opacity: 0.3; cursor: not-allowed;"' : ''} data-id="${product.id}" aria-label="Quick Add to Bag">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem; width: 100%;">
                        <span class="product-price" style="margin-top: 0;">₹${product.price.toFixed(2)}</span>
                        <button class="btn-buy-now" ${isOutOfStock ? 'disabled style="background: #4b5563; color: #9ca3af; cursor: not-allowed;"' : 'style="background: #22c55e; color: #0b130e; cursor: pointer;"'} data-id="${product.id}">
                            ${isOutOfStock ? 'SOLD OUT' : 'BUY <i class="fa-solid fa-bolt"></i>'}
                        </button>
                    </div>
                </div>
            `;
            
            // Event handlers for action items
            card.querySelector('.view-details').addEventListener('click', () => openProductModal(product.id));
            if (!isOutOfStock) {
                card.querySelector('.quick-add').addEventListener('click', (e) => {
                    e.stopPropagation();
                    addToCart(product.id, product.sizes[0], product.colors[0]);
                });
                card.querySelector('.btn-buy-now').addEventListener('click', (e) => {
                    e.stopPropagation();
                    checkoutProductDirectly(product.id);
                });
            }
        }
        
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

    // Get stock level
    const inventoryItem = state.inventory.find(i => i.id === product.id);
    const stock = inventoryItem ? inventoryItem.stock : 100;
    const isOutOfStock = false;

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

                    <div class="modal-actions-container" style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                        <button class="btn btn-primary add-to-bag-modal" ${isOutOfStock ? 'disabled style="background: #4b5563; opacity: 0.5; cursor: not-allowed;"' : ''} style="flex: 1; margin: 0;">
                            <span>${isOutOfStock ? 'OUT OF STOCK' : 'ADD TO BOX'}</span>
                            <i class="fa-solid fa-bag-shopping"></i>
                        </button>
                        <button class="btn btn-secondary buy-now-modal" ${isOutOfStock ? 'disabled style="background: #4b5563; opacity: 0.5; cursor: not-allowed; color: #9ca3af; border: none;"' : 'style="background: #22c55e; color: #0b130e; border: none;"'} style="flex: 1; margin: 0;">
                            <span>${isOutOfStock ? 'SOLD OUT' : 'BUY NOW'}</span>
                            <i class="fa-solid fa-bolt"></i>
                        </button>
                    </div>
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

        if (!isOutOfStock) {
            dom.modalBodyContent.querySelector('.add-to-bag-modal').addEventListener('click', () => {
                addToCart(product.id, selectedSize, selectedColor);
                closeModal();
                openCart();
            });

            dom.modalBodyContent.querySelector('.buy-now-modal').addEventListener('click', () => {
                closeModal();
                checkoutProductDirectly(product.id);
            });
        }
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
        const configResponse = await fetch(`${API_BASE_URL}/api/config`);
        if (!configResponse.ok) {
            throw new Error('Failed to load payment configuration.');
        }
        const { keyId } = await configResponse.json();

        // 2. Create the order in the backend with inventory checks
        const orderResponse = await fetch(`${API_BASE_URL}/api/create-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                amount: amountInPaise, 
                currency: 'INR',
                items: state.cart.map(item => ({ id: item.id, quantity: item.quantity, name: item.name }))
            })
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
                    const verifyResponse = await fetch(`${API_BASE_URL}/api/verify-payment`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            items: state.cart.map(item => ({ id: item.id, quantity: item.quantity, name: item.name })),
                            amount: amountInPaise
                        })
                    });

                    const verifyData = await verifyResponse.json();
                    if (verifyResponse.ok && verifyData.success) {
                        state.cart = [];
                        saveCart();
                        updateCartUI();
                        closeCart();
                        window.location.href = `/success.html?order_id=${response.razorpay_order_id}&payment_id=${response.razorpay_payment_id}&amount=${amountInPaise / 100}`;
                    } else {
                        window.location.href = `/failed.html?reason=${encodeURIComponent(verifyData.error || "Payment verification failed.")}`;
                    }
                } catch (err) {
                    console.error("Verification error:", err);
                    window.location.href = `/failed.html?reason=${encodeURIComponent(err.message || "Error verifying payment.")}`;
                }
            },
            modal: {
                ondismiss: function () {
                    window.location.href = `/failed.html?reason=Checkout%20dismissed%20by%20user.`;
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
            window.location.href = `/failed.html?reason=${encodeURIComponent(response.error.description || "Payment failed.")}`;
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

// Quick Buy checkout logic for a single product
async function checkoutProductDirectly(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    showToast(`Initiating checkout for ${product.name}...`);

    try {
        const amountInPaise = Math.round(product.price * 100);

        if (amountInPaise < 100) {
            showToast("Minimum order amount is ₹1.00.");
            return;
        }

        // 1. Fetch Razorpay key configuration from backend
        const configResponse = await fetch(`${API_BASE_URL}/api/config`);
        if (!configResponse.ok) {
            throw new Error('Failed to load payment configuration.');
        }
        const { keyId } = await configResponse.json();

        // 2. Create the order in the backend with inventory checks
        const orderResponse = await fetch(`${API_BASE_URL}/api/create-order`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                amount: amountInPaise, 
                currency: 'INR',
                items: [{ id: product.id, quantity: 1, name: product.name }]
            })
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
            description: `Order: ${product.name}`,
            order_id: orderData.order_id,
            handler: async function (response) {
                try {
                    // Send signature/payment details to backend for verification
                    const verifyResponse = await fetch(`${API_BASE_URL}/api/verify-payment`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            items: [{
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.images[0],
                                size: product.sizes[0],
                                color: product.colors[0],
                                quantity: 1
                            }],
                            amount: amountInPaise
                        })
                    });

                    const verifyData = await verifyResponse.json();
                    if (verifyResponse.ok && verifyData.success) {
                        window.location.href = `/success.html?order_id=${response.razorpay_order_id}&payment_id=${response.razorpay_payment_id}&amount=${amountInPaise / 100}`;
                    } else {
                        window.location.href = `/failed.html?reason=${encodeURIComponent(verifyData.error || "Payment verification failed.")}`;
                    }
                } catch (err) {
                    console.error("Verification error:", err);
                    window.location.href = `/failed.html?reason=${encodeURIComponent(err.message || "Error verifying payment.")}`;
                }
            },
            modal: {
                ondismiss: function () {
                    window.location.href = `/failed.html?reason=Checkout%20dismissed%20by%20user.`;
                }
            },
            prefill: {
                name: "",
                email: "",
                contact: ""
            },
            theme: {
                color: "#1e3a1e"
            }
        };

        const rzp = new window.Razorpay(options);
        
        rzp.on('payment.failed', function (response) {
            window.location.href = `/failed.html?reason=${encodeURIComponent(response.error.description || "Payment failed.")}`;
        });

        rzp.open();
    } catch (error) {
        console.error("Checkout error:", error);
        showToast(error.message || "An error occurred during checkout.");
    }
}

// Start Application on Load
document.addEventListener('DOMContentLoaded', () => {
    init();
    initChatbot();
});

/* ==========================================
   CHATBOT WIDGET LOGIC (COCOBOT)
   ========================================== */
function initChatbot() {
    const container = document.getElementById('chatbot-container');
    const fab = document.getElementById('chatbot-fab');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const messagesContainer = document.getElementById('chatbot-messages');
    const inputForm = document.getElementById('chatbot-input-form');
    const inputField = document.getElementById('chatbot-input');
    const suggestionsContainer = document.getElementById('chatbot-suggestions');
    const typingIndicator = document.getElementById('chatbot-typing-indicator');

    if (!container || !fab || !closeBtn || !messagesContainer || !inputForm || !inputField) {
        console.warn('Chatbot components missing from the DOM.');
        return;
    }

    let botGreetingSent = false;

    // Toggle Chat Window
    fab.addEventListener('click', () => {
        container.classList.toggle('active');
        if (container.classList.contains('active')) {
            inputField.focus();
            if (!botGreetingSent) {
                sendBotGreeting();
            }
        }
    });

    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        container.classList.remove('active');
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            container.classList.remove('active');
        }
    });

    // Send message on submit
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = inputField.value.trim();
        if (!text) return;

        appendMessage(text, 'user');
        inputField.value = '';
        
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            generateBotResponse(text);
        }, 1000);
    });

    // Send initial greeting
    function sendBotGreeting() {
        botGreetingSent = true;
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            appendMessage("Hello! Welcome to **Aura Coco** 🌴 I'm your organic assistant. How can I help you today?", 'bot');
            renderSuggestions([
                { text: 'See Products 🥥', value: 'see_products' },
                { text: 'Delivery & Sourcing 📍', value: 'delivery_info' },
                { text: 'How to Order? 🛒', value: 'how_to_order' },
                { text: 'Contact Support 📞', value: 'contact_support' }
            ]);
        }, 800);
    }

    // Append message to history
    function appendMessage(text, sender, isHtml = false) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chatbot-msg ${sender}`;
        
        if (isHtml) {
            msgDiv.innerHTML = text;
        } else {
            // Basic markdown bold parsing (**text**)
            const formattedText = text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/\n/g, '<br>');
            msgDiv.innerHTML = formattedText;
        }
        
        messagesContainer.appendChild(msgDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Show/Hide typing indicator
    function showTypingIndicator() {
        typingIndicator.style.display = 'flex';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function hideTypingIndicator() {
        typingIndicator.style.display = 'none';
    }

    // Render quick suggestion chips
    function renderSuggestions(options) {
        suggestionsContainer.innerHTML = '';
        options.forEach(opt => {
            const chip = document.createElement('button');
            chip.className = 'chatbot-chip';
            chip.textContent = opt.text;
            chip.addEventListener('click', () => {
                appendMessage(opt.text, 'user');
                showTypingIndicator();
                suggestionsContainer.innerHTML = '';
                setTimeout(() => {
                    hideTypingIndicator();
                    handleSuggestionClick(opt.value);
                }, 1000);
            });
            suggestionsContainer.appendChild(chip);
        });
    }

    // Handle suggestion action clicks
    function handleSuggestionClick(value) {
        switch(value) {
            case 'see_products':
                appendMessage("Here are some of our premium organic products direct from Kesavanputhoor, Nagercoil:", 'bot');
                // Render top 3 featured products
                const featured = PRODUCTS.filter(p => p.id === 1 || p.id === 2 || p.id === 4);
                featured.forEach(p => {
                    appendProductCard(p);
                });
                break;
            case 'delivery_info':
                appendMessage("🌴 We source our premium coconuts directly from the groves of **Kesavanputhoor, Nagercoil**.\n\n🚚 We deliver across **Chennai** and **Nagercoil**.\n\n✨ Shipping is **free** for orders above ₹500!", 'bot');
                break;
            case 'how_to_order':
                appendMessage("Ordering is quick and secure:\n1️⃣ Find your favorite organic items on the page.\n2️⃣ Click **BUY** or the **plus (+)** icon to add to your bag.\n3️⃣ Open the shopping bag (top-right icon) and click **PLACE SECURE ORDER**.\n4️⃣ Checkout safely via UPI, Card, or NetBanking using Razorpay!", 'bot');
                break;
            case 'contact_support':
                appendMessage("Need custom order help or corporate inquiries?\n\n💬 Chat with us on **WhatsApp**: [+91 8778093735](https://wa.me/918778093735)\n\n📬 Or scroll down to fill out our order inquiry form and we'll reply instantly!", 'bot');
                break;
        }
        
        // Show main options menu chips again after response
        setTimeout(() => {
            renderSuggestions([
                { text: 'See Products 🥥', value: 'see_products' },
                { text: 'Delivery & Sourcing 📍', value: 'delivery_info' },
                { text: 'How to Order? 🛒', value: 'how_to_order' },
                { text: 'Contact Support 📞', value: 'contact_support' }
            ]);
        }, 1500);
    }

    // Render small interactive product card inside the chat
    function appendProductCard(product) {
        const cardHtml = `
            <div class="chatbot-product-card">
                <img src="${product.images[0]}" alt="${product.name}" class="chatbot-product-img">
                <div class="chatbot-product-info">
                    <span class="chatbot-product-name">${product.name}</span>
                    <span class="chatbot-product-price">₹${product.price.toFixed(2)}</span>
                </div>
                <button class="chatbot-product-btn" data-id="${product.id}">Buy Now</button>
            </div>
        `;
        appendMessage(cardHtml, 'bot', true);
        
        // Add event listener to the buy now button inside chat message
        const lastMsg = messagesContainer.lastElementChild;
        const buyBtn = lastMsg.querySelector('.chatbot-product-btn');
        if (buyBtn) {
            buyBtn.addEventListener('click', () => {
                addToCart(product.id, product.sizes[0], product.colors[0]);
                openCart();
            });
        }
    }

    // AI Keyword Matching Bot Response
    function generateBotResponse(userInput) {
        const text = userInput.toLowerCase();

        // 1. Check for product search queries
        let matchedProducts = [];
        PRODUCTS.forEach(p => {
            if (text.includes(p.name.toLowerCase()) || text.includes(p.category.toLowerCase())) {
                matchedProducts.push(p);
            }
        });

        // Search broad terms
        if (matchedProducts.length === 0) {
            if (text.includes('coconut') || text.includes('coco') || text.includes('tender')) {
                matchedProducts = PRODUCTS.filter(p => p.category === 'raw' || p.category === 'processed');
            } else if (text.includes('oil') || text.includes('virgin')) {
                matchedProducts = PRODUCTS.filter(p => p.name.toLowerCase().includes('oil'));
            } else if (text.includes('craft') || text.includes('saree') || text.includes('bowl')) {
                matchedProducts = PRODUCTS.filter(p => p.category === 'crafts');
            } else if (text.includes('banana') || text.includes('fruit') || text.includes('jackfruit')) {
                matchedProducts = PRODUCTS.filter(p => p.name.toLowerCase().includes('banana') || p.name.toLowerCase().includes('jackfruit'));
            }
        }

        // Limit matches to 3 to keep it clean
        matchedProducts = matchedProducts.slice(0, 3);

        if (matchedProducts.length > 0) {
            appendMessage(`I found these matching products in our harvest collection:`, 'bot');
            matchedProducts.forEach(p => appendProductCard(p));
            return;
        }

        // 2. Keyword Responses
        if (text.includes('hello') || text.includes('hi') || text.includes('hey') || text.includes('greetings')) {
            appendMessage("Hey there! Hope you are having a wonderful day. How can I assist you with Aura Coco today?", 'bot');
        } 
        else if (text.includes('price') || text.includes('cost') || text.includes('rate') || text.includes('how much')) {
            appendMessage("Our premium tender coconuts start at **₹27**, cold pressed oils at **₹320**, and artisanal shell crafts at **₹290**. Try typing a specific product name to see details!", 'bot');
        }
        else if (text.includes('delivery') || text.includes('ship') || text.includes('chennai') || text.includes('nagercoil') || text.includes('where')) {
            appendMessage("We offer fast door-step delivery in **Chennai** and **Nagercoil**. Shipping is **free** for orders over ₹500, else standard local shipping applies.", 'bot');
        }
        else if (text.includes('payment') || text.includes('pay') || text.includes('razorpay') || text.includes('upi') || text.includes('card')) {
            appendMessage("Payments are fully secured by **Razorpay** 💳. We accept UPI, GPay, Credit/Debit cards, and Net Banking directly at checkout.", 'bot');
        }
        else if (text.includes('contact') || text.includes('phone') || text.includes('whatsapp') || text.includes('support')) {
            appendMessage("You can message our dispatch support line on **WhatsApp** at [+91 8778093735](https://wa.me/918778093735) or use the contact form at the bottom of the page.", 'bot');
        }
        else if (text.includes('medicine') || text.includes('offer') || text.includes('discount')) {
            const medProduct = PRODUCTS.find(p => p.id === 15);
            if (medProduct) {
                appendMessage("Yes! We have a special Flat 50% discount on medicine orders. You can request details directly here:", 'bot');
                appendProductCard(medProduct);
            } else {
                appendMessage("We run seasonal discounts on our organic batches. Keep an eye on our homepage badge alerts!", 'bot');
            }
        }
        else {
            appendMessage("I didn't quite catch that. Try asking about **products**, **pricing**, **delivery regions**, or **payments**. Alternatively, check the options below:", 'bot');
        }

        // Always show quick suggestions for next action
        setTimeout(() => {
            renderSuggestions([
                { text: 'See Products 🥥', value: 'see_products' },
                { text: 'Delivery & Sourcing 📍', value: 'delivery_info' },
                { text: 'How to Order? 🛒', value: 'how_to_order' },
                { text: 'Contact Support 📞', value: 'contact_support' }
            ]);
        }, 1200);
    }
}

