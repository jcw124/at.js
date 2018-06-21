console.log("04.1 the event controller is loading!!!");

        const db = require('../models');

        
        console.log('the db.Event: +++++ ' + db.events);

        //event page
        module.exports ={
                index: //function(res) {res.render('event', {layout: 'main_events'});},
                 function(req, res){
                        db.events.findAll({
                                where: { eventId: req.events.id, eventName: req.events.eventName}
                        }).then(function(dbEvent) {
                                console.log('I am here');
                                console.log(dbEvent);
                                res.render('event', {layout: 'main_events'});
                        })
                }                   
        };
        
       