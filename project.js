// const warriorsGames = [{
//     awayTeam: {
//       team: 'Golden State',
//       points: 119,
//       isWinner: true
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 106,
//       isWinner: false
//     }
//   },
//   {
//     awayTeam: {
//       team: 'Golden State',
//       points: 105,
//       isWinner: false
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 127,
//       isWinner: true
//     }
//   },
//   {
//     homeTeam: {
//       team: 'Golden State',
//       points: 126,
//       isWinner: true
//     },
//     awayTeam: {
//       team: 'Houston',
//       points: 85,
//       isWinner: false
//     }
//   },
//   {
//     homeTeam: {
//       team: 'Golden State',
//       points: 92,
//       isWinner: false
//     },
//     awayTeam: {
//       team: 'Houston',
//       points: 95,
//       isWinner: true
//     }
//   },
//   {
//     awayTeam: {
//       team: 'Golden State',
//       points: 94,
//       isWinner: false
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 98,
//       isWinner: true
//     }
//   },
//   {
//     homeTeam: {
//       team: 'Golden State',
//       points: 115,
//       isWinner: true
//     },
//     awayTeam: {
//       team: 'Houston',
//       points: 86,
//       isWinner: false
//     }
//   },
//   {
//     awayTeam: {
//       team: 'Golden State',
//       points: 101,
//       isWinner: true
//     },
//     homeTeam: {
//       team: 'Houston',
//       points: 92,
//       isWinner: false
//     }
//   }
// ]

// const btn1 = document.querySelector("#clicker");

// btn1.onclick = function(){
//     alert('HI!! You clicked me')
// }
// btn1.ondblclick = function(){
//     alert('HI!! You clicked me twice')
// }

// btn1.onmouseover = () => {
//     alert('Are you howering')
// }
// if we add one event on any element and if we add second event on the same element the second event overide the first event so we will get only second event further as we seen above. to solve this problem we use addEventListener, in which we can as many as event possible to put on the element.
/*
const btn = document.querySelector('button');

btn.addEventListener('click',function(){
	alert('Clicked!!')
});
btn.addEventListener('mouseover',function(){
	btn.innerText= 'I\'m feeling lucky!';
});
btn.addEventListener('mouseout',() =>{
	btn.innerText = "click";
});

window.addEventListener('scroll',()=>{
	console.log('Stop Scrolling!!')
});
*/
/*
// The impossible button Demo!

const movingBtn = document.querySelector('#moving');

movingBtn.addEventListener('mouseover', function(){
	const h = Math.random()*window.innerHeight;
	const w = Math.random()*window.innerWidth;
	movingBtn.style.top =  `${h}px`;
	movingBtn.style.left = `${w}px`;
})

movingBtn.addEventListener('click',function(){
	movingBtn.innerText = "You Got Me!!";
	document.body.style.backgroundColor = "green";

})
*/
/*
// ***************events on mutiple element**********

const colors = ['red','orange','yellow','green','blue','purple','indigo','violet'];
const container = document.querySelector('#boxes');

for(let color of colors){
//console.log(color);
const box = document.createElement('div');
box.style.backgroundColor = color;
box.classList.add('box');
container.appendChild(box);
box.addEventListener('click',function(){
	document.body.style.backgroundColor = color;
})
}
*/

/*
****************************************
**********callback hell*****************
****************************************

const btn = document.querySelector('button');

// setTimeout(()=> {
//     btn.style.transform = `translate(100px)`;
//     setTimeout(() => {
//         btn.style.transform = `translate(200px)`;
//         setTimeout(() =>{
//             btn.style.transform = `translate(300px)`;
//             setTimeout(()=> {
//                 btn.style.transform = `translate(400px)`;
//             },1000)
//         },1000)
//     },1000)   
// },1000)

// modified
const moveX = (element, amount, delay, onSuccess, onFailure) => {
	const bodyBoundary = document.body.clientWidth;
	const elRight = element.getBoundingClientRect().right;
	const currLeft = element.getBoundingClientRect().left;
	if (elRight + amount > bodyBoundary) {
		onFailure();
	}
	else {
		setTimeout(() => {
			element.style.transform = `translate(${currLeft + amount}px)`;
			onSuccess();
		}, delay)
	}
}
moveX(btn, 100, 1000, () => {
	moveX(btn, 100, 1000, () => {
		moveX(btn, 100, 1000, () => {
			moveX(btn, 100, 1000); // 
		});
	});
});
*/
// **********************************************
// **************** PROMISES*********************
// ***********************************************
/*

const willGetDog = new Promise((resolved,rejected)=>{
	const rand = Math.random();
	if (rand<0.5){
		resolved();
	}
	else{
		rejected();
	}
})
willGetDog.then(()=>{
	console.log("yay! i get the dog")
});
willGetDog.catch(()=>{
	console.log("no dog")
});
*/

/*
// we can set the timeout to get result and we can make function to return promise. this is the real pattern to make promises
const makeDogPromise = () => {
	return new Promise((resolved, rejected) => {
		setTimeout(() => {
			const rand = Math.random();
			if (rand < 0.5) {
				resolved();
			}
			else {
				rejected();
			}
		}, 5000);
	});
}
makeDogPromise()
	.then(() => {
		console.log("yay! i get the dog")
	}).catch(() => {
		console.log("no dog")
	});
*/

/*
//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const pages = {
				'/users'        : [
					{ id: 1, username: 'Bilbo' },
					{ id: 5, username: 'Esmerelda' }
				],
				'/users/1'      : {
					id        : 1,
					username  : 'Bilbo',
					upvotes   : 360,
					city      : 'Lisbon',
					topPostId : 454321
				},
				'/users/5'      : {
					id       : 5,
					username : 'Esmerelda',
					upvotes  : 571,
					city     : 'Honolulu'
				},
				'/posts/454321' : {
					id    : 454321,
					title :
					'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
				},
				'/about'        : 'This is the about page!'
			};
			const data = pages[url];
			if (data) {
				resolve({ status: 200, data }); //resolve with a value!
			}
			else {
				reject({ status: 404 }); //reject with a value!
			}
		}, 1000);
	});
};

fakeRequest('/users')
	.then((res) => {
		console.log(res);
		const id = res.data[0].id;
		return fakeRequest(`/users/${id}`);
	})
	.then((res) => {
		console.log(res);
		const postId = res.data.topPostId;
		return fakeRequest(`/posts/${postId}`);
	})
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log('OH NO!', err);
	});

// ************************************************
// ATTEMPT 2 (deliberate error to illustrate CATCH)
// ************************************************
// fakeRequest('/users')
// 	.then((res) => {
// 		console.log(res);
// 		const id = res.data[0].id;
// 		return fakeRequest(`/useALSKDJrs/${id}`); //INVALID URL, CATCH WILL RUN!
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		const postId = res.data.topPostId;
// 		return fakeRequest(`/posts/${postId}`);
// 	})
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((err) => {
// 		console.log('OH NO!', err);
// 	});
*/

/*
// refactoring promise 
const moveX = (element, amount, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			}
			else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

const btn = document.querySelector('button');
moveX(btn, 100, 1000)
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.then(() => moveX(btn, 100, 1000))
	.catch(({ bodyBoundary, amount, elRight }) => {
		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
	});

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
// 		}
// 	}, delay);
// };

// LOOK AT THIS UGLY MESS!
// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );
*/

/*
**************************************
*************** AJAX *****************
**************************************
// Intro to AJAX aka Asyncronous Javascript And XML. But XML way to sending request is now older in these days. Currently we uses AJAJ aka Asyncronous Javascript And JSON. JSON stand for Java Script Object Notation. Json sending the http request in the 'object form' where each element is in double qoutes and string. XML use tag model but JSON use object model.

// *****************Using XMLHttpRequest ********************************
// function reqListener () {
//     console.log(this.responseText);
//   }
  
//   const req = new XMLHttpRequest();
//   req.addEventListener("load", reqListener);
//   req.open("GET", "http://www.example.org/example.txt");
//   req.send();
// *** The above code is use as reference because it is hard to remember so we copied it from the mdn docs*******

const myReq = new XMLHttpRequest();
myReq.addEventListener("load", function(){
	console.log("It Worked!!");
	// console.log(this.responseText); // here this will not give the actual javascript object.
	const data = JSON.parse(this.responseText); // here this will give the actual readable javascript object. in which we got the planet names.
	// console.log(data);
	for(let planet of data.results){ 
		console.log(planet.name); // here we loop over the object to print the planet name in the console.
	}
});
myReq.addEventListener("error",()=>{
	console.log("Error!!");
});
myReq.open("GET","https://swapi.dev/api/planets/");
myReq.send();
// console.log("Request Sent!!")

****************************************
// ********* XHR chaining(nested) XMLhttpRequest *************************************

// the below nested XHR request is really clunckey so for ease (fetch) will be used. 
const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function() {
	console.log('FIRST REQUEST WORKED!!!');
	const data = JSON.parse(this.responseText);
	const filmURL = data.results[0].films[0];
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function() {
		console.log('SECOND REQUEST WORKED!!!');
		const filmData = JSON.parse(this.responseText);
		console.log(filmData.title);
	});
	filmReq.addEventListener('error', function(e) {
		console.log('ERROR!!', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();
});
firstReq.addEventListener('error', (e) => {
	console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://swapi.co/api/planets/');
firstReq.send();
console.log('Request Sent!');
*/

//***********************************************************************
// *********************** fetch ***************************************
//***********************************************************************

// it is the newer and easy method to make request.
// it support promises.
/*
fetch('https://swapi.dev/api/planets/').then((response) => {
	if (!response.ok) {
		throw new Error(`status code: ${response.status}`);
	} else {
		response.json().then(function (data) {
			for (let planet of data.results) {
				console.log(planet.name);
			}
		});
	}
})
	// the fetch will only return rejected promise if there is network failure or data is unavailable to recieve. in each case response promise will be return with staus 404 which means not found but reject promise will not return. To run the catch we use "throw new error".

	.catch(function (rejected) {
		console.log("SOMTHING WENT WRONG WITH FETCH");
		console.log(rejected);
	});
*/
// ************** fetch chaining*********
/*
fetch('https://swapi.dev/api/planets/')
.then((response) => {
	if (!response.ok) {
		throw new Error(`status code: ${response.status}`)
	} else {
		
		return response.json();
	}
})
.then((data)=>{
	console.log('fatched all planets');
	const filmUrl= data.results[0].films[0];  
	// https://swapi.dev/api/films/1/ *this gives the api of the firstplanets,first film.*
	return fetch(filmUrl);
})
.then(function(response){
	if (!response.ok) {
		throw new Error(`status code: ${response.status}`)
	} else {
		
		return response.json();
	}
})
.then(function(data1){
	console.log("fetched first film,based of first planet")
	console.log(data1.title);
})
.catch(function (rejected) {
	console.log("SOMTHING WENT WRONG WITH FETCH");
	console.log(rejected);
});
*/

// ********** fetch refactoring**********
/*
const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

	return response.json();
};

const printPlanets = (data) => {
	console.log('Loaded 10 more planets...');
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
	return fetch(url);
};

fetchNextPlanets()
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(checkStatusAndParse)
	.then(printPlanets)
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH!');
		console.log(err);
	});
*/
/*
************************************
***************** Axios*************
************************************

// Axios is a external library and mostly use for http request in browser as well as in node. axios return a promise function. So to use it we have to add cdn script in our html file. 

axios.get('https://swapi.dev/api/planets/')
.then((res) =>{
	console.log(res.data);
})
.catch((err) =>{
	console.log(err);
});

// ********************************
// CHAINING REQUESTS USING AXIOS
// ********************************
const fetchNextPlanets = (url = 'https://swapi.dev/api/planets/') => {
	console.log(url);
	return axios.get(url);
};
const printPlanets = ({ data }) => {
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.catch((err) => {
		console.log('ERROR!!', err);
	});
*/

//****************************************
// ********async and await keyword********
//****************************************
// async keyword return a promise
/*
async function add(x,y){
	if(typeof x !== "number" || typeof y !== "number"){
		throw "x and y must be a number";
	}
   return x + y;
}
//or
function add(x,y){
	return new Promise(function(resolve,reject){
		if(typeof x !== "number" || typeof y !== "number"){
			reject("x and y must be a number");
		}
		else{
			resolve(x +y);
		}
	})
}
add('e',7)
.then(function(val){
	console.log(`Promise resolved with ${val}`); // Promise resolved with 13
})
.catch(function(err){
	console.log(err); // x and y must be a number
	console.log("error!!") // error
});
*/

// **Await** is a reserve keyword. It always used with async keyword. If we add await it will not move further until the promise is resolve. So it make code much easier and clean(syntactical sugar hai).
/*
function getPlanets(){
	return axios.get("https://swapi.dev/api/planets/");
}
getPlanets()
.then(function(res){
	console.log(res.data);
}).catch(function(err){
	console.log(err);
})
getPlanets();

//or

async function getPlanets(){
	const res = await axios.get("https://swapi.dev/api/planetsdr/");
	console.log(res.data);
}
getPlanets();

// In above request we are only considering the resolveed promise what if it rejected? So for this we use try and catch.
async function getPlanets(){
	try{
	const res = await axios.get("https://swapi.dev/api/planets/");
	console.log(res.data);
	} catch(err){
		console.log("In catch",err)
	}
}
getPlanets();
*/

// ****************************************
// ************multiple await************** // it make things easier what we have done earlier
/*
const moveX = function(element, amount, delay){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const bodyBoundary = document.body.clientWidth;
			const elRight = element.getBoundingClientRect().right;
			const currLeft = element.getBoundingClientRect().left;
			if (elRight + amount > bodyBoundary) {
				reject({ bodyBoundary, elRight, amount });
			}
			else {
				element.style.transform = `translateX(${currLeft + amount}px)`;
				resolve();
			}
		}, delay);
	});
};

const btn = document.querySelector('button');
async function animateRight(el, amt) {
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
	await moveX(el, amt, 1000);
}
animateRight(btn, 100).catch((err) => {
	console.log('Hit the right edge! Now Moving left!');
	animateRight(btn, -100);
});

// const btn = document.querySelector('button');
// moveX(btn, 100, 1000)
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.then(() => moveX(btn, 100, 1000))
// 	.catch(({ bodyBoundary, amount, elRight }) => {
// 		console.log(`Cannot Move! Body is ${bodyBoundary}px wide`);
// 		console.log(`Element is at ${elRight}px, ${amount}px is too large!`);
// 	});

//This function moves an element "amount" number of pixels after a delay.
//If the element will stay on screen, we move the element and call the onSuccess callback function
//If the element will move off screen, we do not move the element and instead call the onFailure callback
// const moveX = (element, amount, delay, onSuccess, onFailure) => {
// 	setTimeout(() => {
// 		const bodyBoundary = document.body.clientWidth;
// 		const elRight = element.getBoundingClientRect().right;
// 		const currLeft = element.getBoundingClientRect().left;
// 		if (elRight + amount > bodyBoundary) {
// 			onFailure();
// 		}
// 		else {
// 			element.style.transform = `translateX(${currLeft + amount}px)`;
// 			onSuccess();
// 		}
// 	}, delay);
// };

// LOOK AT THIS UGLY MESS!
// moveX(
// 	btn,
// 	300,
// 	1000,
// 	() => {
// 		//success callback
// 		moveX(
// 			btn,
// 			300,
// 			1000,
// 			() => {
// 				//success callback
// 				moveX(
// 					btn,
// 					300,
// 					1000,
// 					() => {
// 						//success callback
// 						moveX(
// 							btn,
// 							300,
// 							1000,
// 							() => {
// 								//success callback
// 								moveX(
// 									btn,
// 									300,
// 									1000,
// 									() => {
// 										//success callback
// 										alert('YOU HAVE A WIDE SCREEN!');
// 									},
// 									() => {
// 										//failure callback
// 										alert('CANNOT MOVE FURTHER!');
// 									}
// 								);
// 							},
// 							() => {
// 								//failure callback
// 								alert('CANNOT MOVE FURTHER!');
// 							}
// 						);
// 					},
// 					() => {
// 						//failure callback
// 						alert('CANNOT MOVE FURTHER!');
// 					}
// 				);
// 			},
// 			() => {
// 				//failure callback
// 				alert('CANNOT MOVE FURTHER!');
// 			}
// 		);
// 	},
// 	() => {
// 		//failure callback
// 		alert('CANNOT MOVE FURTHER!');
// 	}
// );
*/

// *************parallel vs. sequential request*****************
// sequential request
// async function get3Pokemon(){
// 	const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
// 	const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
// 	const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
// 	console.log(poke1.data);
// 	console.log(poke2.data);
// 	console.log(poke3.data);
// }
// get3Pokemon();

// parallel request (faster)
// async function get3Pokemon(){
// 	const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
// 	const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
// 	const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
// 	const poke1 =await prom1;
// 	const poke2 =await prom2;
// 	const poke3 =await prom3;
// 	console.log(poke1.data);
// 	console.log(poke2.data);
// 	console.log(poke3.data);
// }
// get3Pokemon();

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//     // if (document.body.style.backgroundColor !== "color") {
//     // 	reject();
//     // 	console.log("not a color");
//     // }
//   });
// }

// async function lightShow(){
// 	await changeColor("teal",1000);
// 	await changeColor("pink",1000);
// 	await changeColor("blue",1000);
// 	await changeColor("red",1000);
// }

// async function lightShow(){
// 	const p1 =changeColor("teal",1000);
// 	const p2 =changeColor("pink",1000);
// 	const p3 =changeColor("blue",1000);
// 	const p4 =changeColor("red",1000);
// 	await p1;
// 	await p2;
// 	await p3;
// 	await p4;
// }
// lightShow();

//********* promise all*********
/*
async function get3Pokemon(){
	const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
	const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
	const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
	const result = await Promise.all([prom1,prom2,prom3]);
	// console.log(result[1].data); // return prom2
	printPokemon(result);

}
function printPokemon(result){
	for(let pokemon of result){
		console.log(pokemon.data.name); // bulbasaur ivysaur venusaur
	}
}
get3Pokemon();
*/

//******************************** */
//***********OOPS*****************/
//******************************** */

// **************prototype******
// Here we can create our own method with the help of prototype.
String.prototype.yell = function () {
  return `OMG!!! ${this.toUpperCase()}!!!!`;
};
// 'hello'.yell()
// 'OMG!!! HELLO!!!!'

Array.prototype.pop = function () {
  return "I will not pop the element";
};
// [2,5,6].pop()
// 'I will not pop the element'

//************constructor******* */
