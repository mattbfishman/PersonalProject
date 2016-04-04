Router.configure({ layoutTemplate: 'layout'});
Router.route('/', function(){
	this.layout('landingPage');
	this.render('landingNavbar', {to : 'navbar'});
});
