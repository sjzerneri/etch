var squares = prompt("How Many Rows Do You Want?");

$(document).ready(function () {
  var $newdiv = "<div class='square'> </div>";
  for (var i=0; i < squares; i++) {
    $(".matrix").append($newdiv);
  }
});
