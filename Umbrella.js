class Umbrella {
      
     constructor(x,y){
          var options = {
               isStatic : true
               
          };

          this.image=loadImage("man.png")
          this.body = Bodies.circle(x,y, 25, options);
           this.radius = 25;
          World.add(world, this.body);
     }
     display(){
          var pos = this.body.position;
          imageMode(CENTER)
          image(this.image, pos.x, pos.y+70,300,300);
     }
}