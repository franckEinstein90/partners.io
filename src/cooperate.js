const FPS=30;
const FRICTION = 0.7;
const SHIP_SIZE = 30;
const TURN_SPEED = 360;
const SHIP_THRUST = 5; //acceleration in pixels/(second*second)


/** @type {HTMLCanvasElement} */
var canv = document.getElementById("gameCanvas");
var ctx = canv.getContext('2d');
console.log(ctx);

function toRadians(degValue)  {
  return degValue / 180 * Math.PI;
}
function perFrame(motion){
  return motion/FPS;
}
var ship = newShip(canv.width/2, canv.height/2)
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
setInterval(update, 1000 / FPS);


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



function drawSpace(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
}
function applyThrust(){
      ship.thrustMagnitude.x += perFrame(SHIP_THRUST * Math.cos(ship.angle));
    ship.thrustMagnitude.y -= perFrame(SHIP_THRUST * Math.sin(ship.angle));;
}

function update(){
  drawSpace();
  if (ship.thrusting) {
    applyThrust();
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
