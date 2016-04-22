Template.accountSettings.events(({
  'click .edit': function(event) {
    $("#firstName").prop("disabled", false);
    $("#lastName").prop("disabled", false);
    $("#phone").prop("disabled", false);
  },
  'click .save': function(event) {
    $("#firstName").prop("disabled", true);
    $("#lastName").prop("disabled", true);
    $("#phone").prop("disabled", true);
  }
}));