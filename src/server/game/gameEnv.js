/*******************************************************************************
 * space2D namespace
 * FranckEinstein
 *
 * Manages objects in the game space. Includes facilities to: 
 *
 *  - name them
 *  - keep track of their numbers, positions, direction and velocity
 *  - detect when the objects are colliding
 *
 * ****************************************************************************/

const gameObjects = require('/game/gameObjects');

const space2D = (function() {

    /*****************************************************************
    /* objects registers objects
    /****************************************************************/
    const objects = new Map();

    return {
        registerObject: function(gameObject) {

        },

        /************************************************************
         * space2D objects 
         ************************************************************/
        SpaceObject: function(coordinates, direction, velocity) {

        }

    };
})();
