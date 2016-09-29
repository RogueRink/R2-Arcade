var canvas;
var canvasContext;
var menuUI = true;

window.onload = function(){
    canvas = document.getElementById('BGCanvas');
    canvasContext = canvas.getContext('2d');
    
    colorRect(0,0,canvas.width,canvas.height,'black');
    colorText('Loading Game!', canvas.width/2,canvas.height/2,"white","30px Arial");
    
    setUpImput();
    loadImages();
}


function loadLevel(){
        var FPS = 30; //Frames Per a Second
        setInterval(updateAll, 1000/FPS);
    
        brickReset();
        ballReset(); 
}

function updateAll(){
    moveAll();
    drawAll();
}

function moveAll(){
    ballMove();
    ballBrickHandling();
    ballPandleHandling();
}

function drawAll(){

    colorRect(0,0,canvas.width,canvas.height,'black');

    colorRect(paddleX,canvas.height-paddleOffSet,paddleWidth,paddleThickness,'white');
    canvasContext.drawImage(paddles[4],paddleX,canvas.height-paddleOffSet);  
    
    //Draw Ball
    colorCircle(ballX,ballY,5,'#f0f');

    //Draw Brick
    drawBricks();
}