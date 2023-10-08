const Models = require('../../Utils/allModels');

exports.getAllCourses = (req, res, next) => {
    Models.Courses.fetchAll()
        .then(courses => {
            console.log(courses);
            return res.status(200).json(courses);
        })
        .catch(error => {
            return res.status(500).json({ error: 'Internal server error', error });
        });
};

exports.filterCoursesByDomain = (req, res, next) => {
    Models.Courses.find({ domain: req.body.domain })
        .then(courses => {
            return res.status(200).json(courses);
        })
        .catch(error => {
            return res.status(500).json({ error: 'Internal server error', error });
        });
};

exports.filterCoursesByLanguage = (req, res, next) => {
    Models.Courses.find({ language: req.body.language })
        .then(courses => {
            return res.status(200).json(courses);
        })
        .catch(error => {
            return res.status(500).json({ error: 'Internal server error', error });
        });
};