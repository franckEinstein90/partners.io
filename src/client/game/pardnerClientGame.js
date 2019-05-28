const viewport = require('../viewport').viewport;
const coordinates2D = require('../geometry/coordinates2D').coordinates2D;

const pardnerClientGame = (function(){

    let gameObjects = [],

    setGameObjects = function(){
        let gameObjects = [], 
            newPoint = (x,y)=>new coordinates2D.Point2D(x,y), 
            tl = newPoint(20, 20),
            br = newPoint(50, 100),
            boundingRectangle = new coordinates2D.BoundingRectangle(tl, br);
            gameObjects.push(new gameObjects.Object(boundingRectangle));
        return gameObjects;
    }

    return {
        getNewGame : function (player, players){
            /** @type {htmlCanvasElement} */
            let ctx = $("#gameCanvas")[0].getContext('2d');
            viewport.ctx(ctx);
            setGameObjects();
            return new pardnerClientGame.Game();
        },

        Game : function(){
            this.gameObjects = pardnerClientGame.setGameObjects();
        }
    }
})()


pardnerClientGame.Game.prototype = {
    render: function(){
        viewport.drawBackground();
        this.gameObjects.forEach(gameObject => viewport.draw(gameObject));
    }
}

module.exports = {pardnerClientGame};
