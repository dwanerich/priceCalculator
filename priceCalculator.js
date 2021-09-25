// ORGANIZED THE GROCERY ITEMS INTO AN OBJECT OF ARRAY OF OBJECTS:

Inventory =
{
    "Milk": {"unit_price": 3.97, "sale_price": 5.00},
    "Bread": {"unit_price": 2.17, "sale_price": 6.00},
    "Apple": {"unit_price": .89},
    "Banana": {"unit_price": .99}
}

// TAKE AN ARRAY OF STRINGS (THE ITEMS) AND CREATE AN OBJECT OF (ITEM:QUANTITY) KEY/VALUE PAIRS:
 cart = []

cart = ["milk", "milk", "bread", "banana", "bread", "bread", "bread", "milk", "apple"]

let countItems = (cart) => {
    let countedItems = {}
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i]

        if(countedItems[item] > 0) {
            countedItems[item]++
        } else {
        countedItems[item] = 1;    
        }
    }
    return countedItems;
}
console.log(countItems(cart))


// LOGIC FOR REFACTORING ITEMS THAT ARE ON SALE:

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




// INITIALIZING THE VARIABLES THAT WILL BE THE INTIAL TOTAL COST BEFORE FACTORING IN SALE:

let milkTotal, breadTotal, appleTotal, bananaTotal;

milkTotal = cart["Milk"] * Inventory["Milk"]["unit_price"];
breadTotal = cart["Bread"] * Inventory["Bread"]["unit_price"]
appleTotal = cart["Apple"] * Inventory["Apple"]["unit_price"]
bananaTotal = cart["Banana"] * Inventory["Banana"]["unit_price"]


// LOGGING THE TOTAL PRE-DISCOUNT FACTORING:

let milk = ("Milk total:", cart["Milk"], milkTotal)
let bread = ("Bread total:", cart['Bread'], breadTotal)
let apple = ("Apple total:", cart['Apple'], appleTotal)
let banana = ("Banana total:", cart['Banana'], bananaTotal)
let total = milk + bread + apple + banana ;

// console.log("Total Price: $" , total)
// console.log('You saved total - discount today.')

// LOGIC TO FACTOR SALE AND ADJUST PRICES ACCORDINGLY

let applyDiscount = () => {
    if (checkOut["Milk"] >= 2) {
        milkTotal = "discounted version"
    }
    if(checkOut['Breadk'] >= 3) {
        breadTotal = "discounted version"
    }
    return "results"
}