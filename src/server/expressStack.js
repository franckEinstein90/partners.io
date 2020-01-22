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
const favicon = require('serve-favicon')

const viewSystem = require('@server/viewSystem').viewSystem
const cookieParser = require('cookie-parser')

const expressStack = function({
    root,
    staticFolder,
    routingSystem,
    faviconPath
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
    _app.use(favicon(faviconPath))

    routingSystem.configure(_app)
    return _app
}

module.exports = {
    expressStack
}