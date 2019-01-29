class Turtle {
  constructor(x, y) {
    this.x = x,
    this.y = y
    this.start = [x, y];
    this.moveHistory = [this.start];
    this.direction = 0;
  }
  forward(steps) {
    
    let startLocation = [this.x, this.y];
    let currentLocation = [this.x, this.y];
    
    switch(direction) {
      case 0: // East
        for (let i = currentLocation[0]; i < steps; i++) {
          this.moveHistory.push()
        }
        this.moveHistory.push([x, y]);
        break;
      case 1: // South
        y += steps;
        this.moveHistory.push([x, y]);
        break;
      case 2: // West
        x -= steps;
        this.moveHistory.push([x, y]);
        break;
      case 3: // North
        y -= steps;
        this.moveHistory.push([x, y]);
        break;
      default:
        // do nothing
        break;
    }
  }
  right() {
    if (this.direction === 3) {
      this.direction = 0;
    }
    this.direction += 1;
  }
  left() {
    if (this.direction === 0) {
      this.direction = 3;
    }
    this.direction -= 1;
  }
  allPoints() {
    return this.moveHistory;
  }
  print(points) {
    
    let points = this.allPoints;
    let xAxisArray = [];
    let yAxisArray = [];

    for (let i = 0; i < points.length; i++) {
      xAxisArray.push(points[i][0]);
      yAxisArray.push(points[i][1]);
    }
    let maxGridWidth = Math.max(...xAxisArray) + 1;
    let maxGridHeight = Math.max(...yAxisArray) + 1;
  }
}

