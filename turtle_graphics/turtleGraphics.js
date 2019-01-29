class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.moveHistory = [[x, y]];   
    this.direction = 0;
  }
  forward(steps) {

    let startLocation = this.moveHistory[this.moveHistory.length - 1];
    let direction = this.direction;

    switch (direction) {
      case 0: // East --> +movement along x-axis  
        this.moveHistory.push([startLocation[0] + steps, startLocation[1]]);
        console.log(this.moveHistory);
        break;
      case 1: // South --> +movement along y-axis
        this.moveHistory.push([startLocation[0], startLocation[1] + steps]);
        console.log(this.moveHistory);
        break;
      case 2: // West --> -movement along x-axis
        this.moveHistory.push([startLocation[0] - steps, startLocation[1]]);
        console.log(this.moveHistory)
        break;
      case 3: // North --> -movement along y-axis
        this.moveHistory.push([startLocation[0], startLocation[1] - steps]);
        console.log(this.moveHistory)
        break;
      default:
        // do nothing
        break;
    }
    return this;
  }
  right() {
    if (this.direction === 3) {
      this.direction = 0;
    } else {
      this.direction += 1;
    }
    return this;
  }
  left() {
    if (this.direction === 0) {
      this.direction = 3;
    } else {
      this.direction -= 1;
    }
    return this;
  }
  // allPoints() {
    // let points = [];
    // for ()
}


const flash = new Turtle(0, 0)
.forward(3)
.right().forward(4).right().forward(2)
// .forward(3);
console.log(flash)



let coord1 = [3, 4];
let coord2 = [7, 4];
let coord3 = [3, 1];

let startX = coord1[0];
let endX = coord2[0];
let valueY = coord1[1];

console.log(startX);
console.log(endX)
console.log(valueY)

const diffBetweenPoints = endX - startX + 1;
console.log(diffBetweenPoints)
let arrayX = Array.from(Array(diffBetweenPoints), (x, index) => startX + index);
console.log(arrayX);

let points = [];

for (let i = 0; i < arrayX.length; i++) {
  points.push([arrayX[i], valueY]);
}

console.log(points)

