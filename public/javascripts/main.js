let gameVariables = (function(){
    let _FPS = 30, 
        _FRICTION = 0.7,
        _SHIP_SIZE = 30,
        _TURN_SPEED = 360,
        _SHIP_THRUST = 5;//acceleration in pixels/(second*second)

    return{
        FPS         : function(){return _FPS;},
        FRICTION    : function(){return _FRICTION;},
        SHIP_SIZE   : function(){return _SHIP_SIZE;},
        TURN_SPEED  : function(){return _TURN_SPEED;},
        SHIP_THRUST : function(){return _SHIP_THRUST;}
        perFrame    : function(motion) {return motion/gameVariables.FPS();}
    };
})();

const function toRadians(degValue)  { return degValue / 180 * Math.PI; }



function newShip( point ){ 

    let ship={
        position:point, 	
        radius: SHIP_SIZE/2, 
        angle: toRadians(90),
        rotation: 0, 
        thrusting: false,
        thrustMagnitude: { x:0, y:0 },
        applyThrust : function(){
            this.thrustMagnitude.x += perFrame(SHIP_THRUST * Math.cos(ship.angle));
            this.thrustMagnitude.y -= perFrame(SHIP_THRUST * Math.sin(ship.angle));
        },
    /***************************************************************************/ 
        draw : function(ctx){
            ctx.strokeStyle = "white";
            ctx.lineWidth = SHIP_SIZE/19;
            ctx.beginPath();

            ctx.moveTo(
                this.position.x + 3 / 2 *  this.radius * Math.cos(this.angle),
                this.position.y - 3 / 2 *  this.radius * Math.sin(this.angle)
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
      this.position.x += this.thrustMagnitude.x;
      this.position.y += this.thrustMagnitude.y;
      }
    }
  return ship;
}

$( document ).ready(function(){
    /** @type {htmlCanvasElement} */
    console.log("Start Game");
    let ctx = $("#gameCanvas")[0].getContext('2d');
    var obstacleSet = { roids: [] };
		var ship = newShip(coordinates(canv.width/2, canv.height/2));


});


