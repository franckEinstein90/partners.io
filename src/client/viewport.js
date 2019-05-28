/******************************************************************************

 * viewport.js
 * FranckEinstein90
 * ----------------
 *
 * viewport draws on canvas
 *
 * ***************************************************************************/

const viewport = (function(coords) {

    let _ctx = undefined,
        width = 600,
        height = 300,
        backgroundColor = 'green',

        drawBackground = function() {
            _ctx.fillStyle = backgroundColor;
            _ctx.fillRect(0, 0, width, height);
        },

        drawPlayer = function() {
            _ctx.lineWidth = 3;
            _ctx.moveTo(85, 100);
            _ctx.lineTo(100, 50);
            _ctx.lineTo(115, 100);
            _ctx.closePath();
            _ctx.stroke();
        },
        
        drawPoint = function(point) {
            _ctx.lineWidth = 1;
            _ctx.moveTo(point.x-0.5, point.y-0.5);
            _ctx.lineTo(point.x+0.5, point.y-0.5); 
            _ctx.lineTo(point.x+0.5, point.y+0.5); 
            _ctx.lineTo(point.x-0.5, point.y+0.5); 

            _ctx.closePath();
            _ctx.stroke();

        }
        drawBoundingRectangle = function(boundingRectangle) {
            _ctx.lineWidth = 3;
            _ctx.moveTo(boundingRectangle.topLeft.x, boundingRectangle.topLeft.y);
            _ctx.lineTo(boundingRectangle.bottomRight.x, boundingRectangle.topLeft.y);
            _ctx.lineTo(boundingRectangle.bottomRight.x, boundingRectangle.bottomRight.y);
            _ctx.lineTo(boundingRectangle.topLeft.x, boundingRectangle.bottomRight.y);
            _ctx.closePath();
            _ctx.stroke();

        }
    return {

        elements: {
            background: 1,
            player: 2
        }, //game objects

        ctx: function(c) {
            _ctx = c; // access to rendering context

            /*********************************************************
             * setting values for the 2D coordinate system
             ********************************************************/
            coords.setWidth(width);
            coords.setHeight(width);
        },

        drawByObjectType: function(target) {
            if (target instanceof gameObjects.Object){
                drawBoundingRectangle(target.boundingRectangle);
                drawPoint(target.position);
                return; 
            }
            if (target === viewport.elements.background) {
                drawBackground();
            } else if (target === viewport.elements.player) {
                drawPlayer();
            }
        }, 

        drawBackground : function(){
            _ctx.fillStyle = backgroundColor;
            _ctx.fillRect(0, 0, width, height);
       },

        draw: function(gobjects){
 //           gobjects.forEach(x => gameObjects.drawByObjectType(x));
        }
    }
})(coordinateSystem2D);
