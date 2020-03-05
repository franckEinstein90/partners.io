/******************************************************************************
 * pardners 
 * by franckEinstein90
 * server stack setup
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 *
 * ***************************************************************************/
"use strict"

/*const logger = require('morgan')*/
const express = require('express')
/*const favicon = require('serve-favicon')

const viewSystem = require('@server/viewSystem').viewSystem
const cookieParser = require('cookie-parser')
*/
const expressStack = function( app ) {
    app.express = express()
    app.express.use(express.json())
    app.express.use(express.urlencoded({
        extended: false
    }))
    app.addFeature({label: 'express'})
    return app
}

const addFeature = function( app ){
    return expressStack(app)
}

module.exports = {
   addFeature 
}