class Drop{
    constructor(x,y){
        var options = {
            density : 2,
            friction : 0.5,
            restitution : 0.3
        }
        this.body=Bodies.circle(x,y,5,options);
        World.add(world,this.body);
        this.r=5;
    }

    //this.color=color("blue");

display() {
    var pos = this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
}

update() {
    if(this.body.position.y>height) {
        Matter.Body.setPosition(this.body,{x : random(0,800), y : random(25,75)})
    }
}
}