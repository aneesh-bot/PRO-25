class PaperBall {
  constructor(x, y, radius) {
    var options = {
     
        'restitution':0.3 ,
        'friction':0.5,
        'density':1.2
    }


    this.image = loadImage("sprites/paper.png");

    this.body = Bodies.circle(x, y, radius/2, options);
    this.width = radius;
    this.height = radius;

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
    strokeWeight(3);
    stroke("purple");
    fill("blue");
    image(this.image,pos.x, pos.y, this.width, this.height);  
   pop();
  }
  }


