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