function newShip( point ){ var ship={
    position:point, 	
    radius: SHIP_SIZE/2, angle: toRadians(90),
    rotation: 0, thrusting: false,
    thrustMagnitude: { x:0, y:0 },

    applyThrust : function(){
	this.thrustMagnitude.x += perFrame(SHIP_THRUST * Math.cos(ship.angle));
	this.thrustMagnitude.y -= perFrame(SHIP_THRUST * Math.sin(ship.angle));
	},
    /***************************************************************************/ draw : function(ctx){
        ctx.strokeStyle = "white";
        ctx.lineWidth = SHIP_SIZE/19;
        ctx.beginPath();

    ctx.moveTo(
        this.position.xPos + 3 / 2 * this.radius * Math.cos(this.angle),
        this.position.yPos - 3 / 2 *  this.radius * Math.sin(this.angle)
      );
    ctx.lineTo(//rear left
      this.position.xPos - this.radius * (1 / 2 * (Math.cos(this.angle) + Math.sin(this.angle))),
      this.position.yPos + this.radius * (1 / 2 * (Math.sin(this.angle) - Math.cos(this.angle)))
    );

    ctx.lineTo(//rear left
      this.position.xPos - this.radius * (1 / 2 * (Math.cos(this.angle) - Math.sin(this.angle))),
      this.position.yPos + this.radius * (1 / 2 * (Math.sin(this.angle) + Math.cos(this.angle)))
    );
      ctx.closePath(); ctx.stroke();
    },

    /***************************************************************************/
    update : function(){
      this.angle += this.rotation;
      this.position.xPos += this.thrustMagnitude.x;
      this.position.yPos += this.thrustMagnitude.y;
      }
    }
  return ship;
}
