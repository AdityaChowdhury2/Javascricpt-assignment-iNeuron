/*
Input a String S with a word, and replace character “a” with “x” and
display the result -
Input: “apple” Output: “xpple”
*/
const string = 'apple';
const replacedString = string.replace(/a/g, "x");
console.log(replacedString);