const SHIP_THRUST = 5;
var ship={
  x: canv.width/2,
  y: canv.height/2,
  r: SHIP_SIZE/2  ,
  a: toRadians(90),
  rot: 0,
  thrusting: false,
  thrustMagnitude: {
    x:0,
    y:0
  },
  draw : function(ctx){
    ctx.strokeStyle = "white";
    ctx.lineWidth = SHIP_SIZE/19;
    ctx.beginPath();

    ctx.moveTo(
        this.x + 3 / 2 * this.r * Math.cos(this.a),
        this.y - 3 / 2 *  this.r * Math.sin(this.a)
      );
    ctx.lineTo(//rear left
      this.x - this.r * (1 / 2 * (Math.cos(this.a) + Math.sin(this.a))),
      this.y + this.r * (1 / 2 * (Math.sin(this.a) - Math.cos(this.a)))
    );

    ctx.lineTo(//rear left
      this.x - this.r * (1 / 2 * (Math.cos(this.a) - Math.sin(this.a))),
      this.y + this.r * (1 / 2 * (Math.sin(this.a) + Math.cos(this.a)))
    );
    ctx.closePath();
    ctx.stroke();
  },
  update : function(){
    this.a += this.rot;
    this.x += this.thrustMagnitude.x;
    this.y += this.thrustMagnitude.y;
  }
}
