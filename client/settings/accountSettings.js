Template.accountSettings.events(({
  'click .edit': function(event) {
    $(".firstName").prop("disabled", false);
    $(".lastName").prop("disabled", false);
    $(".phoneNumber").prop("disabled", false);
  }
}));

Template.accountSettings.events(({
  'click .save': function(event) {
    $(".firstName").prop("disabled", true);
    $(".lastName").prop("disabled", true);
    $(".phoneNumber").prop("disabled", true);
  }
}));