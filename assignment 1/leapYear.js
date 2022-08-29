const checkYear = (year) => {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
const year = 2304;
console.log(checkYear(year) ? + year + ' is leap year ' : year + ' is not a leap year');