/******************************************************************************
 * pardners 
 * by franckEinstein90
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 *
 * ***************************************************************************/

"use strict"



const cronJob = require('node-cron')

const scheduler = (function(){

  return {
    start : function(){ 
      cronJob.schedule('* * * * *', scheduler.cronUpdate)
    },
    
    newEvent: function(){
            
    },

    cronUpdate: function(){
      runningTime += 1
      console.log(runningTime)
    }
  }
})()

module.exports = {
  scheduler
}
