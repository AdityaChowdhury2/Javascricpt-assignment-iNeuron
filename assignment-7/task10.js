/*
Given a String S, achieve following tasks
a) Convert the String into upper case.
b) Convert only the first character to uppercase.
c) Convert the String into lower case.
d) Break the string into two halves and swap them.
e) Count the repeating characters.
f) Reverse the string
*/
const string = 'aditya';
console.log("Convert the String into upper case.")
console.log(string.toUpperCase());

console.log("Convert only the first character to uppercase.")
console.log(string.charAt(0).toUpperCase() + string.slice(1));

console.log("Convert the String into lower case.")
console.log(string.toLowerCase());

console.log("Break the string into two halves and swap them.")
let halfStringLength = string.length / 2
let firstHalf = string.slice(0, halfStringLength)
let secondHalf = string.slice(halfStringLength)
console.log(secondHalf.concat(firstHalf))

console.log("Count the repeating characters.")
let obj = {};
for (let i = 0; i < string.length; i++) {
    let l = string.charAt(i)
    obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
}
console.log(obj)

console.log("Reverse the string")
let arr = string.split('');
let revArray = arr.reverse();
let joinRevArray = revArray.join('');
console.log(joinRevArray)