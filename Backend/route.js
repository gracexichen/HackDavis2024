const router = require('express').Router();
const {tester} = require('./controller.js');
router.get('/', tester);
module.exports = router;