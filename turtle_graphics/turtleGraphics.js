class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.moves = [[x, y]]; // array of all points walked along by the turtle
    this.direction = 0;
  }
  forward(steps) {
    let start = this.moves[this.moves.length - 1];
    let direction = this.direction;

    switch (direction) {
      case 0: // East --> +movement along x-axis
        for (let i = 0; i < steps; i++) {
          this.moves.push([start[0] + i + 1, start[1]]);
        }
        break;
      case 1: // South --> +movement along y-axis
        for (let j = 0; j < steps; j++) {
          this.moves.push([start[0], start[1] + j + 1]);
        }
        break;
      case 2: // West --> -movement along x-axis
        for (let k = 0; k < steps; k++) {
          this.moves.push([start[0] - k - 1, start[1]]);
        }
        break;
      case 3: // North --> -movement along y-axis
        for (let l = 0; l < steps; l++) {
          this.moves.push([start[0], start[1] - l - 1]);
        }
        break;
      default:
        // do nothing
        break;
    }
    return this;
  }
  right() {
    this.direction === 3 ? (this.direction = 0) : (this.direction += 1);
    return this;
  }
  left() {
    this.direction === 0 ? (this.direction = 3) : (this.direction -= 1);
    return this;
  }
  allPoints() {
    return this.moves;
  }
  print() {
    const coordinates = this.allPoints();

    const xValues = coordinates.map(a => a[0]);
    const xMax = Math.max(...xValues);

    const yValues = coordinates.map(b => b[1]);
    const yMax = Math.max(...yValues);

    const coordinatesStrings = coordinates.map(c => c.toString());

    let result = "";
    const buffer = 1; // 1 line buffer around outside so grid looks better

    for (let i = 0; i <= yMax + buffer; i++) {
      for (let j = 0; j <= xMax + buffer; j++) {
        if (coordinatesStrings.includes(`${j},${i}`)) {
          result += "\u25A0";
        } else {
          result += "\u25A1";
        }
      }
      result += "\n";
    }
    console.log(result);
  }
}

const flash = new Turtle(0, 4)
  .forward(3)
  .left()
  .forward(3)
  .right()
  .forward(5)
  .right()
  .forward(8)
  .right()
  .forward(5)
  .right()
  .forward(3)
  .left()
  .forward(3)
  .print();

// code to interpolate values between two points

// let coord1 = [3, 4];
// let coord2 = [7, 4];
// let coord3 = [3, 1];

// let startX = coord1[0];
// let endX = coord2[0];
// let valueY = coord1[1];

// console.log(startX);
// console.log(endX);
// console.log(valueY);

// const diffBetweenPoints = endX - startX + 1;
// console.log(diffBetweenPoints);
// let arrayX = Array.from(Array(diffBetweenPoints), (x, index) => startX + index);
// console.log(arrayX);

// let points = [];

// for (let i = 0; i < arrayX.length; i++) {
//   points.push([arrayX[i], valueY]);
// }

// console.log(points);
