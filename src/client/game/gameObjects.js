/*****************************************************************************
 * gameObjects
 *
 * ***************************************************************************/


const gameObjects = (function(){

    return{
        Object: function(bR){
            this.boundingRectangle = bR;
            this.position = bR.center();
        }, 
        Pod(position /* coordinates2D.Point2D */){
           let upperLeft = new coordinateSystem2D.Point2D(position.x - 5, position.y - 10), 
           lowerRight = new coordinateSystem2D.Point2D(position.x + 5, position.y + 10), 
           boundingRectangle = new coordinateSystem2D.BoundingRectangle(upperLeft, lowerRight); 
           return new gameObjects.Object(boundingRectangle);
 
        }
    };
})();




let Thrust = function() {
    this.thrusting = false,
        this.thrustMagnitude = {
            x: 0,
            y: 0
        }
}
Thrust.prototype.applyThrust = function(angle) {
    this.thrustMagnitude.x += perFrame(gameVariable.SHIP_THRUST * Math.cos(angle));
    this.thrustMagnitude.y -= perFrame(gameVariable.SHIP_THRUST * Math.sin(angle));
}

function newShip(point2d) {

    var ship = {

        position: point2d,
        radius: SHIP_SIZE / 2,
        angle: toRadians(90),
        rotation: 0,
        thrust: new Thrust();

        /***************************************************************************/
        draw: function(ctx) {
            ctx.strokeStyle = "white";
            ctx.lineWidth = SHIP_SIZE / 19;
            ctx.beginPath();

            ctx.moveTo(
                this.position.xPos + 3 / 2 * this.radius * Math.cos(this.angle),
                this.position.yPos - 3 / 2 * this.radius * Math.sin(this.angle)
            );
            ctx.lineTo( //rear left
                this.position.xPos - this.radius * (1 / 2 * (Math.cos(this.angle) + Math.sin(this.angle))),
                this.position.yPos + this.radius * (1 / 2 * (Math.sin(this.angle) - Math.cos(this.angle)))
            );

            ctx.lineTo( //rear left
                this.position.xPos - this.radius * (1 / 2 * (Math.cos(this.angle) - Math.sin(this.angle))),
                this.position.yPos + this.radius * (1 / 2 * (Math.sin(this.angle) + Math.cos(this.angle)))
            );
            ctx.closePath();
            ctx.stroke();
        },

        /***************************************************************************/
        update: function() {
            this.angle += this.rotation;
            this.position.xPos += this.thrustMagnitude.x;
            this.position.yPos += this.thrustMagnitude.y;
        }
    }
    return ship;
}
