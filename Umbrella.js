class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.x=x;
        this.y=y;
    }
display() {
    var pos = this.body.position;
        rectMode(CENTER);
        fill("pink");
        rect(pos.x, pos.y, this.w, this.h);
}

}