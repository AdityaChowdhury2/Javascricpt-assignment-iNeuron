const computeDash = (number) => {
    let numString = number.toString();
    let newString = '';
    for (let i = 0; i < numString.length; i++) {
        if (numString[i] % 2 === 0 && numString[i + 1] % 2 === 0) {
            newString += numString[i] + '-';
        }
        else {
            newString += numString[i];
        }
    }
    console.log(newString);
}
computeDash(1025468);
