Meteor.methods({
	'deletePost'(postId){
      Posts.remove({"_id": postId});
    },
});