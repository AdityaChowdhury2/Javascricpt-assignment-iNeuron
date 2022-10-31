/*
Input a String S with two words, and replace first word with second word
and display the result -
Input: “Hii Boy” Output: “Boy Hii”
*/
let S = 'Hii Boy';
let arr = S.split(' ');
let revArray = arr.reverse();
let joinRevArray = revArray.join(' ');
// console.log(arr)
// console.log(revArray)
console.log(joinRevArray);