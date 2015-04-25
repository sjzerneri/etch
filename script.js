$(document).ready(function () {
  var $newdiv = "<div class='square'> </div>";
  for (var i=0; i < 256; i++) {
    $("#matrix").append($newdiv);
  };

  $(".square").hover(function() {
    $(this).addClass("hover_color");
  });
});

function newGrid(){
//ask the user what the size of the new grid should be
  var newSize = prompt('Enter how many squares you want per row and column');


//clear the current grid from the page
  $("#matrix").empty();

//append new grid based on user input
  for (var i=0; i < (newSize * newSize); i++) {
    $("#matrix").append("<div class='square'> </div>");
  };

  //log the width and height of the new squares
      var newWH = 600 / newSize;

// Set the square div width and height
  $('.square').css('width',newWH);
  $('.square').css('height',newWH);

}
