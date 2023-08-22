const express = require('express')

const router = express.Router()

const UserController = require('../controlles/UserController');


router.get('/', UserController.index);
router.post('/show', UserController.show);
router.post('/store', UserController.store);
router.post('/update', UserController.updata);
router.post('/delete', UserController.deleteUser);

module.exports = router;


