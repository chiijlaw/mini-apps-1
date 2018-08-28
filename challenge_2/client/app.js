$("form").on("submit", function(event) {
  event.preventDefault();
  console.log(event.target.value);
  var formElement = document.getElementById("formId");
  var FD = new FormData(formElement);
  var dataObj = {};
  for (var value of FD.values()) {
    dataObj.data = value;
  }
  $.post("/", JSON.stringify(dataObj.data)).done(function(data) {
    console.log(data);
    $("#result")
      .empty()
      .append(`${data}`);
  });
  formElement.reset();
});
