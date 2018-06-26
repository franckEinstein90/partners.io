function newShip(initX, initY){
  var ship={ x: initX,  y: initY, radius: SHIP_SIZE/2, angle: toRadians(90),
    rotation: 0, thrusting: false,
    thrustMagnitude: { x:0, y:0 },

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
