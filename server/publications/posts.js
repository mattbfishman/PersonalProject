Meteor.publish('Allposts', function(){
	return Posts.find();	
});  

Meteor.publish('posts', function( postId ) {

	if(postId){
		return [
      		Posts.find( { 'postId': postId } ),
    	];
	} 
  	else {
	    return null;
	}
});
