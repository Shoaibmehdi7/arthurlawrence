    N2R('documentReady', function ($) {
        nextend.fontsDeferred = $.Deferred();
        if (nextend.fontsLoaded) {
            nextend.fontsDeferred.resolve()
        } else {
            nextend.fontsLoadedActive = function () {
                nextend.fontsLoaded = true;
                nextend.fontsDeferred.resolve()
            };
            var intercalCounter = 0;
            nextend.fontInterval = setInterval(function () {
                if (intercalCounter > 3 || document.documentElement.className.indexOf(
                    'wf-active') !== -1) {
                    nextend.fontsLoadedActive();
                    clearInterval(nextend.fontInterval)
                }
                intercalCounter++
            }, 1000)
        }
        window.n2ScrollSpeed = 400;
        N2R(["nextend-frontend", "smartslider-frontend", "nextend-gsap", "smartslider-backgroundanimation",
            "smartslider-simple-type-frontend"
        ], function () {
            new N2Classes.SmartSliderSimple('#n2-ss-49', {
                "admin": false,
                "translate3d": 1,
                "callbacks": "",
                "background.video.mobile": 1,
                "randomize": {
                    "randomize": 0,
                    "randomizeFirst": 0
                },
                "align": "normal",
                "isDelayed": 0,
                "load": {
                    "fade": 1,
                    "scroll": 0
                },
                "playWhenVisible": 1,
                "playWhenVisibleAt": 0.5,
                "responsive": {
                    "desktop": 1,
                    "tablet": 1,
                    "mobile": 1,
                    "onResizeEnabled": true,
                    "type": "fullpage",
                    "downscale": 1,
                    "upscale": 1,
                    "minimumHeight": -1,
                    "maximumHeight": -1,
                    "maximumSlideWidth": 3000,
                    "maximumSlideWidthLandscape": 3000,
                    "maximumSlideWidthTablet": 3000,
                    "maximumSlideWidthTabletLandscape": 3000,
                    "maximumSlideWidthMobile": 3000,
                    "maximumSlideWidthMobileLandscape": 3000,
                    "maximumSlideWidthConstrainHeight": 0,
                    "forceFull": 1,
                    "forceFullOverflowX": "body",
                    "forceFullHorizontalSelector": "",
                    "constrainRatio": 1,
                    "sliderHeightBasedOn": "real",
                    "decreaseSliderHeight": 0,
                    "focusUser": 1,
                    "deviceModes": {
                        "desktopPortrait": 1,
                        "desktopLandscape": 0,
                        "tabletPortrait": 1,
                        "tabletLandscape": 0,
                        "mobilePortrait": 1,
                        "mobileLandscape": 0
                    },
                    "normalizedDeviceModes": {
                        "unknownUnknown": ["unknown", "Unknown"],
                        "desktopPortrait": ["desktop", "Portrait"],
                        "desktopLandscape": ["desktop", "Portrait"],
                        "tabletPortrait": ["tablet", "Portrait"],
                        "tabletLandscape": ["tablet", "Portrait"],
                        "mobilePortrait": ["mobile", "Portrait"],
                        "mobileLandscape": ["mobile", "Portrait"]
                    },
                    "verticalRatioModifiers": {
                        "unknownUnknown": 1,
                        "desktopPortrait": 1,
                        "desktopLandscape": 1,
                        "tabletPortrait": 1,
                        "tabletLandscape": 1,
                        "mobilePortrait": 1,
                        "mobileLandscape": 1
                    },
                    "minimumFontSizes": {
                        "desktopPortrait": 4,
                        "desktopLandscape": 4,
                        "tabletPortrait": 4,
                        "tabletLandscape": 4,
                        "mobilePortrait": 4,
                        "mobileLandscape": 4
                    },
                    "ratioToDevice": {
                        "Portrait": {
                            "tablet": 0.7,
                            "mobile": 0.5
                        },
                        "Landscape": {
                            "tablet": 0,
                            "mobile": 0
                        }
                    },
                    "sliderWidthToDevice": {
                        "desktopPortrait": 1920,
                        "desktopLandscape": 1920,
                        "tabletPortrait": 1344,
                        "tabletLandscape": 0,
                        "mobilePortrait": 960,
                        "mobileLandscape": 0
                    },
                    "basedOn": "combined",
                    "orientationMode": "width_and_height",
                    "overflowHiddenPage": 0,
                    "desktopPortraitScreenWidth": 1200,
                    "tabletPortraitScreenWidth": 800,
                    "mobilePortraitScreenWidth": 440,
                    "tabletLandscapeScreenWidth": 800,
                    "mobileLandscapeScreenWidth": 440,
                    "focus": {
                        "offsetTop": "#menu",
                        "offsetBottom": ""
                    }
                },
                "controls": {
                    "mousewheel": 1,
                    "touch": "vertical",
                    "keyboard": 1,
                    "blockCarouselInteraction": 1
                },
                "lazyLoad": 0,
                "lazyLoadNeighbor": 0,
                "blockrightclick": 0,
                "maintainSession": 0,
                "autoplay": {
                    "enabled": 0,
                    "start": 1,
                    "duration": 8000,
                    "autoplayToSlide": -1,
                    "autoplayToSlideIndex": -1,
                    "allowReStart": 0,
                    "pause": {
                        "click": 1,
                        "mouse": "0",
                        "mediaStarted": 1
                    },
                    "resume": {
                        "click": 0,
                        "mouse": "0",
                        "mediaEnded": 1,
                        "slidechanged": 0
                    }
                },
                "perspective": 1000,
                "layerMode": {
                    "playOnce": 0,
                    "playFirstLayer": 1,
                    "mode": "skippable",
                    "inAnimation": "mainInEnd"
                },
                "parallax": {
                    "enabled": 1,
                    "mobile": 0,
                    "is3D": 0,
                    "animate": 1,
                    "horizontal": "mouse",
                    "vertical": "mouse",
                    "origin": "enter",
                    "scrollmove": "both"
                },
                "postBackgroundAnimations": 0,
                "initCallbacks": [
                    "N2D(\"SmartSliderWidgetBulletTransition\",function(t,e){function i(e,i){this.slider=e,this.slider.started(t.proxy(this.start,this,i))}return i.prototype.start=function(e){if(this.slider.sliderElement.data(\"bullet\"))return!1;if(this.slider.sliderElement.data(\"bullet\",this),this.axis=\"horizontal\",this.offset=0,this.parameters=e,this.bar=this.slider.sliderElement.find(\".nextend-bullet-bar\"),this.event=\"universalclick\",\"mouseenter\"===this.parameters.action&&(this.event=\"universalenter\"),this.slider.sliderElement.on({slideCountChanged:t.proxy(this.onSlideCountChanged,this),sliderSwitchTo:t.proxy(this.onSlideSwitch,this)}),this.slider.firstSlideReady.done(t.proxy(this.onFirstSlideSet,this)),0===e.overlay){var i=!1;switch(e.area){case 1:i=\"Top\";break;case 12:i=\"Bottom\";break;case 5:i=\"Left\",this.axis=\"vertical\";break;case 8:i=\"Right\",this.axis=\"vertical\"}i&&(this.offset=parseFloat(this.bar.data(\"offset\")),this.slider.responsive.addStaticMargin(i,this))}},i.prototype.onFirstSlideSet=function(t){this.onSlideCountChanged(),this.$dots.eq(t.index).addClass(\"n2-active\").attr(\"aria-current\",\"true\")},i.prototype.onDotClick=function(e,i){this.slider.directionalChangeTo(e),t(i.target).blur()},i.prototype.onSlideSwitch=function(t,e){this.$dots.filter(\".n2-active\").removeClass(\"n2-active\").removeAttr(\"aria-current\"),this.$dots.eq(e).addClass(\"n2-active\").attr(\"aria-current\",\"true\")},i.prototype.isVisible=function(){return this.bar.is(\":visible\")},i.prototype.getSize=function(){return\"horizontal\"===this.axis?this.bar.height()+this.offset:this.bar.width()+this.offset},i.prototype.showThumbnail=function(e,i){var s=this.getThumbnail(e);NextendTween.to(s,.3,{opacity:1}),this.$dots.eq(e).one(\"universalleave.thumbnailleave\",t.proxy(this.hideThumbnail,this,e,s))},i.prototype.hideThumbnail=function(t,e,i){i.stopPropagation(),NextendTween.to(e,.3,{opacity:0,onComplete:function(){e.remove()}})},i.prototype.getThumbnail=function(e){var i=this.$dots.eq(e),s=this.slider.sliderElement.offset(),a=i.offset(),r=i.outerWidth(),o=i.outerHeight(),n=t(\"<div\/>\").append(t(\"<div\/>\").css({width:this.parameters.thumbnailWidth,height:this.parameters.thumbnailHeight,backgroundImage:'url(\"'+this.slider.slides[e].getThumbnail()+'\")'}).addClass(\"n2-ss-bullet-thumbnail\")).addClass(this.parameters.thumbnailStyle).addClass(\"n2-ss-bullet-thumbnail-container\").appendTo(this.slider.sliderElement);switch(this.parameters.thumbnailPosition){case\"right\":n.css({left:a.left-s.left+r,top:a.top-s.top+o\/2-n.outerHeight(!0)\/2});break;case\"left\":n.css({left:a.left-s.left-n.outerWidth(!0),top:a.top-s.top+o\/2-n.outerHeight(!0)\/2});break;case\"top\":n.css({left:a.left-s.left+r\/2-n.outerWidth(!0)\/2,top:a.top-s.top-n.outerHeight(!0)});break;case\"bottom\":n.css({left:a.left-s.left+r\/2-n.outerWidth(!0)\/2,top:a.top-s.top+o})}return i.data(\"thumbnail\",n),n},i.prototype.onSlideCountChanged=function(){this.bar.html(\"\");for(var e=0;e<this.slider.slides.length;e++){var i=this.slider.slides[e],s=t('<div class=\"n2-ow n2-bullet '+this.parameters.dotClasses+'\" tabindex=\"0\"><\/div>').attr(\"role\",\"button\").attr(\"aria-label\",i.getTitle()).appendTo(this.bar);switch(s.wrap(t('<div class=\"n2-ow\"><\/div>').on(this.event,t.proxy(this.onDotClick,this,e))).on(\"n2Activate\",t.proxy(this.onDotClick,this,e)),this.parameters.mode){case\"numeric\":s.html(e+1);break;case\"title\":s.html(i.getTitle())}if(1===this.parameters.thumbnail){var a=i.getThumbnail();a&&s.on({universalenter:t.proxy(this.showThumbnail,this,e)},{leaveOnSecond:!0})}}this.$dots=this.bar.find(\">div>*\")},i});",
                    "new N2Classes.SmartSliderWidgetBulletTransition(this, {\"overlay\":0,\"area\":7,\"dotClasses\":\"n2-style-1da877f94ec39d33b86fac7462c51834-dot \",\"mode\":\"\",\"action\":\"click\"});"
                ],
                "allowBGImageAttachmentFixed": false,
                "bgAnimationsColor": "RGBA(51,51,51,1)",
                "bgAnimations": {
                    "global": [{
                        "type": "Flat",
                        "tiles": {
                            "crop": false,
                            "delay": 0,
                            "sequence": "ForwardDiagonal"
                        },
                        "main": {
                            "type": "both",
                            "duration": 0.8,
                            "current": {
                                "top": "-100%",
                                "opacity": 0
                            },
                            "next": {
                                "top": "150%",
                                "rotationX": 90,
                                "z": -500,
                                "opacity": 0
                            }
                        },
                        "invert": {
                            "current": {
                                "top": "100%"
                            },
                            "next": {
                                "top": "-150%",
                                "rotationX": -90
                            }
                        }
                    }],
                    "color": "RGBA(51,51,51,1)",
                    "speed": "normal"
                },
                "mainanimation": {
                    "type": "vertical",
                    "duration": 600,
                    "delay": 0,
                    "ease": "easeOutQuad",
                    "parallax": 0,
                    "shiftedBackgroundAnimation": "0"
                },
                "carousel": 0,
                "dynamicHeight": 0
            })
        });
        N2R(["nextend-frontend", "smartslider-frontend", "nextend-gsap", "smartslider-backgroundanimation",
            "smartslider-simple-type-frontend"
        ], function () {
            new N2Classes.SmartSliderSimple('#n2-ss-82', {
                "admin": false,
                "translate3d": 1,
                "callbacks": "",
                "background.video.mobile": 1,
                "randomize": {
                    "randomize": 0,
                    "randomizeFirst": 0
                },
                "align": "normal",
                "isDelayed": 0,
                "load": {
                    "fade": 1,
                    "scroll": 0
                },
                "playWhenVisible": 1,
                "playWhenVisibleAt": 0.5,
                "responsive": {
                    "desktop": 1,
                    "tablet": 1,
                    "mobile": 1,
                    "onResizeEnabled": true,
                    "type": "auto",
                    "downscale": 1,
                    "upscale": 0,
                    "minimumHeight": 0,
                    "maximumHeight": 3000,
                    "maximumSlideWidth": 3000,
                    "maximumSlideWidthLandscape": 3000,
                    "maximumSlideWidthTablet": 3000,
                    "maximumSlideWidthTabletLandscape": 3000,
                    "maximumSlideWidthMobile": 3000,
                    "maximumSlideWidthMobileLandscape": 3000,
                    "maximumSlideWidthConstrainHeight": 0,
                    "forceFull": 0,
                    "forceFullOverflowX": "body",
                    "forceFullHorizontalSelector": "",
                    "constrainRatio": 1,
                    "sliderHeightBasedOn": "real",
                    "decreaseSliderHeight": 0,
                    "focusUser": 1,
                    "deviceModes": {
                        "desktopPortrait": 1,
                        "desktopLandscape": 0,
                        "tabletPortrait": 1,
                        "tabletLandscape": 0,
                        "mobilePortrait": 1,
                        "mobileLandscape": 0
                    },
                    "normalizedDeviceModes": {
                        "unknownUnknown": ["unknown", "Unknown"],
                        "desktopPortrait": ["desktop", "Portrait"],
                        "desktopLandscape": ["desktop", "Portrait"],
                        "tabletPortrait": ["tablet", "Portrait"],
                        "tabletLandscape": ["tablet", "Portrait"],
                        "mobilePortrait": ["mobile", "Portrait"],
                        "mobileLandscape": ["mobile", "Portrait"]
                    },
                    "verticalRatioModifiers": {
                        "unknownUnknown": 1,
                        "desktopPortrait": 1,
                        "desktopLandscape": 1,
                        "tabletPortrait": 1,
                        "tabletLandscape": 1,
                        "mobilePortrait": 1,
                        "mobileLandscape": 1
                    },
                    "minimumFontSizes": {
                        "desktopPortrait": 4,
                        "desktopLandscape": 4,
                        "tabletPortrait": 4,
                        "tabletLandscape": 4,
                        "mobilePortrait": 4,
                        "mobileLandscape": 4
                    },
                    "ratioToDevice": {
                        "Portrait": {
                            "tablet": 0.7,
                            "mobile": 0.5
                        },
                        "Landscape": {
                            "tablet": 0,
                            "mobile": 0
                        }
                    },
                    "sliderWidthToDevice": {
                        "desktopPortrait": 800,
                        "desktopLandscape": 800,
                        "tabletPortrait": 560,
                        "tabletLandscape": 0,
                        "mobilePortrait": 400,
                        "mobileLandscape": 0
                    },
                    "basedOn": "combined",
                    "orientationMode": "width_and_height",
                    "overflowHiddenPage": 0,
                    "desktopPortraitScreenWidth": 1200,
                    "tabletPortraitScreenWidth": 800,
                    "mobilePortraitScreenWidth": 440,
                    "tabletLandscapeScreenWidth": 800,
                    "mobileLandscapeScreenWidth": 440,
                    "focus": {
                        "offsetTop": "#top",
                        "offsetBottom": ""
                    }
                },
                "controls": {
                    "mousewheel": 0,
                    "touch": "horizontal",
                    "keyboard": 1,
                    "blockCarouselInteraction": 1
                },
                "lazyLoad": 0,
                "lazyLoadNeighbor": 0,
                "blockrightclick": 0,
                "maintainSession": 0,
                "autoplay": {
                    "enabled": 0,
                    "start": 1,
                    "duration": 8000,
                    "autoplayToSlide": -1,
                    "autoplayToSlideIndex": -1,
                    "allowReStart": 0,
                    "pause": {
                        "click": 1,
                        "mouse": "0",
                        "mediaStarted": 1
                    },
                    "resume": {
                        "click": 0,
                        "mouse": "0",
                        "mediaEnded": 1,
                        "slidechanged": 0
                    }
                },
                "perspective": 1000,
                "layerMode": {
                    "playOnce": 0,
                    "playFirstLayer": 1,
                    "mode": "skippable",
                    "inAnimation": "mainInEnd"
                },
                "parallax": {
                    "enabled": 1,
                    "mobile": 0,
                    "is3D": 0,
                    "animate": 1,
                    "horizontal": "mouse",
                    "vertical": "mouse",
                    "origin": "slider",
                    "scrollmove": "both"
                },
                "postBackgroundAnimations": 0,
                "initCallbacks": [
                    "N2D(\"SmartSliderWidgetArrowImage\",function(i,e){function s(e,s,t,h){this.slider=e,this.slider.started(i.proxy(this.start,this,s,t,h))}return s.prototype.start=function(e,s,t){return this.slider.sliderElement.data(\"arrow\")?!1:(this.slider.sliderElement.data(\"arrow\",this),this.deferred=i.Deferred(),this.slider.sliderElement.on(\"SliderDevice\",i.proxy(this.onDevice,this)).trigger(\"addWidget\",this.deferred),this.previous=i(\"#\"+this.slider.elementID+\"-arrow-previous\").on(\"click\",i.proxy(function(i){i.stopPropagation(),this.slider[this.slider.getDirectionPrevious()]()},this)),this.previousResize=this.previous.find(\".n2-resize\"),0===this.previousResize.length&&(this.previousResize=this.previous),this.next=i(\"#\"+this.slider.elementID+\"-arrow-next\").on(\"click\",i.proxy(function(i){i.stopPropagation(),this.slider[this.slider.getDirectionNext()]()},this)),this.nextResize=this.next.find(\".n2-resize\"),0===this.nextResize.length&&(this.nextResize=this.next),this.desktopRatio=e,this.tabletRatio=s,this.mobileRatio=t,void i.when(this.previous.n2imagesLoaded(),this.next.n2imagesLoaded()).always(i.proxy(this.loaded,this)))},s.prototype.loaded=function(){this.previous.css(\"display\",\"inline-block\"),this.previousResize.css(\"display\",\"inline-block\"),this.previousWidth=this.previousResize.width(),this.previousHeight=this.previousResize.height(),this.previousResize.css(\"display\",\"\"),this.previous.css(\"display\",\"\"),this.next.css(\"display\",\"inline-block\"),this.nextResize.css(\"display\",\"inline-block\"),this.nextWidth=this.nextResize.width(),this.nextHeight=this.nextResize.height(),this.nextResize.css(\"display\",\"\"),this.next.css(\"display\",\"\"),this.previousResize.find(\"img\").css(\"width\",\"100%\"),this.nextResize.find(\"img\").css(\"width\",\"100%\"),this.onDevice(null,{device:this.slider.responsive.getDeviceMode()}),this.deferred.resolve()},s.prototype.onDevice=function(i,e){var s=1;switch(e.device){case\"tablet\":s=this.tabletRatio;break;case\"mobile\":s=this.mobileRatio;break;default:s=this.desktopRatio}this.previousResize.width(this.previousWidth*s),this.previousResize.height(this.previousHeight*s),this.nextResize.width(this.nextWidth*s),this.nextResize.height(this.nextHeight*s)},s});",
                    "new N2Classes.SmartSliderWidgetArrowImage(this, 1, 0.7, 0.5);",
                    "N2D(\"SmartSliderWidgetBarHorizontal\",function(t,e){\"use strict\";function i(e,i){this.slider=e,this.slider.started(t.proxy(this.start,this,i))}return i.prototype.start=function(e){if(this.slider.sliderElement.data(\"bar\"))return!1;if(this.slider.sliderElement.data(\"bar\",this),this.parameters=e,this.offset=0,this.tween=null,this.bar=this.slider.sliderElement.find(\".nextend-bar\"),this.innerBar=this.bar.find(\"> div\"),this.slider.firstSlideReady.done(t.proxy(this.onFirstSlideSet,this)),e.animate?this.slider.sliderElement.on(\"mainAnimationStart\",t.proxy(this.onSliderSwitchToAnimateStart,this)):this.slider.sliderElement.on(\"sliderSwitchTo\",t.proxy(this.onSliderSwitchTo,this)),!e.overlay){var i=!1;switch(e.area){case 1:i=\"Top\";break;case 12:i=\"Bottom\"}i&&(this.offset=parseFloat(this.bar.data(\"offset\")),this.slider.responsive.addStaticMargin(i,this))}var s=\"click\";this.slider.hasTouch()&&(s=\"n2click\"),this.bar.on(\"click\",t.proxy(function(t){this.slider.sliderElement.find(\".n2-ss-slide-active .n2-ss-layers-container\").trigger(s)},this))},i.prototype.onFirstSlideSet=function(t){this.onSliderSwitchTo(null,t.index)},i.prototype.hasContent=function(t){return this.parameters.showTitle&&(t.getTitle()!==e||this.parameters.slideCount)?!0:!(!this.parameters.showDescription||t.getDescription()===e&&!this.parameters.slideCount)},i.prototype.renderBarContent=function(t){var i=\"\";if(this.parameters.showTitle&&(t.getTitle()!==e||this.parameters.slideCount)){if(this.parameters.slideCount)var s=t.index+1;else var s=t.getTitle();i+='<span class=\"'+this.parameters.fontTitle+' n2-ow\">'+s+\"<\/span>\"}if(this.parameters.showDescription&&(t.getDescription()!==e||this.parameters.slideCount)){if(this.parameters.slideCount)var r=t.slider.slides.length;else var r=t.getDescription();i+='<span class=\"'+this.parameters.fontDescription+' n2-ow\">'+(\"\"===i?\"\":this.parameters.separator)+r+\"<\/span>\"}return\"\"===i?'<span class=\"'+this.parameters.fontDescription+' n2-ow\">&nbsp;<\/span>':i},i.prototype.onSliderSwitchTo=function(t,e){var i=this.slider.slides[e],s=this.renderBarContent(i);this.innerBar.html(s),this.setCursor(i.hasLink()),this.slider.widgets.setState(\"hide.bar\",!this.hasContent(i))},i.prototype.onSliderSwitchToAnimateStart=function(){var e=t.Deferred();this.slider.sliderElement.on(\"mainAnimationComplete.n2Bar\",t.proxy(this.onSliderSwitchToAnimateEnd,this,e)),this.tween&&this.tween.pause(),NextendTween.to(this.innerBar,.3,{opacity:0,onComplete:function(){e.resolve()}})},i.prototype.onSliderSwitchToAnimateEnd=function(e,i,s,r,n){this.slider.sliderElement.off(\".n2Bar\");var a=this.slider.slides[n];e.done(t.proxy(function(){var t=this.innerBar.clone();this.innerBar.remove(),this.innerBar=t.css(\"opacity\",0).html(this.renderBarContent(a)).appendTo(this.bar),this.setCursor(a.hasLink()),this.slider.widgets.setState(\"hide.bar\",!this.hasContent(a)),this.tween=NextendTween.to(this.innerBar,.3,{opacity:1})},this))},i.prototype.setCursor=function(t){this.innerBar.css(\"cursor\",t?\"pointer\":\"inherit\")},i.prototype.isVisible=function(){return this.bar.is(\":visible\")},i.prototype.getSize=function(){return this.bar.height()+this.offset},i});",
                    "new N2Classes.SmartSliderWidgetBarHorizontal(this, {\"overlay\":1,\"area\":12,\"animate\":0,\"showTitle\":1,\"fontTitle\":\"n2-font-eaadb88363561b5fd6b7213a8b9844c3-simple \",\"slideCount\":0,\"showDescription\":1,\"fontDescription\":\"n2-font-8c3ee3e933a3848a19bf6170f5b75274-simple \",\"separator\":\" - \"});"
                ],
                "allowBGImageAttachmentFixed": false,
                "bgAnimationsColor": "RGBA(51,51,51,1)",
                "bgAnimations": {
                    "global": 0,
                    "color": "RGBA(51,51,51,1)",
                    "speed": "normal",
                    "slides": [{
                        "animation": [{
                            "type": "Cubic",
                            "columns": 7,
                            "fullCube": false,
                            "depth": 16,
                            "tiles": {
                                "delay": 0.05,
                                "sequence": "ForwardRow"
                            },
                            "main": {
                                "side": "BackInvert",
                                "duration": 1.2,
                                "ease": "easeInBack"
                            },
                            "invert": {
                                "side": "Back"
                            },
                            "invertTiles": {
                                "sequence": "BackwardRow"
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Cubic",
                            "columns": 4,
                            "rows": 3,
                            "tiles": {
                                "delay": 0.05,
                                "sequence": "ForwardRow"
                            },
                            "main": {
                                "side": "BackInvert",
                                "duration": 0.6,
                                "ease": "easeInCubic",
                                "real3D": true
                            },
                            "invert": {
                                "side": "Back"
                            },
                            "invertTiles": {
                                "sequence": "BackwardRow"
                            },
                            "pre": [{
                                "scale": 0.9,
                                "scaleZ": 0.9,
                                "duration": 0.3,
                                "ease": "easeInCubic"
                            }],
                            "post": [{
                                "scale": 1,
                                "scaleZ": 1,
                                "duration": 0.3,
                                "ease": "easeInCubic"
                            }]
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Cubic",
                            "depth": 100,
                            "main": {
                                "side": "BackInvert",
                                "duration": 0.8,
                                "ease": "easeInCubic",
                                "real3D": true
                            },
                            "invert": {
                                "side": "Back"
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Cubic",
                            "rows": 7,
                            "fullCube": false,
                            "depth": 16,
                            "tiles": {
                                "delay": 0.05,
                                "sequence": "ForwardRow"
                            },
                            "main": {
                                "side": "BackInvert",
                                "duration": 1.2,
                                "ease": "easeInBack"
                            },
                            "invert": {
                                "side": "Back"
                            },
                            "invertTiles": {
                                "sequence": "BackwardRow"
                            },
                            "pre": [{
                                "scale": 0.85,
                                "scaleZ": 0.85,
                                "duration": 0.6,
                                "ease": "easeOutBack"
                            }],
                            "post": [{
                                "scale": 1,
                                "scaleZ": 1,
                                "duration": 0.6,
                                "ease": "easeOutBack"
                            }]
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Cubic",
                            "columns": 1,
                            "rows": 1,
                            "main": {
                                "side": "Right",
                                "duration": 0.8,
                                "ease": "easeInCubic",
                                "real3D": true
                            },
                            "invert": {
                                "side": "Left"
                            }
                        }],
                        "speed": "normal"
                    }]
                },
                "mainanimation": {
                    "type": "horizontal",
                    "duration": 1500,
                    "delay": 500,
                    "ease": "easeOutQuad",
                    "parallax": 0,
                    "shiftedBackgroundAnimation": "auto"
                },
                "carousel": 1,
                "dynamicHeight": 0
            })
        });
        N2R(["nextend-frontend", "smartslider-frontend", "nextend-gsap", "smartslider-backgroundanimation",
            "smartslider-simple-type-frontend"
        ], function () {
            new N2Classes.SmartSliderSimple('#n2-ss-83', {
                "admin": false,
                "translate3d": 1,
                "callbacks": "",
                "background.video.mobile": 1,
                "randomize": {
                    "randomize": 0,
                    "randomizeFirst": 0
                },
                "align": "normal",
                "isDelayed": 0,
                "load": {
                    "fade": 1,
                    "scroll": 0
                },
                "playWhenVisible": 1,
                "playWhenVisibleAt": 0.5,
                "responsive": {
                    "desktop": 1,
                    "tablet": 1,
                    "mobile": 1,
                    "onResizeEnabled": true,
                    "type": "auto",
                    "downscale": 1,
                    "upscale": 0,
                    "minimumHeight": 0,
                    "maximumHeight": 3000,
                    "maximumSlideWidth": 3000,
                    "maximumSlideWidthLandscape": 3000,
                    "maximumSlideWidthTablet": 3000,
                    "maximumSlideWidthTabletLandscape": 3000,
                    "maximumSlideWidthMobile": 3000,
                    "maximumSlideWidthMobileLandscape": 3000,
                    "maximumSlideWidthConstrainHeight": 0,
                    "forceFull": 0,
                    "forceFullOverflowX": "body",
                    "forceFullHorizontalSelector": "",
                    "constrainRatio": 1,
                    "sliderHeightBasedOn": "real",
                    "decreaseSliderHeight": 0,
                    "focusUser": 1,
                    "deviceModes": {
                        "desktopPortrait": 1,
                        "desktopLandscape": 0,
                        "tabletPortrait": 1,
                        "tabletLandscape": 0,
                        "mobilePortrait": 1,
                        "mobileLandscape": 0
                    },
                    "normalizedDeviceModes": {
                        "unknownUnknown": ["unknown", "Unknown"],
                        "desktopPortrait": ["desktop", "Portrait"],
                        "desktopLandscape": ["desktop", "Portrait"],
                        "tabletPortrait": ["tablet", "Portrait"],
                        "tabletLandscape": ["tablet", "Portrait"],
                        "mobilePortrait": ["mobile", "Portrait"],
                        "mobileLandscape": ["mobile", "Portrait"]
                    },
                    "verticalRatioModifiers": {
                        "unknownUnknown": 1,
                        "desktopPortrait": 1,
                        "desktopLandscape": 1,
                        "tabletPortrait": 1,
                        "tabletLandscape": 1,
                        "mobilePortrait": 1,
                        "mobileLandscape": 1
                    },
                    "minimumFontSizes": {
                        "desktopPortrait": 4,
                        "desktopLandscape": 4,
                        "tabletPortrait": 4,
                        "tabletLandscape": 4,
                        "mobilePortrait": 4,
                        "mobileLandscape": 4
                    },
                    "ratioToDevice": {
                        "Portrait": {
                            "tablet": 0.7,
                            "mobile": 0.5
                        },
                        "Landscape": {
                            "tablet": 0,
                            "mobile": 0
                        }
                    },
                    "sliderWidthToDevice": {
                        "desktopPortrait": 800,
                        "desktopLandscape": 800,
                        "tabletPortrait": 560,
                        "tabletLandscape": 0,
                        "mobilePortrait": 400,
                        "mobileLandscape": 0
                    },
                    "basedOn": "combined",
                    "orientationMode": "width_and_height",
                    "overflowHiddenPage": 0,
                    "desktopPortraitScreenWidth": 1200,
                    "tabletPortraitScreenWidth": 800,
                    "mobilePortraitScreenWidth": 440,
                    "tabletLandscapeScreenWidth": 800,
                    "mobileLandscapeScreenWidth": 440,
                    "focus": {
                        "offsetTop": "#top",
                        "offsetBottom": ""
                    }
                },
                "controls": {
                    "mousewheel": 0,
                    "touch": "horizontal",
                    "keyboard": 1,
                    "blockCarouselInteraction": 1
                },
                "lazyLoad": 0,
                "lazyLoadNeighbor": 0,
                "blockrightclick": 0,
                "maintainSession": 0,
                "autoplay": {
                    "enabled": 0,
                    "start": 1,
                    "duration": 8000,
                    "autoplayToSlide": -1,
                    "autoplayToSlideIndex": -1,
                    "allowReStart": 0,
                    "pause": {
                        "click": 1,
                        "mouse": "0",
                        "mediaStarted": 1
                    },
                    "resume": {
                        "click": 0,
                        "mouse": "0",
                        "mediaEnded": 1,
                        "slidechanged": 0
                    }
                },
                "perspective": 1000,
                "layerMode": {
                    "playOnce": 0,
                    "playFirstLayer": 1,
                    "mode": "skippable",
                    "inAnimation": "mainInEnd"
                },
                "parallax": {
                    "enabled": 1,
                    "mobile": 0,
                    "is3D": 0,
                    "animate": 1,
                    "horizontal": "mouse",
                    "vertical": "mouse",
                    "origin": "slider",
                    "scrollmove": "both"
                },
                "postBackgroundAnimations": 0,
                "initCallbacks": [
                    "N2D(\"SmartSliderWidgetArrowImage\",function(i,e){function s(e,s,t,h){this.slider=e,this.slider.started(i.proxy(this.start,this,s,t,h))}return s.prototype.start=function(e,s,t){return this.slider.sliderElement.data(\"arrow\")?!1:(this.slider.sliderElement.data(\"arrow\",this),this.deferred=i.Deferred(),this.slider.sliderElement.on(\"SliderDevice\",i.proxy(this.onDevice,this)).trigger(\"addWidget\",this.deferred),this.previous=i(\"#\"+this.slider.elementID+\"-arrow-previous\").on(\"click\",i.proxy(function(i){i.stopPropagation(),this.slider[this.slider.getDirectionPrevious()]()},this)),this.previousResize=this.previous.find(\".n2-resize\"),0===this.previousResize.length&&(this.previousResize=this.previous),this.next=i(\"#\"+this.slider.elementID+\"-arrow-next\").on(\"click\",i.proxy(function(i){i.stopPropagation(),this.slider[this.slider.getDirectionNext()]()},this)),this.nextResize=this.next.find(\".n2-resize\"),0===this.nextResize.length&&(this.nextResize=this.next),this.desktopRatio=e,this.tabletRatio=s,this.mobileRatio=t,void i.when(this.previous.n2imagesLoaded(),this.next.n2imagesLoaded()).always(i.proxy(this.loaded,this)))},s.prototype.loaded=function(){this.previous.css(\"display\",\"inline-block\"),this.previousResize.css(\"display\",\"inline-block\"),this.previousWidth=this.previousResize.width(),this.previousHeight=this.previousResize.height(),this.previousResize.css(\"display\",\"\"),this.previous.css(\"display\",\"\"),this.next.css(\"display\",\"inline-block\"),this.nextResize.css(\"display\",\"inline-block\"),this.nextWidth=this.nextResize.width(),this.nextHeight=this.nextResize.height(),this.nextResize.css(\"display\",\"\"),this.next.css(\"display\",\"\"),this.previousResize.find(\"img\").css(\"width\",\"100%\"),this.nextResize.find(\"img\").css(\"width\",\"100%\"),this.onDevice(null,{device:this.slider.responsive.getDeviceMode()}),this.deferred.resolve()},s.prototype.onDevice=function(i,e){var s=1;switch(e.device){case\"tablet\":s=this.tabletRatio;break;case\"mobile\":s=this.mobileRatio;break;default:s=this.desktopRatio}this.previousResize.width(this.previousWidth*s),this.previousResize.height(this.previousHeight*s),this.nextResize.width(this.nextWidth*s),this.nextResize.height(this.nextHeight*s)},s});",
                    "new N2Classes.SmartSliderWidgetArrowImage(this, 1, 0.7, 0.5);",
                    "N2D(\"SmartSliderWidgetBarHorizontal\",function(t,e){\"use strict\";function i(e,i){this.slider=e,this.slider.started(t.proxy(this.start,this,i))}return i.prototype.start=function(e){if(this.slider.sliderElement.data(\"bar\"))return!1;if(this.slider.sliderElement.data(\"bar\",this),this.parameters=e,this.offset=0,this.tween=null,this.bar=this.slider.sliderElement.find(\".nextend-bar\"),this.innerBar=this.bar.find(\"> div\"),this.slider.firstSlideReady.done(t.proxy(this.onFirstSlideSet,this)),e.animate?this.slider.sliderElement.on(\"mainAnimationStart\",t.proxy(this.onSliderSwitchToAnimateStart,this)):this.slider.sliderElement.on(\"sliderSwitchTo\",t.proxy(this.onSliderSwitchTo,this)),!e.overlay){var i=!1;switch(e.area){case 1:i=\"Top\";break;case 12:i=\"Bottom\"}i&&(this.offset=parseFloat(this.bar.data(\"offset\")),this.slider.responsive.addStaticMargin(i,this))}var s=\"click\";this.slider.hasTouch()&&(s=\"n2click\"),this.bar.on(\"click\",t.proxy(function(t){this.slider.sliderElement.find(\".n2-ss-slide-active .n2-ss-layers-container\").trigger(s)},this))},i.prototype.onFirstSlideSet=function(t){this.onSliderSwitchTo(null,t.index)},i.prototype.hasContent=function(t){return this.parameters.showTitle&&(t.getTitle()!==e||this.parameters.slideCount)?!0:!(!this.parameters.showDescription||t.getDescription()===e&&!this.parameters.slideCount)},i.prototype.renderBarContent=function(t){var i=\"\";if(this.parameters.showTitle&&(t.getTitle()!==e||this.parameters.slideCount)){if(this.parameters.slideCount)var s=t.index+1;else var s=t.getTitle();i+='<span class=\"'+this.parameters.fontTitle+' n2-ow\">'+s+\"<\/span>\"}if(this.parameters.showDescription&&(t.getDescription()!==e||this.parameters.slideCount)){if(this.parameters.slideCount)var r=t.slider.slides.length;else var r=t.getDescription();i+='<span class=\"'+this.parameters.fontDescription+' n2-ow\">'+(\"\"===i?\"\":this.parameters.separator)+r+\"<\/span>\"}return\"\"===i?'<span class=\"'+this.parameters.fontDescription+' n2-ow\">&nbsp;<\/span>':i},i.prototype.onSliderSwitchTo=function(t,e){var i=this.slider.slides[e],s=this.renderBarContent(i);this.innerBar.html(s),this.setCursor(i.hasLink()),this.slider.widgets.setState(\"hide.bar\",!this.hasContent(i))},i.prototype.onSliderSwitchToAnimateStart=function(){var e=t.Deferred();this.slider.sliderElement.on(\"mainAnimationComplete.n2Bar\",t.proxy(this.onSliderSwitchToAnimateEnd,this,e)),this.tween&&this.tween.pause(),NextendTween.to(this.innerBar,.3,{opacity:0,onComplete:function(){e.resolve()}})},i.prototype.onSliderSwitchToAnimateEnd=function(e,i,s,r,n){this.slider.sliderElement.off(\".n2Bar\");var a=this.slider.slides[n];e.done(t.proxy(function(){var t=this.innerBar.clone();this.innerBar.remove(),this.innerBar=t.css(\"opacity\",0).html(this.renderBarContent(a)).appendTo(this.bar),this.setCursor(a.hasLink()),this.slider.widgets.setState(\"hide.bar\",!this.hasContent(a)),this.tween=NextendTween.to(this.innerBar,.3,{opacity:1})},this))},i.prototype.setCursor=function(t){this.innerBar.css(\"cursor\",t?\"pointer\":\"inherit\")},i.prototype.isVisible=function(){return this.bar.is(\":visible\")},i.prototype.getSize=function(){return this.bar.height()+this.offset},i});",
                    "new N2Classes.SmartSliderWidgetBarHorizontal(this, {\"overlay\":1,\"area\":12,\"animate\":0,\"showTitle\":1,\"fontTitle\":\"n2-font-eaadb88363561b5fd6b7213a8b9844c3-simple \",\"slideCount\":0,\"showDescription\":1,\"fontDescription\":\"n2-font-8c3ee3e933a3848a19bf6170f5b75274-simple \",\"separator\":\" - \"});"
                ],
                "allowBGImageAttachmentFixed": false,
                "bgAnimationsColor": "RGBA(51,51,51,1)",
                "bgAnimations": {
                    "global": 0,
                    "color": "RGBA(51,51,51,1)",
                    "speed": "normal",
                    "slides": [{
                        "animation": [{
                            "type": "Flat",
                            "tiles": {
                                "crop": false,
                                "delay": 0,
                                "sequence": "ForwardDiagonal"
                            },
                            "main": {
                                "type": "both",
                                "duration": 0.75,
                                "current": {
                                    "ease": "easeOutCubic",
                                    "scale": 0.5,
                                    "left": "-100%",
                                    "opacity": 0
                                },
                                "next": {
                                    "ease": "easeOutCubic",
                                    "scale": 0.5,
                                    "left": "100%"
                                }
                            },
                            "invert": {
                                "current": {
                                    "left": "100%"
                                },
                                "next": {
                                    "left": "-100%"
                                }
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Flat",
                            "tiles": {
                                "crop": false,
                                "delay": 0,
                                "sequence": "ForwardDiagonal"
                            },
                            "main": {
                                "type": "both",
                                "duration": 0.75,
                                "current": {
                                    "ease": "easeOutCubic",
                                    "scale": 0.5,
                                    "opacity": 0
                                },
                                "next": {
                                    "ease": "easeOutCubic",
                                    "opacity": 0,
                                    "scale": 1.5
                                }
                            },
                            "invert": {
                                "current": {
                                    "scale": 1.5
                                },
                                "next": {
                                    "scale": 0.5
                                }
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Turn"
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Flat",
                            "columns": 5,
                            "rows": 5,
                            "tiles": {
                                "crop": false,
                                "delay": 0.0035,
                                "sequence": "ForwardRow"
                            },
                            "main": {
                                "type": "both",
                                "duration": 0.75,
                                "current": {
                                    "ease": "easeinQuad",
                                    "scale": 0.5,
                                    "top": "-100%",
                                    "opacity": 0,
                                    "rotateX": 90
                                },
                                "next": {
                                    "ease": "easeinQuad",
                                    "scale": 0.5,
                                    "top": "100%",
                                    "opacity": 0,
                                    "rotateX": 90
                                }
                            },
                            "invert": {
                                "current": {
                                    "top": "100%"
                                },
                                "next": {
                                    "top": "-100%"
                                }
                            },
                            "invertTiles": {
                                "sequence": "BackwardRow"
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "ExplodeReversed",
                            "rows": 3,
                            "columns": 6,
                            "tiles": {
                                "delay": 0.6,
                                "sequence": "Random"
                            },
                            "main": {
                                "type": "next",
                                "duration": 1.35,
                                "current": {
                                    "ease": "easeInQuart",
                                    "opacity": 0,
                                    "z": 300
                                }
                            }
                        }],
                        "speed": "normal"
                    }]
                },
                "mainanimation": {
                    "type": "horizontal",
                    "duration": 800,
                    "delay": 0,
                    "ease": "easeOutQuad",
                    "parallax": 0,
                    "shiftedBackgroundAnimation": "auto"
                },
                "carousel": 1,
                "dynamicHeight": 0
            })
        });
        N2R(["nextend-frontend", "smartslider-frontend", "nextend-gsap", "smartslider-backgroundanimation",
            "smartslider-simple-type-frontend"
        ], function () {
            new N2Classes.SmartSliderSimple('#n2-ss-84', {
                "admin": false,
                "translate3d": 1,
                "callbacks": "",
                "background.video.mobile": 1,
                "randomize": {
                    "randomize": 0,
                    "randomizeFirst": 0
                },
                "align": "normal",
                "isDelayed": 0,
                "load": {
                    "fade": 1,
                    "scroll": 0
                },
                "playWhenVisible": 1,
                "playWhenVisibleAt": 0.5,
                "responsive": {
                    "desktop": 1,
                    "tablet": 1,
                    "mobile": 1,
                    "onResizeEnabled": true,
                    "type": "auto",
                    "downscale": 1,
                    "upscale": 0,
                    "minimumHeight": 0,
                    "maximumHeight": 3000,
                    "maximumSlideWidth": 3000,
                    "maximumSlideWidthLandscape": 3000,
                    "maximumSlideWidthTablet": 3000,
                    "maximumSlideWidthTabletLandscape": 3000,
                    "maximumSlideWidthMobile": 3000,
                    "maximumSlideWidthMobileLandscape": 3000,
                    "maximumSlideWidthConstrainHeight": 0,
                    "forceFull": 0,
                    "forceFullOverflowX": "body",
                    "forceFullHorizontalSelector": "",
                    "constrainRatio": 1,
                    "sliderHeightBasedOn": "real",
                    "decreaseSliderHeight": 0,
                    "focusUser": 1,
                    "deviceModes": {
                        "desktopPortrait": 1,
                        "desktopLandscape": 0,
                        "tabletPortrait": 1,
                        "tabletLandscape": 0,
                        "mobilePortrait": 1,
                        "mobileLandscape": 0
                    },
                    "normalizedDeviceModes": {
                        "unknownUnknown": ["unknown", "Unknown"],
                        "desktopPortrait": ["desktop", "Portrait"],
                        "desktopLandscape": ["desktop", "Portrait"],
                        "tabletPortrait": ["tablet", "Portrait"],
                        "tabletLandscape": ["tablet", "Portrait"],
                        "mobilePortrait": ["mobile", "Portrait"],
                        "mobileLandscape": ["mobile", "Portrait"]
                    },
                    "verticalRatioModifiers": {
                        "unknownUnknown": 1,
                        "desktopPortrait": 1,
                        "desktopLandscape": 1,
                        "tabletPortrait": 1,
                        "tabletLandscape": 1,
                        "mobilePortrait": 1,
                        "mobileLandscape": 1
                    },
                    "minimumFontSizes": {
                        "desktopPortrait": 4,
                        "desktopLandscape": 4,
                        "tabletPortrait": 4,
                        "tabletLandscape": 4,
                        "mobilePortrait": 4,
                        "mobileLandscape": 4
                    },
                    "ratioToDevice": {
                        "Portrait": {
                            "tablet": 0.7,
                            "mobile": 0.5
                        },
                        "Landscape": {
                            "tablet": 0,
                            "mobile": 0
                        }
                    },
                    "sliderWidthToDevice": {
                        "desktopPortrait": 800,
                        "desktopLandscape": 800,
                        "tabletPortrait": 560,
                        "tabletLandscape": 0,
                        "mobilePortrait": 400,
                        "mobileLandscape": 0
                    },
                    "basedOn": "combined",
                    "orientationMode": "width_and_height",
                    "overflowHiddenPage": 0,
                    "desktopPortraitScreenWidth": 1200,
                    "tabletPortraitScreenWidth": 800,
                    "mobilePortraitScreenWidth": 440,
                    "tabletLandscapeScreenWidth": 800,
                    "mobileLandscapeScreenWidth": 440,
                    "focus": {
                        "offsetTop": "#top",
                        "offsetBottom": ""
                    }
                },
                "controls": {
                    "mousewheel": 0,
                    "touch": "horizontal",
                    "keyboard": 1,
                    "blockCarouselInteraction": 1
                },
                "lazyLoad": 0,
                "lazyLoadNeighbor": 0,
                "blockrightclick": 0,
                "maintainSession": 0,
                "autoplay": {
                    "enabled": 0,
                    "start": 1,
                    "duration": 8000,
                    "autoplayToSlide": -1,
                    "autoplayToSlideIndex": -1,
                    "allowReStart": 0,
                    "pause": {
                        "click": 1,
                        "mouse": "0",
                        "mediaStarted": 1
                    },
                    "resume": {
                        "click": 0,
                        "mouse": "0",
                        "mediaEnded": 1,
                        "slidechanged": 0
                    }
                },
                "perspective": 1000,
                "layerMode": {
                    "playOnce": 0,
                    "playFirstLayer": 1,
                    "mode": "skippable",
                    "inAnimation": "mainInEnd"
                },
                "parallax": {
                    "enabled": 1,
                    "mobile": 0,
                    "is3D": 0,
                    "animate": 1,
                    "horizontal": "mouse",
                    "vertical": "mouse",
                    "origin": "slider",
                    "scrollmove": "both"
                },
                "postBackgroundAnimations": 0,
                "initCallbacks": [
                    "N2D(\"SmartSliderWidgetArrowImage\",function(i,e){function s(e,s,t,h){this.slider=e,this.slider.started(i.proxy(this.start,this,s,t,h))}return s.prototype.start=function(e,s,t){return this.slider.sliderElement.data(\"arrow\")?!1:(this.slider.sliderElement.data(\"arrow\",this),this.deferred=i.Deferred(),this.slider.sliderElement.on(\"SliderDevice\",i.proxy(this.onDevice,this)).trigger(\"addWidget\",this.deferred),this.previous=i(\"#\"+this.slider.elementID+\"-arrow-previous\").on(\"click\",i.proxy(function(i){i.stopPropagation(),this.slider[this.slider.getDirectionPrevious()]()},this)),this.previousResize=this.previous.find(\".n2-resize\"),0===this.previousResize.length&&(this.previousResize=this.previous),this.next=i(\"#\"+this.slider.elementID+\"-arrow-next\").on(\"click\",i.proxy(function(i){i.stopPropagation(),this.slider[this.slider.getDirectionNext()]()},this)),this.nextResize=this.next.find(\".n2-resize\"),0===this.nextResize.length&&(this.nextResize=this.next),this.desktopRatio=e,this.tabletRatio=s,this.mobileRatio=t,void i.when(this.previous.n2imagesLoaded(),this.next.n2imagesLoaded()).always(i.proxy(this.loaded,this)))},s.prototype.loaded=function(){this.previous.css(\"display\",\"inline-block\"),this.previousResize.css(\"display\",\"inline-block\"),this.previousWidth=this.previousResize.width(),this.previousHeight=this.previousResize.height(),this.previousResize.css(\"display\",\"\"),this.previous.css(\"display\",\"\"),this.next.css(\"display\",\"inline-block\"),this.nextResize.css(\"display\",\"inline-block\"),this.nextWidth=this.nextResize.width(),this.nextHeight=this.nextResize.height(),this.nextResize.css(\"display\",\"\"),this.next.css(\"display\",\"\"),this.previousResize.find(\"img\").css(\"width\",\"100%\"),this.nextResize.find(\"img\").css(\"width\",\"100%\"),this.onDevice(null,{device:this.slider.responsive.getDeviceMode()}),this.deferred.resolve()},s.prototype.onDevice=function(i,e){var s=1;switch(e.device){case\"tablet\":s=this.tabletRatio;break;case\"mobile\":s=this.mobileRatio;break;default:s=this.desktopRatio}this.previousResize.width(this.previousWidth*s),this.previousResize.height(this.previousHeight*s),this.nextResize.width(this.nextWidth*s),this.nextResize.height(this.nextHeight*s)},s});",
                    "new N2Classes.SmartSliderWidgetArrowImage(this, 1, 0.7, 0.5);",
                    "N2D(\"SmartSliderWidgetBarHorizontal\",function(t,e){\"use strict\";function i(e,i){this.slider=e,this.slider.started(t.proxy(this.start,this,i))}return i.prototype.start=function(e){if(this.slider.sliderElement.data(\"bar\"))return!1;if(this.slider.sliderElement.data(\"bar\",this),this.parameters=e,this.offset=0,this.tween=null,this.bar=this.slider.sliderElement.find(\".nextend-bar\"),this.innerBar=this.bar.find(\"> div\"),this.slider.firstSlideReady.done(t.proxy(this.onFirstSlideSet,this)),e.animate?this.slider.sliderElement.on(\"mainAnimationStart\",t.proxy(this.onSliderSwitchToAnimateStart,this)):this.slider.sliderElement.on(\"sliderSwitchTo\",t.proxy(this.onSliderSwitchTo,this)),!e.overlay){var i=!1;switch(e.area){case 1:i=\"Top\";break;case 12:i=\"Bottom\"}i&&(this.offset=parseFloat(this.bar.data(\"offset\")),this.slider.responsive.addStaticMargin(i,this))}var s=\"click\";this.slider.hasTouch()&&(s=\"n2click\"),this.bar.on(\"click\",t.proxy(function(t){this.slider.sliderElement.find(\".n2-ss-slide-active .n2-ss-layers-container\").trigger(s)},this))},i.prototype.onFirstSlideSet=function(t){this.onSliderSwitchTo(null,t.index)},i.prototype.hasContent=function(t){return this.parameters.showTitle&&(t.getTitle()!==e||this.parameters.slideCount)?!0:!(!this.parameters.showDescription||t.getDescription()===e&&!this.parameters.slideCount)},i.prototype.renderBarContent=function(t){var i=\"\";if(this.parameters.showTitle&&(t.getTitle()!==e||this.parameters.slideCount)){if(this.parameters.slideCount)var s=t.index+1;else var s=t.getTitle();i+='<span class=\"'+this.parameters.fontTitle+' n2-ow\">'+s+\"<\/span>\"}if(this.parameters.showDescription&&(t.getDescription()!==e||this.parameters.slideCount)){if(this.parameters.slideCount)var r=t.slider.slides.length;else var r=t.getDescription();i+='<span class=\"'+this.parameters.fontDescription+' n2-ow\">'+(\"\"===i?\"\":this.parameters.separator)+r+\"<\/span>\"}return\"\"===i?'<span class=\"'+this.parameters.fontDescription+' n2-ow\">&nbsp;<\/span>':i},i.prototype.onSliderSwitchTo=function(t,e){var i=this.slider.slides[e],s=this.renderBarContent(i);this.innerBar.html(s),this.setCursor(i.hasLink()),this.slider.widgets.setState(\"hide.bar\",!this.hasContent(i))},i.prototype.onSliderSwitchToAnimateStart=function(){var e=t.Deferred();this.slider.sliderElement.on(\"mainAnimationComplete.n2Bar\",t.proxy(this.onSliderSwitchToAnimateEnd,this,e)),this.tween&&this.tween.pause(),NextendTween.to(this.innerBar,.3,{opacity:0,onComplete:function(){e.resolve()}})},i.prototype.onSliderSwitchToAnimateEnd=function(e,i,s,r,n){this.slider.sliderElement.off(\".n2Bar\");var a=this.slider.slides[n];e.done(t.proxy(function(){var t=this.innerBar.clone();this.innerBar.remove(),this.innerBar=t.css(\"opacity\",0).html(this.renderBarContent(a)).appendTo(this.bar),this.setCursor(a.hasLink()),this.slider.widgets.setState(\"hide.bar\",!this.hasContent(a)),this.tween=NextendTween.to(this.innerBar,.3,{opacity:1})},this))},i.prototype.setCursor=function(t){this.innerBar.css(\"cursor\",t?\"pointer\":\"inherit\")},i.prototype.isVisible=function(){return this.bar.is(\":visible\")},i.prototype.getSize=function(){return this.bar.height()+this.offset},i});",
                    "new N2Classes.SmartSliderWidgetBarHorizontal(this, {\"overlay\":1,\"area\":12,\"animate\":0,\"showTitle\":1,\"fontTitle\":\"n2-font-eaadb88363561b5fd6b7213a8b9844c3-simple \",\"slideCount\":0,\"showDescription\":1,\"fontDescription\":\"n2-font-8c3ee3e933a3848a19bf6170f5b75274-simple \",\"separator\":\" - \"});"
                ],
                "allowBGImageAttachmentFixed": false,
                "bgAnimationsColor": "RGBA(51,51,51,1)",
                "bgAnimations": {
                    "global": 0,
                    "color": "RGBA(51,51,51,1)",
                    "speed": "normal",
                    "slides": [{
                        "animation": [{
                            "type": "Flat",
                            "tiles": {
                                "crop": true,
                                "delay": 0,
                                "sequence": "ForwardDiagonal"
                            },
                            "main": {
                                "type": "both",
                                "duration": 1,
                                "current": {
                                    "ease": "easeOutCubic",
                                    "scale": 0.7
                                },
                                "next": {
                                    "ease": "easeOutCubic",
                                    "left": "100%"
                                }
                            },
                            "invert": {
                                "zIndex": 2,
                                "current": {
                                    "left": "100%",
                                    "scale": 1
                                },
                                "next": {
                                    "scale": 0.7,
                                    "left": 0
                                }
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Flat",
                            "tiles": {
                                "cropOuter": true,
                                "crop": false,
                                "delay": 0,
                                "sequence": "ForwardDiagonal"
                            },
                            "main": {
                                "type": "both",
                                "duration": 1,
                                "current": {
                                    "ease": "easeOutCubic",
                                    "rotationY": -90,
                                    "left": "-100%",
                                    "opacity": 0,
                                    "transformOrigin": "100% 50%"
                                },
                                "next": {
                                    "ease": "easeOutCubic",
                                    "left": "100%"
                                }
                            },
                            "invert": {
                                "zIndex": 2,
                                "current": {
                                    "left": "100%",
                                    "rotationY": 0,
                                    "opacity": 1
                                },
                                "next": {
                                    "rotationY": -90,
                                    "left": "-100%",
                                    "opacity": 0,
                                    "transformOrigin": "100% 50%"
                                }
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Slixes",
                            "main": {
                                "duration": 2
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Flat",
                            "rows": 4,
                            "columns": 5,
                            "tiles": {
                                "delay": 0.5,
                                "sequence": "Random"
                            },
                            "main": {
                                "type": "both",
                                "duration": 0.5,
                                "current": {
                                    "ease": "easeInQuart",
                                    "left": "-100%"
                                },
                                "next": {
                                    "ease": "easeInQuart",
                                    "left": "100%"
                                }
                            },
                            "invert": {
                                "current": {
                                    "ease": "easeInQuart",
                                    "left": "100%"
                                },
                                "next": {
                                    "left": "-100%"
                                }
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Flat",
                            "rows": 10,
                            "columns": 1,
                            "tiles": {
                                "delay": 0.1,
                                "sequence": "ForwardRow"
                            },
                            "main": {
                                "type": "both",
                                "duration": 0.6,
                                "current": {
                                    "ease": "easeInQuart",
                                    "left": "-100%"
                                },
                                "next": {
                                    "ease": "easeInQuart",
                                    "left": "100%"
                                }
                            },
                            "invert": {
                                "current": {
                                    "ease": "easeInQuart",
                                    "left": "100%"
                                },
                                "next": {
                                    "left": "-100%"
                                }
                            }
                        }],
                        "speed": "normal"
                    }]
                },
                "mainanimation": {
                    "type": "horizontal",
                    "duration": 800,
                    "delay": 0,
                    "ease": "easeOutQuad",
                    "parallax": 0,
                    "shiftedBackgroundAnimation": "auto"
                },
                "carousel": 1,
                "dynamicHeight": 0
            })
        });
        N2R(["nextend-frontend", "smartslider-frontend", "nextend-gsap", "smartslider-backgroundanimation",
            "smartslider-simple-type-frontend"
        ], function () {
            new N2Classes.SmartSliderSimple('#n2-ss-85', {
                "admin": false,
                "translate3d": 1,
                "callbacks": "",
                "background.video.mobile": 1,
                "randomize": {
                    "randomize": 0,
                    "randomizeFirst": 0
                },
                "align": "normal",
                "isDelayed": 0,
                "load": {
                    "fade": 1,
                    "scroll": 0
                },
                "playWhenVisible": 1,
                "playWhenVisibleAt": 0.5,
                "responsive": {
                    "desktop": 1,
                    "tablet": 1,
                    "mobile": 1,
                    "onResizeEnabled": true,
                    "type": "auto",
                    "downscale": 1,
                    "upscale": 0,
                    "minimumHeight": 0,
                    "maximumHeight": 3000,
                    "maximumSlideWidth": 3000,
                    "maximumSlideWidthLandscape": 3000,
                    "maximumSlideWidthTablet": 3000,
                    "maximumSlideWidthTabletLandscape": 3000,
                    "maximumSlideWidthMobile": 3000,
                    "maximumSlideWidthMobileLandscape": 3000,
                    "maximumSlideWidthConstrainHeight": 0,
                    "forceFull": 0,
                    "forceFullOverflowX": "body",
                    "forceFullHorizontalSelector": "",
                    "constrainRatio": 1,
                    "sliderHeightBasedOn": "real",
                    "decreaseSliderHeight": 0,
                    "focusUser": 1,
                    "deviceModes": {
                        "desktopPortrait": 1,
                        "desktopLandscape": 0,
                        "tabletPortrait": 1,
                        "tabletLandscape": 0,
                        "mobilePortrait": 1,
                        "mobileLandscape": 0
                    },
                    "normalizedDeviceModes": {
                        "unknownUnknown": ["unknown", "Unknown"],
                        "desktopPortrait": ["desktop", "Portrait"],
                        "desktopLandscape": ["desktop", "Portrait"],
                        "tabletPortrait": ["tablet", "Portrait"],
                        "tabletLandscape": ["tablet", "Portrait"],
                        "mobilePortrait": ["mobile", "Portrait"],
                        "mobileLandscape": ["mobile", "Portrait"]
                    },
                    "verticalRatioModifiers": {
                        "unknownUnknown": 1,
                        "desktopPortrait": 1,
                        "desktopLandscape": 1,
                        "tabletPortrait": 1,
                        "tabletLandscape": 1,
                        "mobilePortrait": 1,
                        "mobileLandscape": 1
                    },
                    "minimumFontSizes": {
                        "desktopPortrait": 4,
                        "desktopLandscape": 4,
                        "tabletPortrait": 4,
                        "tabletLandscape": 4,
                        "mobilePortrait": 4,
                        "mobileLandscape": 4
                    },
                    "ratioToDevice": {
                        "Portrait": {
                            "tablet": 0.7,
                            "mobile": 0.5
                        },
                        "Landscape": {
                            "tablet": 0,
                            "mobile": 0
                        }
                    },
                    "sliderWidthToDevice": {
                        "desktopPortrait": 800,
                        "desktopLandscape": 800,
                        "tabletPortrait": 560,
                        "tabletLandscape": 0,
                        "mobilePortrait": 400,
                        "mobileLandscape": 0
                    },
                    "basedOn": "combined",
                    "orientationMode": "width_and_height",
                    "overflowHiddenPage": 0,
                    "desktopPortraitScreenWidth": 1200,
                    "tabletPortraitScreenWidth": 800,
                    "mobilePortraitScreenWidth": 440,
                    "tabletLandscapeScreenWidth": 800,
                    "mobileLandscapeScreenWidth": 440,
                    "focus": {
                        "offsetTop": "#top",
                        "offsetBottom": ""
                    }
                },
                "controls": {
                    "mousewheel": 0,
                    "touch": "horizontal",
                    "keyboard": 1,
                    "blockCarouselInteraction": 1
                },
                "lazyLoad": 0,
                "lazyLoadNeighbor": 0,
                "blockrightclick": 0,
                "maintainSession": 0,
                "autoplay": {
                    "enabled": 0,
                    "start": 1,
                    "duration": 8000,
                    "autoplayToSlide": -1,
                    "autoplayToSlideIndex": -1,
                    "allowReStart": 0,
                    "pause": {
                        "click": 1,
                        "mouse": "0",
                        "mediaStarted": 1
                    },
                    "resume": {
                        "click": 0,
                        "mouse": "0",
                        "mediaEnded": 1,
                        "slidechanged": 0
                    }
                },
                "perspective": 1000,
                "layerMode": {
                    "playOnce": 0,
                    "playFirstLayer": 1,
                    "mode": "skippable",
                    "inAnimation": "mainInEnd"
                },
                "parallax": {
                    "enabled": 1,
                    "mobile": 0,
                    "is3D": 0,
                    "animate": 1,
                    "horizontal": "mouse",
                    "vertical": "mouse",
                    "origin": "slider",
                    "scrollmove": "both"
                },
                "postBackgroundAnimations": 0,
                "initCallbacks": [
                    "N2D(\"SmartSliderWidgetArrowImage\",function(i,e){function s(e,s,t,h){this.slider=e,this.slider.started(i.proxy(this.start,this,s,t,h))}return s.prototype.start=function(e,s,t){return this.slider.sliderElement.data(\"arrow\")?!1:(this.slider.sliderElement.data(\"arrow\",this),this.deferred=i.Deferred(),this.slider.sliderElement.on(\"SliderDevice\",i.proxy(this.onDevice,this)).trigger(\"addWidget\",this.deferred),this.previous=i(\"#\"+this.slider.elementID+\"-arrow-previous\").on(\"click\",i.proxy(function(i){i.stopPropagation(),this.slider[this.slider.getDirectionPrevious()]()},this)),this.previousResize=this.previous.find(\".n2-resize\"),0===this.previousResize.length&&(this.previousResize=this.previous),this.next=i(\"#\"+this.slider.elementID+\"-arrow-next\").on(\"click\",i.proxy(function(i){i.stopPropagation(),this.slider[this.slider.getDirectionNext()]()},this)),this.nextResize=this.next.find(\".n2-resize\"),0===this.nextResize.length&&(this.nextResize=this.next),this.desktopRatio=e,this.tabletRatio=s,this.mobileRatio=t,void i.when(this.previous.n2imagesLoaded(),this.next.n2imagesLoaded()).always(i.proxy(this.loaded,this)))},s.prototype.loaded=function(){this.previous.css(\"display\",\"inline-block\"),this.previousResize.css(\"display\",\"inline-block\"),this.previousWidth=this.previousResize.width(),this.previousHeight=this.previousResize.height(),this.previousResize.css(\"display\",\"\"),this.previous.css(\"display\",\"\"),this.next.css(\"display\",\"inline-block\"),this.nextResize.css(\"display\",\"inline-block\"),this.nextWidth=this.nextResize.width(),this.nextHeight=this.nextResize.height(),this.nextResize.css(\"display\",\"\"),this.next.css(\"display\",\"\"),this.previousResize.find(\"img\").css(\"width\",\"100%\"),this.nextResize.find(\"img\").css(\"width\",\"100%\"),this.onDevice(null,{device:this.slider.responsive.getDeviceMode()}),this.deferred.resolve()},s.prototype.onDevice=function(i,e){var s=1;switch(e.device){case\"tablet\":s=this.tabletRatio;break;case\"mobile\":s=this.mobileRatio;break;default:s=this.desktopRatio}this.previousResize.width(this.previousWidth*s),this.previousResize.height(this.previousHeight*s),this.nextResize.width(this.nextWidth*s),this.nextResize.height(this.nextHeight*s)},s});",
                    "new N2Classes.SmartSliderWidgetArrowImage(this, 1, 0.7, 0.5);",
                    "N2D(\"SmartSliderWidgetBarHorizontal\",function(t,e){\"use strict\";function i(e,i){this.slider=e,this.slider.started(t.proxy(this.start,this,i))}return i.prototype.start=function(e){if(this.slider.sliderElement.data(\"bar\"))return!1;if(this.slider.sliderElement.data(\"bar\",this),this.parameters=e,this.offset=0,this.tween=null,this.bar=this.slider.sliderElement.find(\".nextend-bar\"),this.innerBar=this.bar.find(\"> div\"),this.slider.firstSlideReady.done(t.proxy(this.onFirstSlideSet,this)),e.animate?this.slider.sliderElement.on(\"mainAnimationStart\",t.proxy(this.onSliderSwitchToAnimateStart,this)):this.slider.sliderElement.on(\"sliderSwitchTo\",t.proxy(this.onSliderSwitchTo,this)),!e.overlay){var i=!1;switch(e.area){case 1:i=\"Top\";break;case 12:i=\"Bottom\"}i&&(this.offset=parseFloat(this.bar.data(\"offset\")),this.slider.responsive.addStaticMargin(i,this))}var s=\"click\";this.slider.hasTouch()&&(s=\"n2click\"),this.bar.on(\"click\",t.proxy(function(t){this.slider.sliderElement.find(\".n2-ss-slide-active .n2-ss-layers-container\").trigger(s)},this))},i.prototype.onFirstSlideSet=function(t){this.onSliderSwitchTo(null,t.index)},i.prototype.hasContent=function(t){return this.parameters.showTitle&&(t.getTitle()!==e||this.parameters.slideCount)?!0:!(!this.parameters.showDescription||t.getDescription()===e&&!this.parameters.slideCount)},i.prototype.renderBarContent=function(t){var i=\"\";if(this.parameters.showTitle&&(t.getTitle()!==e||this.parameters.slideCount)){if(this.parameters.slideCount)var s=t.index+1;else var s=t.getTitle();i+='<span class=\"'+this.parameters.fontTitle+' n2-ow\">'+s+\"<\/span>\"}if(this.parameters.showDescription&&(t.getDescription()!==e||this.parameters.slideCount)){if(this.parameters.slideCount)var r=t.slider.slides.length;else var r=t.getDescription();i+='<span class=\"'+this.parameters.fontDescription+' n2-ow\">'+(\"\"===i?\"\":this.parameters.separator)+r+\"<\/span>\"}return\"\"===i?'<span class=\"'+this.parameters.fontDescription+' n2-ow\">&nbsp;<\/span>':i},i.prototype.onSliderSwitchTo=function(t,e){var i=this.slider.slides[e],s=this.renderBarContent(i);this.innerBar.html(s),this.setCursor(i.hasLink()),this.slider.widgets.setState(\"hide.bar\",!this.hasContent(i))},i.prototype.onSliderSwitchToAnimateStart=function(){var e=t.Deferred();this.slider.sliderElement.on(\"mainAnimationComplete.n2Bar\",t.proxy(this.onSliderSwitchToAnimateEnd,this,e)),this.tween&&this.tween.pause(),NextendTween.to(this.innerBar,.3,{opacity:0,onComplete:function(){e.resolve()}})},i.prototype.onSliderSwitchToAnimateEnd=function(e,i,s,r,n){this.slider.sliderElement.off(\".n2Bar\");var a=this.slider.slides[n];e.done(t.proxy(function(){var t=this.innerBar.clone();this.innerBar.remove(),this.innerBar=t.css(\"opacity\",0).html(this.renderBarContent(a)).appendTo(this.bar),this.setCursor(a.hasLink()),this.slider.widgets.setState(\"hide.bar\",!this.hasContent(a)),this.tween=NextendTween.to(this.innerBar,.3,{opacity:1})},this))},i.prototype.setCursor=function(t){this.innerBar.css(\"cursor\",t?\"pointer\":\"inherit\")},i.prototype.isVisible=function(){return this.bar.is(\":visible\")},i.prototype.getSize=function(){return this.bar.height()+this.offset},i});",
                    "new N2Classes.SmartSliderWidgetBarHorizontal(this, {\"overlay\":1,\"area\":12,\"animate\":0,\"showTitle\":1,\"fontTitle\":\"n2-font-eaadb88363561b5fd6b7213a8b9844c3-simple \",\"slideCount\":0,\"showDescription\":1,\"fontDescription\":\"n2-font-8c3ee3e933a3848a19bf6170f5b75274-simple \",\"separator\":\" - \"});"
                ],
                "allowBGImageAttachmentFixed": false,
                "bgAnimationsColor": "RGBA(51,51,51,1)",
                "bgAnimations": {
                    "global": 0,
                    "color": "RGBA(51,51,51,1)",
                    "speed": "normal",
                    "slides": [{
                        "animation": [{
                            "type": "Flat",
                            "tiles": {
                                "delay": 0,
                                "sequence": "ForwardDiagonal"
                            },
                            "main": {
                                "type": "next",
                                "duration": 1,
                                "next": {
                                    "ease": "easeOutCubic",
                                    "top": "-100%"
                                }
                            },
                            "invert": {
                                "type": "current",
                                "zIndex": 2,
                                "current": {
                                    "ease": "easeOutCubic",
                                    "top": "-100%"
                                }
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Flat",
                            "tiles": {
                                "delay": 0,
                                "sequence": "ForwardDiagonal"
                            },
                            "main": {
                                "type": "both",
                                "duration": 1,
                                "current": {
                                    "ease": "easeOutCubic",
                                    "top": "50%"
                                },
                                "next": {
                                    "ease": "easeOutCubic",
                                    "top": "-100%"
                                }
                            },
                            "invert": {
                                "zIndex": 2,
                                "current": {
                                    "top": "-100%"
                                },
                                "next": {
                                    "top": "50%"
                                }
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Flat",
                            "rows": 25,
                            "columns": 1,
                            "tiles": {
                                "delay": 0.03,
                                "sequence": "BackwardRow"
                            },
                            "main": {
                                "type": "next",
                                "duration": 0.35,
                                "next": {
                                    "ease": "easeInQuart",
                                    "opacity": "0",
                                    "top": "-100%"
                                }
                            },
                            "invert": {
                                "next": {
                                    "top": "100%"
                                }
                            },
                            "invertTiles": {
                                "sequence": "ForwardRow"
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Cubic",
                            "depth": 100,
                            "main": {
                                "side": "BackInvert",
                                "duration": 0.8,
                                "ease": "easeInCubic",
                                "real3D": true,
                                "direction": "vertical"
                            },
                            "invert": {
                                "side": "Back"
                            }
                        }],
                        "speed": "normal"
                    }, {
                        "animation": [{
                            "type": "Cubic",
                            "columns": 1,
                            "rows": 1,
                            "main": {
                                "side": "Top",
                                "duration": 0.8,
                                "ease": "easeInCubic",
                                "real3D": true
                            },
                            "invert": {
                                "side": "Bottom"
                            }
                        }],
                        "speed": "normal"
                    }]
                },
                "mainanimation": {
                    "type": "horizontal",
                    "duration": 800,
                    "delay": 0,
                    "ease": "easeOutQuad",
                    "parallax": 0,
                    "shiftedBackgroundAnimation": "auto"
                },
                "carousel": 1,
                "dynamicHeight": 0
            })
        })
    });
