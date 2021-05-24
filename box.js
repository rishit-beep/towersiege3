class Box{
    constructor(x, y, width, height ) {
        var options = {
            'restitution':1.0,
            'friction':0.5,
            'density':0.2,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       // this.image = loadImage("sprites/base.png");
       this.Visibility=255;
        World.add(world, this.body);
      }
      display(){
        if(this.speed< 3){
         this.display();
         }
         else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);

          pop();
        }
       
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("white");
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}