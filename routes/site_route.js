console.log('03.3 siteRoute is loaded!!!');



const express = require('express');
const router  = express.Router();
const siteController = require('../controllers/site_controller');

router.get('/', siteController.index);

module.exports = router;
