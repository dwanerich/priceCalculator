class Item {
    constructor(name, unit_price, sale_price) {
        this.name = name;
        this.unit_price = unit_price;
        this.sale_price = sale_price
    }
}

class Cart {
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
    }

    milkPriceAdjuster(item, quantity) {
        if (item.name === 'milk' && this.item.quantity === 2 ) {

            this.totalMilkCost = item.sale_price
        }
        return this.totalMilkCost
    }
}

milkInstance= new Item("milk", 3.97, 5.00)
breadInstance = new Item("bread", 2.17, 6.00)
appleInstance = new Item("apple", .99)
bananaInstance = new Item("banana", .89)

newCart = new Cart("milk", 2)
console.log('price adjustor', newCart.milkPriceAdjuster('milk', 2))


let total = milkInstance.unit_price + appleInstance.unit_price
 console.log(total)
itemsIntoAnArray = []
itemsIntoAnArray.push("milk", "milk", "bread", "banana", "bread", "bread", "bread", "milk", "apple")
console.log(itemsIntoAnArray.length - 1)
