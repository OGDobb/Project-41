class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,100,options);
        this.r=100;
        World.add(world,this.body);
    }

display() {
    var pos = this.body.position;
   // animation(bruceImg,pos.x,pos.y,this.r,this.r);
    
}

}