class Dustbin {
   constructor(x,y) {
      this.dropWidth = 200;
       this.dropHeight = 20;
       this.image = loadImage("sprites/dustbingreen.png");
        this.bottomBody = Bodies.rectangle(x, y,this.dropWidth,this.dropHeight,{isStatic : true});
         World.add(world,this.bottomBody);
          this.leftBody = Bodies.rectangle(x - this.dropWidth/2, height - 90, this.dropHeight,this.dropWidth/2,{isStatic : true});
           World.add(world, this.leftBody);
            this.rightBody = Bodies.rectangle(x + this.dropWidth/2, height - 90, this.dropHeight,this.dropWidth/2,{isStatic : true});
            World.add(world, this.rightBody); }
display(){ 
  var posb = this.bottomBody.position; 
  var angleb = this.bottomBody.angle; 
  push();
   translate(posb.x, posb.y);
    rotate(angleb);
     imageMode(CENTER);
      fill("red");
      image(this.image, 0,-this.dropHeight*5,this.dropWidth, this.dropHeight*10)
         pop(); 
         var posl = this.leftBody.position; 
         var anglel = this.leftBody.angle;
          push();
        translate(posl.x, posl.y);
         rotate(anglel);
          rectMode(CENTER);
           fill("red");
            // rect(0,0,this.dropHeight,this.dropWidth/2);
              pop(); 
              var posr = this.rightBody.position;
               var angler = this.rightBody.angle;
                push(); 
                translate(posr.x, posr.y);
                 rotate(angler);
                  rectMode(CENTER);
                   fill("red"); 
                   // rect(0,0,this.dropHeight,this.dropWidth/2);
                     pop();
           }
  };

/*class Dustbin {
    constructor(x,y) {
      var option = {   
         isStatic: true
      }
     
     this.body = Bodies.rectangle(x,y,width,height, option);
     this.body = Bodies.rectangle(x,y,width,height, option);
     this.body = Bodies.rectangle(x,y,width,height, option);


       this.image = loadImage("sprites/dustbingreen (1).png");
      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER);
      strokeWeight(5);
      stroke("yellow");
      fill("gray");
      image(this.image);
    }
  };
  */