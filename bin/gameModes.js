/*******************************************************************************
 * gameModes namespace
 * FranckEinstein
 *
 *  
 * ****************************************************************************/

const games = require('./games');

const gameModes = (function(g){
let    types = {
                survive:  {id : 1, label: "survive"} , 
                cooperate:{id : 2, label: "cooperate"}, 
                fight : {id : 3, label: "fight"}
    } 
 
    return {
        select: function(){
            if (g.waitingPlayers.size() >= 2){
                gameModes.modeCooperate()
            }
            else if(g.waitingPlayers.size() >= 1){
                console.log("selecting next game mode");
                if(g.waitingPlayers.size() == 1){ //only one player go to mode survive
                    gameModes.modeSurvive();
                }
            }
            else{
                console.log("not enough players");
            }
        },

       /******************************************************
         * Triggers a game in one of the 3 games modes, selects
         * players and sends messages to game when mode is 
         * unavailable
        /******************************************************/
        modeSurvive: function( ) {    //1 player 
            assert(g.waitingPlayers.size() >= 1);
            let player = g.waitingPlayers.pop();
            g.startNewGame( types.survive, player );
        },

        modeCooperate: function() { //2 players 
            if(g.waitingPlayers.size() < 2){
                sendMessage(g.address, modeStatus['unavailable']);
                return;
            }
            sendMessage(g.address, modeStatus['available']);
            let players = g.waitingPlayers.pop( 2 );
            g.start( g.modes.cooperate( players ));
        }

     
    };
})(games);

module.exports = gameModes;
