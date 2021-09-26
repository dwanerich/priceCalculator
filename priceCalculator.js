
// STRUCTURE THE GROCERY ITEMS INTO AN OBJECT OF ARRAY OF OBJECTS:

Inventory =
{
    "milk": {"unit_price": 3.97, "sale_price": 5.00},
    "bread": {"unit_price": 2.17, "sale_price": 6.00},
    "apple": {"unit_price": 0.89},
    "banana": {"unit_price": 0.99}
}

// TAKE AN ARRAY OF STRINGS (THE ITEMS) AND CREATE AN OBJECT OF (ITEM:QUANTITY) KEY/VALUE PAIRS:

cart = ["milk", "milk", "bread", "banana", "bread", "bread", "bread", "milk", "apple"]

let itemResults = {}

let countItems = (cart) => {
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i]

        if(itemResults[item] > 0) {
            itemResults[item]++
        } else {
        itemResults[item] = 1;    
        }
    }
    return itemResults;
}
console.log("Counted Each Item: ", countItems(cart))

// INITIALIZING THE VARIABLES THAT WILL BE THE INTIAL TOTAL COST BEFORE FACTORING IN SALE:

let milkTotal, breadTotal, appleTotal, bananaTotal;

milkTotal = itemResults["milk"] * Inventory["milk"]["unit_price"];
breadTotal = itemResults["bread"] * Inventory["bread"]["unit_price"]
bananaTotal = itemResults["banana"] * Inventory["banana"]["unit_price"]
appleTotal = itemResults["apple"] * Inventory["apple"]["unit_price"]

// console.log("PREDISCOUNTED RESULTS", Object.values(itemResults));

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

let adjustDiscount = (itemResults) => {
    let adjustedTotalSum = 0,
    adjustedMilkTotal = 0,
    adjustedBreadTotal = 0,
    appleTotal = 0;

    if (itemResults['milk'] >= 2)
     {
        console.log('Discount applies to milk |', "pre-discount :", milkTotal)
        itemResults['milk']

    }

    if(itemResults['bread'] >=3) {
        console.log('Discount applies to bread |', "pre-discount:", breadTotal)
    }

}

adjustDiscount(itemResults)
    
// PRE-DISCOUNT ITEM TOTALS:

let milk = ("Milk total:", cart["milk"], milkTotal)
let bread = ("Bread total:", cart['bread'], breadTotal)
let banana = ("Banana total:", cart['banana'], bananaTotal)
let apple = ("Apple total:", cart['apple'], appleTotal)
let total = milk + bread + banana + apple;

console.log("Pre-Discounted Total:", "Total Price: $" , total)
console.log("You Saved",'You saved (total - discount) today.')



