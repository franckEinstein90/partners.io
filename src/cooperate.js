
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);


  var x,y;
  for(var i=-1; i<ROIDS_NUM; i++){
    x = Math.floor(Math.random() * canv.width);
    y = Math.floor(Math.random() * canv.height);
    obstacleSet.roids.push(newAsteroid(x,y));
  }


function keyDown(/** @type{ keyboardEvent} */ ev){
switch(ev.keyCode){
  case 37:
    ship.rotation = perFrame(toRadians(TURN_SPEED));
    break;
  case 38:
    ship.thrusting = true;
  break;
  case 39:
    ship.rotation = -1 * perFrame(toRadians(TURN_SPEED));
  break;
}
}
function keyUp(/** @type{ keyboardEvent} */ ev){
switch(ev.keyCode){
  case 37:
    ship.rotation = 0;
    break;
  case 38:
    ship.thrusting = false;
  break;
  case 39:
    ship.rotation = 0;
  break;
}
}







