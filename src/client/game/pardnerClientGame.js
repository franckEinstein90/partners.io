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
