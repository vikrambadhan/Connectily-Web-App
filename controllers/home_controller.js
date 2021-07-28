const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function(req, res){
    try{
        // populate user of each post
        let posts = await Post.find({})
        .populate('user')
        .populate({
        path : 'comments',
        populate : {
        path : 'user'
    }
});

   let users = await User.find({})

   return res.render('home',{
        title : "Codeial | Home",
        posts : posts,
        all_users: users
    });

    }catch(err){
        console.log('Error');
        return;

    }
      
}




// module.exports.actionName = function(req, res){}

// Post.find({}).populate('comments').then(function());

// posts = Post.find({}).populate('comment').exec();

//posts.then()
   
    
