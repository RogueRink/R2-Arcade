var score = 0;

function loadUI(){
        console.log("UI LOADED!!!",menuUI);
        colorRect(0,0,canvas.width,canvas.height,'#33ffff');

        drawBitmapCenteredWRotation(logo,canvas.width/2,200,0);
        
        colorRect(canvas.width/2-200,canvas.height/2+75,400,200,"#ffc000");
        colorText("HOW TO PLAY:",canvas.width/2-100,canvas.height/2+110,"#000","30px Arial Bold");
        colorText("Hit the Ball With your Paddle, Eliminate all Bricks",canvas.width/2-195,canvas.height/2+130,"#000","19px Arial Bold");
        colorText("Collect Falling Caplues, These are Power-Ups",canvas.width/2-195,canvas.height/2+150,"#000","19px Arial Bold");
        colorText("Different Bricks Give Different Power-Ups",canvas.width/2-195,canvas.height/2+170,"#000","19px Arial Bold");
        colorText("Eliminate All Bricks to Load the Next Level",canvas.width/2-195,canvas.height/2+190,"#000","19px Arial Bold");
        colorText("Each Level Loads Once Your Paddle Contacts Ball",canvas.width/2-195,canvas.height/2+210,"#000","19px Arial Bold");
        colorText("You Have Three Lives, and A Will to Survive",canvas.width/2-195,canvas.height/2+230,"#000","19px Arial Bold");
        colorText("Welcome to Rogue Rink:Escape!",canvas.width/2-135,canvas.height/2+250,"#000","19px Arial Bold");
        colorText("Press Space to Start Game!",canvas.width/2-195,canvas.height/2+270,"#000","25px Arial Black ");

}