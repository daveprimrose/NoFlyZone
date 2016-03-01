var Fly = function(xpos, ypos, newFlyImage, deadFlyImage){
	this.xPosition = xpos;
	this.yPosition = ypos;
	this.image = newFlyImage;
	this.deadFlyImage = deadFlyImage;
}

Fly.prototype.die = function(){
	this.image = deadFlyImage;
}
