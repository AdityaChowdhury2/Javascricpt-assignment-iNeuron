const num = 5;
let i = 2;
const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(31));