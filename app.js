// *******************part 2*******************

// nesting

/*let password ="abhi";

if(password.length>=6){
    if(password.indexOf(" ")=== -1){
        console.log('Valid Password')
    }
    else{
        console.log('password is long enough but it contain space')
    }
}
else{
    console.log('Invalid password')
} */

/*
operator precedence 
 ! && || 
*/

/*
// switch statement
let day = 8;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("uesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day")
        
}
*/

/*
***********************
// ternary operator 
***********************

//condition ? expIfTrue :expIfFalse

let num = 7;
if(num ===7){
    console.log('yay!')
}
else{
    console.log('ooh!')
}

// or

num === 7 ? console.log('yay!') : console.log('ooh!');

let status = "online";
let color =  status === "offline" ? "red" :"green";
*/

// ******************************ARRAYS*******************************

/*
let shoppingList = ['cereal','cheese','ice'];

shoppingList[2]= 'milk';
shoppingList now is
(3) ['cereal', 'cheese', 'milk']

shoppingList[shoppingList.length]= 'ice cream'
shoppingList now is 
(4) ['cereal', 'cheese', 'milk', 'ice cream']


let myCollection = [12,'dog',null, true,NaN] // mixed array

myCollection.length // 5

myCollection[myCollection.length -4] //'dog'
*/

// **************objects***************************

/*
Objects are collection of properties.
properties are a key-value pair 
rater than accessing data using an index, we use custom keys .*/

/*const fitbitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutThisWeek: '5 to7',
    avgGoodSleep: '2:13'
}

const numbers = {
    100: 'one hundred',
    16: 'sixteen'
    
};

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
}
let mystryColor = 'yellow';

const userReview = {};
userReview.mrSmith =3.5;
userReview['queenBee'] = 5;
userReview.mrSmith += 2;
userReview['queenBee']++;
*/

/*const students = {
    firstName: 'David',
    lastName: 'Jones',
    strengts: ['music','art'],
    exams: {
        midterm: 92,
        final: 88
    }
}
const avg = (students.exams.midterm + student.exams.final) / 2
*/
/*
const myStudents =[
    {
        firstName:'henery',
        grades: 86
    },
    {
        firstName:'jhon',
        grades: 97
    },
    {
        firstName:'wills',
        grades: 74
    }
    
]
for(i=0;i< myStudents.length;i++){
    let student = myStudents[i];
    console.log(`${student.firstName} scored ${student.grades}`)
}
*/
/*
const target = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);
while(guess!== target){
    console.log(`target: ${target} guess: ${guess}`);
    guess = Math.floor(Math.random()*10);
}
console.log(`target: ${target} guess: ${guess}`);
*/
/*
const target = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);
while(true){
    if(guess == target){ 
    break;
    }
    console.log(`target: ${target} guess: ${guess}`);
    guess = Math.floor(Math.random()*10);
}
console.log(`target: ${target} guess: ${guess}`);
*/
/*
let subreddits = ['soccer','popheads','cringe','books'];
for(let sub of subreddits){
    console.log(sub);
}

for(let char of "alksdvnklvskjc"){
    console.log(char);
}
*/
/*
const magicSquare = [[2,7,6,],[9,5,1],[4,3,8]];
for(let i =0; i < magicSquare.length;i++){
    let row = magicSquare[i];
    // console.log(magicSquare[i]);
    let sum =0;
    for(let j=0;j<row.length;j++){
        sum = sum + row[j];
    }
    console.log(`${row} summed = ${sum}`);
}

for(let row of magicSquare){
    let sum = 0;
    for(let num of row){
        sum = sum + num;
    }
    console.log(`${row} summed = ${sum}`);
}
*/

/*
// for...of in objects
const movieReviews = {
    arrival: 9.5,
    alien: 9,
    amelie: 8,
    'in bruges':9,
    amadeus :10,
    'kill bill':8,
};

for(let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
}
let ratings = Object.values(movieReviews);
let r;
let total = 0;
for(r of ratings){
    total = total + r;

}
let avg = total/ratings.length;
console.log(avg);
*/
/*
// for..in loop -- it's mostly use for object
const movieReviews = {
    arrival: 9.5,
    alien: 9,
    amelie: 8,
    'in bruges':9,
    amadeus :10,
    'kill bill':8
}
for(let movie in movieReviews){
    console.log(movie);
    console.log(movieReviews[movie]);
};
*/
/*
function rollDice(){
    let roll = Math.floor(Math.random()*6+1);
    console.log(roll);
}

function throwDice(){
    rollDice();
    rollDice();
    rollDice();
}
*/

/*
function greet(nickname){
    console.log(`hi ${nickname}`);
    // console.log(nickname);
}

function divide(x,y){
    console.log(x/y);

}
*/
/*
arr = ['pink','magenta','yellow','purple'];
function containPurple(arr){
    for(let color of arr){
        if(color === 'purple' || color === 'magenta'){
        return true;
        }
    }
    return false;
}
*/

// function isValidPassword(password, userName) {
//     let charecter = "~@#$%^&*/;
//     if (password.length < 8 ||
//         password.indexOf(' ') !== -1 ||
//         password.indexOf(userName) !== -1 ||
//         !password.indexOf(charecter) )

//     {
//         return false;
//     }
//     return true;
// }
/*
const arr = [];
function avg(arr){
    let sum = 0;
    for(let nums of arr){
        sum = sum + nums;   
        
    }
    let res = sum/ arr.length;
    return res;
}
*/
/*
function isPanagram(sentence){
    let lowercased = sentence.toLowerCase();
    for(let char of "abcdefghijklmnopqrstuvwxyz"){
        if(lowercased.indexOf(char)===-1)
        return false;
    }
    return true;
}
// or
function isPanagram(sentence){
    let lowercased = sentence.toLowerCase();
    for(let char of "abcdefghijklmnopqrstuvwxyz"){
        if(!lowercased.includes(char)){ 
        return false;
        }
    }
    return true;
}
*/
/*
function getCard(){
    const values =['2','3','4','5','6','7','8','9','10','J','K','Q','A'];
    const i = Math.floor(Math.random()* values.length);
    const value = values[i];
    const suits = ['clubs','spades','hearts','diamonds'];
    const j =Math.floor(Math.random()* suits.length);
    const suit = suits[j]
    return {value : value ,suit : suit};
}
*/
/*
function outer(){
    let movie = 'amendues';
    function inner(){
        console.log(movie.toUpperCase());
    
    }
    inner();
}
*/
// function add(x,y){
//     return x+y;
// }

// function expression
// const sum = function (x,y){
//     return x+y;
// }
/*
const add = function (x,y){
    return x+y;
}
const subtract = function (x,y){
    return x-y;
}
const multiply = function (x,y){
    return x*y;
}
const divide = function (x,y){
    return x/y;
}
const operations = [ add,subtract,multiply,divide];
*/
//**************************** */
// ***Higer order functions******
//**************************** */

/*        
function call(f){
    f();
    f();
    f();
    f();
} 

function cry(){
    console.log("HOO UOO i am very sad!")
}
function rage(){
    console.log("I hate everything!")
}

function pickOne(f1,f2){
    let pick = Math.random();
    console.log(pick);
    if(pick <= 0.5){
        return f1();
    }
    else{
        return f2();
    }
}
*/
/*
function multiplyBy(num){
    return function(x){
        return x * num;
    }
}
const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

function inBetweenFunc(min,max){
    return function(num){
        if (num> min && num <= max){
            return true;
        }
        else {
            return false;
        }
    }
}

const isChild = inBetweenFunc(0,18);
const isGoodWeather = inBetweenFunc(18,24)
*/
/*
function grumpus(){
    alert('GAAH GO AWAY!')
}
setTimeout(function(){
    alert('Welcome!')
},5000);

const btn = document.querySelector('button');
btn.addEventListener("click",function(){
    alert('Why did you click me?')
})
*/
/*
**************************
// call back method
**************************

const numbers = [10,20,30,40,50,60];

numbers.forEach(function(i,id){
    console.log(id,i * 2);
}); 

or
function double(i){
    console.log(i*2);
}
numbers.forEach(double);
or
for(let i of numbers){
    console.log(i*2);
}
*/

/*
// map callback
const numbers = [20,21,22,23,24,25,26,27,28];
const words = ['asap','byob','rsvp','diy'];

const numDetails = numbers.map(function(i){
    if(i % 2 === 0){
    return{
    value : i,
    isEven: true
    }
    }
    else{
    return {
    value : i,
    isEven : false
    }
    }
})

let readable =words.map(function(word){
   return word.toUpperCase().split('').join('.')
})
*/
/*
const square = function (x){
    return x * x;
}
//or Arrow function
const square = (x)=>{
    return x * x;
}
const add = (x,y)=> {
    return x+y;
}
*/
/*
const square0 = function (x){
    return x * x;
}
//or
const square1 = (x)=>{
    return x * x;
}
// or
const square2 = (x) => x*x;  // implicit return with arrow function

const arr = [1,2,3,4,5,6,7,8,9];

const double1= arr.map(function(x){
    return x*2;
})
//or
double2= arr.map((x)=>x*2); // implicit return with arrow function
*/
/*
let movies = [
    'The fantastic Mr. fox',
    'Mr. and Mrs. smith',
    'Mrs. doubtfire',
    'Mr. deeds'
]

const finder1 = movies.find((movie) => {
    return movie.includes('Mrs');
})

const finder2 = movies.find(movie => movie.indexOf('Mrs.')=== 0);
*/
/*
const nums = [34,35,67,54,109,102,32,9];

const odd= nums.filter(n => n % 2 === 1);
const bigNum = nums.filter(n => n>50);
*/
/*
const words = ["Dog",'Dig','bag','big','pag'];

const all3Letter = words.every((word) => word.length ===3);
// const lastLetG = words.every(letter => letter[letter.length -1] === "g");
//or

const lastLetG= words.every(function(word){
    const last = word.length - 1;
    return word[last] === 'g';
});

const wordStartWithD = words.some(word => word[0].toLowerCase() === 'd');
const allStartWithD = words.every(word => word[0].toLowerCase() === 'd');
*/
/*
const prices = [400.5,3000,99.99,35.99,12.00,9500];

const badSort = prices.slice().sort();
const ascSort = prices.slice().sort((a,b) => a-b);
const desSort = prices.slice().sort((a,b) => b-a);

const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

const RatingOrder = books.sort((a,b) => a.rating -b.rating);
*/
/*
const arr = [2,3,4,5,6,7,8];

const arrMult =  arr.reduce((accumulater, currentValue) => {
    return accumulater * currentValue;
})
const arrSum =  arr.reduce((accumulater, currentValue) => {
    return accumulater + currentValue;
}, 1) // we can also give the initial value by putting comma after curly braces.

const grades = [87,65,76,99,52,89,96,77];

const maxGrade = grades.reduce((max,currVal) => {
    if(currVal > max){
        return currVal;
    }
    else{
        return max;
    }
})
// or 
const maxGrade = grades.reduce((max,currVal) => {
    return Math.max(max,currVal)
})
const minGrade = grades.reduce((min,currVal) => {
    if(currVal < min){
        return currVal;
    }
    else{
        return min;
    }
})

const votes = ['y','y','n','y','y','n', 'n','n','y','y','n','y','y','n','n'];
const results = votes.reduce((tally,val) => {
    if(tally[val]){
        tally[val]++;
    } else{
        tally[val] =1;
    }
    return tally;
}, {})
*/

// sec-11 JS
/*
function multiply(x,y){
    if (typeof y === 'undefined'){
        y=1;
    }
    return x*y;
}
// or
function multiply1(x,y=1){
    return x*y;
}

const blah = (x,y = [1,2,3]) => {
    console.log(x,y);
}
*/
/*
function giveMeFour(a,b,c,d){
    console.log(1,a);
    console.log(2,b);
    console.log(3,c);
    console.log(4,d);
}

const color = ['green','yellow','red','blue'];

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods]
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish", "giant african snail", "banana slug", "variable neon slug"]

const inverts = [...cnidaria, ...gastropods, ...cephalopods]
//["fire coral", "moon jelly", "giant african snail", "banana slug", "variable neon slug", "dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const cephCopy = [...cephalopods];
//["dumbo octopus", "humboldt squid", "flamboyant cuttlefish"]

const feline = {
    legs : 4,
    family : 'Felidae'
};

const canine = {
    family: 'Caniae',
    furry : true,
    legs : 4
};

const dog = {
    ...canine,
    isPet : true,
    adorable : true 
}

const catDog = {
    ...canine,
    ...feline 
}
*/
/*
const raceResults = [
    'Eliud Kipchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu',
    'Jared Ward'
  ];
  
  // The old way:
  // const gold = raceResults[0]
  // const silver = raceResults[1]
  // const bronze = raceResults[2]
  
  // Using Destructuring:
  const [gold, silver, bronze] = raceResults;
  gold; //'Eliud Kipchoge'
  silver; //'Feyisa Lelisa'
  bronze; //'Galen Rupp'
  
  const [first, , , fourth] = raceResults;
  first; //'Eliud Kipchoge'
  fourth; //'Ghirmay Ghebreslassie'
  
  const [winner, ...others] = raceResults;
  winner; //'Eliud Kipchoge'
  others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]

  const runner = {
    first : "Eliud",
    last : "Kipchoge",
    country : "Kenya",
    title : "Elder of the Order of the golden Heart of Kenya"
}

//const { first,last } = runner;
// first 'Eliud' last 'Kipchoge'

const { country : nation} = runner;
// country reference error
// nation "Kenya"

const { first,last,...other } = runner;
// other {country: 'Kenya', title: 'Elder of the Order of the golden Heart of Kenya'}

const results = [{
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
]
// NESTED DESTRUCTURING
const [{ first: goldWinner}, { country}] = results;
goldWinner; //"Eliud"
country; //"Ethiopia"


// Destructuring Parameter

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
  }
  
  // Rather than destructuring INSIDE the function body
  // function print(person) {
  //   const {
  //     first,
  //     last,
  //     title
  //   } = person;
  //   console.log(`${first} ${last}, ${title}`)
  // }
  
  // We can unpack the values we want right in the parameter list:
  function print({
    first,
    last,
    title
  }) {
    console.log(`${first} ${last}, ${title}`)
  }
  
  const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json',
]
  
  // Also works with array parameters:
  function parseResponse([protocol, statusCode, contentType]) {
    console.log(`Status: ${statusCode}`)
}
*/
/*
const math = {
    arr : [2,4,5,8,3,4,7],
    add : function (x,y){
        return x+y;
    },
    multiply : (x,y) =>  x*y
}
*/
/*
function sayHi(){
    console.log("Hi");
    // this refers to the window (global scope object in the browser)
    console.log(this);
}

const person ={
    first : "Yogesh",
    last: "Vishwakarma",
    nickName : 'Yogi',
    // here this is refers other property and method to this object.
    fullName : function(){
        console.log(`${this.first} ${this.last}`)
    },
    printBio :function(){
        const fullName = this.fullName();
        console.log(`${fullName} is a person`);
    }
}
*/

// DOM (Document Object Model)

// const allLi = document.querySelectorAll("li");

// for(let li of allLi){
//     li.innerText = "We are champions";
//     li.innerHTML = "We are <b>Champions!!</b>"
// }

// const h1 = document.querySelector("h1");
// h1.style.color = "teal";

// const p = document.querySelector('#main');
// p.style.backgroundColor = "aqua";
// p.style.fontSize = "20px";

// const allLi = document.querySelectorAll("li");
// const colors = ['red','yellow','green','blue','teal','purple'];
// wrong way
// for( let li of allLi){
//     let i;
//     let idx = colors[i];
//     li.style.color = idx;
// }
// right way
// allLi.forEach(function(li,i){
//     li.style.color = colors[i];
// })

/*
const h1 = document.querySelector("h1");
const compStyle= getComputedStyle(h1);
//console.log(compStyle.color); // rgb(0, 0, 255)
console.log(compStyle.color) // rgb(210, 105, 30) when we hover the cursur on h1.
*/
// // creating classList
// const todo = document.querySelector('#todos, .todo');
// todo.classList.toggle('done');
/*


// creating element
const newh2 = document.createElement('h2');
newh2.innerText ="I like veggies";
newh2.classList.add('special');
const section = document.querySelector('section');
section.appendChild(newh2);

// Make a new empty img element:
const newImg = document.createElement('img');
// Add a src:
newImg.src = 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80';
// Change its width:
newImg.style.width = "300px";
//Add it to the end of the body:
document.body.appendChild(newImg);


// Create a new anchor tag
const newLink = document.createElement('a');
// Set its innerText:
newLink.innerText = 'Mr. Bubz Video! CLICK MEEE';
// Set its src:
newLink.href = 'https://www.youtube.com/watch?v=QQNL83fhWJU';
// Select the first paragraph:
const firstP = document.querySelector('p');
// Add the link as a child of the paragraph:
firstP.appendChild(newLink);



const parentUL = document.querySelector('ul');
const newLI = document.createElement('li');
newLI.innerText = 'I AM A NEW LIST ITEM!';

//prepend will add newLI as the FIRST child of parentUL
parentUL.prepend(newLI) //Doesn't work in IE!

//We can also insert something BEFORE another element, using insertBefore.
// First, select the element to insert before:
const targetLI = document.querySelectorAll('li.todo')[2] //3rd li with class of 'todo'
// To insert our new LI before targetLI...
//parent.insertBefore(what to insert, where to insert)
parentUL.insertBefore(newLI, targetLI);


// USING removeChild()


//Select the element you want to remove;
const removeMe = document.querySelector('.special')
//We call removeChild() on the parent element and pass in the element we want to remove:
removeMe.parentElement.removeChild(removeMe)

// USING THE NEWER REMOVE() METHOD - NO INTERNET EXPLORER SUPPORT!
//Select the H1
const h1 = document.querySelector('h1');
h1.remove(); //REMOVE IT!
*/
