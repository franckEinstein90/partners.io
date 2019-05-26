/*******************************************************************
* main.js 
* FranckEinstein90 
*
*******************************************************************/
const pardnerClient = require('./game/pardnerClient').pardnerClient;

/*const coordinates2D = require('./geometry/coordinates2D').coordinates2D;

const gameVariables = (function(){
    let _FPS = 30, 
        _FRICTION = 0.7,
        _SHIP_SIZE = 30,
        _TURN_SPEED = 360,
        _SHIP_THRUST = 5;//acceleration in pixels/(second*second)

    return{
        FPS    : function()
        {
                return _FPS; 
        },
        FRICTION    : function(){return _FRICTION; },
        SHIP_SIZE   : function(){return _SHIP_SIZE;},
        TURN_SPEED  : function(){return _TURN_SPEED;},
        SHIP_THRUST : function(){return _SHIP_THRUST;},
        perFrame    : function(motion) {return motion/gameVariables.FPS();}
    };
})();

const userCommands = ['<-','->','SPACE'];
*/

$( document ).ready(function(){
    pardnerClient.initialize();  
    /* Create and register a new player */
/*    let player = new players.Player(), 
        socket = io();

    socket.emit('new player', player);     

    let newPoint = (x,y)=>new coordinates2D.Point2D(x,y), 
        tl = newPoint(20, 20),
        br = newPoint(50, 100),
        boundingRectangle = new coordinates2D.BoundingRectangle(tl, br);


    gameObject = new gameObjects.Object(boundingRectangle),

    pod1  = gameObjects.Pod(br),
    gameObjectArray = [], 

gameObjectArray.push(pod1);
    /*****************************************************************
     * Game Objects
     *
     ****************************************************************/

    /** @type {htmlCanvasElement} */
/*    console.log("Start Game");
    let ctx = $("#gameCanvas")[0].getContext('2d');

/*    viewport.ctx(ctx);
    viewport.drawBackground();
    viewport.draw(gameObjectArray); */

});


