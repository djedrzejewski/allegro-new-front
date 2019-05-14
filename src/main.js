const response = getProductList();
const listingElement = document.querySelector('#listing');

const products = response.products
    .map( product => renderProduct(product))
    .forEach( productHTML => {
        listingElement.innerHTML += productHTML
    })
;
