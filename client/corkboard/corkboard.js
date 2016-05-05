Template.corkboard.onCreated( function() {
      Meteor.subscribe('Allposts');
      Meteor.subscribe('Allaccounts');
});

Template.postItNote.helpers({
  'postFind': function(){
    let posts = Posts.find().fetch();
    return posts;
  },
 //  'accountFind': function(){
 //  	let id = document.getElementsByClassName("postclick")[0].id;
 //  	console.log(id);
	// let account = Account.find({accountId: id}).fetch();
	// return account[0];
 //  }
});

