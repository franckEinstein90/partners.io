const FPS=30;
const FRICTION = 0.7;
const SHIP_SIZE = 30;
const TURN_SPEED = 360;
const SHIP_THRUST = 5;

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
var ship={
  x: canv.width/2,
  y: canv.height/2,
  r: SHIP_SIZE/2,
  a: toRadians(90),
  rot: 0,
  thrusting: false,
  thrustMagnitude: {
    x:0,
    y:0
  }
}

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
setInterval(update, 1000 / FPS);

function keyDown(/** @type{ keyboardEvent} */ ev){
switch(ev.keyCode){
  case 37:
    ship.rot = perFrame(toRadians(TURN_SPEED));
    break;
  case 38:
    ship.thrusting = true;
  break;
  case 39:
    ship.rot = -1 * perFrame(toRadians(TURN_SPEED));
  break;
}
}
function keyUp(/** @type{ keyboardEvent} */ ev){
switch(ev.keyCode){
  case 37:
    ship.rot = 0;
    break;
  case 38:
    ship.thrusting = false;
  break;
  case 39:
    ship.rot = 0;
  break;
}
}



function drawSpace(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
}
function applyThrust(){
      ship.thrustMagnitude.x += perFrame(SHIP_THRUST * Math.cos(ship.a));
    ship.thrustMagnitude.y -= perFrame(SHIP_THRUST * Math.sin(ship.a));
}
function drawShip(){
ctx.strokeStyle = "white";
  ctx.lineWidth = SHIP_SIZE/20;
  ctx.beginPath();

ctx.moveTo(
ship.x + 4 / 3 * ship.r * Math.cos(ship.a),
ship.y - 4 / 3 *  ship.r * Math.sin(ship.a)
);
ctx.lineTo(//rear left
ship.x - ship.r * (2 / 3 * (Math.cos(ship.a) + Math.sin(ship.a))),
ship.y + ship.r * (2 / 3 * (Math.sin(ship.a) - Math.cos(ship.a)))
);

ctx.lineTo(//rear left
ship.x - ship.r * (2 / 3 * (Math.cos(ship.a) - Math.sin(ship.a))),
ship.y + ship.r * (2 / 3 * (Math.sin(ship.a) + Math.cos(ship.a)))
);
ctx.closePath();
ctx.stroke();
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
  drawShip();
  ship.a += ship.rot;
  ship.x += ship.thrustMagnitude.x;
  ship.y += ship.thrustMagnitude.y;
}
