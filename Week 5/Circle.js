class Circle {
  static get PI() { return 3.14159;};
  radius;

  constructor(radius) {
    this.radius = radius;
    console.log('Called the constructor...');
  }

  getArea() {
    //return Circle.PI * this.radius * this.radius;
    return Circle
  }

  static getArea(radius) {
    return Circle.PI * radius * radius;
  }

  getDiameter() {
    return this.radius * 2;
  }

  getCircumference() {
    return 2 * Circle.PI * this.radius;
  }

  toString() {
    return `[Circle ( r = ${this.radius})] area: ${this.getArea()}`;
  }
}

let circle1 = new Circle(10);
//console.log(circle1);
//console.log(`The circle has a radius of ${circle1.radius}.`);

console.log(Circle.PI);

let circles = [ new Circle(1), new Circle(2), new Circle(3)];
for(let circle of circles) {
   // console.log(circle);
    console.log("Circle: " + circle);
    //console.log(`Radius: ${circle.radius}, Area: ${circle.getArea() }`);
    //console.log(`   Diameter: ${ circle.getDiameter() }, Circumference: ${ circle.getCircumference() }`);
}

console.log('----------------------')

for(let index = 10; index < 100; index+=2) {
    circles.push(new Circle(index));
}

circles.forEach((circle, index) => {
    console.log(`[${ index}] ${ circle}`);
});
console.log('----------------------------------');

console.log('Radius of 50 circle = ' + Circle.getArea(50));