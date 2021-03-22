//Use WASD And The Arrow Keys To Move

//Black Barriers/Obstacles Cannot Be Passed At All
//You Can Pass Through White Barriers If You Are A Certain Width
//All Barriers Send You To The Start

//Confetti Code By Dibyayan Kar

var px = 200;
var py = 35;
var pw = 20;
var ph = 20;

var move = 3;

var obx = 200;
var oby = 105;
var obw = 100;
var obh = 15;

var yblx = 95;
var ybly = 175;
var yblw = 95;
var yblh = 15;

var ybrx = 305;
var ybry = 175;
var ybrw = 95;
var ybrh = 15;

var gb1x = 60;
var gb2x = 200;
var gb3x = 340;
var gby = 245;
var gbw = 15;
var gbh = 15;

var pbx = 200;
var pby = 385;
var pbw = 15;
var pbh = 15;
var pbs = 10;

var myBall = [];
var r = 5;

function setup() {
  createCanvas(400, 490);
  
  for (var i = 0; i<43; i++){
  myBall.push(new Ball());
  }
  
}

function draw() {
  background(0);
  {rectMode(CORNER);
  	//Red
    fill(255,105,97);
  	rect(0,0,400,70);
    //Orange
    fill(255,150,99);
  	rect(0,70,400,70);
    //Yellow
    fill(255,238,134);
  	rect(0,140,400,70);
    //Green
    fill(182,255,139);
  	rect(0,210,400,70);
    //Blue
    fill(164,222,255);
  	rect(0,280,400,70);
    //Purple
    fill(211,166,255);
  	rect(0,350,400,70);
  } //Colors
 
  { //Orange Level
  fill(0,175);
  rectMode(RADIUS);
  rect(obx, oby, obw, obh);
  
  if (px+pw > obx-obw && px-pw < obx+obw && py+ph > oby-obh && py-ph < oby+obh) {
   px = 200;
   py = 35;
   pw = 20;
   ph = 20;
  }
  } //Orange Level

  { //Yellow Level
  fill(0,175);
  rectMode(RADIUS);
  rect(yblx,ybly,yblw,yblh);
  
  if (px+pw > yblx-yblw && px-pw < yblx+yblw && py+ph > ybly-yblh && py-ph < ybly+yblh) {
   px = 200;
   py = 35;
   pw = 20;
   ph = 20;
  } 
  
  fill(0,175);
  rectMode(RADIUS);
  rect(ybrx,ybry,ybrw,ybrh);
  
  if (px+pw > ybrx-ybrw && px-pw < ybrx+ybrw && py+ph > ybry-ybrh && py-ph < ybry+ybrh) {
   px = 200;
   py = 35;
   pw = 20;
   ph = 20;
  } 
  } //Yellow Level
  
  { //Green Level
  fill(255,175);
  ellipseMode(RADIUS);
  ellipse(gb1x, gby, gbw, gbh);

  ellipse(gb2x, gby, gbw, gbh);
  
  ellipse(gb3x, gby, gbw, gbh);
  
  if (px+pw > gb1x-gbw && px-pw < gb1x+gbw && py+ph > gby-gbh && py-ph < gby+gbh && pw < 40) {
   px = 200;
   py = 35;
   pw = 20;
   ph = 20;
  }
  if (px+pw > gb2x-gbw && px-pw < gb2x+gbw && py+ph > gby-gbh && py-ph < gby+gbh && pw < 40) {
   px = 200;
   py = 35;
   pw = 20;
   ph = 20;
  }
  if (px+pw > gb3x-gbw && px-pw < gb3x+gbw && py+ph > gby-gbh && py-ph < gby+gbh && pw < 40) {
   px = 200;
   py = 35;
   pw = 20;
   ph = 20;
  }
  } //Green Level
  
  {
  fill(255,175);
  rectMode(RADIUS);
  rect(200, 315, 200, 15);
  
  if (py > 300 && py < 330 && pw < 40) {
   px = 200;
   py = 35;
   pw = 20;
   ph = 20;
  }
  } //Blue Level

	{ //Purple Level
  fill(0,175);
  ellipse(pbx,pby,pbw,pbh);
   pbx = pbx + pbs;
  if (pbx >= 400 || pbx <= 0) {
   pbs = -pbs;
  }
	if (px+pw > pbx-pbw && px-pw < pbx+pbw && py+ph > pby-pbh && py-ph < pby+pbh) {
   px = 200;
   py = 35;
   pw = 20;
   ph = 20;
	}
} //Purple Level
  
//Place Elements Here
  endzone();
  player();

}
  
//Place Functions Here
  function player() {
  	fill (255);
    noStroke();
    rectMode(RADIUS);
    rect (px, py, pw, ph);

  { //WASD
    if (keyIsDown(87)) {
   	py = py - move;
   } else if (keyIsDown(83)) {
   	py = py + move;
	 } else if (keyIsDown(65)) {
   	px = px - move;
   } else if (keyIsDown(68)) {
   	px = px + move;
   }
    } // WASD
    
  { //Arrows
    if (keyIsDown(UP_ARROW)) {
   	ph = ph - move;
   } else if (keyIsDown(DOWN_ARROW)) {
   	ph = ph + move;
   } else if (keyIsDown(LEFT_ARROW)) {
  	pw = pw - move;
   } else if (keyIsDown(RIGHT_ARROW)) {
   	pw = pw + move;
   }
  } //Arrows
    
  { //Size Barrier
	if (ph >= py+50 || ph <= (2*ph)-50) {
  	ph = ph - move;
  } else if (pw >= px+50 || pw <= (2*pw)-50) {
  	pw = pw - move;
  } else if (ph <= 1) {
    ph = ph + move;
  } else if (pw <= 1) {
    pw = pw + move;
   }
  } //Size Barrier
  }
  
	function endzone() {
  fill(100,100,100,80);
  noStroke();
  rectMode(CORNER);
  rect(0,420,400,70);
    
  if (py > 420) {
   win();
  }
    
  }

  function win() {
  	textAlign(CENTER);
    textSize(55);
    textFont('Comic Sans MS');
    fill(0,115);
    text('You Win!', 204, 260);
    
   for (var i = 0; i< myBall.length; i++){
 		 myBall[i].display();
 		 myBall[i].move();
	   myBall[i].bounce();
   }
	
}

class Ball{
  
  constructor() {
  this.x = random(width);
  this.y = random(height);
  this.xspeed = random(2,5);
  this.yspeed = random(2,5);
  }
  
  display() {
  var color1 = random(255);
  var color2 = random(255);
  var color3 = random(255);
  noStroke();
  fill(color1,color2,color3)  
  ellipse(this.x, this.y, r*2, r*2);
  }

  move() {
  this.x += this.xspeed;
  this.y += this.yspeed;
  }

  bounce() {
  if (this.x > width - r || this.x < r) {
    this.xspeed = -this.xspeed;
  }
    
  if (this.y > height - r || this.y < r) {
    this.yspeed = -this.yspeed;
  }
    
  }
}