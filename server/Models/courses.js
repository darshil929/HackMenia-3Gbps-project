const mongodb = require('mongodb');
const db = require('../Utils/database');

class Course {
    constructor(id, title, description, language, domain, ytUrl) {
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.title = title;
        this.description = description;
        this.language = language;
        this.domain = domain;
        this.ytUrl = ytUrl;
    }

    save() {
        const database = db.getDb();

        let dbOps;
        if (this._id) {
            // to update the course
            dbOps = database.collection('courses').updateOne({ _id: this._id }, { $set: this })

        } else {
            // to insert a new course
            dbOps = database.collection('courses').insertOne(this)
        }

        return dbOps
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err))
    }

    static fetchAll() {
        const database = db.getDb();

        return database.collection('courses').find().toArray()
            .then(courses => {
                return courses;
            })
            .catch(err => console.log(err))

    }

    static find(filter) {
        const database = db.getDb();

        return database.collection('courses').find(filter).toArray()
            .then(courses => {
                return courses;
            })
            .catch(err => console.log(err))

    }
}

module.exports = Course;