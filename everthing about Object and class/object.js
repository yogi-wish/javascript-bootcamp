/*
//object(it is basically reference datatype)

const course = {
    lecture: 10, // variable in the object called property
    section : 3,
    title: "javascript",
    notes: { // nested object
        introduction: "Welcome to JS course",
        dom: "manipulation"
    },
    enroll(){  // functions in object is call method
        console.log("you are successfully enrolled")
    }
}

course.enroll(); // you are successfully enrolled
console.log(course.title) // javascript
console.log(course.lecture) // 10
console.log(course) // the whole object printed out

course.price =999; // Here we add another property in this object. So we can say that object are dynamic in nature we can add or delete property in run time. 
delete course.lecture; // we can delete the property of object.
*/
/*
// factory function (to increase the reusability of function). from the factory function we can make several object easily.
function createCourse(title){
    return {
        title: title,
        enroll(){
            console.log("you are successfully enrolled")
        }
    }
}

const course = createCourse('javascript');
course.enroll(); // you are successfully enrolled
console.log(course.title) // javascript

// ****constructor function****
function Course(title) {
    this.title = title;   //**here this pointed to the function we have created*
    this.enroll = function () {
        console.log("you are successfully enrolled");
    }
}
//** Here we see new keyword. New keyword points this keyword into a new empty object and return the value of this. so no need to write return in function.**
const course = new Course("javascript"); 

console.log(course.title) // javascript
course.enroll(); // you are successfully enrolled
*/

// create the item list for e-commerce site

// const product = {
//     itemName: "football",
//     price: 99,
//     discout: 20,
//     itemCode: "F30"
// }

// function createProduct(name,price,discount,itemCode){
//     return{
//     itemName :name,
//     price: price,
//     discount: discount,
//     itemCode : itemCode
//     }
// }

// const football = createProduct("football",99,20,'F30');
// const bat = createProduct('bat',399,40,"B25");

function Product(name, price, discount, itemCode) {
  this.name = name;
  this.price = price;
  this.discount = function () {
    return (price * discount) / 100;
  };
  this.itemCode = itemCode;
}

const football = new Product("football", 95, 20, "F30");
const mobile = new Product("MI", 6999, 10, "A2");
console.log(mobile.discount()); // 699.9
console.log(football);
