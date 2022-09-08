
let sum = 0;
let value = 1;
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        // console.log(i);
        sum += i;
    }
}
console.log(sum);