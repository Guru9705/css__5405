class Shape2D {
    constructor(side1, side2) {
        console.log("pa")
      this.area = side1 * side2;
    }
  }
  class Rectangle extends Shape2D {
      constructor(height, width) {
        console.log("rect")
      super(height, width);
    }
  }
  
  class Square extends Rectangle {
      constructor(side) {
        console.log("sq")
      super(side, side);
    }
  }
  
  

  
let s1 = new Square(3);
console.log(s1.area)