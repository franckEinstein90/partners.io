/******************************************************************************
 * pardners 
 * by franckEinstein90
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 *
 * ***************************************************************************/
"use strict"

const appRoot = function( app ){

    let router =  require('express').Router()
    router.get('/', function(req, res){
        let pageData = {
            title: app.name,
            subTitle: 'fight or cooperate', 
            author: "FranckEinstein90", 
            description: "a special game" 
        }    
        res.render('default', pageData)
    })
    app.routers.push(router)
    return app

}


let defaultWebInterface = function( app ){
    return appRoot( app )
}

module.exports = {
   defaultWebInterface 
}
