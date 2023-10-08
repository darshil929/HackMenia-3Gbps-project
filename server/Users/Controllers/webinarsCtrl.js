const Models = require('../../Utils/allModels');

exports.getAllWebinars = (req, res, next) => {
    Models.Webinars.fetchAll()
        .then(webinars => {
            return res.status(200).json({ webinars });
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({ message: 'Failed to fetch webinars.' });
        });
};

exports.postRegisterUser = (req, res, next) => {
    const webinarId = req.body.webinarId;
    const userId = req.body.userId;

    Models.Webinars.find({ _id: webinarId })
        .then(webinars => {
            if (webinars.length === 1) {
                const webinar = webinars[0];
                webinar.registerUser(userId)
                    .then(result => {
                        return res.status(200).json({ message: 'User registered for the webinar!' });
                    })
                    .catch(err => {
                        return res.status(500).json({ message: 'User registration failed.' });
                    });
            } else {
                return res.status(404).json({ message: 'Webinar not found!' });
            }
        })
        .catch(err => {
            return res.status(500).json({ message: 'User registration failed.' });
        });
};

