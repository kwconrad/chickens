$(document).ready(function() {
  $("#buttonBlink")
    .mouseup(function() {
      $(this).css("background-color", "#0199da");
    })
    .mousedown(function() {
      $(this).css("background-color", "#017DB2");
    });
});
