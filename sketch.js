function setup() {
    // create the canvas
    createCanvas(800, 600);

    // make the text nice and big - adjust theSize parameter
    // to make *your* name fit nicely on the nametag
    textSize(150);

    // draw a border to help you see the size
    // this isn't compulsory (remove this code if you like)
    strokeWeight(5);
    rect(0, 0, width, height);
}

function draw() {
    // your cool nametag code goes here

    // replace my name with your name!
    text("Ben", 100, height-100);
}

// this function is here so that when you hit the spacebar, the current version
// of the nametag sketch will be saved to your downloads folder
function keyTyped() {
    if (key === " ") {
        saveCanvas("nametag.png");
    }
}
