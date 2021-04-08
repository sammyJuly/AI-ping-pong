img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(650,400);
	video=createCapture(VIDEO);
	video.size(600,300);

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}
function modelLoaded(){
	console.log('Model Loaded!');

}

function draw() {
background("#D3D3D3")
if(noseX<300){
marioX=marioX-1;
}if(noseX>300){
	marioX=marioX+1;
	}
	if(noseX<150){
		marioX=marioX-1;
		}

image(img,marioX,marioY,40,70);
}






