const mongodb = require('mongodb');
const db = require('../Utils/database');

class Job {
    constructor(id, title, domain, description, wage, eligibleUserIds = []) {
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.title = title;
        this.domain = domain;
        this.description = description;
        this.wage = wage;
        this.eligibleUserIds = eligibleUserIds;
    }

    save() {
        const database = db.getDb();

        let dbOps;
        if (this._id) {
            // to update the job
            dbOps = database.collection('jobs').updateOne({ _id: this._id }, { $set: this });
        } else {
            // to insert a new job
            dbOps = database.collection('jobs').insertOne(this);
        }

        return dbOps
            .then(result => {
                // console.log(result);
            })
            .catch(err => console.log(err));
    }

    static findById(jobId) {
        const database = db.getDb();
        return database.collection('jobs').find({ _id : new mongodb.ObjectId(jobId) })
            .next()
            .then(job => {
                console.log(job);
                return job;
            })
            .catch(err => console.log(err)) 
    }

    static fetchAll() {
        const database = db.getDb();

        return database.collection('jobs').find().toArray()
            .then(jobs => {
                return jobs;
            })
            .catch(err => console.log(err));
    }
}

module.exports = Job;