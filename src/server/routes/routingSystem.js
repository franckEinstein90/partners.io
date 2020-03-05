/******************************************************************************
 * pardners 
 * by franckEinstein90
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 *
 * ***************************************************************************/
"use strict"

const express = require('express')
const appRoot = require('@routing/appRoot').appRoot

const routingSystem = (function(){

    let _router = express.Router()

    return{
        configure: function( app ){
            app.use('/', _router)
            _router.get('/', appRoot.serve)
        }


    }

})()


module.exports = {
    routingSystem
}
