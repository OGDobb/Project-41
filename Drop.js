class Drop{
    constructor(x,y){
        this.x=x+5;
        this.y=0;
    }

    //this.color=color("blue");

display() {
    var pos = this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.w, this.h);

        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
}

}