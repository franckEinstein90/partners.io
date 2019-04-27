/*******************************************************************************
 * gameModes namespace
 * FranckEinstein
 *
 * Implements the 3 mode games. 
 *
 * ****************************************************************************/

const players = require('game').players;
const gameModes = (function() {

    return {
        modeSurvive: function() {
            //1 player has to survive the round to move to next

        },
        modeCooperate: function() {
            //2 players share the game space and must both survive 
            //to pass the round
            if(players.waitingToPlay.number < 2){
                game.broadcast(modeStatus.unavailable);
            } 
        },
        modeFight: function() {
            //4 players share the game space as teams of two.  Both players from the 
            //team that has the last player(s) alive advance to the next round 
            if(players.waitingToPlay.number < 4){
                game.broadcast(modeStatus['unavailable'];
            }
            game.broadcast(modeStatus['available']);
    }
}

})();
