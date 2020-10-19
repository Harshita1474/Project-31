class Plinko {
    constructor(x,y,r,options) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,r,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      
      
      ellipseMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.radius);
    }
  };