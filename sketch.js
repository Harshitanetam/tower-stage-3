const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var polygon_img;
var slingshot;
var score=0;
var bg;
var backgroundimage;
var bgcolor;
function preload(){
  polygon_img=loadImage("polygon.png");
  getBackgroundimg();
  }
  
function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)

    ground=new Ground();
    stand1=new Stand(390,300,250,10);
  stand2=new Stand(700,200,200,10);

    //level one
    box1=new Box(300,275,30,40);
    console.log(box1);
    box2=new Box(330,275,30,40);
    box3=new Box(360,275,30,40);
    box4=new Box(390,275,30,40);
    box5=new Box(420,275,30,40);
    box6=new Box(450,275,30,40);
    box7=new Box(480,275,30,40);

    //level two
    box8=new Box(330,235,30,40);
    box9=new Box(360,235,30,40);
    box10=new Box(390,235,30,40);
    box11=new Box(420,235,30,40);
    box12=new Box(450,235,30,40);

   // level three
   box13=new Box(360,195,30,40);
   box14=new Box(390,195,30,40);
   box15=new Box(420,195,30,40);

  // level four
  box16=new Box(390,155,30,40)

  //set 2 for second stand
  //level one

  box17=new Box(640,175,30,40);
  box18=new Box(670,175,30,40);
  box19=new Box(700,175,30,40);
  box20=new Box(730,175,30,40);
  box21=new Box(760,175,30,40);

  //level two
  box22=new Box(670,135,30,40);
  box23=new Box(700,135,30,40);
  box24=new Box(730,135,30,40);

  //top
  box25=new Box(700,95,30,40);
//ball holder with sling
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot=new slingShot(this.ball,{x:100,y:200})
  
}
function draw(){

 if(bgcolor){
    background(bgcolor);
  }
    rectMode(CENTER)
    //background(56,44,44)
    textSize(20);
    fill("lightyellow");
    text("Darg the Hexagonal Stone and Release it,to launch it towards the box",100,30);
    
    text("SCORE:"+score,750,60)

    ground.display();
    stand1.display();
    stand2.display();
    
    strokeWeight(2);
    stroke(50);
    fill("skyblue");

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box3.score();
    box6.display();
    box7.display();
    
    fill("pink")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("turquoise")
    box13.display();
    box14.display();
    box15.display();
    fill("grey")
    box16.display();
    fill("skyblue");

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill("turquoise");
    box22.display();
    box23.display();
    box24.display();
    fill("pink")
    box25.display();
    fill("gold")

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box3.score();
    box6.score();
    box7.score();
  imageMode(CENTER);
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed()
{
  if(keyPressed===32)
  slingshot.attach(this.polygon_img)
}
async function getBackgroundimg(){
    var response=await fetch("  http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responsejson=await response.json();
    var datetime=responsejson.datetime;
    var hour=datetime.slice(11,13);

    if(hour>6 &&hour<19){
    console.log("sunnyday");     
      bg="bg.png";
      bgcolor="yellow";
    }
    else{
      bg="bg2.jpg";
      bgcolor="black";
    }
    backgroundimage=loadImage(bg);
}