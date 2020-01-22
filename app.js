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
/*****************************************************************************/
require('module-alias/register')


const path = require('path')

const routingSystem = require('@routing/routeSystem').routingSystem

const app = require('@server/expressStack').expressStack({
      root: __dirname,
      staticFolder: path.join(__dirname, 'public'), 
      faviconPath: path.join(__dirname, 'public', 'favicon.png'),
      routingSystem 
    })

routingSystem.configure( app )
const httpServer = require('@server/httpServer').httpServer( app )

const appDatabase   = require('@server/db').appDatabase
const scheduler = require('@scheduler').scheduler
scheduler.start()
scheduler.newEvent({
    frequency : 1, 
    execute   : x => console.log('da for atum')
 })
scheduler.newEvent({
    frequency : 2, 
    execute   : x => console.log('fdsa fkdlsa fdsa')
 })


appDatabase.configure({
    filePath: './appData.db'
    })
.finally( _ => console.log(`pardners running on port ${httpServer.port}`))



const io = require('socket.io')(httpServer.server)
const messages = require('@src/messageSystem').messageSystem
messages.configure(io)

