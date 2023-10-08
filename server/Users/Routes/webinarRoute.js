const express = require('express');
const router = express.Router();
const webinarCtrl = require('../Controllers/webinarsCtrl');

router.get('/webinars', webinarCtrl.getAllWebinars);

router.post('/webinars/register', webinarCtrl.postRegisterUser);

module.exports = router;