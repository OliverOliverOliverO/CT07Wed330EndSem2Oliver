let square;

function setup(){
    new Canvas(400, 600);
    world.gravity.y = 10;

    square = new Sprite(200, 300, 40, 40);

    // code to create a new square sprite
}

function draw(){
    background("grey");

    if(mouse.presses('left')){
        square.vel.y = -7;
    }
}