console.log('04.2 The site controller is loaded!!!');
    

module.exports ={
    index: function(req, res) {
        res.render('index');
    },

    artist: function(req, res) { 
        res.render('artist_signup', {
            layout: 'main'
        });
    },

    // create: function(req, res) {

    // }.then(function(subscribe) {
                
    //     res.render('artist_signup', {
    //         layout: 'main'
    //     })
    // }),
}