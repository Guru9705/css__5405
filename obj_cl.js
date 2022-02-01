class Circle{
    constructor(radius) {
        this.radius=radius
    }
    getCircumference() {
        return (2*(22/7)*this.radius)
    }
}

class Calculator{
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    divide() {
        return (this.a/this.b)
    }

    multiply() {
        return (this.a*this.b)
    }
}

let c1 = new Circle(7);
console.log(c1.getCircumference());

let c2 = new Calculator(3, 4);
console.log(c2.add())


