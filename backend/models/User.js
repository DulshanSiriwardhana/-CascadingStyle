const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        about: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    }
)

const User = mongoose.model("User", UserSchema);
module.exports = User;