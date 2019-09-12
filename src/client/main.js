"use strict";
/*******************************************************************
* main.js 
* FranckEinstein90 
*
*******************************************************************/
const pardners = require('../pardners').pardners
const user = require('./user').user
const gameUI = require('./gameUI').gameUI

$( document ).ready(function(){
    socket = io(); //open socket to server
    user.ready(socket);  
    gameUI.ready(socket, user);
})


