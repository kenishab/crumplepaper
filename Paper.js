class Paper {
    constructor(x,y,rt) {
      var options = {
          isStatic: false,
          friction: 0.5,
          restitution:0.3,
          density:1.2,
      }
      this.body = Bodies.circle(x, y, radius, [options]) ;
      this.radius = this.radius
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS)
      fill("pink");
      ellipse(pos.x, pos.y, this.radius);
    }
  };