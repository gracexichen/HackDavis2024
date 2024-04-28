const router = require('express').Router();
const {tester, addUser} = require('./controller.js');
router.get('/', tester);
router.post('/addUser', addUser);
module.exports = router;