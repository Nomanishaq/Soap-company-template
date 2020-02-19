// Loader loading
$(window).on('load', function () {
   $('#status').fadeOut(1150);
   $('#loader').fadeOut(1350);
});

$(function() {
   var selectedClass = "";
   $(".filter").click(function(){
   selectedClass = $(this).attr("data-rel");
   $("#gallery").fadeTo(100, 0.1);
   $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
   setTimeout(function() {
   $("."+selectedClass).fadeIn().addClass('animation');
   $("#gallery").fadeTo(300, 1);
   }, 300);
   });
   });