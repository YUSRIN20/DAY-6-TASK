class circle {
  constructor(radius = 1.0, color = "Red") {
    this.radius = radius;
    this.color = color;
  }

  get getRadius() {
    return this.radius;
  }

  set setRadius(value) {
    this.radius = value;
    console.log("Radius Set Successfully");
  }

  get getColor() {
    return this.color;
  }

  set setColor(color) {
    this.color = color;
    console.log("Color Set Successfully");
  }

  get toString() {
    return `"Circle[radius=${this.radius},color=${this.color}]"`;
  }

  get getArea() {
    return Math.pow(this.radius, 2) * 3.14;
  }

  get getCircumference() {
    return (2 * this.radius * 3.14).toFixed(2);
  }
}

const mycircle = new circle (8,"Blue")

console.log(mycircle)

// using get and set method below =>
mycircle.setRadius = 10
console.log(mycircle.getRadius)
mycircle.setColor="Green"
console.log(mycircle.getColor)
console.log(mycircle.toString)
console.log(mycircle.getArea)
console.log(mycircle.getCircumference)
console.log(mycircle)
