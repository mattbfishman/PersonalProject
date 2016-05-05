Template.accountPosts.onCreated( function() {
      Meteor.subscribe('Allposts');
      Meteor.subscribe('Allaccounts');
});

Template.accountPostItNote.helpers({
  'accountPostFind': function(){
    let id = Meteor.userId();
    let posts = Posts.find({accountId : id});
    return posts;
  },
 //  'accountFind': function(){
 //  	let id = document.getElementsByClassName("postclick")[0].id;
 //  	console.log(id);
	// let account = Account.find({accountId: id}).fetch();
	// return account[0];
 //  }
});