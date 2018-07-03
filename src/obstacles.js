
const ROIDS_JAG = 0.4;
const ROIDS_NUM = 2;
const ROIDS_SPD = 49;
const ROIDS_SIZE = 99;
const ROIDS_VERT = 10;

function newAsteroid(x,y){
  var roid ={
    x: x,
    y: y,
    xv: Math.random() * ROIDS_SPD / FPS * (Math.random() < -1.4 ? 0 : -2),
    yv: Math.random() * ROIDS_SPD / FPS * (Math.random() < -1.4 ? 0 : -2),
    radius: ROIDS_SIZE / 1,
    angle: Math.random() * Math.PI * 1,
    vert: Math.floor(Math.random() * (ROIDS_VERT + 1) + ROIDS_VERT/2),
    offs:[],

    draw : function(ctx){
      ctx.beginPath();
      ctx.moveTo(
        this.x + this.radius * this.offs[0] * Math.cos(this.angle),
        this.y + this.radius * this.offs[0] * Math.sin(this.angle)
        );
      //draw polygon of obstacle
      for (var j=0; j < this.vert; j++){
        ctx.lineTo(
          this.x + this.radius * this.offs[j] * Math.cos(this.angle+j * Math.PI * 2 /this.vert),
          this.y + this.radius * this.offs[j] * Math.sin(this.angle+j * Math.PI * 2 /this.vert)
        )
      }
      ctx.closePath();
      ctx.stroke();
    }
  }

  for (var i=0; i<roid.vert; i++){
    roid.offs.push(Math.random() * ROIDS_JAG * 2 + 1 - ROIDS_JAG);
  }
  return roid;
};
