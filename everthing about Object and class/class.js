// **** Classes*******
// classes are a tempelate for creating objects.
// classes Encapsulate data with code to work on that data.
// classes are in fact "special functions".

// class Product {
//     constructor(itemName,price,discount,itemCode){
//         this.itemName =itemName;
//         this.price = price;
//         this.discount = discount;
//         this.itemCode =itemCode;
//     }
// }

// let pencil = new Product("pencil", 40,5,'P10');

// const Product1 = class {
//     constructor(itemName,price,discount,itemCode){
//         this.itemName =itemName;
//         this.price = price;
//         this.discount = discount;
//         this.itemCode =itemCode;
//     }
//     get getDiscountValue(){ // it is not function 
//         return this.discount;
//     }
//     set setDiscountValue(value){ // it is not function
//         return this.discount = value;
//     }
//     discountValue(){
//         return (this.price*this.discount)/100;
//     }
// }

// let chair = new Product1('chair',499,10,"C15");
// console.log(chair.discountValue()); // 49.9

// // setter and getter
// console.log(chair.getDiscountValue); //10
// chair.setDiscountValue = 15
// console.log(chair.getDiscountValue); //15

// sub classes
class Product {
    constructor(itemName){
        this.itemName =itemName;   
    }

    getItemName(){
        return this.itemName + ' is a product';
    }
}

class Furniture extends Product {
    constructor(itemName){
        super(itemName); // super function calls its parent class constructor
    }

    getItemName(){
        return this.itemName + " is a furniture";
    }
}

let pencil = new Product("pencil", 40,5,'P10'); //'pencil is a product'
let chair = new Furniture('chair',499,10,"C15"); // 'chair is a furniture'