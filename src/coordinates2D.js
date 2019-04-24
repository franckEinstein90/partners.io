let coordinateSystem2D = (function() {
    let origin = "top/left",
        height = 9000,
        width = 16000;

    return {
        Point2D: function(x, y) {
            this.x = x;
            this.y = y;
        },
        Vector2D: function(x,y){
            coordinateSystem2D.Point2D.call(this,x,y);
        },
        Basis: function(v1,v2){
            //verify vectors are not parallel
            this.iVector = v1;
            this.jVector = v2;
        },
        ReferenceFrame: function(origin, basis){
            this.origin = origin;
            this.basis = basis;
        },
        distance: function(p1, p2) {
            return Math.sqrt(
                ((p2.x - p1.x) * (p2.x - p1.x)) +
                ((p2.y - p1.y) * (p2.y - p1.y)));
        },
        CoordinateSystem: function(p) {
            //creates a new coordinate system 
            //relateive ot this point
        }
    }
})();


coordinateSystem2D.Vector2D.prototype.magnitude = function(){
    return Math.sqrt((this.x * this.x)+(this.y * this.y));
}

coordinateSystem2D.Vector2D.prototype.normalize = function(){
    let mag = this.magnitude();
    return new coordinateSystem2D.Vector2D(this.x/mag, this.y/mag);
}


module.exports = {
    coordinateSystem2D
};
