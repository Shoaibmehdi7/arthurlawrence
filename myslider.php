<style type="text/css">
.sliderp{
 font-size: 34px;
    margin-top: -24px;
    position: absolute;
    margin-left: -9px;
    font-weight: 100;
}
.exp{
  margin-top: .5em;float: left;
}
.pointerDiv{
    position: absolute;
    width: 95vw;
    height: 95vh;
    background-color: #80808026;
    top: 1vh;
    z-index: 2000;
    left: 2vw;
}
.overFlow{
  overflow: hidden;
}
#myCarousel{
  transition: 1s ease-in all;

}
</style>
<link href="slider.css" rel="stylesheet">
  

<div id="myCarousel" class="carousel slide carousel-fade myCarouselDesktop animation-element" data-interval="false" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li id="slideOne" data-target="#myCarousel" data-slide-to="0" class="active" onclick="slideToOne()"></li>
    <li id="slideTwo" data-target="#myCarousel" data-slide-to="1" onclick="slideToTwo()"></li>
    <li id="slidethree" data-target="#myCarousel" data-slide-to="2" onclick="slideToThree()"></li> 
    <li id="slideFour" data-target="#myCarousel" data-slide-to="3" onclick="slideToFour()"></li> 


  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">



    <div id="1" class="item active" style="background: url('wp-content/uploads/2015/11/slider/bg1.jpg'  );">
        <div class="captions animated animatedFadeInUp fadeInUp">
            <div class="inner-caption">             
                <div class="cap-img">
                  <img src="img/slider-pluse-grey.png" class="plus">
                </div>
                <div class="cap-text" style="color: #fff">
                  <h2><h2 style="font-size:1.9rem">How the ‘New Normal’ may be a blessing in disguise</h2></h2>
                  <p>Business leaders have treated COVID-19 like a natural disaster—unforeseen and catastrophic. But has this really been the case? There has been a positive impact of society’s response to the disease, with long-term externalities that will directly benefit our future. </p>
                  <a href="https://arthurlawrence.net/blog/the-surprisingly-positive-side-of-covid-19/"><div class="explore-btn"><button  style="float: left;"><span  class="sliderp">+</span></button></a>
                    <a href="https://arthurlawrence.net/blog/the-surprisingly-positive-side-of-covid-19/"><span class="exp">Find out how</span></a>
                    </div>
                </div>
            </div>
        </div>
        <img src="wp-content/uploads/2015/11/slider/slider1.png" id="object-1" style="object-fit: contain;object-position: left;" alt="Chania"  width="100%">
    </div>

    <div   id="2"  class="item " style="background: url('wp-content/uploads/2015/11/slider/bg2.jpg');" id="blackdiv">
        <div class="captions animated animatedFadeInUp fadeInUp right-image">
            <div class="inner-caption">             
                <div class="cap-img">
                  <img src="img/slider-pluse-red.png" class="plus">
                </div>
                <div class="cap-text" style="color: #333">
                  <h2><h2 style="font-size:1.9rem"> In the new technological disruption, everyone is invited</h2></h2>
                  <p>Technology has been the biggest disruptor in the history of mankind. But in Industry 4.0 its impact is extending to frontiers never explored before.</p>
                  <div class="explore-btn">
                      <a href="https://arthurlawrence.net/blog/industry-4-0-an-interesting-evolution-to-understand/"><button style="float: left;"><span  class="sliderp">+</span></button></a>
                      <a href="https://arthurlawrence.net/blog/industry-4-0-an-interesting-evolution-to-understand/"><span class="exp" style="color:#333 !important">Explore our insights</span></a></div>
                </div>
            </div>
        </div>
        <img src="wp-content/uploads/2015/11/slider/slider5.png" id="object-2" style="object-fit: contain;object-position: right;max-width:100%!important" alt="Chania"  width="100%" >
    </div>


    <div  id="3"  class="item " style="background: url('wp-content/uploads/2015/11/slider/bg1.jpg');">
        <div class="captions animated animatedFadeInUp fadeInUp">
            <div class="inner-caption">             
                <div class="cap-img">
                  <img src="img/slider-pluse-grey.png" class="plus">
                </div>
                <div class="cap-text" style="color: #fff">
                  <h2>Making corporate social responsibility social again.</h2>
                  <p>Success in corporate sustainability initiatives will not come with an injection of capital, but by revising the process that govern current corporate sustainability initiatives.</p>
                  <div class="explore-btn">
                      <a href="https://arthurlawrence.net/blog/corporate-sustainability-is-an-old-age-concept-but-why-is-there-so-little-success/"><button  style="float: left;"><span class="sliderp">+</span></button></a>
                      <a href="https://arthurlawrence.net/blog/corporate-sustainability-is-an-old-age-concept-but-why-is-there-so-little-success/"><span class="exp">Explore More</span></a></div>
                </div>
            </div>
        </div>
        <img src="wp-content/uploads/2015/11/slider/slider2.png" id="object-3" style="object-fit: contain;object-position: left;" alt="Chania"  width="100%">
    </div>


   <div   id="4"  class="item " style="background: url('wp-content/uploads/2015/11/slider/bg2.jpg');" id="blackdiv">
        <div class="captions animated animatedFadeInUp fadeInUp right-image">
            <div class="inner-caption">             
                <div class="cap-img">
                  <img src="img/slider-pluse-red.png" class="plus">
                </div>
                <div class="cap-text" style="color: #333">
                  <h2>Have you tapped into your innovation capital?</h2>
                  <p>Innovation is not a luxury, it's a survival mechanism. The latest  thinking in management explores how constant, internal renewal is the key to successful innovation.</p>
                  <div class="explore-btn">
                      <a href="https://arthurlawrence.net/blog/why-businesses-must-invest-in-innovation-capital-for-a-winning-strategy-over-the-long-term/"><button style="float: left;"><span  class="sliderp">+</span></button></a>
                      <a href="https://arthurlawrence.net/blog/why-businesses-must-invest-in-innovation-capital-for-a-winning-strategy-over-the-long-term/"><span class="exp" style="color:#333 !important">Explore our insights</span></a></div>
                </div>
            </div>
        </div>
        <img src="wp-content/uploads/2015/11/slider/slider4.png" id="object-2" style="margin-left: 14vw;object-fit: contain;object-position: right;max-width:82%!important" alt="Chania"  width="100%" >
    </div> 



<!--     <div class="item" style="background: url('wp-content/uploads/2015/11/slider/bg3.jpg');">
        <div class="captions animated animatedFadeInUp fadeInUp right-image">
            <div class="inner-caption">             
                <div class="cap-img">
                  <img src="img/Group9.png" class="plus">
                </div>
                <div class="cap-text" style="color: #333">
                  <h2>Cyber resilence<br> in the age of humans</h2>
                  <p>The best most robust security system are still centered on human beings. That’s good news.</p>
                  <div class="explore-btn"><button>+</button>Explore</div>
                </div>
            </div>
        </div>
        <img src="wp-content/uploads/2015/11/slider/slider4.png" style="object-fit: contain;object-position: right;" alt="Chania"  width="100%">
    </div> -->

   <!--  <div class="item" style="background: url('wp-content/uploads/2015/11/slider/bg2.jpg');">
        <div class="captions animated animatedFadeInUp fadeInUp">
            <div class="inner-caption">
                <img src="img/Group9.png">
                <h2>Cyber resilience in the age of humans.</h2>
            </div>
            <a href="#">Learn more</a>
        </div>
        <img src="wp-content/uploads/2015/11/slider/slider3.png" style="object-fit: contain;object-position: right;" alt="Chania"  width="100%">
    </div> -->

  </div>


  <!-- Left and right controls -->
<!--   <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> -->
</div>

<style type="text/css">
  .myCarouselMobile{
    width: 100vw;
    float: left;
  }
  .mobileBanner{
     background-repeat: no-repeat;
    background-size: cover;
    float: left;
    width: 100vw;
    height: 172vw;
  }
  .bannerFirst{
    background-image: url('wp-content/uploads/2015/11/slider/bg1.jpg');
   
  }
  .mbsilder-1{
      max-width: 64%;
    margin-left: 12%;
    margin-top: 20%;
  }
  .slider-heading {
    margin-top: 1em;
    font-size: 1.6em;
    margin-left: .5em;
    margin-right: .5em;
    font-weight: 700;
    font-family: Montserrat, sans-serif !important;
  }
  .slider-para{
   
    margin-top: 1em;
    font-size: 1em;
    margin-left: .5em;
    margin-right: .5em;
    font-weight: 300;
    font-family: Montserrat, sans-serif !important;
  }
.more::after{
    font-family: 'mck-icons';
    content: "";
    -webkit-transition: right 0.4s, color 120ms;
    transition: right 0.4s, color 120ms;
    margin: 0;
    top: 0;
}

.mbsilder-2{
  max-width:85%;
   margin-left: 15%;
    margin-top: 20%;
    margin-bottom:34%;
}
.mbsilder-3{
   max-width: 80%;
    margin-left: 6%;
    margin-top: 20%;
}


.mbsilder-4{
  max-width: 82%;
    margin-left: 15%;
    margin-top: 16%;
    margin-bottom: 17%;
}
.bannerFirst , .bannerFirst h2 {
  color: white;
}
.bannerSecond {
  color: black;
}
#capability h2{
      margin-top: 2em;
}
.box-1{
      padding-left: 1em !important;
    font-size: 1em !important;
}
.box-3{
  padding-bottom: 4em !important;
  padding-right: 2em;
}

@media (min-width: 768px) and ( max-width:1000px){
    .mobileBanner{
        height: 100vh;
    }
}
</style>
<div class="myCarouselMobile" >
   
   <div class="mobileBanner bannerFirst">
      <div class="objectbannerFirst">
        
         <img src="img/slider12-mb.png" class="plus mbsilder-1" >
    
           <h2 class="slider-heading ">

How the ‘New Normal’ may be a blessing in disguise</h2>
        <p class="slider-para">
         Business leaders have treated COVID-19 like a natural disaster—unforeseen and catastrophic. 
        </p>
        <p class="slider-para more">
        <a href="https://www.arthurlawrence.net/blog/the-right-approach-to-social-entrepreneurship/"> Explore More  <i class="fas fa-arrow-right"></i> </a>
        </p>


      </div>
   </div>

   <div class="mobileBanner bannerSecond">
      <div class="objectbannerFirst">
        
         <img src="img/slider11-mb1.png" class="plus mbsilder-1" >
    
           <h2 class="slider-heading ">
In the new technological disruption, everyone is invited</h2>
        <p class="slider-para">
        Technology has been the biggest disruptor in the history of mankind. But in Industry 4.0 its impact is extending to frontiers never explored before.
        </p>
        <p class="slider-para more">
         <a href="https://www.arthurlawrence.net/blog/resumes-for-robots-are-getting-longer-and-thats-good-news/"> Explore More  <i class="fas fa-arrow-right"></i></a>
        </p>


      </div>
   </div>

     <div class="mobileBanner bannerFirst">
      <div class="objectbannerFirst">
        
         <img src="img/slider15-mb.png" class="plus mbsilder-1" >
    
           <h2 class="slider-heading ">

Making corporate social responsibility social again.</h2>
        <p class="slider-para">
          Success in corporate sustainability initiatives will not come with an injection of capital, but by revising the process that govern current corporate sustainability initiatives.
        </p>
        <p class="slider-para more">
         <a href="https://www.arthurlawrence.net/blog/how-the-talent-economy-gets-a-surge-from-industry-4-0/"> Explore More  <i class="fas fa-arrow-right"></i></a>
        </p>


      </div>
   </div>
    <div class="mobileBanner bannerSecond">
      <div class="objectbannerFirst">
        
         <img src="img/slider13-mb1.png" class="plus mbsilder-1" >
    
           <h2 class="slider-heading ">

Have you tapped into your innovation <br/>capital?</h2>
        <p class="slider-para">
        Technology has been the biggest disruptor in the history of mankind. But in Industry 4.0 its impact is extending to frontiers never explored before.
        </p>
        <p class="slider-para more">
         <a href="https://www.arthurlawrence.net/blog/resumes-for-robots-are-getting-longer-and-thats-good-news/"> Explore More  <i class="fas fa-arrow-right"></i></a>
        </p>


      </div>
   </div>


    <!-- <div class="mobileBanner bannerSecond">
      <div class="objectbannerFirst">
        
         <img src="img/slider6-mb.png" class="plus mbsilder-4" >
    
           <h2 class="slider-heading ">Your career deserves better.</h2>
        <p class="slider-para">
        Explore high-growth opportunities at the Arthur Lawrence Career Portal.
        </p>
        <p class="slider-para more">
          Explore More  <i class="fas fa-arrow-right"></i>
        </p>


      </div>
   </div> -->

</div>

