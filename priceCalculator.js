
// STRUCTURE THE GROCERY ITEMS INTO AN OBJECT OF ARRAY OF OBJECTS:

Inventory =
{
    "milk": {"unit_price": 3.97, "sale_price": 5.00},
    "bread": {"unit_price": 2.17, "sale_price": 6.00},
    "apple": {"unit_price": 0.89},
    "banana": {"unit_price": 0.99}
}

// TAKE AN ARRAY OF STRINGS (THE ITEMS) AND CREATE AN OBJECT OF (ITEM:QUANTITY) KEY/VALUE PAIRS:

// cart = ["milk", "milk", "bread", "banana", "bread", "bread", "bread", "milk", "apple"]
cart = ["bread", "bread", "bread", "bread", "milk", "apple","banana"]


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
console.log("Counted Items Method: ", countItems(cart))

// INITIALIZING THE VARIABLES THAT WILL BE THE INTIAL TOTAL COST BEFORE FACTORING IN SALE:

let milkTotal, breadTotal, appleTotal, bananaTotal, total;

console.log('SHOWING MILK', milkTotal = itemResults["milk"] * Inventory["milk"]["unit_price"]);
breadTotal = itemResults["bread"] * Inventory["bread"]["unit_price"];
bananaTotal = itemResults["banana"] * Inventory["banana"]["unit_price"];
console.log('show apple', appleTotal = itemResults["apple"] * Inventory["apple"]["unit_price"]);

// PRE-DISCOUNT ITEM TOTALS:

console.log('show total', milkTotal + breadTotal + appleTotal + bananaTotal);

console.log("Pre-Discounted Total:", "Total Price: $" , total)
console.log("You Saved",'You saved (total - discount) today.')

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

const milkQuantity = itemResults['milk']
const breadQuantity = itemResults['bread']

let milkDiscount = (itemResults) => {
    
    let adjustedMilk = 0;

    if (milkQuantity < 1) {
        adjustedMilk = 0;}
    else if (milkQuantity === 1) {
        adjustedMilk = 3.97
        console.log('you pay this for one milk', adjustedMilk)
        }
    else if(milkQuantity === 2) {
        adjustedMilk = 5.00
        console.log('this is your deal for 2 milks', adjustedMilk)

    }
    else if (milkQuantity > 2 && itemResults['milk'] % 2 === 0) {
        adjustedMilk = (milkQuantity / 2) * 5.00
    }

    else if (milkQuantity > 2 && (milkQuantity % 2 != 0)) {

        adjustedMilk = ((milkQuantity - 1) / 2) * (Inventory['milk']['sale_price']) + (3.97)
    }
    console.log('Discount applies to milk |', "adjusted-milk :", adjustedMilk)
}
    
    let breadDiscount = () => {

        let adjustedBread = 0;

    if (breadQuantity < 1) {
        adjustedBread = 0;
    }
    else if (breadQuantity === 1) {
        adjustedBread = Inventory['bread']['unit_price'];
        console.log('you pay this for one bread', adjustedBread)
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
    console.log('deal with a full price |', "total adjusted:", adjustedBread)
}
    }

    console.log('Discount applies to milk |', "pre-discount milk :", milkTotal)

milkDiscount(itemResults)
breadDiscount(itemResults)

    


    



