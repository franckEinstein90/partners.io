/******************************************************************************
 * pardners 
 * by franckEinstein90
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 *
 * ***************************************************************************/
"use strict"


const sqlite3 = require('sqlite3')

const appDatabase = (function(){

    let _filePath 
    let _db = null

    return {

        configure: function({
            filePath 
        }){
            return new Promise((resolve, reject) => {
                _filePath = filePath
                _db = new sqlite3.Database(  filePath,  (err)=> {
                    if(err){
                        reject(err)
                    } else {
                        return resolve(1) 
                    }
                })
            })
        }    
    }

})()


module.exports = {
    appDatabase
}
