// Include CSRF Token with every ajax request
$(document).ajaxSend(function (e, xhr, options) {
  var token = $("meta[name='csrf-token']").attr("content");
  xhr.setRequestHeader("X-CSRF-Token", token);
});

// Backbone Namespacing
window.App = {
  Models      : {},
  Collections : {},
  Views       : {}
};
