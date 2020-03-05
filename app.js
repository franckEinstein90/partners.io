#!/usr/bin/env node
/******************************************************************************
 * pardners 
 * by franckEinstein90
 * ---------------------------------------------------------------------------
 *
 * Cooperate, compete, or just survive
 * ***************************************************************************/
"use strict"
/*****************************************************************************/
require('module-alias/register')
/*****************************************************************************/
const app = {
    name: "pardners", 
    root: __dirname
}
/*****************************************************************************/
require('@features').addFeatureSystem( app       ) 
/*****************************************************************************/
/*.then( require('@errors').addErrorRecovery      )
.then( require('@requirements').addRequirements   )
.then( require('@security').addSecuritySystem     ) //security system 
*/
.then( require('@appData').loadLocalAppData       ) //app data
/*.then( require('@requirements').objects         ) //business objects
.then( require('@customers').addCustomerModule    )*/
.then( require('@appEngine').addAppEngine                   ) //app mechanics
.then( require('@business/marketing').addMarketingModule    ) //marketing
/*.then( require('@business').paymentSystem       ) //money
/*****************************************************************************/
.finally( _ => app.run() )             //we're in business :)


