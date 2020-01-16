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

  let runningTime = 0
  let events = []

  return {

    start : function(){ 
      cronJob.schedule('* * * * *', scheduler.cronUpdate)
    }, 

    newEvent : function({
      frequency, //minutes
      callback
    }){
        events.push({
          frequency, 
          lastRefresh: 0, 
          callback
        })
    },

    cronUpdate: function(){
      runningTime += 1
      console.log(`Running time: ${runningTime} (min)`)

      events.forEach(event => {
        event.lastRefresh += 1
        if( event.lastRefresh >=  event.frequency ){
          event.lastRefresh = 0
          return event.callback()
        } 
      })
    }


  }
})()

module.exports = {
  scheduler
}
