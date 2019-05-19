function renderProduct(product) {
    return `
    <div class="product">
        <h1 class="product__title">${product.name}</h1>
        <div>${priceFormatter(product.price)}</div>
        <div class="product__description">${product.description.text}</div>
    </div>
    `;
}