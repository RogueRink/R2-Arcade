//Bitmap Rotate
function drawBitmapCenteredWRotation(useBitmap,atX,atY,withAng){
    canvasContext.save();
    canvasContext.translate(atX,atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(useBitmap,-useBitmap.width/2,-useBitmap.height/2);
    canvasContext.restore();
}

//Ball
function colorCircle(CenterX,CenterY,radius,drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(CenterX,CenterY,radius,0,Math.PI*2,true);
    canvasContext.fill();
}
//Draw all rectangles
function colorRect(LeftX,TopY,width,height,drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(LeftX,TopY,width,height);
}
//color TEXT
function colorText(showWords,textX,textY,fillColor,sizeType){ //SizeType EX --> "30px Arial"
    canvasContext.fillStyle = fillColor;
    canvasContext.font = sizeType;
    canvasContext.fillText(showWords,textX,textY);
}