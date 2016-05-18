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

});

Template.accountPostItNote.events({
  'click .delete': function(event) {
    let answer = confirm("Are you sure you want to delete this company?");
    if(answer == true){
      let postId = this._id;
      Meteor.call('deletePost', postId);
    }
  },

});