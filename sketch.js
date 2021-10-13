const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;

var drops = [];
var maxDrops=75;

var drop;
var umbrella;

var ground;

var thunder, thunderCreatedFrame, thunder1, thunder2, thunder3, thunder4;

var bruce, bruceImg;

function preload(){
    bruceImg = loadAnimation("Walking Frame/walking_1.png", "Walking Frame/walking_2.png", "Walking Frame/walking_3.png", 
            "Walking Frame/walking_4.png", "Walking Frame/walking_5.png", "Walking Frame/walking_6.png", "Walking Frame/walking_7.png", 
            "Walking Frame/walking_8.png");
            thunder1=loadImage("thunderbolt/1.png");
            thunder2=loadImage("thunderbolt/2.png");
            thunder3=loadImage("thunderbolt/3.png");
            thunder4=loadImage("thunderbolt/4.png");
}

function setup(){
    createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;
    drop = new Drop(200,100);
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,800), random(25,75)));
    }
    umbrella = new Umbrella(200,300);

    // ground = createSprite(200,400,400,20);

    bruce = createSprite(umbrella.body.position.x,umbrella.body.position.y,100,100);
    bruce.addAnimation("bruceImg", bruceImg);
    bruce.scale=0.3
}

function draw() {
    background("black");
    Engine.update(engine);
    drop.display();
    for(var i=0; i<drops.length; i++){
        drops[i].display();
        drops[i].update();
    }
    if(frameCount%75===0) {
        thunder=createSprite(random(25,600), 25);
        thunderCreatedFrame=frameCount;
        var rr=Math.round(random(1,4));
        switch(rr){
            case 1 : 
            thunder.addImage("thunder1",thunder1)
            break
            case 2 : 
            thunder.addImage("thunder2",thunder2)
            break
            case 3 : 
            thunder.addImage("thunder3",thunder3)
            break
            case 4 : 
            thunder.addImage("thunder4",thunder4)
            break
        }
        thunder.scale=0.5;
    }
    if(frameCount===thunderCreatedFrame+10){
        thunder.destroy();
    }
    umbrella.display();
    // ground.display();
    // bruce.display();
    drawSprites();
}   

