/*******************************************************************************
 * games namespace
 * FranckEinstein90
 *
 * Game manager. Manages players, games ongoing, rounds.
 * ****************************************************************************/


const gameStatus = (function() {
    return {
        starting: 1,
        ongoing: 2,
        concluding: 3
    };
})();


const games = (function() {
    let Game = function() {
            this.stage = gameStatus.starting;
        },
        ongoingGames = [],
        PlayerQueue = function() {
            this.queue = [];
            this.add = function(player) {
                this.queue.push(player);
            };
            this.size = function() {
                return this.queue.length;
            };
            this.pop = function() {
                return this.queue.pop()
            };
        },
        createNewGames = function() {
            gameModes.select();
        },
        concludeFinishedGames = function() {
            let finishedGames = ongoingGames.map(game => game.isOver());
        },

        update = function() {
            createNewGames();
            concludeFinishedGames();
        }

    return {
        /************************************************************
         * Player related processes
         * **********************************************************/
        waitingPlayers: new PlayerQueue(), //queue players waiting to play

        newPlayer: function(player) { //welcomes new players 
            console.log(`registering new player ${player.id}`);
            games.waitingPlayers.add(player);
            console.log(`${games.waitingPlayers.size()} players in the waiting queue`);
            update();
        },
        startNewGame: function(gameType, players) {
            console.log(`starting new game of type ${gameType.label}`);
        }

    };
})();

const gameModes = (function(g) {
    let types = {
        survive: {
            id: 1,
            label: "survive"
        },
        cooperate: {
            id: 2,
            label: "cooperate"
        },
        fight: {
            id: 3,
            label: "fight"
        }
    }

    return {
        select: function() {
            if (g.waitingPlayers.size() >= 2) {
                gameModes.modeCooperate()
            } else if (g.waitingPlayers.size() >= 1) {
                console.log("selecting next game mode");
                if (g.waitingPlayers.size() == 1) { //only one player go to mode survive
                    gameModes.modeSurvive();
                }
            } else {
                console.log("not enough players");
            }
        },

        /******************************************************
          * Triggers a game in one of the 3 games modes, selects
          * players and sends messages to game when mode is 
          * unavailable
         /******************************************************/
        modeSurvive: function() { //1 player 
            if (g.waitingPlayers.size() >= 1) {
                let player = g.waitingPlayers.pop();
                g.startNewGame(types.survive, player);
            }
        },

        modeCooperate: function() { //2 players 
            if (g.waitingPlayers.size() < 2) {
                sendMessage(g.address, modeStatus['unavailable']);
                return;
            }
            sendMessage(g.address, modeStatus['available']);
            let players = g.waitingPlayers.pop(2);
            g.start(g.modes.cooperate(players));
        }


    };
})(games);


module.exports = games;