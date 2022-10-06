const pi = 3.1416;
class obj {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }
}
class Cylinder extends obj {
    constructor(radius, height) {
        super(radius, height);
    }
    getVolume() {
        return pi * this.radius * this.radius * this.height
    }
}
class Sphere extends obj {
    constructor(radius) {
        super(radius);
    }
    getVolume() {
        return 4 / 3 * pi * this.radius * this.radius * this.radius
    }
}
class Cone extends obj {
    constructor(radius, height) {
        super(radius, height)
    }
    getVolume() {
        return pi * this.radius * this.radius * this.height / 3
    }
}
let obj1 = new Cylinder(3, 6);
console.log(obj1.getVolume().toFixed(4))
let obj2 = new Sphere(3);
console.log(obj2.getVolume().toFixed(4))
let obj3 = new Cone(3, 7);
console.log(obj3.getVolume().toFixed(4))