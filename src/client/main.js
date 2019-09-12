"use strict";
/*******************************************************************
 * main.js 
 * FranckEinstein90 
 *
 *******************************************************************/
const pardners = require('../pardners').pardners
const user = require('./user').user
const gameUI = require('./gameUI').gameUI

$(document).ready(function() {
    //div on page in which the game will be presented
    let $gameCanvas, socket, init

    init = function() {
        try {
            $gameCanvas = $('#gameCanvas')  //canvas on which game is rendered
            socket = io()                   //communication server client
            user.ready(socket)              //user init
            return true
        } catch (err) {
            pardner.errorHandler(err, pardner.stages.clientInit)
            return false
        }
    }

    if (init()) {
        try {
            gameUI.ready({canvas: $gameCanvas, socket})
        }
        catch(err){
            pardner.errorHandler(err, pardner.stages.clientInGame)
        }
    }
})
