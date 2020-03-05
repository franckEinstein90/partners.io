/******************************************************************************
 * pardners 
 * by franckEinstein90
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 *
 * ***************************************************************************/

"use strict"

const messageSystem = (function(){
    let _io = null

    return {
        configure: function( io ){
            _io = io
            _io.on('connection', function( socket ){
                console.log('new user connection')
            })
        }
    }

})()


module.exports = {
    messageSystem
}
