/*******************************************************************************
 * gameModes namespace
 * FranckEinstein
 *
 * manages the creation of new games in relation to the number of players
 * in the waiting queue and to their levels
 * ****************************************************************************/

const game  = require('game');

const gameModes = (function(g) {

    return {
        /******************************************************
         * Triggers a game in one of the 3 games modes, selects
         * players and sends messages to game when mode is 
         * unavailable
        /******************************************************/
        modeSurvive: function( ) {    //1 player 
            assert(g.waitingPlayers.size() >= 1);
            let player = g.waitingPlayers.pop();
            g.startNewGame( g.types.survive, player );
        },

        modeCooperate: function() { //2 players 
            if(g.waitingPlayers.size() < 2){
                sendMessage(g.address, modeStatus['unavailable']);
                return;
            }
            sendMessage(g.address, modeStatus['available']);
            let players = g.players().waitingToPlay.choose(2);
            g.start(g.modes.cooperate(players));
        },

        modeFight: function() {     //4 players
            if(g.players().waitingToPlay.number < 4){
                sendMessage(g.address, modeStatus['unavailable']);
            }
            sendMessage(g.address, modeStatus['available']);
            g.players().waitingToPlay.choose(4);
    }
}

})(game);
