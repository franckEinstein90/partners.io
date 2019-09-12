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
            $gameCanvas = $('#gameCanvas')
            socket = io() //open socket to server
            user.ready(socket)
            return true
        } catch (err) {
            pardner.errorHandler(err, pardner.stages.clientInit)
            return false
        }
    }

    if (init()) {
        gameUI.ready(socket, $gameCanvas);
    }
})