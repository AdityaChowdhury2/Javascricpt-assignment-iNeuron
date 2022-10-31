/*
Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that ?
*/
let str = "YES";
let regex = /yes/i;
if (regex.test(str)) {
    console.log("True");
}
else {
    console.log("false");
}