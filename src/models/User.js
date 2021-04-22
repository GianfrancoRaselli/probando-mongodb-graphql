const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    age: Number
});

module.exports = model('User', userSchema);