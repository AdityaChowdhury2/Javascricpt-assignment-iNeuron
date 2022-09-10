const fact = (num) => {
    if (num <= 1)
        return 1;
    else
        return num * fact(num - 1);
}
const checkSpecial = (num) => {
    const temp = num;
    let sum = 0;
    while (num > 0) {
        const rem = num % 10;
        sum = sum + fact(rem);
        num = parseInt(num / 10);
    }
    if (sum === temp) {
        console.log(temp + " is a Special Number")
    }
    else {
        console.log(temp + " is not a Special Number")
    }
}
checkSpecial(40585)
checkSpecial(4055)