/*
Write a Javascript function to test whether the first character of a string
is lowercase.
*/
let regex = /^[A-Z]/
const check1stChar = (string) => {
    if (regex.test(string)) {
        console.log("The first character of the string is not lowercase")
    }
    else {
        console.log("The first character of the string is lowercase")
    }
}
check1stChar("Aditya")