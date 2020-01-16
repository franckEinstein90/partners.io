/******************************************************************************
 * pardners 
 * by franckEinstein90
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 *
 * ***************************************************************************/
"use strict"

const appRoot = (function(){

    let _router = null

    return{
        serve: function(req, res, next){
            let pageData = {
                title:'fdas', 
                subTitle: 'fight or cooperate'
            }    
            res.render('index', pageData)
        }
    }
})()

module.exports = {
    appRoot
}
