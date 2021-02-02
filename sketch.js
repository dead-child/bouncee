var canvas;
var music;
var pinkRect, blueRect, purpleRect, limerect
var ball 
var wall1
var wall2
var wall3
var wall4
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

  wall1 = createSprite(800,300,10,600);
  wall2 = createSprite(1,300,5,600);
  wall3 = createSprite(400,1,800,5);
  wall4 = createSprite(400,600,800,10);

    pinkRect = createSprite(10,75,25,110);
    pinkRect.shapeColor = "pink" ;
    
    purpleRect = createSprite(10,220,25,110);
    purpleRect.shapeColor = "purple";
    
    blueRect = createSprite(10,355,25,110);
    blueRect.shapeColor = "blue" ;

    limerect = createSprite(10,500,25,110);
    limerect.shapeColor = "lime" ;

    ball = createSprite(200,200,40,40);
    ball.shapeColor = "white" ;
    ball.velocityY = 5;
    ball.velocityX = 7;

}

function draw() {
    background(0); 
    
    


      if(blueRect.isTouching(ball)&& ball.bounceOff(blueRect)){

        ball.shapeColor = "blue";
        ball.velocityX = 7;
        ball.velocityY = -4;
      }

      if(pinkRect.isTouching(ball)&& ball.bounceOff(pinkRect)){

        ball.shapeColor = "pink";
        ball.velocityY = 4;
        ball.velocityX = 7;
      }


      if(purpleRect.isTouching(ball)&& ball.bounceOff(purpleRect)){

        ball.shapeColor = "purple";
      }

      if(limerect.isTouching(ball)&& ball.bounceOff(limerect)){

        ball.shapeColor = "lime";
      
      }

      ball.bounceOff(wall1);
      ball.bounceOff(wall2);
      ball.bounceOff(wall3);
      ball.bounceOff(wall4);




      createEdgeSprites();
      	
        drawSprites();
    }
    //add condition to check if box touching surface and make it box

