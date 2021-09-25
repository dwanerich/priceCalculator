// ORGANIZED THE GROCERY ITEMS INTO AN OBJECT OF ARRAY OF OBJECTS:

Inventory =
{
    "Milk": {"unit_price": 3.97, "sale_price": 5.00},
    "Bread": {"unit_price": 2.17, "sale_price": 6.00},
    "Apple": {"unit_price": .89},
    "Banana": {"unit_price": .99}
}

// TAKE AN ARRAY OF STRINGS AND CONVERT THEM INTO AN OBJECT:

cart = ["Milk", "Eggs", "Apples", "Banana", "Banana"]

let tallyUp = (cart) => {
    let tally = {}
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i]

        if(tally[item] > 0) {
            tally[item]++
        } else {
        tally[item] = 1;    
        }
    }
    return tally;
}
console.log(tallyUp(cart))


// ORGANIZED THE PURCHASED ITEMS INTO AN OBJECT W/NAME QUANTITY KEY:VALUE PAIR:

checkOut = { "Milk": 3, "Bread": 4, "Apple": 1, "Banana": 1 }

// INITIALIZING THE VARIABLES THAT WILL BE THE INTIAL TOTAL COST BEFORE FACTORING IN DISCOUNT:

let milkTotal, breadTotal, appleTotal, bananaTotal;

milkTotal = checkOut["Milk"] * Inventory["Milk"]["unit_price"];
breadTotal = checkOut["Bread"] * Inventory["Bread"]["unit_price"]
appleTotal = checkOut["Apple"] * Inventory["Apple"]["unit_price"]
bananaTotal = checkOut["Banana"] * Inventory["Banana"]["unit_price"]


// LOGGING THE TOTAL PRE-DISCOUNT FACTORING:

let milk = ("Milk total:", checkOut["Milk"], milkTotal)
let bread = ("Bread total:", checkOut['Bread'], breadTotal)
let apple = ("Apple total:", checkOut['Apple'], appleTotal)
let banana = ("Banana total:", checkOut['Banana'], bananaTotal)
let total = milk + bread + apple + banana ;

// console.log("Total Price: $" , total)
// console.log('You saved total - discount today.')


// LOGIC TO FACTOR DISCOUNT AND ADJUST PRICES ACCORDINGLY

let applyDiscount = () => {
    if (checkOut["Milk"] >= 2) {
        milkTotal = "discounted version"
    }
    if(checkOut['Breadk'] >= 3) {
        breadTotal = "discounted version"
    }
    return "results"
}



