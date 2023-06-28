"use strict";
    
var $nav = $('#header');
var $dis = $nav.offset().top;
var $htmlbody = $('html,body');


// sticky navbar
 $(window).scroll(function () {
    var $scrolling = $(this).scrollTop();
   if ($scrolling >= $dis) {
        $nav.addClass('position-fixed');
    } else {
        $nav.removeClass('position-fixed');
    } 
})


//back to top button
$(".top-btn").click(function(){
  $($htmlbody).animate({
      "scrollTop" : "0"
  }, 500)
});
//top button fade in fade out
$(window).scroll(function(){
  var scrollValue = $(this).scrollTop();

  if(scrollValue >= 500){
      $(".top-btn").fadeIn();
  }else{
   $(".top-btn").fadeOut();
  }
});