const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;
var options

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  playerBase = Bodies.rectangle(200,350,180,150,options)

 playerArcher = Bodies.rectangle(250,playerBase.position.y - 160,180,options)



}

function draw() {
  background(backgroundImg);

image(baseimage, playerBase.position.x,playerBase.position.y,180,150)
image(playerimage,playerArcher.position.x,playerArcher.position.y,50,180)
  //show the playerbase image using image() function


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
