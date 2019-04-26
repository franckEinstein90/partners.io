/*****************************************************************************
 *
 *
 * ***************************************************************************/

const Screen = (function (){ 
        return {
            topleft: 1,
            topright: 2,
            bottomleft: 3, 
            bottomright: 4
    };
})();


const System = (function (){
    return {
        cartesian: 1, 
        polar:2
    };
})();



/*****************************************************************************
 *
 *
 * ***************************************************************************/

const coordinateSystem2D = (function() {

    let origin = Screen["topleft"], 
        system = System["cartesian"],
        shape = { height : 9000, width : 16000 },
        isPoint2D = x => x instanceof coordinateSystem2D.Point2D;

    return {

        setViewport: function( o ){
            origin = o;
        }, 

        /*******************************************************
        * The namespace defines 3 classes:
        *   - Point2D: a coordinate in 2D space with methods
        *     
        *   - Vector2D: a vector in 2D space with methods 
        *     magnitude, normalize
        *   - Basis: A set of 2 non-parallel vectors
        *   - Reference Frame: A basis and an origin 
        *******************************************************/
         Point2D: function(x, y) {
            this.x = x;
            this.y = y;
        },
       Vector2D: function(a, b){
            if(isPoint2D(a) &&  isPoint2D(b)){ //a,b are points
                let v = a.vectorTo(b);
                coordinateSystem2D.Point2D.call(this,v.x,v.y);
                return;
            }
            //a,b are numbers
            coordinateSystem2D.Point2D.call(this,a,b);
        },
        Basis: function(v1,v2){
            //verify vectors are not parallel
            this.iVector = v1;
            this.jVector = v2;
        },
       ReferenceFrame: function(origin, basis, type){
            this.origin = origin;
            this.basis = basis;
            this.type = type;
        },

        /*******************************************************
        * Bread and butter functions 
        *******************************************************/
         distance: function(p1, p2) {
            return Math.sqrt(
                ((p2.x - p1.x) * (p2.x - p1.x)) +
                ((p2.y - p1.y) * (p2.y - p1.y)));
        }
    }
})();

/*****************************************************************************
 * Methods for Point2D
 *
 * ***************************************************************************/

coordinateSystem2D.Point2D.prototype.vectorTo = function(p){
    return new coordinateSystem2D.Vector2D(p.x - this.x, p.y - this.y);
}


/*****************************************************************************
 * Methods for Vector2D
 *
 * ***************************************************************************/

coordinateSystem2D.Vector2D.prototype = Object.create(coordinateSystem2D.Point2D.prototype);
coordinateSystem2D.Vector2D.prototype.constructor = coordinateSystem2D.Vector2D;
coordinateSystem2D.Vector2D.prototype.magnitude = function(){
    return Math.sqrt((this.x * this.x)+(this.y * this.y));
}
coordinateSystem2D.Vector2D.prototype.normalize = function(){
    let mag = this.magnitude();
    if(mag > 0){ 
        return new coordinateSystem2D.Vector2D(this.x/mag, this.y/mag);
    }
    return undefined;
}


module.exports = {
    coordinateSystem2D
};
