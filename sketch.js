var drops = [];

var drop;
var umbrella;

var ground;

var bruce, bruceImg;

function preload(){
    
}

function setup(){
    createCanvas(800,400);
    drop = new Drop();
    umbrella = new Umbrella(200,300,50,100);

    ground = createSprite(200,400,400,20);

    bruce = createSprite(200,350,50,100);
}

function draw(){
    drop.display();
    umbrella.display();
    ground.display();
    Bruce.display();
    drawSprites();
}   

