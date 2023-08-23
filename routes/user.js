const express = require('express')

const router = express.Router()

const UserController = require('../controlles/UserController');

const authenticate = require('../middleware/authenticate')


router.get('/',UserController.index);
router.post('/store', UserController.store)
router.post('/show', UserController.show);
router.post('/update', UserController.updata);
router.post('/delete', UserController.deleteUser);

module.exports = router;


