// Add JavaScript logic for fetching and displaying products
const productsContainer = document.querySelector('.products');

// Example product data (you would fetch this from an API)
const products = [
    { name: 'Product 1', price: '$100', image: 'product1.jpg' },
    { name: 'Product 2', price: '$200', image: 'product2.jpg' },
    // Add more products here
];

function displayProducts() {
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;

        productsContainer.appendChild(productCard);
    });
}

displayProducts();
