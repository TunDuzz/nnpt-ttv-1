const CONFIG = {
    GRID_ID: 'product-grid',
    // Simple gray placeholder (600x400)
    DEFAULT_IMAGE: 'https://placehold.co/600x400?text=No+Image',
    // Simple red error placeholder (600x400)
    ERROR_IMAGE: 'https://placehold.co/600x400?text=Image+Error'
};

const PRODUCTS_DATA = [
    { "id": 160, "title": "External Hard Drive", "slug": "external-hard-drive", "price": 890, "description": "High-capacity external hard drive.", "category": { "name": "Electronics" }, "images": ["https://placehold.co/600x400?text=Hard+Drive"] },
    { "id": 187, "title": "Fire Red Sport Sneakers", "slug": "fire-red-sport-sneakers", "price": 95, "description": "Bold red sneakers.", "category": { "name": "Shoes" }, "images": ["https://placehold.co/600x400?text=Red+Sneakers"] },
    { "id": 188, "title": "Aggressive Black & Red Sneakers", "slug": "aggressive-black-red-sneakers", "price": 110, "description": "Dynamic color-block design.", "category": { "name": "Shoes" }, "images": ["https://placehold.co/600x400?text=Black+Sneakers"] },
    { "id": 189, "title": "Minimalist White Sport Smartwatch", "slug": "minimalist-white-sport-smartwatch", "price": 150, "description": "Stay connected with style.", "category": { "name": "Electronics" }, "images": ["https://placehold.co/600x400?text=Smartwatch"] },
    { "id": 190, "title": "Premium Black Wireless Headset", "slug": "premium-black-wireless-headset", "price": 120, "description": "High-fidelity sound.", "category": { "name": "Electronics" }, "images": ["https://placehold.co/600x400?text=Headset"] },
    { "id": 191, "title": "Waterproof Bluetooth Earbuds", "slug": "waterproof-bluetooth-earbuds-black", "price": 80, "description": "Compact and powerful.", "category": { "name": "Electronics" }, "images": ["https://placehold.co/600x400?text=Earbuds"] },
    { "id": 192, "title": "Vintage Mood Indigo Cap", "slug": "vintage-mood-indigo-cap", "price": 18, "description": "Stylish adjustable cap.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Indigo+Cap"] },
    { "id": 193, "title": "Vibrant Purple Cotton Cap", "slug": "vibrant-purple-cotton-cap", "price": 18, "description": "Pop of color for your look.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Purple+Cap"] },
    { "id": 194, "title": "Classic Red Sport Cap", "slug": "classic-red-sport-cap", "price": 18, "description": "Bold red cap.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Red+Cap"] },
    { "id": 195, "title": "Minimalist White T-Shirt", "slug": "minimalist-white-t-shirt", "price": 25, "description": "Crisp clean white tee.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=White+Tee"] },
    { "id": 196, "title": "Essential Black T-Shirt", "slug": "essential-black-t-shirt", "price": 25, "description": "Classic black modern fit.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Black+Tee"] },
    { "id": 197, "title": "Sleek White Wireless Headset", "slug": "sleek-white-wireless-bluetooth-headset", "price": 130, "description": "Pure sound elegance.", "category": { "name": "Electronics" }, "images": ["https://placehold.co/600x400?text=White+Headset"] },
    { "id": 198, "title": "Ocean Blue Waterproof Gym Bag", "slug": "ocean-blue-waterproof-gym-bag", "price": 40, "description": "Keep gear dry.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Blue+Bag"] },
    { "id": 199, "title": "Active Red Waterproof Gym Bag", "slug": "active-red-waterproof-gym-bag", "price": 40, "description": "High visibility gym bag.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Red+Bag"] },
    { "id": 200, "title": "Sweater", "slug": "sweater", "price": 50, "description": "Comfortable warm sweater.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Sweater"] },
    { "id": 202, "title": "New Arrival Item", "slug": "new-arrival", "price": 100, "description": "Latest collection item.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=New+Item"] },
    { "id": 204, "title": "Special Product", "slug": "special-product", "price": 10, "description": "Limited edition.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Special"] },
    { "id": 210, "title": "Smart Device", "slug": "smart-device", "price": 325, "description": "Next gen tech.", "category": { "name": "Electronics" }, "images": ["https://placehold.co/600x400?text=Tech"] },
    { "id": 211, "title": "Graphic T-Shirt", "slug": "t-shirt", "price": 70, "description": "Urban style.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Graphic+Tee"] },
    { "id": 212, "title": "Skinny Jeans", "slug": "skinny-jeans", "price": 40, "description": "Modern fit denim.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Jeans"] },
    { "id": 213, "title": "Classic Jeans", "slug": "jeans", "price": 50, "description": "Timeless denim.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Classic+Jeans"] },
    { "id": 214, "title": "Casual Shirt", "slug": "shirt", "price": 50, "description": "Everyday wear.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Shirt"] },
    { "id": 215, "title": "Red Jacket", "slug": "jacket", "price": 13, "description": "Warm layer.", "category": { "name": "Clothes" }, "images": ["https://placehold.co/600x400?text=Jacket"] },
    { "id": 216, "title": "Ultra Monitor", "slug": "title-1", "price": 300, "description": "4K Display.", "category": { "name": "Electronics" }, "images": ["https://placehold.co/600x400?text=Monitor"] },
    { "id": 233, "title": "Smart TV", "slug": "smart-tv", "price": 890, "description": "Home cinema experience.", "category": { "name": "Electronics" }, "images": ["https://placehold.co/600x400?text=TV"] },
    { "id": 245, "title": "Iphone 15", "slug": "iphone", "price": 1200, "description": "Latest iOS device.", "category": { "name": "Electronics" }, "images": ["https://placehold.co/600x400?text=iPhone"] }
];

const formatPrice = (price) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(price);

const createProductCard = (product) => {
    const { title, price, description, category, images } = product;

    // Safety check for image
    let imageUrl = (images && images.length > 0) ? images[0] : CONFIG.DEFAULT_IMAGE;
    if (typeof imageUrl !== 'string') imageUrl = String(imageUrl);

    const categoryName = category?.name || 'Uncategorized';

    return `
        <article class="product-card">
            <div class="card-image-wrapper">
                <img src="${imageUrl}" 
                     alt="${title}" 
                     class="card-image" 
                     loading="lazy" 
                     onerror="this.onerror=null;this.src='${CONFIG.ERROR_IMAGE}'">
                <span class="category-badge">${categoryName}</span>
            </div>
            <div class="card-content">
                <h2 class="product-title" title="${title}">${title}</h2>
                <div class="product-price">${formatPrice(price)}</div>
                <p class="product-description">${description}</p>
                
                <div class="card-footer">
                    <button class="btn-buy" onclick="alert('Added ${title} to cart!')">Add to Cart</button>
                </div>
            </div>
        </article>
    `;
};

const renderError = (container, message, details = '') => {
    container.innerHTML = `
        <div class="loading-state">
            <p>${message}</p>
            ${details ? `<small style="color:red">${details}</small>` : ''}
        </div>
    `;
};

const init = () => {
    const gridElement = document.getElementById(CONFIG.GRID_ID);
    if (!gridElement) return;

    if (!Array.isArray(PRODUCTS_DATA) || PRODUCTS_DATA.length === 0) {
        renderError(gridElement, 'No products found.');
        return;
    }

    gridElement.innerHTML = PRODUCTS_DATA.map(createProductCard).join('');
};

document.addEventListener('DOMContentLoaded', init);
