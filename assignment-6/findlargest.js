const arr = [3, 45, 6, 7, 23, 5, 7, 8]
let temp = [];

const find_largest = (num) => {
    arr.sort((a, b) => b - a);
    // console.log(arr);
    console.log(arr[num - 1]);
}
find_largest(2);