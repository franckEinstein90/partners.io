(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const player = require('./player').player;
const games = require('./pardnerClientGame').pardnerClientGame;

const pardnerClient = (function(){
    let user = undefined,
        players = [],
        serverSocket = undefined, 
        gameUI = undefined,  
        game = undefined, 
        registerNewPlayer = function(){ 
            user = new player.Player();
            serverSocket.emit('new player', user);     
        },
        getPlayers = function(){

        }
    return {
        initialize : function(socket){
            serverSocket = socket; 
            try{
                registerNewPlayer();
                players = getPlayers(); 
                game = games.startNewGame(user, players);
            }
            catch(e){
                console.log(e);
            }
        }
    }
})();

module.exports = {
  pardnerClient 
};

},{"./pardnerClientGame":2,"./player":3}],2:[function(require,module,exports){
const pardnerClientGame = (function(){

    return {
        startNewGame : function (player, players){
            return new pardnerClientGame.Game();
        },
        Game : function(){

        }
    }
})()

module.exports = {pardnerClientGame};

},{}],3:[function(require,module,exports){
/********************************************************************************
 * player.js namespace
 * FranckEinstein90
 *
 *******************************************************************************/

const player = (function() {

    let generateUniqueId = function() {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    return {
        Player: function() {
            this.id = generateUniqueId();
        }
    };
})();

module.exports = {
        player
};

},{}],4:[function(require,module,exports){
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
    socket = io(); //open socket to server
    pardnerClient.initialize(socket);  
    /* Create and register a new player */
/*    let player = new players.Player(), 


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



},{"./game/pardnerClient":1}]},{},[4]);
