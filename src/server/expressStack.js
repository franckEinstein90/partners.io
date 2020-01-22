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

const logger = require('morgan')
const express = require('express')
const viewSystem = require('@server/viewSystem').viewSystem
const cookieParser = require('cookie-parser')

const expressStack = function({
    root,
    staticFolder,
    routingSystem,
}) {
    let _app = express()

    viewSystem.configure({
        app: _app,
        root
    })
    _app.use(express.json())
    _app.use(express.urlencoded({
        extended: false
    }))
    _app.use(logger('dev'))
    _app.use(cookieParser())
    _app.use(express.static(staticFolder))
    routingSystem.configure(_app)
    return _app
}

module.exports = {
    expressStack
}