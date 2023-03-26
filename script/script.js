class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get radiusResult() {
        return this.radius;
    }
    set radiusResult(radiusResult) {
        this.radius;
    }
    get diameterResult() {
        return this.radius * 2
    }
    area() {
        alert(Math.round(Math.PI * `${this.radius**2}`));
    }
    length() {
        alert(Math.round(2 * Math.PI * `${this.radius}`));
    }
}
let question = +prompt(`Укажи радиус`)
new Circle(question).area();
new Circle(question).length();
let circus = new Circle(question);
console.log(circus);