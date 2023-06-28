if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += "no-touch";
}
function minimumMove(x){
    if(x%7==0){
        return 7
    }
    if(x%5==0){
        return 5
    }
    if(x%3==0){
        return 3
    }
    if(x%2==0){
        return 2
    }
    
    
    
    return 1;
    
}
$(function(){
    
    $('.menu-button').on('click',function(){
        $(this).toggleClass('tapped');
    });
    $('.dropdown').on('click',function(){
        $(this).parents('li').toggleClass('tapped');
    });

    $initC = $('.client-carousel img').length/2;
    if($(window).width() < 1024){
        $initC = 4;
    }
    if($(window).width() < 768){
        $initC = 3;
    }
    
    // if($(window).width() < 480){
    //     $initC = 2;
    // }
    
    $chby = minimumMove($('.client-carousel img').length);
    for (let i = 0; i < $initC; i++) {
        $('.client-carousel img').eq(i).addClass("show");
        
    }
    $('.carousel-controls .next').on('click',function(){
        $indx = $('.client-carousel img.show').eq(0).index();
        if($indx+$initC < $('.client-carousel img').length){
        for (let i = $indx; i < $indx+$chby; i++) {
            $('.client-carousel img').eq(i).removeClass("show");
            $('.client-carousel img').eq(i+$initC).addClass("show");
            
        }
    }
    })
    $('.carousel-controls .prev').on('click',function(){
        $indx = $('.client-carousel img.show').eq(0).index();
        if($indx > 0){
        for (let i = $indx; i > $indx-$chby; i--) {
            $('.client-carousel img').eq(i).addClass("show");
            $('.client-carousel img').eq(i+$initC).removeClass("show");
            
        }
    }
        
  
    })

})


$(document).ready(function(){
    
    $('.userTypes-tab li a').click(function(){
        $('.userTypes-tab li a').removeClass('active-userType');
        $(this).addClass('active-userType');
        var tagid = $(this).data('tag');
        $('.userTypes-box-sec').removeClass('active-userType').addClass('hide');
        $('#'+tagid).addClass('active').removeClass('hide');
    });

    $('.discover-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        // animateIn: 'animate__slideOutDown',
        // animateOut: 'animate__slideOutDown',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: true,
        // animateIn: 'animate__slideOutDown',
        // animateOut: 'animate__slideOutDown',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    var owl = $(".main-carousel");

    
    $('.main-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
            autoplay:true,
    autoplayTimeout:4000,

        // animateIn: 'animate__slideOutDown',
        // animateOut: 'animate__slideOutDown',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
   

});