const Post = require('../../../models/post');
const Comment = require('../../../models/comment');

module.exports.index = async function(req, res){

  let posts = await Post.find({})
  .sort('-createdAt')   // To show the latest post first
  .populate('user')
  .populate({
      path: 'comments',
      populate: {
          path: 'user'
      }
  });

  return res.json(200, {
    message : "List of Posts",
    posts :posts
  })
}

module.exports.destroy = async function(req, res){
  try{
      let post = await Post.findById(req.params.id);

      //if (post.user == req.user.id){  
          post.remove();  // delete the post

          await Comment.deleteMany({post: req.params.id});  // delete it's comments

          return res.json(200, {
            message: 'Post and associatd comments deleted successfully'
          });

      // }else{
      //     req.flash('error', 'You cannot delete this post!');
      //     return res.redirect('back');
      // }

  }catch(err){
    console.log('********',err);
      return res.json(500, {
        message: "Internal Server Error"
      });
  }
}