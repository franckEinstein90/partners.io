
function coordinates(x,y){
	var p2D = {
	  xPos : x,
	  yPos : y,
	  distance : function(point){
		  return Math.sqrt(
		  Math.pow(this.xPos-point.xPos, 2), 
		  Math.pow(this.yPos-point.yPos, 2));
		}

	};
	return p2D;
}



