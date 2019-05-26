
const player = require('./player').player;
const games = require('./pardnerClientGame').pardnerClientGame;

const pardnerClient = (function(){
    let user = undefined,
        players = [],
        gameUI = undefined,  
        game = undefined, 
        registerNewPlayer = function(){ user = new player.Player()},
        getPlayers = function(){

        }
    return {
        initialize : function(){
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
