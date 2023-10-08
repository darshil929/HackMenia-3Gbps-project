const Models = require('../../Utils/allModels');

exports.addJob = (req, res) => {
    const { title, domain, description, wage } = req.body;

    // Create a new job object
    const newJob = new Models.Jobs(null, title, domain, description, wage);

    // Save the job to the database
    newJob.save()
        .then(() => {
            res.status(201).json({ message: 'Job added successfully' });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        });
};


exports.getAllJobs = (req, res) => {
    Models.Jobs.fetchAll()
        .then(jobs => {
            res.status(200).json(jobs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Internal server error' });
        });
};

exports.applyForJob = (req, res) => {
    const { userId, jobId, quizScore } = req.body;

    // to check if the user's quiz score is greater than or equal to 3
    if (quizScore >= 3) {
        Models.Jobs.findById(jobId)
            .then(job => {
                if (job) {
                    return job.save();
                } else {
                    throw new Error('Job not found');
                }
            })
            .then(() => {
                res.status(200).json({ message: 'Application successful' });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: 'Internal server error' });
            });
    } else {
        res.status(400).json({ error: 'Quiz score is too low to apply for this job' });
    }
};
