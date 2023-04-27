function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < 28; i++) {
        let boxColor = color(random(256), random(256), random(256));
        boxes[i] = new Box(i + 1, boxColor);
}
}

function draw() {
    background(255);
    let numRows = ceil(sqrt(boxes.length)); 
    let numCols = ceil(boxes.length / numRows); 
    let xOffset = (width - numCols * 60) / 2; 
    let yOffset = (height - numRows * 60) / 2; 
    let index = 0;
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        if (index < boxes.length) {
          boxes[index].setPosition(xOffset + j * 60, yOffset + i * 60);
          boxes[index].display();
          index++;
        }
      }
    }
}

class Box {
    constructor(number, color) {
      this.number = number;
      this.color = color;
      this.size = 50;
      this.x = 0;
      this.y = 0;
    }
}

setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    fill(this.color);
    rect(this.x, this.y, this.size, this.size);
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.number, this.x + this.size/2, this.y + this.size/2);
  }
