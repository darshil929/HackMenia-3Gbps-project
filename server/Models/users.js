const mongodb = require('mongodb');
const db = require('../Utils/database');

class User {
    constructor(id, prisonId, password, role) {
        this._id = id ? new mongodb.ObjectId(id) : null;
        this.prisonId = prisonId;
        this.password = password;
        this.role = role;
    }

    save() {
        const database = db.getDb();

        let dbOps;
        if (this._id) {
            // to update the User
            dbOps = database.collection('users').updateOne({ _id: this._id }, { $set: this })

        } else {
            // to insert a new User
            dbOps = database.collection('users').insertOne(this)
        }

        return dbOps
            .then(result => {
                console.log(result);
            })
            .catch(err => console.log(err))
    }

    async login(email) {
        const database = db.getDb();

        let dbOps = await database.collection('users').findOne({ email });

        return dbOps;
    }
}

module.exports = User;