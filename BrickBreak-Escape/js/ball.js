var ballX = 50;
var ballSpeedX = 10;
var ballY = 50;
var ballSpeedY = 10;

function ballReset(){
    ballX=canvas.width/2;
    ballY=brickRows*brickHeight+10;
    var launchSpeedX = 10;
    var launchSpeedY = 6;
    ballSpeedX = (((Math.random() *2) - 1) * launchSpeedX);
    ballSpeedY = launchSpeedY;
}

function ballMove(){
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballX > canvas.width && ballSpeedX > 0.0){
        ballSpeedX *=  -1;
    }
    if(ballX < 0 && ballSpeedX < 0.0){
        ballSpeedX *=  -1;
    }
    if(ballY > canvas.height){
        ballReset();
    }
    if(ballY < 0 && ballSpeedY < 0.0){
        ballSpeedY *=  -1;
    }
}
