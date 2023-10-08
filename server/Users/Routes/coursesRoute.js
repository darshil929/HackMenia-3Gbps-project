const express = require('express');

const courseCtrl = require('../Controllers/coursesCtrl');

const router = express.Router();

router.get('/courses', courseCtrl.getAllCourses);

router.get('/filter-courses-domain', courseCtrl.filterCoursesByDomain);

router.get('/filter-courses-language', courseCtrl.filterCoursesByLanguage);

module.exports = router;