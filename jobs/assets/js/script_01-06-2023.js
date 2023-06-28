


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
    
    $('.detail-page .share-btn').on('click',function(){
        $('.share-links ul').toggleClass('active');
    });
    
   $('.applyPopupForm').click(function(){
        $('.popupApplyForm, .overlay').fadeIn();
    });
    $('.overlay, .close').click(function(){
        $('.popupApplyForm, .overlay').fadeOut();
    });
    
    

    $('.delete').on('click',function(){
        $('.overlay').fadeIn()
        $('.popupMian').fadeIn()
    });

    $('.cancle, .overlay').on('click',function(){
        $('.overlay').fadeOut()
        $('.popupMian').fadeOut()
    });

    $('.js-multiple-select').select2({
        placeholder: "Type here",
        tags: true,
        tokenSeparators: [',', '']
    });

    $('.js-single-select').select2({
        placeholder: "Type here",
        allowClear: true,
    });

    // $('.content').richText();
    
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
    });
    $('.carousel-controls .prev').on('click',function(){
        $indx = $('.client-carousel img.show').eq(0).index();
        if($indx > 0){
        for (let i = $indx; i > $indx-$chby; i--) {
            $('.client-carousel img').eq(i).addClass("show");
            $('.client-carousel img').eq(i+$initC).removeClass("show");
            
        }
    }
        
  
    });


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
    });
    
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
    });
    
    /*$('.main-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
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
    });*/
    
    
    
    tinyMCE.triggerSave();
    tinymce.init({
        selector: ".content",
        selector: ".content",
        menubar: false,
        height: 500,
        plugins:
        [
            'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
            'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
            'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
        ],
        toolbar: 'undo redo | a11ycheck casechange blocks | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist checklist outdent indent | removeformat | code table help'
    });
    
    
});







$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".popupSideBtn").show();
    }
    else {

        $(".popupSideBtn").fadeOut('slow');
    }
});