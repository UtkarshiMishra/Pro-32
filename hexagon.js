class polygon{
    constructor(x, y, r) {
        var options = {
            isStatic: true,
            'restitution':0.8,
            'friction':1.0 
        }

        this.body = Bodies.rectangle(x,y,r,options);
        polygonimg = loadImage("sprites/polygon.png");
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x,y,r);
        World.add(world,this.body);

        
      }

      display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
        image(polygonimg, polygon.position.x, polygon.y)
        rect(0,0,this.width,this.height);
        pop();
      }
}