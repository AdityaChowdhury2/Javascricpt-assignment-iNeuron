/*
Input a String S, and check its length and if the length is greater than 4,
truncate the input String and output the result -
Input: Ice Output: Ice
Input:Icecream Output:Icec…
*/
let S = 'IceCream';
if (S.length > 4) {
    S = S.substring(0, 4);
    console.log(S);
}
else {
    console.log(S);
}
