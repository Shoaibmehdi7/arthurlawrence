$('.til-block.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 2
        },
        1280: {
            mouseDrag: false,
            autoplay: false,
            items: 7,
            dots: false
        }
    }
})


$(function(){
    $('.menu-button').on('click',function(){
        $(this).toggleClass('tapped');
    });
    $('.dropdown').on('click',function(){
        $(this).parents('li').toggleClass('tapped');
    });
})

$(document).ready(function () {
    var owl = $('.mookup-slider.owl-carousel')
    owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        dots: false,
        
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1
    })
    $('.brand-collaterals a').click(function () {
        owl.trigger('next.owl.carousel');
    });
});
$(document).ready(function () {
    var owl = $('.images-slider.owl-carousel')
    owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        dots: false,
        
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1
    })
    $('.read-block a').click(function () {
        owl.trigger('next.owl.carousel');
    });
});

$('.before-after-slide .slider').twentytwenty({
    orientation: 'horizontal',
    before_label: 'Old',
    after_label: 'New',
    no_overlay: true,
    move_slider_on_hover: true,
    move_with_handle_only: true,
    click_to_move: false
});

$(window).on('load',function() {
  $(".twentytwenty-container").twentytwenty();
});


var container = document.getElementById("video-block");
var xcircle = document.querySelector(".video-btn");

TweenMax.set(".section", {
    backgroundColor: function () {
        return Math.random() * 0xffffff;
    }
});

TweenMax.set(xcircle, { scale: 0, xPercent: -50, yPercent: -50 });

container.addEventListener("pointerenter", function (e) {
    TweenMax.to(xcircle, 0.3, { scale: 1, opacity: 1 });
    positionCircle(e);
});

container.addEventListener("pointerleave", function (e) {
    TweenMax.to(xcircle, 0.3, { scale: 1, opacity: 1 });
    TweenMax.to(xcircle, 0.3, { x: 670, y: 200 });
    //TweenMax.to(xcircle, 1, { top: 50 })
    //TweenMax.to(xcircle, 1, { left: 50})
    //positionCircle({pageX: 10,  pageY:50 });
});

container.addEventListener("pointermove", function (e) {
    positionCircle(e);
});

function positionCircle(e) {
    var rect = container.getBoundingClientRect();
    var relX = e.pageX - container.offsetLeft;
    var relY = e.pageY - container.offsetTop;
    TweenMax.to(xcircle, 0.3, { x: relX, y: relY });
}


$(document).ready(() => {
    $('.points li a').click(function () {
        $('.points li').removeClass('active');
        $(this).parent("li").addClass('active');

        ($('.points li').first().hasClass('active'))
            ? $('.points').addClass('invers')
            : $('.points').removeClass('invers')
    });
})


$(window).scroll(function () {
    scrollDistance = $(window).scrollTop();
    $('.page-section').each(function (i) {
        if ($(this).offset().top - 82 <= scrollDistance) {
            $('.points li').removeClass('active').eq(i).addClass('active');
        }
    });
}).scroll();


var title_block_bg = document.querySelector("#main-title-block");
//var title_block_bg = document.querySelector("#jamf-mover");

title_block_bg.addEventListener("mousemove", function (e) {
    var amountMovedX = (e.clientX * -1 / 100);
    var amountMovedY = (e.clientY * -1 / 100);
    
    //title_block_bg.style.backgroundPositionX = amountMovedX + "px";
    //title_block_bg.style.backgroundPositionY = amountMovedY  + "px";
});


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
