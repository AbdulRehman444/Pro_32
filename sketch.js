const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);


}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    
    if(hour>=4 && hour<=5){
        bg = "sunrise1.png";
    }else if (hour>=5 && hour<=7){
        bg = "sunrise2.png"
    }else if (hour>=7 && hour<=10){
        bg = "sunrise3.png"
    }else if (hour>=10 && hour<=11){
        bg = "sunrise4.png"
    }else if (hour>=11 && hour<=14 ){
        bg = "sunrise5.png"
    }else if (hour>=14 && hour<=15 ){
        bg = "sunrise6.png"
    }else if (hour>=15 && hour<=16 ){
        bg = "sunset7.png"
    }else if (hour>=16 && hour<=18 ){
        bg = "sunset8.png"
    }else if (hour>=19 && hour<=19 ){
        bg = "sunset9.png"
    }else if (hour>=19 && hour<=20 ){
        bg = "sunset10.png"
    }else if (hour>=20 && hour<=22 ){
        bg = "sunset11.png"
    }else if (hour>=22 && hour<=2 ){
        bg = "sunset12.png"
    }
    else {
        bg = "sunset11.png"
    }

       backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}


