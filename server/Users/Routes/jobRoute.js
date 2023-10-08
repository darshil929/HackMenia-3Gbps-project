const express = require('express');
const router = express.Router();
const jobCtrl = require('../Controllers/jobCtrl');

// Add a new job
router.post('/jobs/add', jobCtrl.addJob);

router.get('/jobs', jobCtrl.getAllJobs);

router.post('/jobs/apply', jobCtrl.applyForJob);

module.exports = router;
