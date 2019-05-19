const priceFormatter = (priceJSON) => {
    switch(priceJSON.currency){
        case "PLN":
            return priceJSON.amount.split('.').join(',') + " zł"
        case "EUR":
            return "€ " + priceJSON.amount
        case "USD":
            return "$ " + priceJSON.amount
        default:
    }
}