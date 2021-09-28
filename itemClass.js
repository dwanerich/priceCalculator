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
}
