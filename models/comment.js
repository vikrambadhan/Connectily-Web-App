const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content :{
       type : String,
       reuired : true
  },
  //comment belongs to a user
  user :{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  },
  post : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Post'
  }
},{
    timestamps =  true
});

const Comment = mongoose.model('commnet', commentSchema);
module.exports = Comment;



