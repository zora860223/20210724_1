



var slider, slidertxt;
var yuntechsoftlab_v2;

function preload()
{
  
  yuntechsoftlab_v2 = loadModel('assets/fbxes/yuntechsoftlab_v2.obj');
  
}

function setup()
{
  
  createCanvas( 400, 400 ,WEBGL);
  slider = createSlider( 1, 10, 5, 1);
  slidertxt = createP('Y numbers:'+slider.value());
  slidertxt.position( 10, 10);
  slider.mouseReleased( changetxt);
  
  scale(5);
  model( yuntechsoftlab_v2);
  
}

function draw()
{
  
  background(220);
  
  for(var i = 0; i<slider.value(); i+=1)
  {
    
    push();
      fill( 255*i/slider.value(), 50, 255*i/slider.value(), 80);
      translate( 0, -height/2+(height/(slider.value()-1))*i, 0);
      rotateX( frameCount * 0.01);
      rotateY( frameCount * 0.01);
      model( yuntechsoftlab_v2);
    pop();
    
  }
  
  orbitControl();
  
}

function changetxt()
{
  
  slidertxt.html('Y numbers:'+ slider.value());
  
}


/*
var slider, slidertxt;

function setup()
{
  
  createCanvas( 400, 400 ,WEBGL);
  slider = createSlider( 1, 10, 5, 1);
  slidertxt = createP('Y numbers:'+slider.value());
  slidertxt.position( 10, 10);
  slider.mouseReleased( changetxt);
  
}

function draw()
{
  
  background(220);
  
  for(var i = 0; i<slider.value(); i+=1)
  {
    
    push();
      fill( 255*i/slider.value(), 50, 255*i/slider.value(), 80);
      translate( 0, -height/2+(height/(slider.value()-1))*i, 0);
      rotateX( frameCount * 0.01);
      rotateY( frameCount * 0.01);
      box(20);
    pop();
    
  }
  
  orbitControl();
  
}

function changetxt()
{
  
  slidertxt.html('Y numbers:'+ slider.value());
  
}
*/

/*
let slider,button;
let Inconsolata_Bold_700;
let yuntechsoftlab;
var yuntechsoftlab_v2;

function preload()
{
  
  Inconsolata_Bold_700 = loadFont('assets/Inconsolata_Bold_700.ttf');
  yuntechsoftlab = loadModel('assets/fbxes/yuntechsoftlab.obj');
  yuntechsoftlab_v2 = loadModel('assets/fbxes/yuntechsoftlab_v2.obj');
  
}

function setup()
{ 
  
  createCanvas( 500, 500, WEBGL);
  background( 150,150, 150);
  frameRate(30);
  slider = createSlider( 4, 30 , 15, 1);
  slider.position( 40, 10);
  slider.style( 'width', '160px');
  slider.style( 'height', '20px');
  textFont('Inconsolata_Bold_700');
  textSize(20);
  
  translate( -200, -100, -200);
  scale(5);
  rotateX( -135);
  model( yuntechsoftlab);
  
  
}

function draw()
{
  
  fill( 220);
  noStroke();
  rect( slider.x*2+slider.width-width/2, slider.y-height/2, 30, 20);
  stroke(0);
  fill(0);
  text( slider.value(), slider.x*2+slider.width-width/2, slider.y+slider.height-height/2);
  if (mouseIsPressed && mouseY>40)
  {
    brush( frameCount, slider.value());
  }

}

function brush( v, speed)
{
  
  let size = 50+sin(v*PI/30)*20;
  fill( mouseX*(255/width), mouseY*(255/height), 0, 50);
  //fill( mouseX, mouseY, 0, 50);
  
  push();
    //rotate(v*PI/speed);
    //box(size);
    scale(2);
    //rotate( -135);
    translate( mouseX-width/2, mouseY-height/2);
    //translate( mouseX, mouseY);
    //rotate( 140);
    model( yuntechsoftlab_v2);
  pop();
  
}
*/

/*
let slider,button;
let Inconsolata_Bold_700;


function preload()
{
  Inconsolata_Bold_700 = loadFont('assets/Inconsolata_Bold_700.ttf');
}

function setup()
{ 
  
  createCanvas( 500, 500, WEBGL);
  background( 150);
  frameRate(30);
  slider = createSlider( 4, 30 , 15, 1);
  slider.position( 40, 10);
  slider.style( 'width', '160px');
  slider.style( 'height', '20px');
  textFont(Inconsolata_Bold_700);
  textSize(20);
  
}

function draw()
{
  
  fill( 150);
  noStroke();
  rect( slider.x*2+slider.width-width/2, slider.y-height/2, 30, 20);
  stroke(0);
  fill(0);
  text( slider.value(), slider.x*2+slider.width-width/2, slider.y+slider.height-height/2);
  
  if (mouseIsPressed && mouseY>40)
  {
    brush( frameCount, slider.value());
  }
  
}

function brush( v, speed)
{
  
  let size = 50+sin(v*PI/30)*20;
  fill( mouseX*(255/width), mouseY*(255/height), 0, 50);
  push();
    translate( mouseX-width/2, mouseY-height/2);
    rotate(v*PI/speed);
    box(size);
  pop();
  
}
*/