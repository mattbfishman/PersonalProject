Template.corkboard.onCreated( function() {
      Meteor.subscribe('Allposts');
      Meteor.subscribe('Allaccounts');
});

Template.postItNote.helpers({
  'postFind': function(){
    let posts = Posts.find().fetch();
    return posts;
  },
  'getDate': function(){
  	return this.date.toString().substring(0,15);
  },
  'getFirstName': function(){
  	return Account.findOne({accountId:this.accountId}).name.firstName;
  },
  'getLastName': function(){
  	return Account.findOne({accountId:this.accountId}).name.lastName;
  },
  'getPhone': function(){
  	return Account.findOne({accountId:this.accountId}).contact.phone;
  },
  'getEmail': function(){
  	return Account.findOne({accountId:this.accountId}).contact.email;
  }
 //  'accountFind': function(){
 //  	let id = document.getElementsByClassName("postclick")[0].id;
 //  	console.log(id);
	// let account = Account.find({accountId: id}).fetch();
	// return account[0];
 //  }
});

