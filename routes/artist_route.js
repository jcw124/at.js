let express = require('express');
let router  = express.Router();

let artist_controller = require('../controllers/artists_controller');
//let isAuthenticated = require("../config/middleware/isAuthenticated");

//router.get('/', isAuthenticated, trips_controller.index);

router.post('/new', isAuthenticated, artist_controller.createArtist);

module.exports = router;