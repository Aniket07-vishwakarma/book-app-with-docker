const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments:  {
        type: String
    }
})
var Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment;