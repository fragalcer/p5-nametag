

var customFont;

// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

function preload() {
    customFont = loadFont("century_gothic.ttf");
}

function setup() {
    // create the canvas
    createCanvas(800, 600);

    // Define colors
    c1 = color(20,232,100);
    c2 = color(1,126,213);

    noLoop();

    textSize(150);

    // Image Border
    strokeWeight(5);
    rect(0, 0, width, height);
}

function draw() {

    setGradient(50, 373, 700, 140, c2, c1, X_AXIS);

    // My name
    textFont(customFont);
    // text.noStroke();
    // text.fill(100);
    noStroke();
    text("Francisco", 55, height-50);

}

// save to downloads folder
function keyTyped() {
    if (key === " ") {
        saveCanvas("nametag.png");
    }
}

function setGradient(x, y, w, h, c1, c2, axis) {

    if (axis === X_AXIS) {  // Left to right gradient
        for (var i = x; i <= x+w; i++) {
            var inter = map(i, x, x+w, 0, 1);
            var c = lerpColor(c1, c2, inter);
            stroke(c);
            line(i, y, i, y+h);
        }
    }
}
