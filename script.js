function setup() {
    createCanvas(500, 500);

    for (let i = 0; i < 28; i++) {
        let boxColor = color(random(256), random(256), random(256));
        boxes[i] = new Box(i + 1, boxColor);
}
}

function draw() {
    background(255);
}