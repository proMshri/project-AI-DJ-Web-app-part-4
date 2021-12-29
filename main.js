var song="";
var leftWristX=0;
var leftWristY=0;

var scoreLeftWrist=0;
var scoreRightWrist=0;

function setup(){
    image(video,0,0,800,400);
    
    fill("#6a85b0");
    stroke("#6a85b0");

    if(scoreLeftWrist>0.1){
    circle(leftWristX+120,leftWristY,35);
    WithDecVolume=Number(leftWristY);
    WithoutDecVolume=floor(WithDecVolume);
    Volume=WithoutDecVolume/500;
    document.getElementById("volume").innerHTML="Volume : "+Volume;
    song.setVolume(Volume);}
}

function preload() {
    song=loadSound("sound.mp3");
}

function draw() {
    
    image(video,0,0,800,400);
    
    fill("#6a85b0");
    stroke("#6a85b0");

    if(scoreLeftWrist>0.1){
    circle(leftWristX+120,leftWristY,35);
    WithDecVolume=Number(leftWristY);
    WithoutDecVolume=floor(WithDecVolume);
    Volume=WithoutDecVolume/500;
    document.getElementById("volume").innerHTML="Volume : "+Volume;
    song.setVolume(Volume);}
}

function music() {
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}

function playSound() {
    console.log("model is loaded.");
}

function showDot(results) {
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
    }
}