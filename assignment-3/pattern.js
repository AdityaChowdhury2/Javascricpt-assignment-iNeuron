const height = 5;
let string = '';
let count = 1;

for (let i = 0; i < height; i++) {
    for (let j = 0; j < i; j++) {
        string += count + ' ';
        count++;
    }
    string += '\n';
}
console.log(string);