"use strict"

const addMarketingModule = async function( app ){

   let router =  require('express').Router()
   router.get('/about', function(req, res){
      let pageData = {
         title: app.name,
         subtitle: 'About pardners', 
         author: "FranckEinstein90", 
         description: "a special game" 
     }    
     res.render('about', pageData)  
   })

   app.routers.push(router)
   return app
}
module.exports = {
   addMarketingModule
}