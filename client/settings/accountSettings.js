Template.accountSettings.onCreated( function() {
      Meteor.subscribe('Allaccounts');
});

Template.accountSettings.helpers({
  'accountFind': function(){
    let id = Meteor.userId();
    let account = Account.find({accountId: id}).fetch();
    return account[0];
  },
});

Template.accountSettings.events(({
  'click .edit': function(event) {
    $("#firstName").prop("disabled", false);
    $("#lastName").prop("disabled", false);
    $("#phone").prop("disabled", false);
  },
  'click .save': function(event, template) {
    let id = Meteor.userId();
    let first = template.find('#firstName').value;
    let last = template.find('#lastName').value;
    let phone = template.find('#phone').value;

    Meteor.call('editAccount', id, first, last, phone);
    
    $("#firstName").prop("disabled", true);
    $("#lastName").prop("disabled", true);
    $("#phone").prop("disabled", true);
  },

}));