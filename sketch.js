const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine, world;
var drops = [];
var maxDrops = 100;
var umbrella;
var rand;
var night;
var Thunder, thunder1, thunder2, thunder3, thunder4;
var thunderCreatedFrame= 0;


function preload(){

    
}

function setup(){
   var canvas = createCanvas(500,700);

   engine= Engine.create();
   world = engine.world;

   umbrella = new Umbrella(200 ,500);

   for(var i=0; i<maxDrops; i++){
       drops.push(new createDrops(random(0,450), random(0,450)));
   }
    
}

function draw(){
    Engine.update(engine);
    background(night);

    rand = Math.round(random(1,4));
    if(framCount % 80 ===0){
        thunderCreatedFrame = frameCount;
        Thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1 : Thunder.addImage(thunder1);
            break;
            case 2 : Thunder.addImage(thunder2);
            break;
            case 3 : Thunder.addImage(thunder3);
            break;
            case 4 : Thunder.addImage(thunder4);
            break;
            default:break; 
        }
        Thunder.scale = 0.7;
    }
    if(thunderCreatedFrame + 10 ===frameCount && Thunder){
        Thunder.destroy();
    }

    umbrella.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }
    drawSprites();
}   

