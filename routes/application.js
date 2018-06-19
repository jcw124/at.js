let express = require('express');
let router  = express.Router();

let application_controller = require('../controllers/application_controller');

router.get('/', application_controller.index);

module.exports = router;