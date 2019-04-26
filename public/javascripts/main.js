const gameVariables = (function(){
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
        SHIP_THRUST : function(){return _SHIP_THRUST;},
        perFrame    : function(motion) {return motion/gameVariables.FPS();}
    };
})();

const userCommands = ['<-','->','SPACE'];

$( document ).ready(function(){

    var socket = io();
    socket.emit('socket', "->");     
    /*****************************************************************
     * Game Objects
     * **************************************************************
    /** @type {htmlCanvasElement} */
    console.log("Start Game");
    let ctx = $("#gameCanvas")[0].getContext('2d');
    var obstacleSet = { roids: [] };
    var ship = newShip(coordinates(canv.width/2, canv.height/2));

});


