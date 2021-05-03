class Paper {
   constructor (x,y,radius) {
      var options ={
         isStatic : false,
         restitution : 0.8,
         friction : 0.5,
         density : 1.2,
      } 
      this.radius = radius;
      this.ballImg = loadImage("../images/crumpled.png");
      this.body = Bodies.circle(x, y, this.radius,options);       
      this.color=color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.body);
   }

   display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      fill(this.color);
      imageMode(CENTER);
      image(this.ballImg,0, 0,80,80);
      pop();
   }
}