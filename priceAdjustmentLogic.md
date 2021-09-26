# priceCalculator
// LOGIC FOR HANDLING ADJUSTED PRICES FOR ITEMS ON SALE:

// Item     Unit price        Sale price
// --------------------------------------
// Milk      $3.97            2 for $5.00
// Bread     $2.17            3 for $6.00

// Milk
// if  quantity < 2 (price = $3.97 unit price)
// if quantity = 2 (price = $5.00 (sale price))
// if  quantity > 2 && (not divisble by 2) price = working quotient x sale price + remainder * unit price

// Bread
// if  quantity < 3 (totalPrice = quantity x $2.17 unit price)
// if quantity = 3 (totalPrice = $5.00 (sale price))
// if  quantity > 3 && (not divisble by 3) totalPrice = working quotient x sale price + remainder * unit price