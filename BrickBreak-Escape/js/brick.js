var brickWidth = 80;
var brickHeight = 20;
var brickColumns = 10;
var brickRows = 13; //total with gutter
var brickGapW = 2;
var brickGapH = 2;
var brickGutter = 3;
var brickGrid = new Array(brickColumns * brickRows);
var bricksLeft = 0;

function isBrickAtColRow(col,row){
    if(col >= 0 && col <brickColumns &&
       row >= 0 && row <brickRows) {
            var brickIndexUnderCord = rowColToArrayIndex(col,row);
            return brickGrid[brickIndexUnderCord];
    } else{
        return false;
    }
}

function ballBrickHandling(){
         var ballBrickCol = Math.floor(ballX / brickWidth);
    var ballBrickRow = Math.floor(ballY / brickHeight);
    var brickIndexBall= rowColToArrayIndex(ballBrickCol,ballBrickRow);

    if(ballBrickCol >= 0 && ballBrickCol <brickColumns &&
       ballBrickRow >= 0 && ballBrickRow <brickRows){
        if(isBrickAtColRow(ballBrickCol,ballBrickRow)){
            brickGrid[brickIndexBall] = false;
            bricksLeft--;

            var prevBallX = ballX - ballSpeedX;
            var prevBallY = ballY - ballSpeedY;
            var prevBrickCol = Math.floor(prevBallX/brickWidth);
            var prevBrickRow = Math.floor(prevBallY/brickHeight);

            var bothTestFailed = true;

            if(prevBrickCol != ballBrickCol){
                if(isBrickAtColRow(prevBrickCol,ballBrickRow) == false){
                    ballSpeedX *= -1;
                    bothTestFailed = false;
                }
            }
            if(prevBrickRow != ballBrickRow){
                if(isBrickAtColRow(ballBrickCol, prevBrickRow) == false){
                    ballSpeedY  *= -1;
                    bothTestFailed = false;
                }
            }

            if(bothTestFailed){     // armpit case prevent ball from going right through
                ballSpeedX *= -1;
                ballSpeedY *= -1;
            }

        }
    }
}


function rowColToArrayIndex(col,row){
    return col +brickColumns * row;
}

function drawBricks(){
    for(var eachRow = 0; eachRow<brickRows; eachRow++){
        for(var eachColumn=0;eachColumn<brickColumns;eachColumn++){

            var arrayIndex = rowColToArrayIndex(eachColumn,eachRow);
//[START] COLOR SPLASH GAME MODE
            if(colorSplash){
                if (brickGrid[arrayIndex]){
                    var colorRow = eachRow % 4;
                    var colorCol = eachColumn % 4;
                    var colorTotal = colorCol + colorRow;

                    if(colorTotal == 0){
                        colorRect(brickWidth*eachColumn,brickHeight*eachRow,brickWidth-brickGapW,brickHeight-brickGapH,brickColorSplash[0]);
                    }
                    else if(colorTotal == 1){
                         colorRect(brickWidth*eachColumn,brickHeight*eachRow,brickWidth-brickGapW,brickHeight-brickGapH,brickColorSplash[1]);
                    }
                    else if(colorTotal == 2){
                         colorRect(brickWidth*eachColumn,brickHeight*eachRow,brickWidth-brickGapW,brickHeight-brickGapH,brickColorSplash[2]);
                    }
                    else if(colorTotal == 3){
                         colorRect(brickWidth*eachColumn,brickHeight*eachRow,brickWidth-brickGapW,brickHeight-brickGapH,brickColorSplash[3]);
                    }
                    else if(colorTotal == 4){
                         colorRect(brickWidth*eachColumn,brickHeight*eachRow,brickWidth-brickGapW,brickHeight-brickGapH,brickColorSplash[4]);
                    }
                    else if(colorTotal == 5){
                         colorRect(brickWidth*eachColumn,brickHeight*eachRow,brickWidth-brickGapW,brickHeight-brickGapH,brickColorSplash[5]);
                    }
                    else if(colorTotal == 6){
                         colorRect(brickWidth*eachColumn,brickHeight*eachRow,brickWidth-brickGapW,brickHeight-brickGapH,brickColorSplash[6]);
                    }
                    else{
                        colorRect(brickWidth*eachColumn,brickHeight*eachRow,brickWidth-brickGapW,brickHeight-brickGapH,brickColorSplash[7]);
                    }
                }
            }
            else{
                if(brickGrid[arrayIndex]){
                    colorRect(brickWidth*eachColumn,brickHeight*eachRow,brickWidth-brickGapW,brickHeight-brickGapH, notColorSplash);
                }
            }
//[END] COLOR SPLASH GAME MODE
        }
    }
}

