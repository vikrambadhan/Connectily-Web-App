const Like = require("../models/like");
const Post = require('../models/post');
const Comment = require('../models/comment');


module.exports.toggleLike = async function(req, res){
  try{

       // Likes/toggle/?id=abcdef&type=Post

      let likeable;
      let deleted = false;

      if(req.query.type == 'Post'){
        likeable = await Post.findbyID(req.query.id).populate('likes');
      }else{
        likeable = await Comment.findbyId(req.query.id).populate('likes');
      }

      // Check if a like already exists
      let existingLike = await Like.findOne({
        likable: req.query.id,
        onModel:req.query.type,
        user: req.user._id
      })

      // if a like already exists then delete it
      if(existingLike){
        likeable.likes.pull(existingLike._id);
        likeable.save();

        existingLike.remove();
        deleted = true;

      }else{
        // else make a new like

        let newLike = await Like.create({
          user: req.query._id,
          likeable: req.query.id,
          onModel: req.query.type
        });

        likeable.likes.push(like._id);
        likable.save();

      }

      return res.json(200,{
        message: "Request Successful",
        data:{
          deleted : deleted
        }
      })

  }catch(err){
       console.log(err);
       return res.json(500, {
           message :'Internal Server Error'
        });
    }
}