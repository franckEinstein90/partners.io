const expect = require('chai').expect;
const coordinateSystem2D = require('../src/coordinates2D').coordinateSystem2D;



describe('coordinateSystem2D.Vector2D()', function() {
    it('has a magnitude function', function(){
       let p1 = new coordinateSystem2D.Vector2D(1,1);
       expect(p1).to.have.property('magnitude');
       expect(p1.magnitude()).to.equal(Math.sqrt(2)); 
    })

    it('has a normalize function', function(){

       let difference = function(val1, val2){
            return Math.abs(val1 - val2);
       }, 
       p1 = new coordinateSystem2D.Vector2D(12, -5).normalize();
       expect(difference(p1.x , 0.923)).to.be.below(0.01);
       expect(difference(p1.y, -0.385)).to.be.below(0.01);
    })
})
describe('coordinateSystem2D.Basis()', function() {
    it(' function', function(){
       let v1 = new coordinateSystem2D.Vector2D(1,0),
           v2 = new coordinateSystem2D.Vector2D(0,1),
           b1 = new coordinateSystem2D.Basis(v1,v2);
           expect(b1).to.have.property('iVector');
        
       //    expect(b1).to.be.an.instanceof(coordinateSytem2D.Basis);
    })
})


describe('coordinateSystem2D.distance()', function() {
    it('returns the distance between 2 points', function() {
        let test1 = "5805 2176 4000 1479 1935",
            test2 = "7884 5109 12017 5502 4152";

        let testFun = function(testStr) {
            let testData = testStr.split(/\s/g),
                p1 = {
                    x: parseInt(testData[0]),
                    y: parseInt(testData[1])
                },
                p2 = {
                    x: parseInt(testData[2]),
                    y: parseInt(testData[3])
                };
            expect(
                Math.round(
                    coordinateSystem2D.distance(p1, p2))).to.equal(parseInt(testData[4]));
        };

        testFun(test1);
        testFun(test2);

    });
});
