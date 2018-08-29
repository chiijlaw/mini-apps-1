$("form").on("submit", function(event) {
  event.preventDefault();
  var formElement = document.getElementById("formId");
  var FD = new FormData(formElement);
  var dataObj = {};
  for (var value of FD.values()) {
    dataObj.data = value;
  }

  $.post("/", dataObj.data).done(function(data) {
    $("#result")
      .empty()
      .append(`<table>${data}</table>`);
  });
  formElement.reset();
});
