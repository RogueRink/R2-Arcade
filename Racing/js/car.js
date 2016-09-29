//VIDEO #4

var groundSpeedDecay = 0.94;
var drivePower = 0.5;
var reversePower = 0.5; 
var turnRate =.03;
var minTurnSpeed = .3;

function carClass(){

    this.x = 50;
    this.speed = 0;
    this.y = 50;
    this.ang = 0;
    this.myCarPic; // pic to use
    this.name = "Untitled Car";
    
    this.keyHeldGas = false;  
    this.keyHeldReverse = false;  
    this.keyHeldLeft = false;  
    this.keyHeldRight = false;
    
    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;
    
    this.setupImput = function(upKey,rightKey,downKey,leftKey){
        this.controlKeyUp = upKey;
        this.controlKeyRight = rightKey;
        this.controlKeyDown = downKey;
        this.controlKeyLeft = leftKey;
    }

    this.reset = function(whichImage,carName){
        this.name = carName;
        this.myCarPic = whichImage; 
        this.speed = 0;
        
        for(var eachRow = 0; eachRow<trackRows; eachRow++){
            for(var eachColumn=0;eachColumn<trackColumns;eachColumn++){
                var arrayIndex = rowColToArrayIndex(eachColumn,eachRow);
                    if (trackGrid[arrayIndex] == TRACK_PLAYERSTART){ 
                        trackGrid[arrayIndex] = TRACK_ROAD;
                        this.ang = -Math.PI/2;
                        this.x = eachColumn * trackWidth + trackWidth/2;
                        this.y = eachRow * trackHeight + trackHeight/2;
                        return;
                }
            }
        }
    } 

    this.move = function(){
        this.speed *= groundSpeedDecay;
        if(this.keyHeldGas){
            this.speed += drivePower;
        }
        if(this.keyHeldReverse){
            this.speed -= reversePower;
        }
        if(Math.abs(this.speed) > minTurnSpeed){
            if(this.keyHeldRight){
                this.ang += turnRate;
            }
            if(this.keyHeldLeft){
                this.ang -= turnRate;
            }
        }
        this.x += Math.cos(this.ang) * this.speed;
        this.y += Math.sin(this.ang) * this.speed;
        
        carTrackHandling(this);
     }


    this.draw = function(){
            drawBitmapCenteredWRotation(this.myCarPic,this.x,this.y,this.ang);
    }
}