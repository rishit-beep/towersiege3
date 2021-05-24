const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;



var engine, world;
var ground;
var stand1,stand2;
var ballImg;
var score=0;

function preload() {
ballImg=loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,380,1200,40);
stand1=new Ground(390,300,250,10);
stand2=new Ground(700,200,200,10);

//level1
box1=new Box(300,275,30,40);
box2=new Box(330,275,30,40);
box3=new Box(360,275,30,40);
box4=new Box(390,275,30,40);
box5=new Box(420,275,30,40);
box6=new Box(450,275,30,40);
box7=new Box(480,275,30,40);

//level2
box8=new Box(330,235,30,40);
box9=new Box(360,235,30,40);
box10=new Box(390,235,30,40);
box11=new Box(420,235,30,40);
box12=new Box(450,235,30,40);

//level3
box13=new Box(360,195,30,40);
box14=new Box(390,195,30,40);
box15=new Box(420,195,30,40);

//level4
box16=new Box(390,155,30,40);

////////////////////////////////////////////////////////////////

//level1
box17=new Box(640,175,30,40);
box18=new Box(670,175,30,40);
box19=new Box(700,175,30,40);
box20=new Box(730,175,30,40);
box21=new Box(760,175,30,40);

//level2
box24=new Box(670,135,30,40);
box25=new Box(700,135,30,40);
box26=new Box(730,135,30,40);


//level3
box27=new Box(700,95,30,40);

ball=Bodies.circle(50,200,20);
World.add(world,ball);

slingshot= new Slingshot(this.ball,{x:100,y:200});



}

    function draw(){
        background("blue");
        Engine.update(engine);
        ground.display();
        stand1.display();
        stand2.display();
        text("SCORE:"+score,750,40);
        //level1
        

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();

//level2

box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

//level3
box13.display();
box14.display();
box15.display();

//level4
box16.display();

///////////////////////////////////////////
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();


box24.display();
box25.display();
box26.display();

box27.display();



fill("gold");
imageMode(CENTER);
image(ballImg,ball.position.x,ball.position.y,40,40);
slingshot.display();
textSize(30);
fill("yellow");
text("Drag the hexagonal Stone and release it to launch it towards the block",100,30);



    }

 function mouseDragged(){
     Matter.Body.setPosition( this.ball,{x:mouseX,y:mouseY}); 
    }
    function mouseReleased(){
        slingshot.fly();
        }
        
         
        
        if(this.visibility<0 && this.visibility>-105){
            score++
        }
    