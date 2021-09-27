
// STRUCTURE THE GROCERY ITEMS INTO AN OBJECT OF ARRAY OF OBJECTS:

Inventory =
{
    "milk": {"unit_price": 3.97, "sale_price": 5.00},
    "bread": {"unit_price": 2.17, "sale_price": 6.00},
    "apple": {"unit_price": 0.89},
    "banana": {"unit_price": 0.99}
}

// TAKE AN ARRAY OF STRINGS (THE ITEMS) AND CREATE AN OBJECT OF (ITEM:QUANTITY) KEY/VALUE PAIRS:

cart = ["milk","milk","bread","banana","bread","bread","bread","milk","apple"]

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
// THE LOGGING OF SHOPPING CART ITEM-QUANTITY KEY/VALUE PAIRS:
console.log("Counted Items Method: ", countItems(cart))


//  HELPER VARIABLES TO ACCESS ITEM QUANTITIES IN CART:
const milkQuantity = itemResults['milk']
const breadQuantity = itemResults['bread']
const appleQuantity = itemResults['apple']
const bananaQuantity = itemResults['banana']

// METHODS TO ADJUST PRICE WHEN DISCOUNT APPLIES BASED ON QUALIFYING QUANTITIES:

// MILK DISCOUNT ADJUST METHOD:

let milkDiscount = () => {
    
    let adjustedMilk = 0;
    
    if (milkQuantity < 1) {
        adjustedMilk = 0;}
        else if (milkQuantity === 1) {
            adjustedMilk = 3.97
            console.log('full price for 1 milk', adjustedMilk)
        }
        else if(milkQuantity === 2) {
            adjustedMilk = 5.00
            console.log('2 milks discount', adjustedMilk)
            
        }
        else if (milkQuantity > 2 && milkQuantity % 2 === 0) {
            adjustedMilk = (milkQuantity / 2) * 5.00
        }
        
        else if (milkQuantity > 2 && (milkQuantity % 2 != 0)) {
            
            adjustedMilk = ((milkQuantity - 1) / 2) * (Inventory['milk']['sale_price']) + (3.97)
        }
        // LOGGING OF MILK TOTAL WITH ADJUSTED DISCOUNT:
        console.log('Discount applies to milk |', "adjusted-milk :", adjustedMilk)
        return adjustedMilk;
    }

    // BREAD DISCOUNT ADJUSTOR METHOD
    
    let breadDiscount = () => {
        
        let adjustedBread = 0;
        
        if (breadQuantity < 1) {
            adjustedBread = 0;
        }
        else if (breadQuantity === 1) {
            adjustedBread = Inventory['bread']['unit_price'];
            console.log('BREAD 1', adjustedBread)
        }
        else if (breadQuantity === 2) {
            adjustedBread = breadQuantity * Inventory['bread']['unit_price']
            console.log('2 breads / no discount, you pay', adjustedBread)
        }
        else if (breadQuantity === 3) {
            adjustedBread = Inventory['bread']['sale_price']
            console.log('3 breads discount', adjustedBread)       
        }
        else if (breadQuantity > 3 && breadQuantity % 3 === 0) {
            adjustedBread = (breadQuantity / 3) * Inventory['bread']['sale_price'];
        console.log('your amount of breads scored you a discount', adjustedBread)
    }
    if (breadQuantity > 3 && breadQuantity % 3 !== 0) {
        let discountedBread = breadQuantity - breadQuantity % 3;
        adjustedBread = (discountedBread / 3) * (Inventory['bread']['sale_price']) + (breadQuantity % 3) * Inventory['bread']['unit_price']
        console.log(' 3+ breads scored you a discount | adjusted price:', adjustedBread)
    }
    return adjustedBread;
}

// INITIALIZATION OF VARIABLE NAMES OF BOTH PRE & POST DISCOUNT TOTALS:

let milkTotal, breadTotal, appleTotal, bananaTotal, subTotal, total;

milkTotal = milkQuantity * Inventory["milk"]["unit_price"];
breadTotal = breadQuantity * Inventory["bread"]["unit_price"];
appleTotal = appleQuantity * Inventory["apple"]["unit_price"];
bananaTotal = bananaQuantity * Inventory["banana"]["unit_price"];
subTotal = milkTotal + breadTotal + appleTotal + bananaTotal;
total = bananaTotal + appleTotal + milkDiscount() + breadDiscount();
moneySaved = subTotal - total;

    console.log('PRE-DISCOUNTED TOTAL:', subTotal)
    console.log('FINAL ADJUSTED TOTAL:' , total)

console.log(`${appleQuantity} Apple's Total:`, appleTotal)
console.log(`${bananaQuantity} Banana's Total`, bananaTotal)


// TOTAL MONEY SAVED:

console.log("you saved ", moneySaved, " today.")
