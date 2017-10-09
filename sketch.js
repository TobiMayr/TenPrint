var x = 0;
var y = 0;
var spacing = 30;
var redC = 0;
var blueC = 255;

function setup() {
    createCanvas(800, 800);
    background(0);
    stroke(redC, blueC, 255);
}

function draw() {
    if(redC > 255){
        redC = 255;
    }
    if(blueC < 0){
        blueC = 0;
    }
    if(x > width){
        x = 0;
        y += spacing;
        stroke(redC += 255 / (height / spacing), blueC -= 255 / (height / spacing), 255);
    }

    if(random(1) < 0.5){
        line(x, y, x + spacing, y + spacing);
    }else{
        line(x, y + spacing, x + spacing, y);
    }

    x += spacing;
}