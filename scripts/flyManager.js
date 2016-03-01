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
		var flyListLength = flyList.length;
		if(flyListLength > 0)
		{
			for (var i = 0; i < flyList.length; i++) {
				if(randomXPosition >= flyList[i].xPosition && randomXPosition <= (flyList[i].xPosition + flyImageWidth))
				{
					if(randomYPosition >= flyList[i].yPosition && randomYPosition <= (flyList[i].yPosition + flyImageWidth))
					{
						valid = false;
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

generateRandomNumber = function(min, max)
{
	var randomNumber = Math.floor((Math.random() * max) + min);
	return randomNumber;
}

checkCanvasClickForFly = function(clickedPositionX, clickedPositionY)
{
	var flysClicked = 0;
	for (var i = 0; i < flyList.length; i++) {
		if(clickedPositionX >= flyList[i].xPosition && clickedPositionX <= (flyList[i].xPosition + flyImageWidth))
		{
			if(clickedPositionY >= flyList[i].yPosition && clickedPositionY <= (flyList[i].yPosition + flyImageWidth))
			{
				flyList[i].die();
				drawFlys();
				flysClicked++;
			}
		}
	}
	return flysClicked;
}

removeDeadFlys = function()
{
	for (var i = 0; i < flyList.length; i++) {
		if(flyList[i].image == deadFlyImage)
		{
			flyList.splice(i, 1);
		}
	}
}

resetFlyList = function()
{
	flyList = [];
}