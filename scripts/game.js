var canvas;
var canvasContext;
window.onload = function(){
	canvas = document.getElementById('flyGame');;
	canvasContext = canvas.getContext('2d');
	var timer;
	var intervalTimer;
	var gameRunning;
	
	initiateGame = function(){
		if(gameRunning)
		{
			cancelGame();
		}
		gameRunning = true;
		timer = 30000;
		intervalTimer = setInterval(updateTimer, 100);
		flyTimer = setInterval(addFly, 1000);
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
}