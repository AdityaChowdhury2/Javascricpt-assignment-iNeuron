/*1. Are Higher Order functions and Call back functions the same ? If not, briefly explain about both functions.*/
/*----------Answer----------*/
/* No higher order functions are not same as Call back functions. Because from definition we know High Order Functions are those functions that take another function as argument.
And Call back functions are those functions that are passed to another function as argument.
as Example we can say - function higherOrderFunction(callbackFunction,...){};
*/
/*2. Is filter a Higher Order function in Javascript ? If yes, why ?*/
/*----------Answer----------*/
/* Yes filter is a higher order function. Because filter takes another callback function as an argument */
const anArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log(anArray.filter((val) => val % 2 === 0));
/*3. Give an example of a Higher Order function and a call back function used in the same program. */
/*----------Answer----------*/
const higherOrderFunction = (callback) => {
	let message = "This is a message from HOF";
	callback(message);
};

const callbackFunction = (message) => {
	console.log(message);
};

higherOrderFunction(callbackFunction);
/* Carefully check the example below:
a) What will be the output of this program ?
b) Which function is a Higher Order function here ?
const names = ["John", "Tina", "Kale", "Max"];
function useFunction(arr, fn) {
	for (let i = 0; i < arr.length; i++) {
		fn(arr[i]);
	}
}
function argFn(name) {
	console.log("Hello " + name);
}
useFunction(names, argFn);*/
/*----------Answer----------*/
/*a) Hello John
Hello Tina
Hello Kale
Hello Max*/
/*b) useFunction takes an array and a function as an argument so we can say useFunction is an Higher Order Function*/
