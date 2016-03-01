var flyList = [];

createImageElement = function(filenamePath){
	var img = document.createElement('img');
	img.setAttribute('src', filenamePath);
	return img;
}

var flyImage = createImageElement('images/fly.png');
var deadFlyImage = createImageElement('images/deadfly.png');
var flyImageWidth = 60;

addFly = function(){
	var randomXPosition;
	var randomYPosition;
	do
	{
		var valid = true;
		randomXPosition = generateRandomNumber(0, (canvas.width - 60));
		randomYPosition = generateRandomNumber(0, (canvas.height - 60));
		console.log("x:" + randomXPosition + " y:" + randomYPosition); //remove log
		var flyListLength = flyList.length;
		if(flyListLength > 0)
		{
			for (var i = 0; i < flyList.length; i++) {
				if(randomXPosition >= flyList[i].xPosition && randomXPosition <= (flyList[i].xPosition + flyImageWidth))
				{
					if(randomYPosition >= flyList[i].yPosition && randomYPosition <= (flyList[i].yPosition + flyImageWidth))
					{
						valid = false;
						console.log("In Loop - x:" + randomXPosition + " y:" + randomYPosition); //remove log
						break;
					}
				}
			}
		}
	}
	while (!valid);
	flyList.push(new Fly(randomXPosition, randomYPosition, flyImage, deadFlyImage));
	drawFlys();
}

drawFlys = function()
{
	clearCanvas();
	for (var i = 0; i < flyList.length; i++) {
		canvasContext.drawImage(flyList[i].image, flyList[i].xPosition, flyList[i].yPosition);
	}
}

clearCanvas = function()
{
	canvasContext.fillStyle = '#FFFFFF';
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

generateRandomNumber = function(min, max)
{
	var randomNumber = Math.floor((Math.random() * max) + min);
	return randomNumber;
}