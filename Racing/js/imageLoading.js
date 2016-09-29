var greenCarPic = document.createElement('img');
var blueCarPic = document.createElement('img');

var trackPics = [];

var picsToLoad = 0; // set automaitically to image list in loadImages

function loadGameCheck(){
    picsToLoad--;
    //console.log(picsToLoad);
    if (picsToLoad == 0){
        afterImagesLoadedStartGame();
    }
}

function beginLoadingImage(imgVar, fileName){
    imgVar.onload = loadGameCheck;
    imgVar.src= "images/"+fileName+".png";   
}

function loadImageForTrackCode(trackCode,fileName){
    trackPics[trackCode] = document.createElement("img");
    beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages(){
//--------------ALL IMAGES HAVE TO BE PNG OR CHANGE ABOVE----------
    var imageList=[{varName: greenCarPic,       theFile: "car1"},
                   {varName: blueCarPic,        theFile: "car2"},
                   {trackType: TRACK_ROAD,      theFile: "track_road"},
                   {trackType: TRACK_WALL,      theFile: "track_wall"},
                   {trackType: TRACK_FINISH,    theFile: "track_goal"}
                  ];
    picsToLoad = imageList.length;
    
    for(var i=0; i<imageList.length;i++){
        if(imageList[i].varName != undefined){
            beginLoadingImage(imageList[i].varName,imageList[i].theFile);
        }
        else{
            loadImageForTrackCode(imageList[i].trackType,imageList[i].theFile);
        }
    }
}