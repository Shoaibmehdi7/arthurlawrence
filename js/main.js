 $('.ss').click(function(){
        $('#cloud').toggle();
    });
    $('.es').click(function(){
        $('#enterprise').toggle();
    });
    $('.at').click(function(){
        $('#automation').toggle();
    });
      $('.app').click(function(){
        $('#applications').toggle();
    });
       $('.ssc').click(function(){
        $('#Shared').toggle();
    });
           $('.fai').click(function(){
        $('#Finance').toggle();
    });
      if ($(window).width() > 759) {
    
  $('#myCarousel').on('slide.bs.carousel', function onSlide (ev) {
  var id = ev.relatedTarget.id;
  switch (id) {
     case "4":
        
        $('#head-logo').css('filter','brightness(0.35)');
         $('#mainbodyid').addClass('mythemedark');
       // $('.menu-hamburger').css("background-color", "#000" );
       $('.global-primary-nav-r3 .primary-navigation>.nav-list>.nav-item>a, .global-primary-nav-r3 .local-navigation>.nav-list>.nav-item>a').css("color",'#2e2e2e');
      break;
     case "2":
        
        $('#head-logo').css('filter','brightness(0.35)');
         $('#mainbodyid').addClass('mythemedark');
       // $('.menu-hamburger').css("background-color", "#000" );
       $('.global-primary-nav-r3 .primary-navigation>.nav-list>.nav-item>a, .global-primary-nav-r3 .local-navigation>.nav-list>.nav-item>a').css("color",'#2e2e2e');
      break;
    case "3":
   
       $('#head-logo').css('filter','invert(0)');
       // $('.menu-hamburger').css("background-color", "#fff" );
        $('#mainbodyid').removeClass('mythemedark');
        $('.global-primary-nav-r3 .primary-navigation>.nav-list>.nav-item>a, .global-primary-nav-r3 .local-navigation>.nav-list>.nav-item>a').css("color",'#fff');
      break;
    case "1":
        
       $('#head-logo').css('filter','invert(0)');
        $('#mainbodyid').removeClass('mythemedark');
           // $('.menu-hamburger').css("background-color", "#fff" );
           $('.global-primary-nav-r3 .primary-navigation>.nav-list>.nav-item>a, .global-primary-nav-r3 .local-navigation>.nav-list>.nav-item>a').css("color",'#fff');

      break;
   
    default:
      //the id is none of the above
  }
})
}

      // 2. This code loads the IFrame Player API code asynchronously.
      // var tag = document.createElement('script');

      // tag.src = "//www.youtube.com/iframe_api";
      // var firstScriptTag = document.getElementsByTagName('script')[0];
      // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // // 3. This function creates an <iframe> (and YouTube player)
      // //    after the API code downloads.
      // var player;
      // function onYouTubeIframeAPIReady() {
      //   player = new YT.Player('palyer-wJ_Y3Irgjtg', {
      //     height: '350',
      //     width: '100%',
      //     videoId: 'wJ_Y3Irgjtg',
      //     host: '//www.youtube.com',
      //     events: {
      //       'onReady': onPlayerReady,
      //       'onStateChange': onPlayerStateChange
      //     }
      //   });
      //   player2 = new YT.Player('player-vNh7-3llto', {
      //     height: '350',
      //     width: '100%',
      //     videoId: '-vNh7-3llto',
      //     host: '${window.location.protocol}//www.youtube.com',
      //     events: {
      //       'onReady': onPlayerReady,
      //       'onStateChange': onPlayerStateChange2
      //     }
      //   });
      //   player3 = new YT.Player('palyer11-wJ_Y3Irgjtg', {
      //     height: '200',
      //     width: '100%',
      //     videoId: 'wJ_Y3Irgjtg',
      //     host: '//www.youtube.com',
      //     events: {
      //       'onReady': onPlayerReady,
      //       'onStateChange': onPlayerStateChange11
      //     }
      //   });
      //   player4 = new YT.Player('player21-vNh7-3llto', {
      //     height: '200',
      //     width: '100%',
      //     videoId: '-vNh7-3llto',
      //     host: '//www.youtube.com',
      //     events: {
      //       'onReady': onPlayerReady,
      //       'onStateChange': onPlayerStateChange21
      //     }
      //   });
        
      // }

      // // 4. The API will call this function when the video player is ready.
      // function onPlayerReady(event) {
      //   //event.target.playVideo();
      // }

      // // 5. The API calls this function when the player's state changes.
      // //    The function indicates that when playing a video (state=1),
      // //    the player should play for six seconds and then stop.
      // var done = false;
      // function onPlayerStateChange(event) {
      //   console.log(event.data);
      //   if(event.data == YT.PlayerState.PLAYING || event.data == 3){
      //     console.log('Enter in fullscreen mode');
      //     fullScreenWin("palyer-wJ_Y3Irgjtg");
          
      //   }
      //   if (event.data == YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }

      // }
      // function onPlayerStateChange11(event) {
      //   console.log(event.data);
      //   if(event.data == YT.PlayerState.PLAYING || event.data == 3){
      //     console.log('Enter in fullscreen mode');
      //     fullScreenWin("palyer11-wJ_Y3Irgjtg");
          
      //   }
      //   if (event.data == YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }

      // }

      // function onPlayerStateChange2(event) {
      //   console.log(event.data);
      //   if(event.data == YT.PlayerState.PLAYING || event.data == 3){
      //     console.log('Enter in fullscreen mode');
      //     fullScreenWin("player-vNh7-3llto");
          
      //   }
      //   if (event.data == YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }

      // }

      // function onPlayerStateChange21(event) {
      //   console.log(event.data);
      //   if(event.data == YT.PlayerState.PLAYING || event.data == 3){
      //     console.log('Enter in fullscreen mode');
      //     fullScreenWin("player21-vNh7-3llto");
          
      //   }
      //   if (event.data == YT.PlayerState.PLAYING && !done) {
      //     setTimeout(stopVideo, 6000);
      //     done = true;
      //   }

      // }

      
      // function stopVideo() {
      //   player.stopVideo();
      // }

      // function fullScreenWin(id){
      //    //alert();
      //    var elem = document.getElementById(id);
      //    elem.requestFullscreen();

      // }

      // $('.menu-toggle').click(function(){
      //   player.stopVideo();
      //   player2.stopVideo();
      //   player3.stopVideo();
      //   player4.stopVideo();
      // });

$( document ).ready(function() {

    $('#subButon').click(function(){
        sendSubs();
    });
    
       $('#subButon2').click(function(){
        sendSubs2();
    });
    
    
    $('#contactSub').click(function(){
            sendContact() ;
    });
});
    
     function validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    
 function sendContact() {
    var valid;	
    valid = validateContact();
    if(valid) {
        jQuery.ajax({
            url: "/contact_mail.php",
            data:'fullName='+$("#fullName").val()+'&email='+$("#email").val()+'&organization='+$("#organization").val()+'&subject='+$("#subject").val()+'&phone='+$("#phone").val()+'&yourMessage='+$("#yourMessage").val() + '&formValue=2',
            type: "POST",
            success:function(data){
                alert("Thank you for filling out your information!");
            },
            error:function (){
                alert("Please input valid information");
            }
        });
    }
}


function validateContact(){
      var valid = true;	
      
     if(!$("#fullName").val()) {
        alert("Please enter full name");
        valid = false;
        return valid;
    }
    if(!$("#email").val()) {
        alert("Please enter email");
        valid = false;
        return valid;
    }
    if(!$("#organization").val()) {
        alert("Please enter organization ");
        valid = false;
        return valid;
    }
    if(!$("#subject").val()) {
        alert("Please enter subject ");
        valid = false;
        return valid;
    }
    if(!$("#phone").val()) {
        alert("Please enter phone");
        valid = false;
        return valid;
    }
    if(!$("#yourMessage").val()) {
        alert("Please enter message ");
        valid = false;
        return valid;
    }
    
    if(!validateEmail($("#email").val())){
        alert("Please enter correct email address");
        valid = false;
        return valid;
    }
  
     return valid;
     
}
    function validatePCP(){
         var valid = true;	
        if(!$("#fullName").val()) {
        alert("Please enter full name");
        valid = false;
        return valid;
    }
     if(!$("#email").val()) {
        alert("Please enter email");
        valid = false;
        return valid;
    }
      if(!validateEmail($("#email").val())){
        alert("Please enter correct email address");
        valid = false;
        return valid;
    }
      if(!$("#phone").val()) {
        alert("Please enter phone");
        valid = false;
        return valid;
    }
      return valid;
    }
    
    
    
    
     function sendSubs2() {
         
    var valid = validatePCP();	
    if(valid) {
        jQuery.ajax({
            url: "/contact_mail.php",
            data:'fullName='+$("#fullName").val()+'&email='+$("#email").val()+'&organization=not required'+'&subject=not required'+'&phone='+$("#phone").val()+'&yourMessage=not required' + '&formValue=2',
            type: "POST",
            success:function(data){
                //alert("Thank you for filling out your information!");
                window.open("http://arthurlawrence.net/thank-you.php","_blank");

            },
            error:function (){
                alert("Please input valid information");
            }
        });
    }
    else{
        alert('please fill out correct info');
    }
}

    function sendSubs() {
    var valid;	
    valid = validateSubs();
    if(valid) {
        jQuery.ajax({
            url: "/contact_mail.php",
            data:'userName='+$("#input-type").val()+'&formValue=1',
            type: "POST",
            success:function(data){
                alert("Thank you for filling out your information!");
            },
            error:function (){
                alert("Please input valid information");
            }
        });
    }
}

function validateSubs(){
     var valid = true;	
     if(!$("#input-type").val()) {
        alert("Please input valid information");
        valid = false;
    }
     return valid;
}
var counterSlider= 0;

var position = $(window).scrollTop(); 
var isWorking = 0;
var activeslide = 0 ;
var letthemscroll = false;
var scrollT = 0;

$(function(){

  $('#CommunitiesToggel').click(function(){
    if($('.hideOnCommunities').is(":visible")){

      $('.hideOnCommunities').hide()
      $('.showCommunities').show()
    }
    else{
       $('.hideOnCommunities').show()
      $('.showCommunities').hide()
    }

  })
  
    if ($(window).width() > 759) {
$('body').keydown(function(e){
      switch(e.which) {
        case 38: // up
            if($('.animation-element').hasClass('in-view')){
                        if(counterSlider <= 1){
                             slideup();
                            console.log(counterSlider);
                          }else{
                           counterSlider= counterSlider-1;
                           console.log(counterSlider);
                           $("html").animate({ scrollTop: 0 }, "slow"); 
                           slideup();
                            }
                        
                        }
                        else{
                          scrollT = scrollTop() - 40;
                           $("html").animate({ scrollTop: scrollTop }, "slow"); 
                        }
        break;

        case 40: // down
            if($('.animation-element').hasClass('in-view')){
                        if(counterSlider > 4){
                            console.log(counterSlider);
                             //letthemscroll = true;
                             slideDown();
                          }else{
                            counterSlider= counterSlider+1;
                           console.log(counterSlider);
                           slideDown();
                          }
                          if( counterSlider ==5){
                        $("html").animate({ scrollTop: 800 }, "slow"); 
                        }
					          }
              else{
                          scrollT = scrollTop() - 40;
                           $("html").animate({ scrollTop: scrollTop }, "slow"); 
                        }

        break;
        default: return;
 }

});
}
});

  if ($(window).width() > 759) {
function slideToOne(){
  counterSlider =1;
}

function slideToTwo(){
  counterSlider =2;
}

function slideToThree(){
  counterSlider =3;
}

function slideToFour(){
  counterSlider =4;
}

setInterval(function(){
validPos();
},1000)
function validPos(){
  var scroll = $(window).scrollTop();
  if(scroll > 500 || counterSlider >= 4){
    $('body').removeClass('overFlow');
    letthemscroll=false;
  }else{
        $('body').addClass('overFlow');
        letthemscroll=false
  }
  if(counterSlider >= 4){
    document.body.scrollTop=0;
  }

}

$.fn.wheel = function (callback) {
    return this.each(function () {
        $(this).on('mousewheel DOMMouseScroll', function (e) {
            e.delta = null;
            if (e.originalEvent) {
                if (e.originalEvent.wheelDelta) e.delta = e.originalEvent.wheelDelta / -40;
                if (e.originalEvent.deltaY) e.delta = e.originalEvent.deltaY;
                if (e.originalEvent.detail) e.delta = e.originalEvent.detail;
            }

            if (typeof callback == 'function') {
                callback.call(this, e);
            }
        });
    });
};

$('.myCarouselDesktop').wheel( function(e){
                        e.preventDefault();
                           console.log(e.delta + "delatY");
                      if(isWorking==0)  {
                        isWorking=1;
                        if(e.delta < 0) {
                          if(counterSlider <= 1){
                              //if is less than 1
                             slideup();
                            console.log(counterSlider);
                          }else{
                           counterSlider= counterSlider-1;
                           console.log(counterSlider);
                           slideup();
                            }
                        }else if(e.delta > 0){
                            counterSlider= counterSlider+1;
                           console.log(counterSlider);
                           slideDown();
                          }
                       
                        
                          if(counterSlider > 4){
                            console.log(counterSlider);
                             //letthemscroll = true;
                             slideDown();
                          } else{
                          if(counterSlider == 4){
                              avc();
                          }
                            
                        }

                      }
                      
                    });



  
   function avc(){
   
        $('body').removeClass('overFlow'); 
      $("html").animate({ scrollTop: 900 }, "slow"); 
                   letthemscroll= true   
    }
    function slideup(){                       

      if(counterSlider == 1 ){
        $('#slideOne').click()
      }
      if(counterSlider == 2 ){
        $('#slideTwo').click()
      }
      if(counterSlider == 3 ){
        $('#slidethree').click()
      }
      if(counterSlider == 4 ){
        
        $('#slideFour').click()
      }
      setTimeout  (function(){isWorking=0},600);
    }
      function slideDown(){
          if(counterSlider == 1 ){
        $('#slideOne').click()
      }
      if(counterSlider == 2 ){
        $('#slideTwo').click()
      }
      if(counterSlider == 3 ){
        $('#slidethree').click()
      }
       if(counterSlider == 4 ){
        //letthemscroll= true;
         //$('body').removeClass('overFlow'); 
        $('#slideFour').click();
      }
      setTimeout  (function(){isWorking=0},600);
    }


 var $animation_elements = $('.animation-element');
  var $window = $(window);
  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is within viewport
      if ((element_bottom_position >= window_top_position) &&
          (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
      
      } else {
        $element.removeClass('in-view');
      }
    });
  }
  
  }

