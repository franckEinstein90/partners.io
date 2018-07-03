const FPS=30;
const FRICTION = 0.7;
const SHIP_SIZE = 30;
const TURN_SPEED = 360;
const SHIP_THRUST = 5; //acceleration in pixels/(second*second)

function toRadians(degValue)  { return degValue / 180 * Math.PI; }
function perFrame(motion){ return motion/FPS; }

