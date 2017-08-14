

var customFont;
var myText;

// Constants
var X_AXIS = 1;
var greenColour, blueColour;

function preload() {
    customFont = loadFont("kust.ttf");
}

function setup() {
    // create the canvas
    createCanvas(800, 600);

    // Define colors
    greenColour = color(20,232,100);
    blueColour = color(1,126,213);

    noLoop();

    textSize(205);

    // Image Border
    strokeWeight(5);
    rect(0, 0, width, height);
}

function draw() {

    // lines left to right, top to bottom.
    for (var x1 = -800; x1 <= 800; x1 = x1+100) {
        stroke(random(255), random(255), random(255), random(75, 150));
        strokeWeight(62);
        push();
        line(x1, -15, x1 + 800, 615);
        pop();
    }

    //lines left to right, bottom to top.
    for (var x1 = 0; x1 <= 1600; x1 = x1+100) {
        stroke(random(255), random(255), random(255), random(75, 150));
        strokeWeight(62);
        push();
        line(x1, -15, x1 -800, 615);
        pop();
    }

    //vertical lines.
    for (var x1 = 0; x1 <= 800; x1 = x1+75) {
        stroke(random(255), random(255), random(255), random(75, 150));
        strokeWeight(50);
        push();
        line(x1, -15, x1, 615);
        pop();
    }


    setGradient(0, 410, 800, 140, blueColour, greenColour, X_AXIS);

    nameWriter();

}

// save to downloads folder
function keyTyped() {
    if (key === " ") {
        saveCanvas("nametag.png");
    }
}

// creates the gradient with parameters provided.
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

// writes the name in the Tag.
function nameWriter() {
    textFont(customFont);
    noStroke();
    fill(5,5,5);
    myText = text("Francisco", 5, height-50);
    myText.tint(255, 127);
}



