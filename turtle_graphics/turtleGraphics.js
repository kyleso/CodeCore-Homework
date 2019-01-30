class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.moves = [[x, y]];
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
  allPoints() {
    return this.moves;
  }
  print() {
    const xValues = this.moves.map(move => move[0]);
    const xMax = Math.max(...xValues);
   
    const yValues = this.moves.map(move => move[1]);
    const yMax = Math.max(...yValues);
    
    let moveStrings = [];
    for (let m = 0; m < this.moves.length; m++) {
      moveStrings.push(this.moves[m].toString())
    }
      
    let result = '';

    for (let i = 0; i <= yMax + 1; i++) {
      for (let j = 0; j <= xMax + 1; j++) {
        if (moveStrings.includes(`${j},${i}`)) {
          result = result + '\u2588';
        } else {
          result = result + '\u25a1';
        }
      }
      result += '\n'
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
