/*******************************************************************
 * Tests for /src/player
 * *****************************************************************/
const expect = require('chai').expect;
const players = require('../src/player').players;
const validator = require('validator');


describe('Player class', function(){
    it('has a unique UUID', function(){
        let player = new players.Player();
        expect(validator.isUUID(player.id)).to.equal(true);
    })
});






