class Blocks{
  constructor(x,y,height,angle){
      var options = {
          restitution:0.7,
          friction: 0.3,
          density:1.0
      }
      this.body = Bodies.rectangle(x,y,20,height,options);
      this.x = x;
      this.y = y;
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      //strokeWeight(4);
      //stroke("green");
      fill("red");
      rect(0,0,this.width,this.height);
      pop();

      if(this.body.speed < 3){
          body.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         console.log(this.Visiblity);
         pop();
       }
       
     }
    
     score() {
       if (this.Visiblity < 0 && this.Visiblity > -1000) {
         score = score+1
       }
     }
    
  }
