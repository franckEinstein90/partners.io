function newShip( point ){
  var ship={
    x: point.xPos ,  y: point.yPos,
    radius: SHIP_SIZE/2, angle: toRadians(90),
    rotation: 0, thrusting: false,
    thrustMagnitude: { x:0, y:0 },

    getCoordinates : function(){
      return newPoint(this.x, this.y);
    },
    /***************************************************************************/
    draw : function(ctx){
        ctx.strokeStyle = "white";
        ctx.lineWidth = SHIP_SIZE/19;
        ctx.beginPath();

    ctx.moveTo(
        this.x + 3 / 2 * this.radius * Math.cos(this.angle),
        this.y - 3 / 2 *  this.radius * Math.sin(this.angle)
      );
    ctx.lineTo(//rear left
      this.x - this.radius * (1 / 2 * (Math.cos(this.angle) + Math.sin(this.angle))),
      this.y + this.radius * (1 / 2 * (Math.sin(this.angle) - Math.cos(this.angle)))
    );

    ctx.lineTo(//rear left
      this.x - this.radius * (1 / 2 * (Math.cos(this.angle) - Math.sin(this.angle))),
      this.y + this.radius * (1 / 2 * (Math.sin(this.angle) + Math.cos(this.angle)))
    );
      ctx.closePath(); ctx.stroke();
    },

    /***************************************************************************/
    update : function(){
      this.angle += this.rotation;
      this.x += this.thrustMagnitude.x;
      this.y += this.thrustMagnitude.y;
      }
    }
  return ship;
}
