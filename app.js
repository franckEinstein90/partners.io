#!/usr/bin/env node

/******************************************************************************
 * pardners 
 * by franckEinstein90
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 * This is the entry point
 * ***************************************************************************/
"use strict"
require('module-alias/register')


const createError = require('http-errors')
const path = require('path')
const staticFolder = path.join(__dirname, 'public')

const routingSystem = require('@routing/routeSystem').routingSystem
//express app
let app = require('@server/expressStack').expressStack({
    root: __dirname,
    staticFolder,
    routingSystem
})
//routing system
routingSystem.configure(app)
const httpServer = require('@server/httpServer').httpServer(app)
const debug = require('debug')('pardners:server');



const appDatabase = require('@server/db').appDatabase
const scheduler = require('@scheduler').scheduler
scheduler.start()
scheduler.newEvent({
    frequency: 1,
    callback: x => console.log('da for atum')
})
scheduler.newEvent({
    frequency: 2,
    callback: x => console.log('fdsa fkdlsa fdsa')
})


appDatabase.configure({
        filePath: './appData.db'
    })
    .finally(_ => console.log(`pardners running on port ${httpServer.port}`))

//.io = require('socket.io')(server)



httpServer.on('listening', onListening);


const io = require('socket.io')(httpServer.server)
const messages = require('@src/messageSystem').messageSystem
messages.configure(io)

/**
 * Event listener for HTTP server "error" event.
 */



/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = httpServer.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}