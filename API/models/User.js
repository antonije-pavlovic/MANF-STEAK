const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    Username: String,
    Email: String,
    Password: String
});
module.exports = mongoose.model('User',UserSchema);