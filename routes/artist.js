//import { builtinModules } from 'module';

const express = require('express');
const router  = express.Router();
//const passport  = require('passport');
const artistController = require('../controllers/artist_controller');
//const isAuthenticated = require("../config/middleware/isAuthenticated");    

router.get('/', function(req, res) {
    console.log("WHAAAAAT IISSSS HAPPPENINNNGG")
});
   router.get('/', artistController.artist)
// router.post('/update/artists', isAuthenticated, artistController.update);
// router.post('/new/artist', isAuthenticated, artistController.create);

module.exports=router

