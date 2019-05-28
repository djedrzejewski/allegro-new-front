const response = getProductList();
const productListingElement = document.querySelector('#listing');
const searchInputElement = document.getElementById('search-input');
const searchButtonElement = document.getElementById('search-button');
const priceFilterButtonElement = document.getElementById('filter-button');
const priceFromElement = document.getElementById('price-from-input');
const priceToElement = document.getElementById('price-to-input');


function renderListing(productList){
	productListingElement.innerHTML='';
	productList
		.map(product => renderProduct(product))
		.forEach(html => productListingElement.innerHTML += html);
}

function performSearch(productList){
	const phrase = searchInputElement.value;
	const list = searchByTitle(phrase, productList);
	return list;
};

function filterByPrice(productList){
	const priceFrom = parseFloat(priceFromElement.value);
	const priceTo = parseFloat(priceToElement.value);

	const list = searchByPrice(priceFrom, priceTo, productList);
	return list;
};

searchInputElement.addEventListener('keypress', (event)=>{
	if(event.key == 'Enter'){
		performSearch();
	}
});

function performFiltering(){
	const list = filterByPrice(performSearch(getProductList().products));
	renderListing(list);
}

searchInputElement.addEventListener('click', () => {
	performFiltering();
});

priceFilterButtonElement.addEventListener('click', () => {
	performFiltering();
});

priceFromElement.addEventListener('input', () => {
	performFiltering();
});

priceToElement.addEventListener('input', () => {
	performFiltering();
});

const products = response.products
    .map( product => renderProduct(product))
    .forEach( productHTML => {
        productListingElement.innerHTML += productHTML
    })
;

renderListing(getProductList().products);