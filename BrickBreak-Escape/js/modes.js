//-------------------GAME MODES-----------------//
// Brick Spawn:
// --
// True : random ammount of bricks will spawn
// False : all bricks will spawn
var randomBricks = true;
//percent of bricks THERE less then 1 greater than 0
//1 - # to get Percent missing
var percMissing = 0.01; 


//Color Splash:
//--
// True: Random Colors Assigned
// False: only one color
var colorSplash = true;
//( TRUE ) the colors we pick from - 7 are used
var brickColorSplash = ['blue','green','red','purple','orange','yellow','brown','white'];
//( FALSE ) the color
var notColorSplash = 'blue';
//-----------------GAME MODES END---------------//

//[START] NOT ALL BRICKS
function brickReset(){ // Game Mode Not All Bricks
    bricksLeft = 0;
    for(var i=0;i<brickGutter*brickColumns;i++){
            brickGrid[i]=false; // adding the gutter
    }
    for(;i<brickColumns*brickRows ;i++){
        if(randomBricks){
             if(Math.random() < percMissing){
                brickGrid[i]=true;
                bricksLeft++;
            }
            else{
                 brickGrid[i]=false;
            }// random Math
        }
        else{
            brickGrid[i]=true; // all bricks showing
            bricksLeft++; //total bricksleft
        }
    }
}
//[END] NOT ALL BRICKS