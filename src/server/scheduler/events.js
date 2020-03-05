
/******************************************************************************
 * pardners 
 * by franckEinstein90
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 *
 * ***************************************************************************/
"use strict"

const events = (function() {


  let eventRegistrar = new Map()

  let generateUUID = () => {
          let d = new Date().getTime();
          if (typeof performance !== 'undefined' &&
              typeof performance.now === 'function') {
              d += performance.now(); //use high-precision timer if available
          }
          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
              let r = (d + Math.random() * 16) % 16 | 0;
              d = Math.floor(d / 16);
              return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
          })
      }

  return {

      eventState: {
          on: 1,
          off: 0
      },

     Event: function(state) { 

          this.id = generateUUID()
          this.onOffActions = []
          this.onOnActions = []
          this.onFlipActions = []

          if (state === undefined) {
              this.state = events.eventState.on;
          } else {
              this.state = state;
          }

      }

  }
})()


/******************************************************************************
* Event class prototype
* 
* ***************************************************************************/

events.Event.prototype = {

  get isOn() {
      return (this.state == events.eventState.on);
  },

  get isOff() {
      return (this.state === events.eventState.off);
  },

  on: function() { //event is ongoing
      if (this.isOff) {
          this.state = events.eventState.on;
          this.onOnActions.forEach(x => x());
      }
  },

  off: function() { //event is offgoing
      if (this.isOn) {
          this.state = events.eventState.off;
          this.onOffActions.forEach(x => x());
      }
  },

  flip: function() {
      if (this.isOn) {
          this.off();
      } else {
          this.on();
      }
      this.onFlipActions.forEach(x => x());
  }
};


module.exports = {
  events
}