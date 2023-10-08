const mongodb = require('mongodb');
const db = require('../Utils/database');

class Webinar {
    constructor(id, title, description, time, date, completed = false, userIds = []) {
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.title = title;
        this.description = description;
        this.time = time;
        this.date = date;
        this.completed = completed;
        this.userIds = userIds;
    }

    save() {
        const database = db.getDb();

        let dbOps;
        if (this._id) {
            // to update the webinar
            dbOps = database.collection('webinars').updateOne({ _id: this._id }, { $set: this })

        } else {
            // to insert a new webinar
            dbOps = database.collection('webinars').insertOne(this)
        }

        return dbOps
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err))
    }

    static fetchAll() {
        const database = db.getDb();

        return database.collection('webinars').find().toArray()
            .then(webinars => {
                return webinars;
            })
            .catch(err => console.log(err))

    }

    static find(filter) {
        const database = db.getDb();

        return database.collection('webinars').find(filter).toArray()
            .then(webinars => {
                return webinars;
            })
            .catch(err => console.log(err))
    }

    registerUser(userId) {
        this.userIds.push(userId);
        return this.save();
    }

    markAsCompleted() {
        this.completed = true;
        return this.save();
    }
}

module.exports = Webinar;