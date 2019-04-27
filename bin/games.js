/*******************************************************************************
 * games namespace
 * FranckEinstein
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