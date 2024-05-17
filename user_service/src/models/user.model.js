const mongoose = require('mongoose');
const Schema = mongoose.Schema
const crypto = require('crypto');

const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    role:
    {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
    hashed_password: {
        type: String
    },
    salt: {
        type: String
    },
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
})
UserSchema.virtual('password')
    .set(function (password) {
        this._password = password
        this.salt = this.makeSalt(),
            this.hashed_password = this.encryptPassword(password)
    })
    .get(function () {
        return this._password;
    })
UserSchema.methods = {
    authenticate: function (password){
        return this.encryptPassword(password) === this.hashed_password
    },
    encryptPassword: function (password) {
        try {
            return crypto.createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        }
        catch (error) {

        }
    },
    makeSalt: function () {
        // @ts-ignore
        return (Math.round(new Date().valueOf() * Math.random()) + ' ')
    }
}
var User = mongoose.model('User', UserSchema);
module.exports = User