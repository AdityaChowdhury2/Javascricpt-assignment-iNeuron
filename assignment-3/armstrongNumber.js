const checkArmstrong = (number) => {
    const temp = number;
    let sum = 0;
    while (number > 0) {

        let rem = number % 10;
        sum = sum + (rem * rem * rem)
        number = parseInt(number / 10);
    }
    if (sum === temp) {
        return 'Armstrong'
    }
    else {
        return "Not Armstrong"
    }
}
console.log(checkArmstrong(407));
console.log(checkArmstrong(405));