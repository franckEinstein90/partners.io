/******************************************************************************
 * pardners, by franckEinstein90
 * 2020
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 *
 * ***************************************************************************/
"use strict"

const hbs = require('express-handlebars')
const viewSystem = (function(){

    return{
        configure: function({
            app, 
            root
        }){
            app.engine('hbs', hbs({
                extname: 'hbs', 
                defaultLayout: 'main', 
                layoutsDir: root + '/views/layouts', 
                partialsDir: root + '/views/partials/'
            }))
            app.set('view engine', 'hbs')
        }
    }
})()


module.exports = {
    viewSystem
}



