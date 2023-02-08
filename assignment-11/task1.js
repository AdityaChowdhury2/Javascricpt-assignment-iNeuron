/* Write a JavaScript program to take an array as input from the user and calculate the sum of numbers in odd places and the sum of numbers at even places.*/
const readline = require("readline-sync");

const numArray = [];
for (let i = 0; i < 5; i++)
	numArray.push(Number(readline.question("Please enter a number: ")));
// console.log(numArray);
let evenSum = 0;
let oddSum = 0;
// const numArray = [1, 2, 3, 4, 5];

for (let i = 0; i < numArray.length; i++) {
	if (i % 2 === 0) evenSum += numArray[i];
	else oddSum += numArray[i];
}
console.log(`Sum of Numbers at Odd Places ${oddSum}`);
console.log(`Sum of Numbers at Even Places ${evenSum}`);

console.log(
	`Difference between oddSum and evenSum is ${Math.abs(oddSum - evenSum)}`
);

console.log(
	`Number of elements in even places ${
		numArray.filter((value) => value % 2 === 0).length
	}`
);
console.log(
	`Number of elements in odd places ${
		numArray.filter((value) => value % 2 !== 0).length
	}`
);

console.log(
	`Average of all elements ${
		numArray.reduce((sum, value) => sum + value, 0) / numArray.length
	}`
);
const gcd = (a, b) => {
	let temp;
	while (b !== 0) {
		temp = b;
		b = a % b;
		a = temp;
	}
	return a;
};

console.log(`GCD of oddSum and evenSum: ${gcd(oddSum, evenSum)}`);
