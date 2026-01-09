// Menu Data
const menuItems = [
    // Vegetarian Main Courses
    { id: 1, name: "Paneer Tikka", price: 299, category: "veg", type: "veg", description: "Soft cottage cheese marinated in spices and grilled", rating: 4.5, image: "https://i.pinimg.com/1200x/42/40/00/424000ebbdd51a3a637b395635e9c488.jpg" },
    { id: 2, name: "Dal Makhani", price: 249, category: "veg", type: "veg", description: "Creamy black lentils cooked overnight", rating: 4.7, image: "https://i.pinimg.com/1200x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg" },
    { id: 3, name: "Vegetable Biryani", price: 279, category: "veg", type: "veg", description: "Fragrant rice with mixed vegetables and spices", rating: 4.6, image: "https://i.pinimg.com/1200x/5e/ef/26/5eef26f2d61a1b859329bd30ba456319.jpg" },
    { id: 4, name: "Palak Paneer", price: 259, category: "veg", type: "veg", description: "Cottage cheese in creamy spinach gravy", rating: 4.4, image: "https://i.pinimg.com/1200x/2d/5f/d7/2d5fd799b3d6714c22f49c94531ad033.jpg" },
    { id: 5, name: "Malai Kofta", price: 289, category: "veg", type: "veg", description: "Dumplings in rich creamy gravy", rating: 4.5, image: "https://i.pinimg.com/1200x/b0/aa/a4/b0aaa4cdf8103e50e74f675f25207332.jpg" },
    { id: 7, name: "Chole Masala", price: 229, category: "veg", type: "veg", description: "Spicy chickpeas in onion tomato gravy", rating: 4.5, image: "https://i.pinimg.com/736x/10/99/f2/1099f22e87d37fefcbe03c4aea18786d.jpg" },
    { id: 8, name: "Mushroom fry", price: 269, category: "veg", type: "veg", description: "Mushrooms with double onions in spicy gravy", rating: 4.4, image: "https://i.pinimg.com/1200x/18/3e/69/183e69f7122f4bbec0853615d234529e.jpg" },
    { id: 9, name: "Kadhai Paneer", price: 299, category: "veg", type: "veg", description: "Cottage cheese in bell pepper gravy", rating: 4.6, image: "https://i.pinimg.com/736x/bf/3b/22/bf3b22653efb4bcf54d76ffec4df1fd5.jpg" },
    
    // Non-Vegetarian Main Courses
    { id: 11, name: "Chicken Tikka", price: 329, category: "non-veg", type: "non-veg", description: "Tender chicken marinated in yogurt and spices", rating: 4.7, image: "https://i.pinimg.com/1200x/b2/6a/7b/b26a7b875d49fe631e09c487fb935c99.jpg" },
    { id: 12, name: "Butter Chicken", price: 349, category: "non-veg", type: "non-veg", description: "Chicken in creamy tomato butter gravy", rating: 4.8, image: "https://i.pinimg.com/1200x/c7/f2/22/c7f222c626e3c44173eecbbfbcd18f1c.jpg" },
    { id: 14, name: "Fish Curry", price: 389, category: "non-veg", type: "non-veg", description: "Fresh fish in spicy coconut curry", rating: 4.5, image: "https://i.pinimg.com/1200x/ee/16/a6/ee16a684221c84d260b8c5c1e398db43.jpg" },
    { id: 15, name: "Mutton Biryani", price: 449, category: "non-veg", type: "non-veg", description: "Aromatic basmati rice with tender mutton", rating: 4.7, image: "https://i.pinimg.com/1200x/ea/ca/77/eaca7783069cbd17bdb02f8dc5e448ed.jpg" },
    { id: 17, name: "Egg Curry", price: 259, category: "non-veg", type: "non-veg", description: "Hard boiled eggs in spicy onion gravy", rating: 4.4, image: "https://i.pinimg.com/1200x/98/8c/14/988c14d330598ec327e16424a37c36d3.jpg" },
    { id: 18, name: "Prawn Masala", price: 419, category: "non-veg", type: "non-veg", description: "Prawns in spicy coconut masala", rating: 4.7, image: "https://i.pinimg.com/736x/7c/69/90/7c69908bd8828a5b8e2b9fda2006e908.jpg" },
    { id: 19, name: "Chicken Chettinad", price: 389, category: "non-veg", type: "non-veg", description: "Spicy chicken from South India", rating: 4.8, image: "https://i.pinimg.com/736x/64/79/ae/6479ae7e8507ac3882dd6b698de459bf.jpg" },
    { id: 20, name: "Hyderabadi Chicken", price: 359, category: "non-veg", type: "non-veg", description: "Chicken in aromatic Hyderabadi spices", rating: 4.6, image: "https://i.pinimg.com/736x/a5/60/66/a56066d31873da92c36808f3103a88f5.jpg" },
    
    // Starters - Vegetarian
    { id: 21, name: "Spring Rolls", price: 189, category: "starters", type: "veg", description: "Crispy vegetable spring rolls", rating: 4.3, image: "https://i.pinimg.com/1200x/6e/30/c0/6e30c0ce304c63b176e454c72fe8b807.jpg" },
    { id: 22, name: "Samosa", price: 99, category: "starters", type: "veg", description: "Crispy pastry with potato filling", rating: 4.4, image: "https://i.pinimg.com/1200x/1b/da/ca/1bdaca54b40441bc8a1bccc733e3ca43.jpg" },
    { id: 23, name: "Tandoori Mushrooms", price: 219, category: "starters", type: "veg", description: "Grilled mushrooms in tandoori spices", rating: 4.5, image: "https://i.pinimg.com/1200x/99/44/6d/99446dc28e2d69dd4aa3f740d5e36f85.jpg" },
    { id: 24, name: "Paneer Pakoda", price: 179, category: "starters", type: "veg", description: "Fried cottage cheese fritters", rating: 4.3, image: "https://i.pinimg.com/736x/79/40/ed/7940ed9e56ca28faa34f9fed6c454e8a.jpg" },
    { id: 25, name: "Veg Cutlet", price: 159, category: "starters", type: "veg", description: "Mixed vegetable cutlets", rating: 4.2, image: "https://i.pinimg.com/736x/cc/17/b9/cc17b97e3ae6c8522551f9db7187749f.jpg" },
    { id: 27, name: "Corn Tikki", price: 169, category: "starters", type: "veg", description: "Crispy corn patties", rating: 4.3, image: "https://i.pinimg.com/736x/a6/ff/56/a6ff563fd2a5a4140d0b02a5bf6b179e.jpg" },
    { id: 29, name: "Stuffed Capsicum", price: 229, category: "starters", type: "veg", description: "Capsicum stuffed with cheese and spices", rating: 4.4, image: "https://i.pinimg.com/1200x/63/0d/6e/630d6e6549ff60aeb901133bf8e3fba6.jpg" },
    { id: 30, name: "Onion Rings", price: 149, category: "starters", type: "veg", description: "Crispy battered onion rings", rating: 4.2, image: "https://i.pinimg.com/1200x/e8/fe/bf/e8febf720617dc63c7a370aa72db4ff4.jpg" },
    
    // Starters - Non-Vegetarian
    { id: 31, name: "Chicken Wings", price: 259, category: "starters", type: "non-veg", description: "Spicy grilled chicken wings", rating: 4.6, image: "https://i.pinimg.com/1200x/4f/ed/02/4fed027e6c8f65e84e1ebe1fa9678018.jpg" },
    { id: 33, name: "Chicken  Kabab", price: 279, category: "starters", type: "non-veg", description: "Minced chicken skewers", rating: 4.5, image: "https://i.pinimg.com/736x/a8/d1/4e/a8d14e2968e917b32559aab51b737dfe.jpg" },
    { id: 36, name: "Chicken 65", price: 289, category: "starters", type: "non-veg", description: "Spicy South Indian chicken starter", rating: 4.7, image: "https://i.pinimg.com/1200x/9d/37/51/9d3751b52c4f51dbbccc38c949f258cf.jpg" },
    { id: 37, name: "Tandoori Chicken", price: 329, category: "starters", type: "non-veg", description: "Chicken marinated in tandoori spices", rating: 4.8, image: "https://i.pinimg.com/736x/b2/d0/9f/b2d09f3a81e1b2e6d381e3ee1c96d7c4.jpg" },
    { id: 38, name: "Lemon Chicken", price: 299, category: "starters", type: "non-veg", description: "Tangy lemon flavored chicken", rating: 4.5, image: "https://i.pinimg.com/1200x/e6/31/3d/e6313df744bf338346a00838a68e7ff2.jpg" },
    { id: 39, name: "Chilli Chicken", price: 309, category: "starters", type: "non-veg", description: " Indo-Chinese spicy chicken", rating: 4.6, image: "https://i.pinimg.com/1200x/8a/56/32/8a56328ebca78d438efe1a8ce466fc6b.jpg" },
    
    // Drinks - Non-Alcoholic
    { id: 41, name: "Mango Lassi", price: 89, category: "drinks", type: "veg", description: "Sweet yogurt drink with mango", rating: 4.6, image: "https://i.pinimg.com/1200x/34/09/9d/34099d3b61e04f41b9aac36b873dd0d4.jpg" },
    { id: 42, name: "Fresh Lime Soda", price: 79, category: "drinks", type: "veg", description: "Refreshing lime soda with mint", rating: 4.3, image: "https://i.pinimg.com/1200x/95/5a/13/955a13881ab9c428eb525e2dfc8dbf39.jpg" },
    { id: 43, name: "Mocktail ", price: 149, category: "drinks", type: "veg", description: "House special mixed fruit drink", rating: 4.5, image: "https://i.pinimg.com/1200x/01/6b/9b/016b9bb3e42445ea31bd731a9a95a88f.jpg" },
    { id: 44, name: "Orange Juice", price: 99, category: "drinks", type: "veg", description: "Freshly squeezed orange juice", rating: 4.4, image: "https://i.pinimg.com/1200x/b5/15/19/b5151985c607f0f2c7695b46d5d95181.jpg" },
    { id: 45, name: "Iced Tea", price: 89, category: "drinks", type: "veg", description: "Chilled tea with lemon", rating: 4.2, image: "https://i.pinimg.com/736x/6a/a5/2e/6aa52ef43e3d97f8a2a03251b5f0cf36.jpg" },
    { id: 46, name: "Watermelon Juice", price: 89, category: "drinks", type: "veg", description: "Fresh watermelon juice", rating: 4.3, image: "https://i.pinimg.com/1200x/59/67/e7/5967e72615a42f9c2a2500961bf49c74.jpg" },
    { id: 47, name: "Pineapple Juice", price: 99, category: "drinks", type: "veg", description: "Sweet pineapple juice", rating: 4.4, image: "https://i.pinimg.com/1200x/4c/c4/9d/4cc49d102bf1d2a2d3590d5dea3ef19f.jpg" },
    { id: 49, name: "Blue Lagoon", price: 139, category: "drinks", type: "veg", description: "Blue curaçao mocktail", rating: 4.4, image: "https://i.pinimg.com/1200x/4f/4c/96/4f4c96a2d14888bbe96d57d6c1102f97.jpg" },
    { id: 50, name: "Sweet Lassi", price: 79, category: "drinks", type: "veg", description: "Traditional sweet yogurt drink", rating: 4.3, image: "https://i.pinimg.com/736x/05/0f/e8/050fe8223490912e39ff91c5007dd537.jpg" },
    
   // More Starters
    { id: 51, name: "Aloo Tikki", price: 139, category: "starters", type: "veg", description: "Spiced potato patties", rating: 4.3, image: "https://i.pinimg.com/1200x/cf/4d/6e/cf4d6e68a5a6f1a6c1da9e37b38e7b94.jpg" },
    { id: 52, name: "Gobi Manchurian", price: 189, category: "starters", type: "veg", description: "Cauliflower in Indo-Chinese style", rating: 4.4, image: "https://i.pinimg.com/1200x/5f/3b/71/5f3b717f4967b731eb80f4aabcc9f1a3.jpg" },
    { id: 53, name: "Paneer 65", price: 249, category: "starters", type: "veg", description: "Spicy paneer starter", rating: 4.5, image: "https://i.pinimg.com/1200x/1d/3c/d4/1d3cd4fec9a0c12f8405e17272d9a50f.jpg" },
    { id: 54, name: "Chicken Momos", price: 199, category: "starters", type: "non-veg", description: "Steamed chicken dumplings", rating: 4.4, image: "https://i.pinimg.com/1200x/e8/35/ed/e835ed89023c2a6d2d1933321d59efc4.jpg" },
    { id: 55, name: "Veg Momos", price: 169, category: "starters", type: "veg", description: "Steamed vegetable dumplings", rating: 4.3, image: "https://i.pinimg.com/736x/ae/52/61/ae52610176a15c028d0f85229d91162e.jpg" },
    { id: 56, name: "Fish Tikka", price: 319, category: "starters", type: "non-veg", description: "Marinated fish tikka", rating: 4.6, image: "https://i.pinimg.com/1200x/ee/c9/8f/eec98fb63940ccc154e4f58cb72c0de6.jpg" },
    { id: 57, name: "Chicken Lollipop", price: 279, category: "starters", type: "non-veg", description: "Crispy chicken lollipops", rating: 4.5, image: "https://i.pinimg.com/736x/3c/c3/17/3cc317c6365262f9731a5eaff8903fb6.jpg" },
    { id: 58, name: "Crispy Corn", price: 179, category: "starters", type: "veg", description: "Crispy fried corn kernels", rating: 4.2, image: "https://i.pinimg.com/736x/b0/8c/cd/b08ccd412f6066fe59ff7c81f06b9b4b.jpg" },
    { id: 59, name: "Veg Spring Roll", price: 169, category: "starters", type: "veg", description: "Vegetable spring rolls", rating: 4.3, image: "https://i.pinimg.com/736x/11/db/7a/11db7a70ac8a71bbf7067a2608b0e4ad.jpg" },
    { id: 60, name: "Egg Roll", price: 189, category: "starters", type: "non-veg", description: "Egg wrapped in paratha", rating: 4.4, image: "https://i.pinimg.com/1200x/e3/a9/d3/e3a9d35be13688277359a43cd8574f70.jpg" },
             
    // More Main Courses
    { id: 61, name: "Mix Veg", price: 219, category: "veg", type: "veg", description: "Mixed vegetables in gravy", rating: 4.3, image: "https://i.pinimg.com/1200x/2e/ec/6f/2eec6ffaf159c455e2006c1d60e7bc1c.jpg" },
    { id: 62, name: "Aloo Gobi", price: 199, category: "veg", type: "veg", description: "Potato and cauliflower curry", rating: 4.2, image: "https://i.pinimg.com/736x/80/76/54/807654da793fa73fe787433d4a5ce1fb.jpg" },
    { id: 64, name: "Chicken Pyaa", price: 339, category: "non-veg", type: "non-veg", description: "Chicken with double onions", rating: 4.5, image: "https://i.pinimg.com/1200x/34/20/02/3420028c78837297c67c318d246b782b.jpg" },
    { id: 65, name: "Mutton Curry", price: 399, category: "non-veg", type: "non-veg", description: "Traditional mutton curry", rating: 4.6, image: "https://i.pinimg.com/736x/9b/c0/5d/9bc05d5b3db6c1eb9323fb8257a6c560.jpg" },
    { id: 66, name: "Egg Biryani", price: 249, category: "non-veg", type: "non-veg", description: "Aromatic rice with boiled eggs", rating: 4.4, image: "https://i.pinimg.com/736x/b3/9a/04/b39a0480b46498b7c82a32b457f63e57.jpg" },
    { id: 68, name: "Chicken Tikka Masala", price: 359, category: "non-veg", type: "non-veg", description: "Chicken tikka in creamy gravy", rating: 4.7, image: "https://i.pinimg.com/1200x/8c/9c/dc/8c9cdce9ac1b823f1505ddba0462d99d.jpg" },
    { id: 69, name: "Veg Pulao", price: 219, category: "veg", type: "veg", description: "Fragrant vegetable rice", rating: 4.3, image: "https://i.pinimg.com/736x/bf/06/d2/bf06d2a087fe319366289f63dfddac99.jpg" },
    { id: 70, name: "Jeera Rice", price: 179, category: "veg", type: "veg", description: "Basmati rice with cumin", rating: 4.2, image: "https://i.pinimg.com/1200x/67/e4/70/67e470550cb9b8d83d5e6908756dc17a.jpg" },
    
   // More Drinks
            { id: 71, name: "Strawberry Shake", price: 119, category: "drinks", type: "veg", description: "Fresh strawberry milkshake", rating: 4.5, image: "https://i.pinimg.com/1200x/ee/fe/1b/eefe1bbde93048962c4095f12c9b0dcf.jpg" },
            { id: 72, name: "Chocolate Shake", price: 129, category: "drinks", type: "veg", description: "Rich chocolate milkshake", rating: 4.6, image: "https://i.pinimg.com/1200x/df/f7/fb/dff7fb444c5439c7fa59f83bcba03cef.jpg" },
            { id: 73, name: "Vanilla Shake", price: 109, category: "drinks", type: "veg", description: "Classic vanilla milkshake", rating: 4.4, image: "https://i.pinimg.com/736x/45/d0/78/45d078f20345d7a640fdd0b8b85ed8c4.jpg" },
            { id: 74, name: "Banana Shake", price: 99, category: "drinks", type: "veg", description: "Creamy banana milkshake", rating: 4.3, image: "https://i.pinimg.com/1200x/19/e0/89/19e089e18368520e5cfce1ed3d74ee60.jpg" },
            { id: 75, name: "Mango Shake", price: 119, category: "drinks", type: "veg", description: "Fresh mango milkshake", rating: 4.5, image: "https://i.pinimg.com/1200x/6e/fc/a6/6efca684c374fc75f31665fe761a9955.jpg" },
            { id: 76, name: "Cold Coffee", price: 109, category: "drinks", type: "veg", description: "Chilled coffee with ice cream", rating: 4.4, image: "https://i.pinimg.com/736x/c5/43/c1/c543c1b8c1524e2780e8692cd7ccaa0f.jpg" },
            { id: 77, name: "Green Tea", price: 69, category: "drinks", type: "veg", description: "Refreshing green tea", rating: 4.2, image: "https://i.pinimg.com/1200x/2e/64/76/2e6476db8ea60314f4c8b78fc1436189.jpg" },
            { id: 78, name: "Masala Tea", price: 59, category: "drinks", type: "veg", description: "Spiced Indian tea", rating: 4.3, image: "https://i.pinimg.com/1200x/21/5a/d3/215ad3108888619f42eeb5dfad483aa4.jpg" },
            { id: 79, name: "Black Coffee", price: 79, category: "drinks", type: "veg", description: "Strong black coffee", rating: 4.2, image: "https://i.pinimg.com/736x/a5/8d/52/a58d52e58145b1e6f1be20b1447c7c24.jpg" },
            { id: 80, name: "Coconut Water", price: 89, category: "drinks", type: "veg", description: "Fresh tender coconut water", rating: 4.3, image: "https://i.pinimg.com/1200x/36/06/7c/36067c27fca2a3bf4cf26ff8d6c5c157.jpg" }
        ];

// Global Variables
let cart = [];
let currentPage = '';

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after a short delay
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hide');
        }
    }, 1000);
    
    // Detect current page
    currentPage = getCurrentPage();
    
    // Set active navigation link
    setActiveNavLink();
    
    // Initialize page-specific functionality
    initializePage();
    
    // Load cart from localStorage
    loadCartFromStorage();
    
    // Initialize common event listeners
    initializeCommonListeners();
});

// Get current page name
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page.replace('.html', '');
}

// Set active navigation link based on current page
function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage + '.html' || 
            (currentPage === 'index' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Initialize page-specific functionality
function initializePage() {
    switch(currentPage) {
        case 'index':
            // Home page specific initialization
            break;
        case 'about':
            // Animate statistics numbers
            setTimeout(() => animateNumbers(), 500);
            break;
        case 'menu':
            // Render menu items
            renderMenuItems('all');
            break;
        case 'contact':
            // Contact page specific initialization
            break;
    }
}

// Initialize common event listeners
function initializeCommonListeners() {
    // Booking form submission
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    // Close modal when clicking outside
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal) {
        bookingModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeBookingModal();
            }
        });
    }
    
    // Close cart when clicking outside
    document.addEventListener('click', function(e) {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartBtn = document.querySelector('.cart-btn');
        
        if (cartSidebar && cartBtn && !cartSidebar.contains(e.target) && !cartBtn.contains(e.target) && cartSidebar.classList.contains('show')) {
            cartSidebar.classList.remove('show');
        }
    });
}

// Render Menu Items (for menu.html)
function renderMenuItems(filter) {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    menuGrid.innerHTML = '';
    
    let itemsToRender = [];
    
    if (filter === 'all') {
        itemsToRender = menuItems;
    } else {
        itemsToRender = menuItems.filter(item => item.category === filter);
    }
    
    itemsToRender.forEach(item => {
        const menuItemCard = document.createElement('div');
        menuItemCard.className = 'menu-item show';
        
        menuItemCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <span class="menu-item-price">₹${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-badges">
                    <span class="menu-item-badge ${item.type}">${item.type === 'veg' ? '🟢 Veg' : '🔴 Non-Veg'}</span>
                    <span class="menu-item-badge">${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
                </div>
                <div class="rating">
                    ${generateStars(item.rating)}
                    <span>${item.rating}</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    <i class="fas fa-plus-circle"></i> Add to Cart
                </button>
            </div>
        `;
        menuGrid.appendChild(menuItemCard);
    });
}

// Generate Star Rating HTML
function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Filter Menu (for menu.html)
function filterMenu(category) {
    // Update active button
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(category) || 
            (category === 'all' && btn.textContent === 'All Items')) {
            btn.classList.add('active');
        }
    });
    
    // Filter and render items
    renderMenuItems(category);
}

// Cart Functions
function addToCart(itemId) {
    // Regular menu item handling
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;
    
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCart();
    showSuccessMessage(`${item.name} added to cart!`);
    
    // Animate button
    if (event && event.target) {
        event.target.classList.add('added');
        setTimeout(() => {
            event.target.classList.remove('added');
        }, 500);
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems || !cartCount || !cartTotal) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Your cart is empty</p>
                <p>Add delicious items from our menu!</p>
            </div>
        `;
        cartCount.textContent = '0';
        cartTotal.textContent = '₹0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `).join('');
        
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        cartCount.textContent = totalItems;
        cartTotal.textContent = `₹${totalPrice}`;
    }
    
    saveCartToStorage();
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('show');
    }
}

function checkout() {
    if (cart.length === 0) {
        showSuccessMessage('Your cart is empty!');
        return;
    }
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showSuccessMessage(`Order placed successfully! Total: ₹${totalPrice}`);
    cart = [];
    updateCart();
    toggleCart();
}

// Cart Storage Functions
function saveCartToStorage() {
    localStorage.setItem('restaurantCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('restaurantCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
}

// Booking Modal Functions
function openBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (!modal) {
        console.error('Booking modal not found');
        return;
    }
    modal.classList.add('show');
    document.body.style.overflow = "hidden";
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = "auto";
        const form = document.getElementById('bookingForm');
        if (form) {
            form.reset();
        }
    }
}

// Handle Booking Form Submission
function handleBookingSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name')?.value || '',
        email: document.getElementById('email')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        date: document.getElementById('date')?.value || '',
        time: document.getElementById('time')?.value || '',
        guests: document.getElementById('guests')?.value || ''
    };
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time || !formData.guests) {
        showSuccessMessage('Please fill in all required fields!');
        return;
    }
    
    // Show success message
    showSuccessMessage('Table booked successfully! We will confirm shortly.');
    closeBookingModal();
    
    // Log booking data (in a real application, this would be sent to a server)
    console.log('Booking data:', formData);
}

// Success Message Function
function showSuccessMessage(message) {
    const successMessage = document.getElementById('successMessage');
    const successText = document.getElementById('successText');
    
    if (successMessage && successText) {
        successText.textContent = message;
        successMessage.classList.add('show');
        
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 3000);
    }
}

// Animate Numbers (for about.html)
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    
    if (statNumbers.length === 0) return;
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateNumber = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateNumber);
            } else {
                stat.textContent = target + '+';
            }
        };
        
        updateNumber();
    });
}

// Utility Functions
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll for anchor links (if any)
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});

// Handle page visibility change (for cart sync across tabs)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        loadCartFromStorage();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modals
    if (e.key === 'Escape') {
        closeBookingModal();
        const cartSidebar = document.getElementById('cartSidebar');
        if (cartSidebar && cartSidebar.classList.contains('show')) {
            cartSidebar.classList.remove('show');
        }
    }
    
    // Ctrl/Cmd + B to open booking modal
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        openBookingModal();
    }
    
    // Ctrl/Cmd + K to toggle cart
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleCart();
    }
});

// Export functions for global access (if needed)
window.restaurantApp = {
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleCart,
    checkout,
    openBookingModal,
    closeBookingModal,
    filterMenu,
    showSuccessMessage
};
// Add to cart functionality
function addToCart(item) {
    let cart = [];
    try {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            cart = JSON.parse(cartData);
        }
    } catch (error) {
        console.error('Error retrieving cart:', error);
    }
    
    // Check if item already exists in cart
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            qty: 1
        });
    }
    
    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart UI
    updateCartUI();
}

// Function to update cart UI (you'll need to implement this)
function updateCartUI() {
    // This function should update your cart display
    // For example, update cart count in the header
    let cart = [];
    try {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            cart = JSON.parse(cartData);
        }
    } catch (error) {
        console.error('Error retrieving cart:', error);
    }
    
    const totalItems = cart.reduce((total, item) => total + item.qty, 0);
    
    // Update cart count element if it exists
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function toggleWishlist(btn) {
    const name = btn.dataset.name;
    const price = btn.dataset.price;

    const index = wishlist.findIndex(item => item.name === name);

    if (index === -1) {
        wishlist.push({ name, price });
        btn.classList.add("active");
        btn.innerHTML = '<i class="fas fa-heart"></i>';
    } else {
        wishlist.splice(index, 1);
        btn.classList.remove("active");
        btn.innerHTML = '<i class="far fa-heart"></i>';
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
}
