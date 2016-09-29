var canvas;
var canvasContext;

var blueCar = new carClass();
var greenCar = new carClass(); 

window.onload = function(){
    canvas = document.getElementById('BGCanvas');
    canvasContext = canvas.getContext('2d');

    colorRect(0,0,canvas.width,canvas.height,'black');
    
    loadImages();
}

function afterImagesLoadedStartGame(){
    var FPS = 30; //Frames Per a Second
    setInterval(updateAll, 1000/FPS);

    setUpImput(); 
    loadLevel(levelOne);
}

function loadLevel(whichLevel){
    trackGrid = whichLevel.slice();
    blueCar.reset(blueCarPic, "Blue Lignting");
    greenCar.reset(greenCarPic, "Green Machine");
}

function updateAll(){
    moveAll();
    drawAll();
}
 

function moveAll(){   
    blueCar.move();
    greenCar.move();
} 

function drawAll(){    
    drawTracks();
    blueCar.draw();
    greenCar.draw();
}