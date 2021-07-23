const Comment = require('../models/comment');
const Post =  require('../models/post');

module.exports.create = function(req, res){
  Post.findById(req.body.post, function(err, post){
    console.log("Working fine", req.body);

    if(post){
      console.log("Post found : ", post);
      Comment.create({
        content : req.body.content,
        post : req.body.post,
        user : req.user._id
      }, function(err, comment){
        // handle error 

        console.log("Comment created", comment);
        post.comments.push(comment);
        post.save();

        res.redirect('/');
      });
    }


  });

}