Inventory =
{
    "Milk": {"unit_price": 3.97, "sale_price": 5.00},
    "Bread": {"unit_price": 2.17, "sale_price": 6.00},
    "Apple": {"unit_price": .89},
    "Banana": {"unit_price": .99}
}

checkOut = { "Milk": 3, "Bread": 4, "Apple": 1, "Banana": 1 }


let totalItems = () => {
    return Object.keys(checkOut).length;
}

// console.log(Inventory["Milk"])
console.log(totalItems())


// let youSaved = (name, quantity, price) => {
//     return "You Saved xyz Today"
// }


