Router.configure({ layoutTemplate: 'layout'});

Router.route('/', {name : "landingPage"});

Router.route('signup', {name : "signup"});

// render login template
Router.route('/login', function () {
    this.render('login');
});  



Router.route('settings', {name : "accountSettings",
	onBeforeAction: function() {
		if(Meteor.userId()){
			this.next();
		}
		else{
			Router.go("landingPage");
		}
	}
});


