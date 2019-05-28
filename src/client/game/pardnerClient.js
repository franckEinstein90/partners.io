
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
                game = games.getNewGame(user, players);
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
