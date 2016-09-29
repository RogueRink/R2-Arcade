var paddleX = 250;
var paddleWidth = 100;
var paddleThickness = 10;
var paddleOffSet = 60;

var paddleA = 0;
var paddleB = 1;
var paddleC = 2;
var paddleD = 3;
var paddleE = 4;

function ballPandleHandling(){
   var paddleTopEdgeY = canvas.height-paddleOffSet;
    var paddleBottomEdgeY = paddleTopEdgeY + paddleThickness;
    var paddleLeftEdgeX = paddleX ;
    var paddleRightEdgeX = paddleLeftEdgeX + paddleWidth;

    if( ballY > paddleTopEdgeY          //bellow top of paddle
        && ballY < paddleBottomEdgeY    //above bottom of paddle
        && ballX > paddleLeftEdgeX      // right of left side of paddle
        && ballX < paddleRightEdgeX){   // left of right side of paddle

            ballSpeedY *= -1;

            var centerOfPadleX = paddleX + paddleWidth/2;
            var ballDistFrmPaddleCntrX = ballX - centerOfPadleX;
            ballSpeedX = ballDistFrmPaddleCntrX * 0.35;

        if(bricksLeft == 0){
            brickReset();
        }
    }
}
