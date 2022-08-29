const checkTriangle = (a, b, c) => {
    if (a === b && b === c) {
        console.log("Equilateral Triangle");
    }
    else if (a === b || b === c || a === c) {
        console.log('Isosceles Triangle');
    }
    else {
        console.log('Scalene Triangle');
    }
}
checkTriangle(20, 10, 10);