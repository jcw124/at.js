console.log('04.2 The site controller is loaded!!!');
const db = require('../models');

//home page
exports.index = function (req, res) {
    db.Event.findAll({

    }).then(function (dbEvent) {
        console.log('dbTrip says: ', dbEvent);
        res.render('index', {
            layout: 'main',
            event: dbEvent
        });
    });
    // res.render('index');

};


//artist
exports.artist = function (req, res) {
    res.render('artist_signup', {
        layout: 'main'
    });
};




//===============================================
//=========== ADMIN SECTION =====================
//===============================================

//admin home page
exports.admin = function(req, res) {
        console.log('I am at the admin page!!!! yeah Finally!!!');
        db.Event.findAll({
        }).then(function(dbEvent) {
                //console.log('dbEvent says: ', dbEvent);
                res.render('admin_home', {layout: 'main_admin',
                                                event: dbEvent
                                            });
        });
    }

//     //login the user
// exports.login = function (req, res) {
//     res.render('index');
// };

//logout user
// exports.signOutUser = function (req, res) {
//     req.logout();
//     res.redirect("/");
// };


//update an event
exports.updateEvent = function (req, res) {
    res.render('admin_editEvent', {
        layout: 'main_admin'
    });
};

//go to update event page
exports.gotoUpdate = function(req, res) {
    db.Post.findOne({
        where: {
          id: req.params.id
        }
      })
      
        .then(function(dbPost) {
            console.log(dbPost);
          //res.json(dbPost);
        });
}

//add new event
// exports.newEvent = function (req, res) {
//     res.render('admin_addEvent', {
//         layout: 'main_admin'
//     });
// };
