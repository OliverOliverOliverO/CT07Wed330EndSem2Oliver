let bird
let background, birdImg;

function preload(){
    birdImg = loadImage('assets/bird.png');
    background = loadImage('assets/background.png');
}

function setup(){
    new Canvas(400, 600);
    bird = new Sprite(200, 300, 40, 40, 'static')
    bird.image = birdImg;
    // write code to create sprite and load bird image on sprite
}

function draw(){
    image(background, 0, 0, width, height);
}
