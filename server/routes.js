const express = require('express');
const authCtrl = require('./Users/Controllers/authCtrl');

const router = express.Router();

router.post('/login', authCtrl.login);
router.post('/register', authCtrl.register);

module.exports = router;