var mouseX = 0;
var mouseY = 0;

function updateMousePos(evt){
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;

    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;

    canvas.addEventListener('mousemove', updateMousePos,false);
    
    paddleX = mouseX - paddleWidth/2;
}

function setUpImput(){
    canvas.addEventListener('mousemove', updateMousePos);

    document.addEventListener('keydown', keyPressed);
    }

function keySet(keyEvent){
   if(keyEvent.keyCode==32){
        if(menuUI == true){
            menuUI=false;
            loadLevel();
        }
   }
}

function keyPressed(evt){
    console.log("Key Pressed : "+evt.keyCode);
    keySet(evt);
    evt.preventDefault(); 
}  