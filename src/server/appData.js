"use strict"


const localData = function(){

    return { 

    }
}

const loadLocalAppData = function( app ){
    return new Promise(resolve => {
        app.localData = localData( app ) 
        return resolve( app )
    })
}

module.exports = {
   loadLocalAppData 
}
