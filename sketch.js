function setup() {
    createCanvas(800, 800);
    background(0);
}

var x = 0;
var y = 0;
var spacing = 10;
function draw() {
    stroke(255);
    if(random(1) < 0.9){
        line(x, y, x + spacing, y + spacing);
    }else{
        line(x, y + spacing, x + spacing, y);
    }

    x += spacing;
    if(x > width){
        x = 0;
        y += spacing;
    }
}