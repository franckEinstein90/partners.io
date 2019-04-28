/*******************************************************************
* main.js 
* FranckEinstein90 
*
*******************************************************************/



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




$( document ).ready(function(){

    const player = new players.Player();    
    const socket = io();

    socket.emit('new player', player);     


    /*****************************************************************
     * Game Objects
     *
     ****************************************************************/

    /** @type {htmlCanvasElement} */
    console.log("Start Game");
    let ctx = $("#gameCanvas")[0].getContext('2d');
    viewport.ctx(ctx);

    viewport.draw(viewport.elements.background);
    viewport.draw(viewport.elements.player); 

});


