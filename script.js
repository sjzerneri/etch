$(document).ready(function () {
  var $newdiv = "<div class='square'> </div>";
  for (var i=1; i < 256; i++) {
    $("#matrix").append($newdiv);
  };

  $(".square").hover(function() {
    $(this).addClass("hover_color");
  });
});

function newGrid(){
  var newSize = prompt('Enter how many squares you want per row and column');

  var newWH = 600 / newSize;

  $("#matrix").empty();

  for (var i=1; i < newSize * newSize; i++) {
    $("#matrix").append("<div class='square'> </div>");
  };

  $('.square').css('width',newWH);
  $('.square').css('height',newWH);
}
