
class Feature {
    constructor( options ){
        this.label       = options.label
        this.implemented = options.implemented || false
        this.method      = options.method || null
    }
}

const featureSystem = function( app ){

    let _app = app
    let _features = new Map()

    return {

        implements  : label => _features.has(label), 

        add : function( feature ){
            let label = feature.label
            _features.set(feature.label, feature)
            if( 'method' in feature){
                _app[feature.label] = feature.method
            }
        }, 

        get list() {
            let featureList = {} 
            _features.forEach((_ , label) => featureList[label] = true)
            return featureList
        }

    }
}

const addFeatureSystem = function( app ){

    return new Promise( resolve => {
        let features = featureSystem(app)
        Object.defineProperty( 
            app, 
            'features', {get: function(){return features.list}}
        ) 
        
        app.features = 
        app.Feature = Feature
        app.addFeature = features.add
        app.implements = features.implements
        return resolve(app)
    })

}

module.exports = {
    Feature, 
    addFeatureSystem
}
