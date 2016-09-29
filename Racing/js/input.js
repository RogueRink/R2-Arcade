var mouseX = 0;
var mouseY = 0;

const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

const KEY_A = 65;
const KEY_W = 87;
const KEY_D = 68;
const KEY_S = 83;    

function setUpImput(){
    canvas.addEventListener('mousemove', updateMousePos);

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);
    
        greenCar.setupImput(KEY_W,KEY_D,KEY_S,KEY_A);
        blueCar.setupImput(KEY_UP,KEY_RIGHT,KEY_DOWN,KEY_LEFT );
}

function updateMousePos(evt){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
    }

function keySet(keyEvent, whichCar, setTo){
   if(keyEvent.keyCode==whichCar.controlKeyLeft){
        whichCar.keyHeldLeft = setTo;
    }
    if(keyEvent.keyCode==whichCar.controlKeyRight){
        whichCar.keyHeldRight = setTo;
    }  
    if(keyEvent.keyCode==whichCar.controlKeyUp){
        whichCar.keyHeldGas = setTo; 
    }
    if(keyEvent.keyCode==whichCar.controlKeyDown){
        whichCar.keyHeldReverse = setTo;
    }
}

function keyPressed(evt){
    //console.log("Key Pressed : "+evt.keyCode);
    keySet(evt,blueCar, true);
    keySet(evt,greenCar, true);
    evt.preventDefault(); 
}  
function keyReleased(evt){
    // console.log("Key Released : "+evt.keyCode);
    keySet(evt,blueCar, false);
    keySet(evt,greenCar, false);
}  