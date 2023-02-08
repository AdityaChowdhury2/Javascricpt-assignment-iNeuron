const readline = require("readline-sync");

const numArray1 = [];
for (let i = 0; i < 5; i++)
	numArray1.push(Number(readline.question("Please enter a number: ")));
console.log(numArray1);
const numArray2 = [];
for (let i = 0; i < 5; i++)
	numArray2.push(Number(readline.question("Please enter a number: ")));
console.log(numArray2);

const check = (element) => {
	let count = 0;
	if (numArray1.find((num) => num === element) !== undefined) count++;
	if (numArray2.find((num) => num === element) !== undefined) count++;
	console.log(count);
};

check(4);
