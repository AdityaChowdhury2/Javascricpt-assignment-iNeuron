class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area() {
        return "Area :- " + this.height * this.width
    }
}
class Square extends Rectangle {
    constructor(height) {
        super(height)
        this.width = height;
    }
}
const rectangle = new Rectangle(3, 5);
console.log(rectangle.area())
const square = new Square(4);
console.log(square.area());