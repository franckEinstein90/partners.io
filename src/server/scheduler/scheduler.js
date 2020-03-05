/******************************************************************************
 * pardners 
 * by franckEinstein90
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 *
 * ***************************************************************************/
"use strict"
/*****************************************************************************/
const uuidv4 = require('uuid/v4')

class Event {
    constructor({
        frequency, //the frequency of the event in mins
        execute, //the function to execute
    }) {

        this.ID = uuidv4()      //each event gets a unique id
        this.lastExecution = 0  //the duration in mins since the last excution
        this.frequency = frequency
        this.execute = execute

    }

    update( runningTime ) {
        this.lastExecution += 1
        if ( this.lastExecution >= this.frequency ) {
            this.execute(runningTime, this.ID)
            this.lastExecution = 0
        }
    }
}

//schedules and executes events as 
//a function of the application's 
//running time in minutes

const cronJob = require('node-cron')
const scheduler = (function() {

    let _runningTime = 0
    let _events = []

    return {
        start: function() {
            cronJob.schedule('* * * * *', scheduler.cronUpdate)
        },

        newEvent: function({
            frequency,
            execute
        }) {
            let ev = new Event({
                frequency,
                execute
            })
            _events.push(ev)
        },

        cronUpdate: function() {
            _runningTime += 1
            _events.forEach(ev => ev.update(_runningTime))
            console.log(`App has been running for ${_runningTime} minutes`)
        }
    }
})()

module.exports = {
    scheduler
}