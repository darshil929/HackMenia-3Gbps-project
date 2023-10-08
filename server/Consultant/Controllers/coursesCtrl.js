const Models = require('../../Utils/allModels');

exports.getAllCourses = (req, res, next) => {
    Models.Courses.fetchAll()
        .then(courses => {
            // console.log(courses);
            return res.status(200).json(courses);
        })
        .catch(error => {
            return res.status(500).json({ error: 'Internal server error', error });
        });
};

exports.postCourse = (req, res, next) => {
    const { title, description, language, domain, ytUrl } = req.body;

    const course = new Models.Courses(null, title, description, language, domain, ytUrl);
    course.save()
        .then(result => {
            return res.status(201).json(course);
        })
        .catch(error => {
            return res.status(500).json({ error: 'Internal server error', error });
        });
};