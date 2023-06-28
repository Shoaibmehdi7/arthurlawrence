<?php
include ('include/header.php');
?>
    <div id="page" class="site">
        <div id="content" class="site-content">
            <div class="slider-wrap">
                <div class="n2-section-smartslider " role="region" aria-label="Slider">
                    <style>
                        div#n2-ss-49 {
                            font-family: Montserrat, sans-serif !important;
                            width: 1920px;
                            float: left;
                            margin: 0px 0px 0px 0px;
                        }

                        html[dir="rtl"] div#n2-ss-49 {
                            float: right;
                        }

                        div#n2-ss-49 .n2-ss-slider-1 {
                            position: relative;
                            padding-top: 0px;
                            padding-right: 0px;
                            padding-bottom: 0px;
                            padding-left: 0px;
                            height: 1080px;
                            border-style: solid;
                            border-width: 0px;
                            border-color: #3e3e3e;
                            border-color: RGBA(62, 62, 62, 1);
                            border-radius: 0px;
                            background-clip: padding-box;
                            background-repeat: repeat;
                            background-position: 50% 50%;
                            background-size: cover;
                            background-attachment: scroll;
                        }

                        div#n2-ss-49 .n2-ss-slider-background-video-container {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                        }

                        div#n2-ss-49 .n2-ss-slider-2 {
                            position: relative;
                            width: 100%;
                            height: 100%;
                        }

                        .x-firefox div#n2-ss-49 .n2-ss-slider-2 {
                            opacity: 0.99999;
                        }

                        div#n2-ss-49 .n2-ss-slider-3 {
                            position: relative;
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                            outline: 1px solid rgba(0, 0, 0, 0);
                            z-index: 10;
                        }

                        div#n2-ss-49 .n2-ss-slide-backgrounds,
                        div#n2-ss-49 .n2-ss-slider-3>.n-particles-js-canvas-el,
                        div#n2-ss-49 .n2-ss-slider-3>.n2-ss-divider {
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                        }

                        div#n2-ss-49 .n2-ss-slide-backgrounds {
                            z-index: 10;
                        }

                        div#n2-ss-49 .n2-ss-slider-3>.n-particles-js-canvas-el {
                            z-index: 12;
                        }

                        div#n2-ss-49 .n2-ss-slide-backgrounds>* {
                            overflow: hidden;
                        }

                        div#n2-ss-49 .n2-ss-slide {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 20;
                            display: block;
                            -webkit-backface-visibility: hidden;
                        }

                        div#n2-ss-49 .n2-ss-layers-container {
                            position: relative;
                            width: 1920px;
                            height: 1080px;
                        }

                        div#n2-ss-49 .n2-ss-parallax-clip>.n2-ss-layers-container {
                            position: absolute;
                            right: 0;
                        }

                        div#n2-ss-49 .n2-ss-slide {
                            perspective: 1000px;
                        }

                        div#n2-ss-49[data-ie] .n2-ss-slide {
                            perspective: none;
                            transform: perspective(1000px);
                        }

                        div#n2-ss-49 .n2-ss-slide-active {
                            z-index: 21;
                        }

                        div#n2-ss-49 .n2-ss-button-container,
                        div#n2-ss-49 .n2-ss-button-container a {
                            display: inline-block;
                        }

                        div#n2-ss-49 .n2-ss-button-container.n2-ss-fullwidth,
                        div#n2-ss-49 .n2-ss-button-container.n2-ss-fullwidth a {
                            display: block;
                        }

                        div#n2-ss-49 .n2-ss-button-container.n2-ss-nowrap {
                            white-space: nowrap;
                        }

                        div#n2-ss-49 .n2-ss-button-container a div {
                            display: inline;
                            font-size: inherit;
                            text-decoration: inherit;
                            color: inherit;
                            line-height: inherit;
                            font-family: inherit;
                            font-weight: inherit;
                        }

                        div#n2-ss-49 .n2-ss-button-container a>div {
                            display: inline-flex;
                            align-items: center;
                            vertical-align: top;
                        }

                        div#n2-ss-49 .n2-ss-button-container i {
                            font-size: 100%;
                            vertical-align: baseline;
                        }

                        div#n2-ss-49 .n2-ss-button-container a[data-iconplacement="left"] i {
                            margin-right: 0.3em;
                        }

                        div#n2-ss-49 .n2-ss-button-container a[data-iconplacement="right"] i {
                            margin-left: 0.3em;
                        }

                        div#n2-ss-49 .n2-ss-control-bullet {
                            visibility: hidden;
                            text-align: left;
                            justify-content: center;
                        }

                        div#n2-ss-49 .n2-ss-control-bullet-horizontal.n2-ss-control-bullet-fullsize {
                            width: 100%;
                        }

                        div#n2-ss-49 .n2-ss-control-bullet-vertical.n2-ss-control-bullet-fullsize {
                            height: 100%;
                            flex-flow: column;
                        }

                        div#n2-ss-49 .nextend-bullet-bar {
                            display: inline-flex;
                            visibility: visible;
                            align-items: center;
                            flex-wrap: wrap;
                        }

                        div#n2-ss-49 .n2-bar-justify-content-left {
                            justify-content: flex-start;
                        }

                        div#n2-ss-49 .n2-bar-justify-content-center {
                            justify-content: center;
                        }

                        div#n2-ss-49 .n2-bar-justify-content-right {
                            justify-content: flex-end;
                        }

                        div#n2-ss-49 .n2-ss-control-bullet-vertical>.nextend-bullet-bar {
                            flex-flow: column;
                        }

                        div#n2-ss-49 .n2-ss-control-bullet-fullsize>.nextend-bullet-bar {
                            display: flex;
                        }

                        div#n2-ss-49 .n2-ss-control-bullet-horizontal.n2-ss-control-bullet-fullsize>.nextend-bullet-bar {
                            flex: 1 1 auto;
                        }

                        div#n2-ss-49 .n2-ss-control-bullet-vertical.n2-ss-control-bullet-fullsize>.nextend-bullet-bar {
                            height: 100%;
                        }

                        div#n2-ss-49 .nextend-bullet-bar .n2-bullet {
                            cursor: pointer;
                            transition: background-color 0.4s;
                        }

                        div#n2-ss-49 .nextend-bullet-bar .n2-bullet.n2-active {
                            cursor: default;
                        }

                        div#n2-ss-49 div.n2-ss-bullet-thumbnail-container {
                            position: absolute;
                            opacity: 0;
                            z-index: 10000000;
                        }

                        div#n2-ss-49 .n2-ss-bullet-thumbnail-container .n2-ss-bullet-thumbnail {
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center;
                        }

                        div#n2-ss-49 .n2-ss-layer .n2-font-6c96429fa58bd94cf3e813e697529a96-hover {
                            font-family: 'Montserrat', 'Arial';
                            color: #ffffff;
                            font-size: 112.5%;
                            text-shadow: none;
                            line-height: 1.5;
                            font-weight: normal;
                            font-style: normal;
                            text-decoration: none;
                            text-align: left;
                            letter-spacing: 2px;
                            word-spacing: normal;
                            text-transform: none;
                        }

                        div#n2-ss-49 .n2-style-e37207374acab59d745a1f417b54aec0-heading {
                            background: #ffffff;
                            background: RGBA(255, 255, 255, 0);
                            opacity: 1;
                            padding: 0px 0px 0px 0px;
                            box-shadow: none;
                            border-width: 0px;
                            border-style: solid;
                            border-color: #000000;
                            border-color: RGBA(0, 0, 0, 1);
                            border-radius: 0px;
                            border-bottom: 2px solid #fff;
                        }

                        div#n2-ss-49 .n2-ss-layer .n2-font-5282b95fccf8eb72f63cd3fe70fef35b-hover {
                            font-family: Montserrat, sans-serif !important, 'Arial';
                            color: #ffffff;
                            font-size: 300%;
                            text-shadow: none;
                            line-height: 1.3;
                            font-weight: bold;
                            font-style: normal;
                            text-decoration: none;
                            text-align: left;
                            letter-spacing: normal;
                            word-spacing: normal;
                            text-transform: none;
                        }

                        div#n2-ss-49 .n2-font-aff7a88fb2f7ddc8e7d133024b788d1c-link a {
                            font-family: 'Montserrat', 'Arial';
                            color: #ffffff;
                            font-size: 100%;
                            text-shadow: none;
                            line-height: 1;
                            font-weight: bold;
                            font-style: normal;
                            text-decoration: none;
                            text-align: left;
                            letter-spacing: normal;
                            word-spacing: normal;
                            text-transform: none;
                        }

                        div#n2-ss-49 .n2-font-aff7a88fb2f7ddc8e7d133024b788d1c-link a:HOVER,
                        div#n2-ss-49 .n2-font-aff7a88fb2f7ddc8e7d133024b788d1c-link a:ACTIVE,
                        div#n2-ss-49 .n2-font-aff7a88fb2f7ddc8e7d133024b788d1c-link a:FOCUS {
                            color: #474747;
                        }

                        div#n2-ss-49 .n2-style-b746d63abeaf37a100ead1f0bcd9fe68-heading {
                            background: #ffffff;
                            background: RGBA(255, 255, 255, 0);
                            opacity: 1;
                            padding: 1em 2.1em 1em 2.1em;
                            box-shadow: none;
                            border-width: 2px;
                            border-style: solid;
                            border-color: #ffffff;
                            border-color: RGBA(255, 255, 255, 1);
                            border-radius: 50px;
                            transition: background 0.3s ease;
                        }

                        div#n2-ss-49 .n2-style-b746d63abeaf37a100ead1f0bcd9fe68-heading:Hover,
                        div#n2-ss-49 .n2-style-b746d63abeaf37a100ead1f0bcd9fe68-heading:ACTIVE,
                        div#n2-ss-49 .n2-style-b746d63abeaf37a100ead1f0bcd9fe68-heading:FOCUS {
                            background: #ffffff;
                            border-width: 2px;
                            border-style: solid;
                            border-color: #ffffff;
                            border-color: RGBA(255, 255, 255, 1);
                            padding: 1em 2.1em 1em 2.1em;
                        }

                        div#n2-ss-49 .n2-style-3b7244c34a5653eb159a640b702a88e5-heading {
                            background: #ffffff;
                            background: RGBA(255, 255, 255, 0);
                            opacity: 1;
                            padding: 1em 2.1em 1em 2.1em;
                            box-shadow: none;
                            border-width: 2px;
                            border-style: solid;
                            border-color: #ffffff;
                            border-color: RGBA(255, 255, 255, 1);
                            border-radius: 50px;
                            transition: background 0.3s ease;
                        }

                        div#n2-ss-49 .n2-style-3b7244c34a5653eb159a640b702a88e5-heading:Hover,
                        div#n2-ss-49 .n2-style-3b7244c34a5653eb159a640b702a88e5-heading:ACTIVE,
                        div#n2-ss-49 .n2-style-3b7244c34a5653eb159a640b702a88e5-heading:FOCUS {
                            background: #ffffff;
                            border-width: 2px;
                            border-style: solid;
                            border-color: #ffffff;
                            border-color: RGBA(255, 255, 255, 1);
                            padding: 1em 2.1em 1em 2.1em;
                        }

                        div#n2-ss-49 .n2-style-1da877f94ec39d33b86fac7462c51834-dot {
                            background: #ffffff;
                            background: RGBA(255, 255, 255, 0.67);
                            opacity: 1;
                            padding: 5px 5px 5px 5px;
                            box-shadow: none;
                            border-width: 2px;
                            border-style: solid;
                            border-color: #ffffff;
                            border-color: RGBA(255, 255, 255, 0);
                            border-radius: 50px;
                            margin: 4px;
                        }

                        div#n2-ss-49 .n2-style-1da877f94ec39d33b86fac7462c51834-dot.n2-active,
                        div#n2-ss-49 .n2-style-1da877f94ec39d33b86fac7462c51834-dot:HOVER,
                        div#n2-ss-49 .n2-style-1da877f94ec39d33b86fac7462c51834-dot:FOCUS {
                            background: #01add3;
                            background: RGBA(1, 173, 211, 0);
                            border-width: 2px;
                            border-style: solid;
                            border-color: #ffffff;
                            border-color: RGBA(255, 255, 255, 0.67);
                        }
                    </style>
                    <div id="n2-ss-49-align" class="n2-ss-align">
                        <div class="n2-padding">
                            <div id="n2-ss-49" data-creator="Smart Slider 3" class="n2-ss-slider n2-ow n2-has-hover n2notransition  n2-ss-load-fade " data-minFontSizedesktopPortrait="4" data-minFontSizedesktopLandscape="4" data-minFontSizetabletPortrait="4" data-minFontSizetabletLandscape="4"
                                 data-minFontSizemobilePortrait="4" data-minFontSizemobileLandscape="4" style="font-size: 1rem;" data-fontsize="16">
                                <div class="n2-ss-slider-1 n2-ss-swipe-element n2-ow" style="">
                                    <div class="n2-ss-slider-2 n2-ow">
                                        <div class="n2-ss-background-animation n2-ow"></div>
                                        <div class="n2-ss-slider-3 n2-ow" style="">
                                            <div class="n2-ss-slide-backgrounds"></div>
                                            <div data-first="1" data-slide-duration="0" data-id="226" data-title="Polar" style="" class=" n2-ss-slide n2-ss-canvas n2-ow  n2-ss-slide-226">
                                                <div class="n2-ss-slide-background n2-ow" data-mode="fill">
                                                    <div data-hash="36bb680da7b316e997cf4fe085f5ecd8" data-desktop="wp-content/uploads/2015/11/polar.jpg" class="n2-ss-slide-background-image" data-blur="0"><img src="wp-content/uploads/2015/11/polar.jpg" alt="" /></div>
                                                </div>


                                                <div class="n2-ss-layers-container n2-ow" data-csstextalign="center" style="">
                                                    <div class="n2-ss-layer n2-ow" style="max-width: 1100px;overflow:visible;" data-csstextalign="inherit" data-has-maxwidth="1" data-desktopportraitmaxwidth="1100" data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-pm="content" data-desktopportraitpadding="10|*|10|*|10|*|10|*|px+"
                                                         data-mobileportraitpadding="50|*|10|*|105|*|10|*|px+" data-desktopportraitinneralign="inherit" data-sstype="content" data-hasbackground="0" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1"
                                                         data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="1" data-desktopportraitfontsize="100" data-plugin="rendered">
                                                        <div class="n2-ss-section-main-content n2-ss-layer-content n2-ow" style="padding:0.625em 0.625em 0.625em 0.625em ;" data-verticalalign="center">
                                                            <div class="n2-ss-layer n2-ow" style="margin:0em 0em 0em 0em ;overflow:visible;" data-pm="normal" data-desktopportraitmargin="0|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0" data-desktopportraitmaxwidth="0" data-cssselfalign="inherit"
                                                                 data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1"
                                                                 data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-mobileportraitfontsize="80" data-plugin="rendered">
                                                                <!-- <div id="n2-ss-49item1" class="n2-font-6c96429fa58bd94cf3e813e697529a96-hover n2-style-e37207374acab59d745a1f417b54aec0-heading   n2-ss-item-content n2-ow" style="display:inline-block;white-space:nowrap;">ENVIRONMENT</div> -->
                                                            </div>
                                                            <div class="n2-ss-layer n2-ow" style="margin:0em 0em 0em 0em ;overflow:visible;" data-pm="normal" data-desktopportraitmargin="0|*|0|*|0|*|0|*|px+" data-mobileportraitmargin="10|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0" data-desktopportraitmaxwidth="0"
                                                                 data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1"
                                                                 data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-mobileportraitfontsize="50" data-plugin="rendered">
                                                                <img src="img/Group9.png" style="
    position: relative;
    left: -125px;
    top: 130px;
">
                                                                <div id="n2-ss-49item2" class="n2-font-5282b95fccf8eb72f63cd3fe70fef35b-hover   n2-ss-item-content n2-ow" style="display:block;"> Cyber resilience in the age of humans.</div>

                                                                <h3 style="color: white">The best and most robust security systems are still centered on human beings. That’s good news.</h3>





                                                            </div>
                                                            <div class="n2-ss-layer n2-ow" style="margin:2.8125em 0em 0em 0em ;overflow:visible;" data-pm="normal" data-desktopportraitmargin="45|*|0|*|0|*|0|*|px+" data-mobileportraitmargin="20|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0"
                                                                 data-desktopportraitmaxwidth="0" data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1"
                                                                 data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-plugin="rendered">
                                                                <div class="n2-ss-button-container n2-ss-item-content n2-ow n2-font-aff7a88fb2f7ddc8e7d133024b788d1c-link  n2-ss-nowrap">
                                                                    <a class="n2-style-b746d63abeaf37a100ead1f0bcd9fe68-heading  n2-ow " onclick="return false;" href="#">
                                                                        <div>
                                                                            <div>Read more</div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="n2-ss-layer n2-ow" style="left:0px;top:475px;width:47px;height:auto;overflow:visible;" data-pm="absolute" data-responsiveposition="1" data-desktopportraitleft="0" data-tabletportraitleft="0" data-mobileportraitleft="0" data-desktopportraittop="475"
                                                         data-tabletportraittop="0" data-mobileportraittop="0" data-responsivesize="1" data-desktopportraitwidth="47" data-tabletportraitwidth="71" data-mobileportraitwidth="294" data-desktopportraitheight="auto"
                                                         data-tabletportraitheight="113" data-desktopportraitalign="center" data-tabletportraitalign="center" data-mobileportraitalign="center" data-desktopportraitvalign="middle" data-tabletportraitvalign="bottom"
                                                         data-mobileportraitvalign="bottom" data-parentid="" data-desktopportraitparentalign="center" data-desktopportraitparentvalign="middle" data-sstype="layer" data-rotation="0" data-animv2="{&quot;basic&quot;:{&quot;in&quot;:{&quot;keyFrames&quot;:[{&quot;delay&quot;:0.2,&quot;ease&quot;:&quot;easeInOutQuad&quot;,&quot;opacity&quot;:0,&quot;y&quot;:&quot;-200&quot;}]},&quot;out&quot;:{&quot;keyFrames&quot;:[{&quot;delay&quot;:3.6,&quot;ease&quot;:&quot;easeInOutQuad&quot;,&quot;opacity&quot;:0,&quot;y&quot;:&quot;200&quot;}]}}}"
                                                         data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100"
                                                         data-plugin="rendered">
                                                        <div class=" n2-ss-img-wrapper n2-ss-item-content n2-ow" style="overflow:hidden;"><img src="//smartslider3.com/wp-content/uploads/slider49/scrolldown-1.gif" id="n2-ss-49item4" alt="" style="display: inline-block; max-width: 100%; width: 100%;height: auto;" class=" n2-ow" data-no-lazy="1"
                                                                                                                                               data-hack="data-lazy-src" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-slide-duration="0" data-id="227" data-title="Bolivia" style="" class=" n2-ss-slide n2-ss-canvas n2-ow  n2-ss-slide-227">
                                                <div class="n2-ss-slide-background n2-ow" data-mode="fill">
                                                    <div data-hash="a77e6c165ce6b55a5af111aaad39e131" data-desktop="wp-content/uploads/2015/11/bolivia.jpg" class="n2-ss-slide-background-image" data-blur="0"><img src="wp-content/uploads/2015/11/bolivia.jpg" alt="" /></div>
                                                </div>
                                                <div class="n2-ss-layers-container n2-ow" data-csstextalign="center" style="width: 750px;height: 422px;margin: 0px 65px;perspective: 1000px;">
                                                    <div class="n2-ss-layer n2-ow" style="max-width: 1100px;overflow:visible;" data-csstextalign="inherit" data-has-maxwidth="1" data-desktopportraitmaxwidth="1100" data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-pm="content" data-desktopportraitpadding="10|*|10|*|10|*|10|*|px+"
                                                         data-mobileportraitpadding="50|*|10|*|105|*|10|*|px+" data-desktopportraitinneralign="inherit" data-sstype="content" data-hasbackground="0" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1"
                                                         data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="1" data-desktopportraitfontsize="100" data-plugin="rendered">
                                                        <div class="n2-ss-section-main-content n2-ss-layer-content n2-ow" style="padding:0.625em 0.625em 0.625em 0.625em ;" data-verticalalign="center">
                                                            <div class="n2-ss-layer n2-ow" style="margin:0em 0em 0em 0em ;overflow:visible;" data-pm="normal" data-desktopportraitmargin="0|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0" data-desktopportraitmaxwidth="0" data-cssselfalign="inherit"
                                                                 data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1"
                                                                 data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-mobileportraitfontsize="80" data-plugin="rendered">
                                                                <!-- <div id="n2-ss-49item5" class="n2-font-6c96429fa58bd94cf3e813e697529a96-hover n2-style-e37207374acab59d745a1f417b54aec0-heading   n2-ss-item-content n2-ow" style="display:inline-block;white-space:nowrap;">BOLIVIA</div> -->
                                                            </div>
                                                            <div class="n2-ss-layer n2-ow" style="margin:0em 0em 0em 0em ;overflow:visible;" data-pm="normal" data-desktopportraitmargin="0|*|0|*|0|*|0|*|px+" data-mobileportraitmargin="10|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0" data-desktopportraitmaxwidth="0"
                                                                 data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1"
                                                                 data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-mobileportraitfontsize="50" data-plugin="rendered">
                                                                <img src="img/Group 10.png" style="
    position: relative;
    left: -125px;
    top: 130px;
">

                                                                <div id="n2-ss-49item6" class="n2-font-5282b95fccf8eb72f63cd3fe70fef35b-hover   n2-ss-item-content n2-ow" style="display:block;">How the Talent Economy Gets a Surge from Industry 4.0</div>
                                                                <h3 style="color: white">Assymetries in the job market are encroaching firm performance and profitability.</h3>
                                                            </div>
                                                            <div class="n2-ss-layer n2-ow" style="margin:2.8125em 0em 0em 0em ;overflow:visible;" data-pm="normal" data-desktopportraitmargin="45|*|0|*|0|*|0|*|px+" data-mobileportraitmargin="20|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0"
                                                                 data-desktopportraitmaxwidth="0" data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1"
                                                                 data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-plugin="rendered">
                                                                <div class="n2-ss-button-container n2-ss-item-content n2-ow n2-font-aff7a88fb2f7ddc8e7d133024b788d1c-link  n2-ss-nowrap">
                                                                    <a class="n2-style-3b7244c34a5653eb159a640b702a88e5-heading  n2-ow " onclick="return false;" href="http://alblog.arturodigital.com/how-the-talent-economy-gets-a-surge-from-industry-4-0/">
                                                                        <div>
                                                                            <div>Read more</div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="n2-ss-layer n2-ow" style="left:0px;top:475px;width:47px;height:67px;overflow:visible;" data-pm="absolute" data-responsiveposition="1" data-desktopportraitleft="0" data-desktopportraittop="475" data-tabletportraittop="0" data-mobileportraittop="0"
                                                         data-responsivesize="1" data-desktopportraitwidth="47" data-tabletportraitwidth="71" data-mobileportraitwidth="294" data-desktopportraitheight="67" data-tabletportraitheight="113" data-mobileportraitheight="auto"
                                                         data-desktopportraitalign="center" data-tabletportraitalign="center" data-mobileportraitalign="center" data-desktopportraitvalign="middle" data-tabletportraitvalign="bottom" data-mobileportraitvalign="bottom"
                                                         data-parentid="" data-desktopportraitparentalign="center" data-desktopportraitparentvalign="middle" data-sstype="layer" data-rotation="0" data-animv2="{&quot;basic&quot;:{&quot;in&quot;:{&quot;keyFrames&quot;:[{&quot;delay&quot;:0.2,&quot;ease&quot;:&quot;easeInOutQuad&quot;,&quot;opacity&quot;:0,&quot;y&quot;:&quot;-200&quot;}]},&quot;out&quot;:{&quot;keyFrames&quot;:[{&quot;delay&quot;:3.6,&quot;ease&quot;:&quot;easeInOutQuad&quot;,&quot;opacity&quot;:0,&quot;y&quot;:&quot;200&quot;}]}}}"
                                                         data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100"
                                                         data-plugin="rendered">
                                                        <div class=" n2-ss-img-wrapper n2-ss-item-content n2-ow" style="overflow:hidden;"><img src="//smartslider3.com/wp-content/uploads/slider49/scrolldown-1.gif" id="n2-ss-49item8" alt="" style="display: inline-block; max-width: 100%; width: 100%;height: auto;" class=" n2-ow" data-no-lazy="1"
                                                                                                                                               data-hack="data-lazy-src" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-slide-duration="0" data-id="228" data-title="Jellyfish" style="" class=" n2-ss-slide n2-ss-canvas n2-ow  n2-ss-slide-228">
                                                <div class="n2-ss-slide-background n2-ow" data-mode="fill">
                                                    <div data-hash="0fa0f6c9e1a790a441d69e19d58e0ede" data-desktop="wp-content/uploads/2015/11/jelly.jpg" class="n2-ss-slide-background-image" data-blur="0"><img src="wp-content/uploads/2015/11/jelly.jpg" alt="" /></div>
                                                </div>
                                                <div class="n2-ss-layers-container n2-ow" data-csstextalign="center" style="">
                                                    <div class="n2-ss-layer n2-ow" style="max-width: 1100px;overflow:visible;" data-csstextalign="inherit" data-has-maxwidth="1" data-desktopportraitmaxwidth="1100" data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-pm="content" data-desktopportraitpadding="10|*|10|*|10|*|10|*|px+"
                                                         data-mobileportraitpadding="55|*|10|*|105|*|10|*|px+" data-desktopportraitinneralign="inherit" data-sstype="content" data-hasbackground="0" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1"
                                                         data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="1" data-desktopportraitfontsize="100" data-plugin="rendered">
                                                        <div class="n2-ss-section-main-content n2-ss-layer-content n2-ow" style="padding:0.625em 0.625em 0.625em 0.625em ;" data-verticalalign="center">
                                                            <div class="n2-ss-layer n2-ow" style="margin:0em 0em 0em 0em ;overflow:visible;" data-pm="normal" data-desktopportraitmargin="0|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0" data-desktopportraitmaxwidth="0" data-cssselfalign="inherit"
                                                                 data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1"
                                                                 data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-mobileportraitfontsize="80" data-plugin="rendered">
                                                                <div id="n2-ss-49item9" class="n2-font-6c96429fa58bd94cf3e813e697529a96-hover n2-style-e37207374acab59d745a1f417b54aec0-heading   n2-ss-item-content n2-ow" style="display:inline-block;white-space:nowrap;"></div>
                                                            </div>
                                                            <div class="n2-ss-layer n2-ow" style="margin:0em 0em 0em 0em ;overflow:visible;" data-pm="normal" data-desktopportraitmargin="0|*|0|*|0|*|0|*|px+" data-mobileportraitmargin="10|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0" data-desktopportraitmaxwidth="0"
                                                                 data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1"
                                                                 data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-mobileportraitfontsize="50" data-plugin="rendered">
                                                                <img src="img/Group 16.png" style="
    position: relative;
    left: -125px;
    top: 130px;
">

                                                                <div id="n2-ss-49item10" class="n2-font-5282b95fccf8eb72f63cd3fe70fef35b-hover   n2-ss-item-content n2-ow" style="display:block;">Resumes for Robots are getting longer, and that’s Good News.</div>
                                                                <h3 style="color: white">How do you achieve experience excellences in a super-competitive industry? When it comes to value creation, it’s best to ask the experts themselves
                                                                </h3>
                                                            </div>
                                                            <div class="n2-ss-layer n2-ow" style="margin:2.8125em 0em 0em 0em ;overflow:visible;" data-pm="normal" data-desktopportraitmargin="45|*|0|*|0|*|0|*|px+" data-mobileportraitmargin="20|*|0|*|0|*|0|*|px+" data-desktopportraitheight="0" data-has-maxwidth="0"
                                                                 data-desktopportraitmaxwidth="0" data-cssselfalign="inherit" data-desktopportraitselfalign="inherit" data-sstype="layer" data-rotation="0" data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1"
                                                                 data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100" data-plugin="rendered">
                                                                <div class="n2-ss-button-container n2-ss-item-content n2-ow n2-font-aff7a88fb2f7ddc8e7d133024b788d1c-link  n2-ss-nowrap">
                                                                    <a class="n2-style-b746d63abeaf37a100ead1f0bcd9fe68-heading  n2-ow " onclick="return false;" href="http://alblog.arturodigital.com/resumes-for-robots-are-getting-longer-and-thats-good-news/">
                                                                        <div>
                                                                            <div>Read more</div>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="n2-ss-layer n2-ow" style="left:0px;top:495px;width:50px;height:auto;overflow:visible;" data-pm="absolute" data-responsiveposition="1" data-desktopportraitleft="0" data-desktopportraittop="495" data-tabletportraittop="0" data-mobileportraittop="0"
                                                         data-responsivesize="1" data-desktopportraitwidth="50" data-tabletportraitwidth="100" data-mobileportraitwidth="300" data-desktopportraitheight="auto" data-desktopportraitalign="center" data-tabletportraitalign="center"
                                                         data-mobileportraitalign="center" data-desktopportraitvalign="middle" data-tabletportraitvalign="bottom" data-mobileportraitvalign="bottom" data-parentid="" data-desktopportraitparentalign="center" data-desktopportraitparentvalign="middle"
                                                         data-sstype="layer" data-rotation="0" data-animv2="{&quot;basic&quot;:{&quot;in&quot;:{&quot;keyFrames&quot;:[{&quot;delay&quot;:0.2,&quot;ease&quot;:&quot;easeInOutQuad&quot;,&quot;opacity&quot;:0,&quot;y&quot;:&quot;-200&quot;}]},&quot;out&quot;:{&quot;keyFrames&quot;:[{&quot;delay&quot;:3.6,&quot;ease&quot;:&quot;easeInOutQuad&quot;,&quot;opacity&quot;:0,&quot;y&quot;:&quot;200&quot;}]}}}"
                                                         data-desktopportrait="1" data-desktoplandscape="1" data-tabletportrait="1" data-tabletlandscape="1" data-mobileportrait="1" data-mobilelandscape="1" data-adaptivefont="0" data-desktopportraitfontsize="100"
                                                         data-plugin="rendered"><a style="display:block;" class="n2-ss-item-content n2-ow" onclick="n2ss.scroll(event, &quot;after&quot;, N2Classes.$(this).closest(&quot;.n2-ss-slider&quot;).addBack());" href="#"><span class=" n2-ow" style="display:block;"><img class="n2-ow n2-ss-icon-normal" style="width:100%;height:auto;" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyMDQ4IDIwNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1MjMgODY0cTAgMTMtMTAgMjNsLTQ2NiA0NjZxLTEwIDEwLTIzIDEwdC0yMy0xMGwtNDY2LTQ2NnEtMTAtMTAtMTAtMjN0MTAtMjNsNTAtNTBxMTAtMTAgMjMtMTB0MjMgMTBsMzkzIDM5MyAzOTMtMzkzcTEwLTEwIDIzLTEwdDIzIDEwbDUwIDUwcTEwIDEwIDEwIDIzeiIgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MC41NSI+PC9wYXRoPjwvc3ZnPg==" alt="Icon" /></span></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-ssright="0+10" data-sstop="height/2-bulletheight/2" data-offset="10" class="n2-ss-widget n2-ss-widget-display-desktop n2-ss-widget-display-tablet n2-ss-widget-display-mobile  n2-flex n2-ss-control-bullet n2-ss-control-bullet-vertical" style="position: absolute;">
                                        <div class=" nextend-bullet-bar n2-ow n2-bar-justify-content-center"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="n2-clear"></div>
                            <div id="n2-ss-49-spinner" style="display: none;">
                                <div>
                                    <div class="n2-ss-spinner-simple-white-container">
                                        <div class="n2-ss-spinner-simple-white"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="n2-ss-49-placeholder" style="position: relative;z-index:2;background-color:RGBA(0,0,0,0);max-height:3000px; background-color:RGBA(255,255,255,0);"><img style="width: 100%; max-width:3000px; display: block;opacity:0;margin:0px;" class="n2-ow" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMCIgd2lkdGg9IjE5MjAiIGhlaWdodD0iMTA4MCIgPjwvc3ZnPg=="
                                                                                                                                                                                     alt="Slider" /></div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">

                    <div class="col-md-6 col-sm-12 col-xs-12 from-left slide-in text-size img-height overlay3 myredline" style="background: url('img/marten_bjork_6dw3xyq_MWc6h.jpg'); height: 650px;  background-repeat: no-repeat;
        background-size: cover;
        padding: 0px;">
                        <div class="redhorizontal4"></div>
                        <br>
                        <div class="container greybox">
                            <h5 style="color: white;
            z-index: 999;
            opacity: 0.999; font-family: 'Montserrat', sans-serif !important;">View all blogs &nbsp<i class="fa fa-arrow-right"></i></h5>
                            <div class="container-fluid mydivgrey" style="height: 350px;"></div>
                            <h2 style=" font-family: 'Montserrat', sans-serif !important;    color: white;
            z-index: 999;
            opacity: 0.999; font-family: 'Montserrat', sans-serif !important; font-size: 25px;">The Right Approach To <br>Social Entrepreneurship</h2>
                            <p style="    font-size: 12px;; line-height: 4px;    color: white;
            z-index: 999;
            opacity: 0.999; font-family: 'Montserrat', sans-serif !important;">July 29, 2019</p>
                            <div style="height: 8px;    color: white;
            z-index: 999;
            opacity: 0.999;"></div>
                            <p style="font-weight: bold; line-height: 0px;    color: white;
            z-index: 999;
            opacity: 0.999; font-family: 'Montserrat', sans-serif !important;">Blog</p>
                            <p style="    font-size: 13px;    color: white;
            z-index: 999;
            opacity: 0.999; font-family: 'Montserrat', sans-serif !important;">Being responsible and accountable isn’t just good for society.<br> It’s good business too. <a href="http://alblog.arturodigital.com/the-right-approach-to-social-entrepreneurship/">Learn more</a> </p>
                        </div>
                    </div>

                    <div class="col-md-6 whitebox from-right slide-in no-gutter-vertical ">


                        <div class="row black-box nomargin ">
                            <div class="col-md-6 image-box overlay3 myredline" style="padding: 0px">
                                <div class="redhorizontal4" style=""></div>
                                <img src="img/andres_urena_v7uomnw_Av6sr.jpg" alt="" class="img-responsive lazy" style="width: 100%; height: 470px">
                            </div>
                            <div class="col-md-6 " style="padding:0px;">
                                <div class="container mydivh2 mydivred3 " style="width: 80%;">
                                    <div class="container-fluid divspaces" style="height: 80px;"></div>
                                    <h2 style="font-size: 25px; font-family: 'Montserrat', sans-serif !important; margin-top: -18px;">
                                        Cyber resilience <br> in the age of humans
                                    </h2>
                                    <div style="height: 10px;"></div>
                                    <p style="    font-size: 12px; line-height: 4px; font-family: 'Montserrat', sans-serif !important;">July 29, 2019</p>
                                    <p style="font-size: 13px; line-height: 4px; font-family: 'Montserrat', sans-serif !important; font-weight: bold;">
                                        NEWS</p>
                                    <div style="height: 8px"></div>
                                    <br>
                                    <p class="para-small" style="font-size: 15px; font-family: 'Montserrat', sans-serif !important;  font-size: 13px;">Preventive wellness powered by analytics. Precision Hub introduces a technology-driven solution that uses data to improve the quality of patient care and treatment.</p>
                                </div>

                            </div>
                        </div>
                        <div class="redbox" style="background-color:#EA0218;">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-9 col-sm-12 col-xs-12 div-red">
                                        <h4 style="color: white; font-family: 'Montserrat', sans-serif !important; font-size: 25px;">IT projects (not jobs), will get you top dollar.</h4>
                                        <p style="color: white;  margin-top: 1.2em; font-size: 12px;; line-height: 4px; font-family: 'Montserrat', sans-serif !important;">
                                            July 29, 2019</p>
                                        <p style="color: white;  font-size: 12px; line-height: 4px; font-family: 'Montserrat', sans-serif !important;  font-size: 13px;">
                                            NEWS</p>
                                    </div>
                                    <div class="col-md-3 col-sm-12 col-xs-12 div-btn">
                                        <div class="wrapper-inner-tab-backgrounds-second btn-inner-tab" style="width: 170% !important; background-color: transparent;">
                                            <div class="sim-button button6 btnred" style="    margin-top: 20px;    margin-left: 0px; font-family: 'Montserrat', sans-serif !important;font-size: 12px;">
                                                <span>Read
                      more</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div class="boxes">
                    <div class="col-md-12 row" style="    margin: 0px;padding: 0px;">
                        <div class="col-md-3 box1 from-left slide-in image-box2 mydivred4 myredline" style="  padding: 0px; height: 390px;">
                            <div class="redhorizontal4" style=""></div>
                            <img src="img/samson_creative_zgjb_leQq1.jpg" alt="" style="background-repeat: no-repeat;
                  background-size: cover; width: 100%; height: 390px; z-index: 0;" class="img-responsive">
                            <!-- <div class="overlay1"></div> -->
                            <div class="content_box" style="top: -157px;margin-left: 2em;">

                                <h3 style="font-family: 'Montserrat', sans-serif !important;">The Arthur Lawrence<br/> Way</h3>
                                <h6 style="font-family: 'Montserrat', sans-serif !important;     font-size: 12px;"></h6>
                                <h6 style="font-family: 'Montserrat', sans-serif !important; font-size: 13px;">News</h6>
                            </div>
                        </div>
                        <div class="col-md-3 box2 image-box2 myredline" style="padding: 0px; height: 390px;">
                            <div class="redhorizontal4" ></div>
                            <img src="img/red.jpg" alt="" style="background-repeat: no-repeat;
            background-size: cover; width: 100%; height: 390px;" class="img-responsive">
                            <!-- <div class="overlay2"></div> -->
                            <div class="content_box" style="top: -157px;margin-left: 2em;">
                                <h3 style="font-family: 'Montserrat', sans-serif !important;">Management <br>Consulting</h3>
                                <h6 style="font-family: 'Montserrat', sans-serif !important;     font-size: 12px;">July 25,2019</h6>
                                <h6 style="font-family: 'Montserrat', sans-serif !important; font-size: 13px;">Blog</h6>
                            </div>
                        </div>
                        <div class="col-md-3 box3 mydivred2 myredline" style="padding:0px">
                            <div class="redhorizontal4" ></div>

                            <div class="content_box" style="padding: 67px;">
                                <h3 style="font-family: 'Montserrat', sans-serif !important; font-size: 25px;">Xperti</h3>
                                <h6 style="font-family: 'Montserrat', sans-serif !important;     font-size: 12px;">July 25,2019</h6>
                                <h6 style="font-family: 'Montserrat', sans-serif !important;">News</h6>
                                <p style="font-family: 'Montserrat', sans-serif !important; font-size: 13px;">Everyday, at least one technology expert is experiencing a career transformation like never before. What's the secret to continual career success?</p>
                                <a href="http://alblog.arturodigital.com/arthur-lawrence-launches-xperti-an-elite-community-of-technology-professionals/">Learn more</a>
                            </div>
                        </div>
                        <div class="col-md-3 box4 from-right slide-in image-box1" style="padding: 0px !important;">
                            <img src="img/daniel.png" alt="" style="background-repeat: no-repeat;
              background-size: cover; width: 100%; height: 390px;" class="img-responsive">
                        </div>
                    </div>
                </div>
            </section>
            <!-- 2 images ends -->


            <div class="container-fluid content-section mypaddingbox" >
                <div class="col-md-12 row" style="    margin: 0px;padding: 0px;">
                    <div class="col-md-6 from-bottom slide-in">
                        <div class="gray-color image-box" style="box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)!important;height:auto;">
                            <img src="img/1.jpg" alt="" class="img-responsive" style="
          background-repeat: no-repeat;"></div>
                    </div>
                    <div class="col-md-6 from-top slide-in" style=" padding-top: 7px;">
                        <h1 style="font-family: 'Montserrat', sans-serif !important; font-size: 25px; margin-top: 20px;">Three reasons of your company hasn't invested enough in data science</h1>
                        <p style="font-family: 'Montserrat', sans-serif !important; font-size: 13px;">The real decisions in data science investment are qualitative and strategic. Learn more about issues in technology management, technical resources, structures and the direction you need to take when embarking on your data science program.</p>
                        <button type="button" class="btn btn-dark  btn-height" style="font-family: 'Montserrat', sans-serif !important; font-weight: bold; width: 150px; height: 50px;font-size: 12px;  ">Read
                            more</button>
                    </div>
                </div>
            </div>

            <section>
                <div class="fade-in subscribe">
                    <div class="container-fluid">

                        <div class="col-md-12  row">
                            <div class="col-md-1 col-sm-1 col-xs-1 small-icon" style="padding-left: 70px;">
                                <!-- <i class="fa fa-envelope" aria-hidden="true"></i> -->
                                <img src="img/inbox.png" class="img-responsive imagezoom" width="40">
                            </div>
                            <div class="col-md-3 col-sm-3 col-xs-12 small-text" style="margin-left: -5px;     left: 20px;">
                                <h4 style="font-family: 'Montserrat', sans-serif !important; letter-spacing: 0px !important;font-weight: lighter;margin-top: 5px;">Get in Touch
                                </h4>
                            </div>

                            <div class="col-md-8 col-sm-8 col-xs-12 right">
                                <div class="row">
                                    <div class="col-md-4 col-sm-4 input-div offset-sm-1"><input type="text" placeholder="Your Name"></div>
                                    <div class="col-md-4 col-sm-4 input-div"><input type="Email" placeholder="Your Email Address"></div>
                                    <div class="col-md-3     col-sm-3 ">
                                        <div class="wrapper-inner-tab-backgrounds-second mybtnsubscribe button-div" style="margin-top: -45px;">
                                            <div class="sim-button button6 mybtncolor" style="margin-top: 44px;margin-left: 0px; height: 45px !important;font-family: 'Montserrat', sans-serif !important;">
                                                <span>Submit</span></div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div class="join-now">

                    <div class="col-md-12 row" style="    margin: 0px;padding: 0px;">
                        <div class="col-md-6 join-left from-left slide-in">
                            <p style="font-family: 'Montserrat', sans-serif !important; font-size: 45px; color: black !important;"><span style="font-weight: bolder">Join</span><br> Arthur Lawrence</p>
                            <p>Skills pay the bills. With integrity and ambition, they do <br>much more. Explore Arthur Lawrence Careers to discover<br> which career opportunity is best for you.</p>

                            <div class="wrapper-inner-tab-backgrounds-second mybtnapplynow">
                                <div class="sim-button button6 mybtnapplynow1" style="    margin-top: 40px;    margin-left: 0px; border: 2px solid #2E2E2E; font-family: 'Montserrat', sans-serif !important;">
                                    <a target="_blank" href="http://jobs.arthurlawrence.net/Jobs/ERP_JobBoard.aspx"> <span>Apply now</span> </a>
                                </div>
                            </div>




                        </div>

                        <div class="col-md-6 join-right from-right slide-in">
                            <div class="overlay"></div>

                            <!-- <img src="img/annie.png" class="img-responsive" widt="100px" style="position: absolute;"> -->
                            <center> <img src="img/andres.png" class="img-responsive big_image imagezoom" width="100px" style="position: relative;"></center>
                        </div>

                    </div>

                </div>
            </section>

             <section>
                <div class="fade-in subscribe">
                    <div class="container-fluid">

                        <div class="col-md-12  row">
                            <div class="col-md-1 col-sm-1 col-xs-1 small-icon" style="padding-left: 70px;">
                                <!-- <i class="fa fa-envelope" aria-hidden="true"></i> -->
                                <img src="img/inbox.png" class="img-responsive imagezoom" width="40">
                            </div>
                            <div class="col-md-5 col-sm-11 col-xs-11 small-text" style="margin-left: -5px;     left: 20px;">
                                <h4 style="font-family: 'Montserrat', sans-serif !important; letter-spacing: 0px !important;font-weight: lighter;margin-top: 5px;">Subscribe for updates
                                </h4>
                            </div>

                            <div class="col-md-6 col-sm-12 col-xs-12 right">
                                <div class="row">
                                    <div class="col-md-9 col-sm-6 input-div"><input type="Email" placeholder="Your Email Address"></div>
                                    <div class="col-md-3 col-sm-6 ">
                                        <div class="wrapper-inner-tab-backgrounds-second mybtnsubscribe button-div" style="margin-top: -45px;">
                                            <div class="sim-button button6 mybtncolor" style="margin-top: 44px;margin-left: 0px; height: 45px !important;font-family: 'Montserrat', sans-serif !important;">
                                                <span>Subscribe</span></div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </section>

<?php
include ('include/footer.php');
?>