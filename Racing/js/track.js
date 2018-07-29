var roadPic = document.createElement('img');
var wallPic = document.createElement('img');


var trackWidth = 40;
var trackHeight = 40;
var trackColumns = 20; 
var trackRows = 15;
var trackGapW = 2;
var trackGapH = 2;
var levelOne = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                 1, 2, 2, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                 0, 3, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1,
                 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
var trackGrid = [];

//TrackCodes
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_FINISH = 3;

function returnTitleTypeAtColRow(col,row){ //checks for obstacle 
    if(col >= 0 && col <trackColumns &&
       row >= 0 && row <trackRows) {
            var trackIndexUnderCord = rowColToArrayIndex(col,row);
            return trackGrid[trackIndexUnderCord];
    } else{
        return TRACK_WALL;
    }
}  


function carTrackHandling(whichCar){
    var carTrackCol = Math.floor(whichCar.x / trackWidth); 
    var carTrackRow = Math.floor(whichCar.y / trackHeight);
    var trackIndexCar= rowColToArrayIndex(carTrackCol,carTrackRow);

    if(carTrackCol >= 0 && carTrackCol <trackColumns &&
       carTrackRow >= 0 && carTrackRow <trackRows){
        var tileHere = returnTitleTypeAtColRow (carTrackCol,carTrackRow);
        
        if(tileHere == TRACK_FINISH){
            console.log(whichCar.name+" WINS!");
            loadLevel(levelOne);
        } 
        else if(tileHere != TRACK_ROAD){
            whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
            whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;
            
            whichCar.speed *= -.5;
        } 
    }
} 

function rowColToArrayIndex(col,row){
    return col +trackColumns * row;
}  

function drawTracks(){
    var arrayIndex = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for(var eachRow = 0; eachRow<trackRows; eachRow++){
        for(var eachColumn=0;eachColumn<trackColumns;eachColumn++){
            var tileKindHere = trackGrid[arrayIndex];
            var useImage = trackPics[tileKindHere];
                canvasContext.drawImage(useImage,drawTileX,drawTileY);  
            arrayIndex++;
            drawTileX += trackWidth;
        }
        drawTileX = 0;
        drawTileY += trackHeight;
    }
} 

function isWallAtColRow(col,row){
    if(col >= 0 && col <trackColumns &&
       row >= 0 && row <trackRows) {
            var trackIndexUnderCord = rowColToArrayIndex(col,row);
            return (trackGrid[trackIndexUnderCord] == TRACK_WALL );
    } else{
        return false;
    }
}  
