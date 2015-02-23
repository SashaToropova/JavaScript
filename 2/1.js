var fl = 0;
$("#button").on("click", function() {
 if ( fl === 0)
  {
    $(this).text('Hide');
    $("#heretext").text("Some information"); 
    fl = 1;
  }
  else 
  {
    $(this).text('Show');  
    $("#heretext").text(""); 
    fl = 0;
  }
});
