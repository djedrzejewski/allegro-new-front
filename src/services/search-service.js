function searchByTitle(phrase, productList){
	return productList.filter((product) => product.name.includes(phrase));
}


function searchByPrice(priceFrom, priceTo, productList){
	if(isNaN(priceTo) && isNaN(priceFrom)){
		return productList;
	}

	return productList.filter((product) => {
		amount = product.price.amount;
		if(isNaN(priceTo) && amount >= priceFrom){
			return true;
		}

		if(isNaN(priceFrom) && amount <= priceTo){
			return true;
		}

		if(amount >= priceFrom && amount <= priceTo){
			return true;
		}else{
			return false;
		}
	});
}
