var logo = document.createElement('img');
var pill = document.createElement('img');

var paddles = [];

var picsToLoad = 0; // set automaitically to image list in loadImages

function loadGameCheck(){
    picsToLoad--;
    if (picsToLoad == 0){
        loadUI();
        menuUI = true;
    }
}

function beginLoadingImage(imgVar, fileName){
    imgVar.onload = loadGameCheck;
    imgVar.src= "img/"+fileName+".png";   
}

function loadPaddles(paddleCode,fileName){
    paddles[paddleCode] = document.createElement("img");
    beginLoadingImage(paddles[paddleCode], fileName);
    console.log(paddles[paddleCode], paddleCode);
}

function loadImages(){
//--------------ALL IMAGES HAVE TO BE PNG OR CHANGE ABOVE----------
    var imageList=[//none
                {varName: logo,     theFile: "RR-Escape"},
                {varName: pill,     theFile: "pill"},
                {paddleType: paddleA,   theFile: "paddle1"},
                {paddleType: paddleB,   theFile: "paddle2"},
                {paddleType: paddleC,   theFile: "paddle3"},
                {paddleType: paddleD,   theFile: "paddle4"},
                {paddleType: paddleE,   theFile: "paddle5"},
                  ];
    
    picsToLoad = imageList.length;
    
    for(var i=0; i<imageList.length;i++){
        if(imageList[i].varName != undefined){
            beginLoadingImage(imageList[i].varName,imageList[i].theFile);
        }
       else{
            loadPaddles(imageList[i].paddleType,imageList[i].theFile);
        }
    }
}