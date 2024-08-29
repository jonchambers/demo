let x = 600
let y = 500

let furby

function preload(){
furby = loadImage('furby.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  rectMode(CENTER)
  imageMode(CENTER)
}


 
function draw() {
  //mouseIsPressed
  if(keyIsPressed == true){
    x = 100
     fill(255, 0, 0)
      background(197, 60, 207)
     }else{
       background(53, 180, 100)
       x=600
     }
 

  image(furby, windowWidth/2, windowHeight/2)
  strokeWeight(30)
  //point(300, 200)
  
  //print(mouseY)
  
  line(300, 400,500, 350 )
  
  fill(255)
  stroke(180, 140, 100)
  strokeWeight(10)
  ellipse(mouseX, mouseY, 100,100)

  
  strokeWeight(5)
  stroke(255)
  fill(0)
  ellipse(x, y, 50,50)
  
  fill(255, 0 ,0, 150)
  noStroke()
  rect(500, 350, 200, 300)
  
  noFill()
  stroke(100)
  strokeWeight(20)
  triangle(700, 100, 800, 200, 750, 300)
}