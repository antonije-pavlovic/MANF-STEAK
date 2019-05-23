 const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    Title: String,
    Subtitle: String,
    Text: String,
    DateTime: Date,
    Picture: String,
    User_id: String
});
module.exports = mongoose.model('Post',PostSchema);