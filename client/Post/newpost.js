Template.accountSettings.onCreated( function() {
      Meteor.subscribe('Allposts');
});


Template.newPost.events(({

  	'click .submit': function(event, template) {
  	let id = Meteor.userId();
    let title = template.find('#title').value;
    let desc = template.find('#description').value;
    let date = template.find('#postdate').value;
    Meteor.call('newPost', id, title, desc, date);
	
	}

}));