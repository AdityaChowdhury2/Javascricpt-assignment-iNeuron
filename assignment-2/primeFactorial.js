/*Write a program to find the factorial of all prime numbers between a
given range.Range will be passed as 2 values in the function
parameters.eg - if it is needed to find the values for numbers 1 - 100, then
function declaration can look like - function prime(1,100). */
const fact = (num) => {
    if (num <= 1)
        return 1;
    else
        return num * fact(num - 1);
}
const checkPrime = (num) => {
    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            return 0;
        }
    }
    return num;
}
const prime = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (i === 1) {
            continue;
        }
        if (checkPrime(i))
            console.log(fact(checkPrime(i)));
    }
}
prime(1, 11);