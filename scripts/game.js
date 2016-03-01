var canvas;
var canvasContext;

window.onload = function(){
	canvas = document.getElementById('flyGame');;
	canvasContext = canvas.getContext('2d');
	canvas.addEventListener('click', canvasClicked, false);
}

var timer;
var score;
var intervalTimer;
var gameRunning;

initiateGame = function(){
	if(gameRunning)
	{
		cancelGame();
	}
	gameRunning = true;
	timer = 30000;
	score = 0;
	intervalTimer = setInterval(updateTimer, 100);
	flyTimer = setInterval(addFly, 1000);
	updateScore();
}

updateTimer = function(){
	document.getElementById('flyGameTimerPlaceholder').innerHTML = Math.ceil(timer/1000);
	timer = timer - 100;
	if(timer < 0)
	{
		endGame();
	}
}

endGame = function()
{
	cancelGame();
	alert("Game Over");
}

cancelGame = function()
{
	clearTimeout(intervalTimer);
	clearTimeout(flyTimer);
}

canvasClicked = function(event){
	var canvasPosition = canvas.getBoundingClientRect();
	var canvasStartX = Math.round(canvasPosition.left);
	var canvasStartY = Math.round(canvasPosition.top);
	var x = event.pageX - canvasStartX;
	var y = event.pageY - canvasStartY;
	console.log("Click Location: ("+ x + ", " + y + ")");
	var flysClicked = checkCanvasClickForFly(x, y);
	score += flysClicked;
	updateScore();
}

updateScore = function()
{
	document.getElementById('flyGameScorePlaceholder').innerHTML = score;	
}