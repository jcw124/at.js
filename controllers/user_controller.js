console.log('04.2 The user controller is loaded!!!');



const db = require('../models');


//admin home page
exports.index = function (req, res) {
    res.render('admin_home', {
        layout: 'main_admin'
    });
};

    //admin home page
    // exports.index = function(req, res) {
    //     console.log('<======= admin page starts=======>');
    //     res.render('admin_home', {
    //         layout: 'main_admin'
    //     });
    // };

    console.log('<====04.2.1 END OF user controller is REACHED!!!====>');