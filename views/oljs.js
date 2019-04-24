/*
			/** @type {htmlCanvasElement} */
			console.log("Start Game");
			var canv = document.getElementById("gameCanvas");
			var ctx = canv.getContext('2d');
			var obstacleSet = { roids: [] };

		</script>

		<script src="javascripts/setup.js"></script>

		<script src="javascripts/coordinates.js"></script>
		<script src="javascripts/object.js"></script>
		<script src="javascripts/obstacles.js"></script>
		<script src="javascripts/cooperate.js"></script>


		<script>
		setInterval(update, 1000 / FPS);

		var ship = newShip(coordinates(canv.width/2, canv.height/2));


		function drawSpace(){
		  ctx.fillStyle = "black";
		  ctx.fillRect(0, 0, canv.width, canv.height);
		}

	function update(){
  drawSpace();
  if (ship.thrusting) {
    ship.applyThrust();
  }
  else{
    ship.thrustMagnitude.x -= perFrame(FRICTION * ship.thrustMagnitude.x);
    ship.thrustMagnitude.y -= perFrame(FRICTION * ship.thrustMagnitude.y);
  }
  ship.draw(ctx);
  ctx.strokeStyle = "slategrey";
  ctx.lineWidth = SHIP_SIZE / 20;
  
  for (var i=0; i<obstacleSet.roids.length; i++){
    (obstacleSet.roids[i]).draw(ctx);
  }
  ship.update();
}	
*/
