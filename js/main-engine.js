/*-------------------------------------------------------------------------------------------
    =CALENDARIO - show / hide timetible on each locations
--------------------------------------------------------------------------------------------*/
function fCalendar_ev_showClose() {
  var $mainWrapper = $(".page-current .content-horarios"),
    $gymColumn = $(".page-current .content-horarios .gym-column"),
    $gymColumnClickArea = $gymColumn.find(".click-area"),
    element_width = $gymColumn.width(),
    $btns_close_x = $(".page-current .js-btn-calendar-close .btn"), // Made global var $_btns_close_x
    $iconHorariosWrapper = $(".icon-horarios-wrapper");

  // if ($_body.hasClass('mobile')) {
  //   $.doTimeout(1000, function() {
  //     var element_width = $(".page-current .content-horarios .gym-column").width();
  //     $gymColumn.attr("data-width", element_width);
  //   })
  // } else {
  //   var element_width = $(".page-current .content-horarios .gym-column").width();
  //   $gymColumn.attr("data-width", element_width);
  // }

  //** CLICK
  $gymColumnClickArea.on("click", function () {
    var $this = $(this);

    if ($this.parent().hasClass("off")) return false;

    $mainWrapper.addClass("open swiper-no-swiping stop-mousemove");
    $(".page-current .content-horarios .gym-column").removeClass("open");
    $this.parent().addClass("open");

    $(".gym-btn").css("display", "none");
    TweenMax.set($this, {
      autoAlpha: 0,
    });
    TweenMax.set($this.parent(), {
      x: -$this.parent().offset().left,
    });

    if ($_body.hasClass("modalidades")) {
      if (
        document.querySelector(".modalidades .page-current .content-horarios")
      )
        var sliderModalidades = document.querySelector(
          ".modalidades .page-current .content-horarios"
        ).swiper;

      if (sliderModalidades) {
        sliderModalidades.detachEvents();
      }
    } else if ($_body.hasClass("horarios")) {
      if (document.querySelector(".horarios .content-horarios"))
        var sliderHorarios = document.querySelector(
          ".horarios .content-horarios"
        ).swiper;

      if (sliderHorarios) {
        sliderHorarios.detachEvents();
      }
    }

    if ($_body.hasClass("modalidades") || $_body.hasClass("modalidades-all")) {
      TweenMax.set($(".content-horarios .gym-column:not(.open)"), {
        autoAlpha: 0,
      });
    }
  }); //end CLICK

  $btns_close_x.on("click", function () {
    var $this = $(this);

    if ($_body.hasClass("modalidades") || $_body.hasClass("modalidades-all")) {
      TweenMax.set($(".content-horarios .gym-column"), {
        autoAlpha: 1,
        clearProps: "opacity, visibility",
      });
    }

    $(".gym-btn").css("display", "");
    TweenMax.set($this.closest($gymColumn).find(".click-area"), {
      autoAlpha: 1,
    });
    TweenMax.set($this.closest($gymColumn), {
      x: 0,
    });
    $mainWrapper.removeClass("open");

    $.doTimeout(400, function () {
      $mainWrapper.removeClass("stop-mousemove swiper-no-swiping");

      if ($_body.hasClass("modalidades")) {
        if (
          document.querySelector(".modalidades .page-current .content-horarios")
        )
          var sliderModalidades = document.querySelector(
            ".modalidades .page-current .content-horarios"
          ).swiper;

        if (sliderModalidades) {
          sliderModalidades.update();
          sliderModalidades.attachEvents();
        }
      } else if ($_body.hasClass("horarios")) {
        if (document.querySelector(".horarios .content-horarios"))
          var sliderHorarios = document.querySelector(
            ".horarios .content-horarios"
          ).swiper;

        if (sliderHorarios) {
          sliderHorarios.update();
          sliderHorarios.attachEvents();
        }
      }
    });
    $(".page-current .content-horarios .gym-column").removeClass("open");
  }); //end CLICK
} //////end function

/*-------------------------------------------------------------------------------------------
    =CALENDARIO - start colors and studios (always 1st studio is on)
--------------------------------------------------------------------------------------------*/
function fCalendar_start() {
  $(".page-current .nav-table").each(function () {
    var $this = $(this);
    var studioToSee = $this.find("a.on").attr("data-studio");
    var place = $this.attr("data-place");
    var $placeTable = $(".page-current ." + place + " .table-horarios");
    var $placeTableLines = $(
      ".page-current ." + place + " .table-horarios tbody tr"
    );

    tableHorariosBGcolor($placeTableLines, studioToSee, place);
    tableHorariosClearHoras($placeTableLines, studioToSee);

    var $placeTableLinesShow = $(
      ".page-current ." +
        place +
        " .table-horarios." +
        studioToSee +
        " tbody tr.show"
    );

    console.log($placeTableLinesShow, place, studioToSee);

    $placeTableLinesShow.find("td").each(function () {
      var $this = $(this);

      if ($this.find("a." + studioToSee).length > 1) {
        $this
          .find("a." + studioToSee)
          .parent()
          .addClass("double");
        $this.find("a." + studioToSee).wrapAll("<div class='wrapper' />");
      }
    });
  }); //end each
} //////end function

/*-------------------------------------------------------------------------------------------
    =CALENDARIO =HORARIO - eventos nos estudios
--------------------------------------------------------------------------------------------*/
function fCalendar_ev_estudios() {
  var $btn_estudios = $(".nav-table a");

  //** CLICK
  $btn_estudios.on("click", function () {
    var $this = $(this);
    var studioToSee = $this.attr("data-studio");
    var $studioWas = $this.parents("ul").find(".on");
    var studioWas = $studioWas.attr("data-studio");

    var place = $this.parents("ul").attr("data-place");
    var $placeTable = $(".page-current ." + place + " .table-horarios");
    var $placeTableLines = $(
      ".page-current ." + place + " .table-horarios tbody tr"
    );

    $studioWas.removeClass("on");
    $this.addClass("on");
    $placeTable
      .removeClass("" + studioWas + "")
      .addClass("" + studioToSee + "");

    $.doTimeout(200, function () {
      tableHorariosClearHoras($placeTableLines, studioToSee);
      tableHorariosBGcolor($placeTableLines, studioToSee, place);

      var $placeTableLinesShow = $(
        ".page-current ." +
          place +
          ".open .table-horarios." +
          studioToSee +
          " tbody tr.show"
      );

      $placeTableLinesShow.find("td").each(function () {
        var $this = $(this);

        if ($this.find("a." + studioToSee).length > 1) {
          $this
            .find("a." + studioToSee)
            .parent()
            .addClass("double");
          $this.find("a." + studioToSee).wrapAll("<div class='wrapper' />");
        }
      });
    });
    return false;
  }); //end CLICK
} //////end function

//=linhas tabela, objectos e cores
function tableHorariosClearHoras($elem, classe) {
  $elem.each(function () {
    var $this = $(this);
    if (!$this.find("a").hasClass("" + classe + "")) {
      $this.slideUp(500, "easeOutBack");
    } else {
      $this.slideDown(550, "easeOutBack");
    }
  }); //end each
} //////end function

function tableHorariosBGcolor($elem, classe, place) {
  var bgColor = _globalCalendarColor_celas;
  if (place == "lagrimas") {
    bgColor = _globalCalendarColor_lagrimas;
  }
  $elem.each(function () {
    var $this = $(this);
    if (!$this.find("a").hasClass("" + classe + "")) {
      $this.removeClass("show");
    } else {
      $this.addClass("show");
    }
  }); //end each

  $(".gym-column").each(function (i) {
    var $this = $(this);

    if (i % 2 === 0) {
      $this
        .find(".show:even td")
        .css("background-color", "rgba(255,255,255,.10)");
      $this.find(".show:odd td").css("background-color", "transparent");
    } else {
      $this.find(".show:even td").css("background-color", "rgba(0,0,0,0.09)");
      $this.find(".show:odd td").css("background-color", "transparent");
    }
  });
}

/*-------------------------------------------------------------------------------------------
    =CALENDARIO - eventos na modalidade
    :NOTE: modalidade must be 1st class!
--------------------------------------------------------------------------------------------*/
function fCalendar_ev_modalidades() {
  var $btn_modalidades = $(".table-horarios td a");

  // MOBILE && HORARIOS PAGE I don't want this
  if (
    $_body.hasClass("mobile") &&
    $(".page-current .page-toload").hasClass("horarios")
  )
    return;
  //** HOVER
  $btn_modalidades.hover(
    function () {
      var $this = $(this);
      var aux = $this.attr("class").split(" ")[0];
      $(".table-horarios td a." + aux + "").addClass("hover");
    },
    function () {
      $btn_modalidades.removeClass("hover");
    }
  ); //end OVER
} //////end function

/*-------------------------------------------------------------------------------------------
    =ARROWS NAVIGATION =MODALIDADES = TEAM NAV on header
    NOTA: chamada depois do loaded content
--------------------------------------------------------------------------------------------*/
function fArrowsNav(do_navArrows) {
  var $prevHeader = $("#nav-main-control .go-prev"),
    $nextHeader = $("#nav-main-control .go-next"),
    $mainSectionHeader = $("#nav-main-control .go-main"),
    $text = $("#nav-main-control .grid-center-vh .anim-txt-ud");
  // always clear content
  $text.text("");
  $prevHeader.find("a").attr("href", "#/");
  $nextHeader.find("a").attr("href", "#/");

  // if (!do_navArrows) {
  //     $prevHeader.css("pointer-events", "none");
  //     $nextHeader.css("pointer-events", "none");
  //     return false;
  // }

  //change content of header links and Main link
  mainLinkSection = $(".page-current .preload .go-main").html();
  prevCurrent = $(".page-current .preload .go-prev").html();
  nextCurrent = $(".page-current .preload .go-next").html();

  $mainSectionHeader.html(mainLinkSection);
  $prevHeader.html(prevCurrent);
  $nextHeader.html(nextCurrent);
  //I can have events now
  $prevHeader.css("pointer-events", "auto");
  $nextHeader.css("pointer-events", "auto");

  // Arrows animation
  var $arrowRgt = $(".btn-arrow-svg.next"),
    svgContainer = document.querySelector("p.btn-arrow-svg.next"),
    svgElement = svgContainer.querySelector("svg"),
    svgRgt = Snap(svgElement),
    pathSVGtop = svgRgt.select("path.top"),
    pathSVGdown = svgRgt.select("path.down"),
    pathSVGcenter = svgRgt.select("path.center");

  var $arrowLft = $(".btn-arrow-svg.prev"),
    svgContainerLft = document.querySelector("p.btn-arrow-svg.prev"),
    svgElementLft = svgContainerLft.querySelector("svg"),
    svgLft = Snap(svgElementLft),
    pathSVGtopLft = svgLft.select("path.top"),
    pathSVGdownLft = svgLft.select("path.down"),
    pathSVGcenterLft = svgLft.select("path.center");

  _overSVGPathsRgt = {
    resetTop: $("#arrow-rgt-svg .top").attr("d"),
    resetDown: $("#arrow-rgt-svg .down").attr("d"),
    resetCenter: $("#arrow-rgt-svg .center").attr("d"),
    newTop: $arrowRgt.attr("data-morph-top"),
    newDown: $arrowRgt.attr("data-morph-down"),
    newCenter: $arrowRgt.attr("data-morph-center"),
  };

  _overSVGPathsLft = {
    resetTop: $("#arrow-lft-svg .top").attr("d"),
    resetDown: $("#arrow-lft-svg .down").attr("d"),
    resetCenter: $("#arrow-lft-svg .center").attr("d"),
    newTop: $arrowLft.attr("data-morph-top"),
    newDown: $arrowLft.attr("data-morph-down"),
    newCenter: $arrowLft.attr("data-morph-center"),
  };

  var $toclick = $("#nav-main-control .grid-center-vh a"),
    $getInfo = $(".page-current .preload a");

  $toclick.hover(
    function () {
      var text = $(this).attr("data-title");
      $text.html(text);

      if ($(this).hasClass("next")) {
        $text.addClass("up");
        pathSVGtop.stop().animate(
          {
            path: _overSVGPathsRgt.newTop,
          },
          200,
          mina.elastic
        );
        pathSVGdown.stop().animate(
          {
            path: _overSVGPathsRgt.newDown,
          },
          200,
          mina.elastic
        );
        pathSVGcenter.stop().animate(
          {
            path: _overSVGPathsRgt.newCenter,
          },
          200,
          mina.elastic
        );
      } else if ($(this).hasClass("prev")) {
        $text.addClass("down");
        pathSVGtopLft.stop().animate(
          {
            path: _overSVGPathsLft.newTop,
          },
          200,
          mina.elastic
        );
        pathSVGdownLft.stop().animate(
          {
            path: _overSVGPathsLft.newDown,
          },
          200,
          mina.elastic
        );
        pathSVGcenterLft.stop().animate(
          {
            path: _overSVGPathsLft.newCenter,
          },
          200,
          mina.elastic
        );
      } else {
        $text.addClass("down");
      }
    },
    function () {
      $text.removeClass("up down").html("");
      if ($(this).hasClass("next")) {
        pathSVGtop.stop().animate(
          {
            path: _overSVGPathsRgt.resetTop,
          },
          200,
          mina.elastic
        );
        pathSVGdown.stop().animate(
          {
            path: _overSVGPathsRgt.resetDown,
          },
          200,
          mina.elastic
        );
        pathSVGcenter.stop().animate(
          {
            path: _overSVGPathsRgt.resetCenter,
          },
          200,
          mina.elastic
        );
      }
      if ($(this).hasClass("prev")) {
        pathSVGtopLft.stop().animate(
          {
            path: _overSVGPathsLft.resetTop,
          },
          200,
          mina.elastic
        );
        pathSVGdownLft.stop().animate(
          {
            path: _overSVGPathsLft.resetDown,
          },
          200,
          mina.elastic
        );
        pathSVGcenterLft.stop().animate(
          {
            path: _overSVGPathsLft.resetCenter,
          },
          200,
          mina.elastic
        );
      }
    }
  ); //end hover
} //end fArrowsNav

/*-------------------------------------------------------------------------------------------
    =ARROWS NAVIGATION =MODAL
--------------------------------------------------------------------------------------------*/
function fModalArrowsNav(do_navArrows) {
  // Arrows animation
  var $arrowRgt = $(".btn-arrow-svg.next"),
    svgContainer = document.querySelector("p.btn-arrow-svg.next"),
    svgElement = svgContainer.querySelector("svg"),
    svgRgt = Snap(svgElement),
    pathSVGtop = svgRgt.select("path.top"),
    pathSVGdown = svgRgt.select("path.down"),
    pathSVGcenter = svgRgt.select("path.center");

  var $arrowLft = $(".btn-arrow-svg.prev"),
    svgContainerLft = document.querySelector("p.btn-arrow-svg.prev"),
    svgElementLft = svgContainerLft.querySelector("svg"),
    svgLft = Snap(svgElementLft),
    pathSVGtopLft = svgLft.select("path.top"),
    pathSVGdownLft = svgLft.select("path.down"),
    pathSVGcenterLft = svgLft.select("path.center");

  _overSVGPathsRgt = {
    resetTop: $("#arrow-modal-rgt-svg .top").attr("d"),
    resetDown: $("#arrow-modal-rgt-svg .down").attr("d"),
    resetCenter: $("#arrow-modal-rgt-svg .center").attr("d"),
    newTop: $arrowRgt.attr("data-morph-top"),
    newDown: $arrowRgt.attr("data-morph-down"),
    newCenter: $arrowRgt.attr("data-morph-center"),
  };

  _overSVGPathsLft = {
    resetTop: $("#arrow-modal-lft-svg .top").attr("d"),
    resetDown: $("#arrow-modal-lft-svg .down").attr("d"),
    resetCenter: $("#arrow-modal-lft-svg .center").attr("d"),
    newTop: $arrowLft.attr("data-morph-top"),
    newDown: $arrowLft.attr("data-morph-down"),
    newCenter: $arrowLft.attr("data-morph-center"),
  };

  //

  var $toclick = $("#nav-modal .grid-center-vh a");

  $toclick.hover(
    function () {
      // var text = $(this).attr('data-title');
      // $text.html(text);

      if ($(this).hasClass("next")) {
        pathSVGtop.stop().animate(
          {
            path: _overSVGPathsRgt.newTop,
          },
          200,
          mina.elastic
        );
        pathSVGdown.stop().animate(
          {
            path: _overSVGPathsRgt.newDown,
          },
          200,
          mina.elastic
        );
        pathSVGcenter.stop().animate(
          {
            path: _overSVGPathsRgt.newCenter,
          },
          200,
          mina.elastic
        );
      }
      if ($(this).hasClass("prev")) {
        pathSVGtopLft.stop().animate(
          {
            path: _overSVGPathsLft.newTop,
          },
          200,
          mina.elastic
        );
        pathSVGdownLft.stop().animate(
          {
            path: _overSVGPathsLft.newDown,
          },
          200,
          mina.elastic
        );
        pathSVGcenterLft.stop().animate(
          {
            path: _overSVGPathsLft.newCenter,
          },
          200,
          mina.elastic
        );
      }
    },
    function () {
      //$text.html("");
      if ($(this).hasClass("next")) {
        pathSVGtop.stop().animate(
          {
            path: _overSVGPathsRgt.resetTop,
          },
          200,
          mina.elastic
        );
        pathSVGdown.stop().animate(
          {
            path: _overSVGPathsRgt.resetDown,
          },
          200,
          mina.elastic
        );
        pathSVGcenter.stop().animate(
          {
            path: _overSVGPathsRgt.resetCenter,
          },
          200,
          mina.elastic
        );
      }
      if ($(this).hasClass("prev")) {
        pathSVGtopLft.stop().animate(
          {
            path: _overSVGPathsLft.resetTop,
          },
          200,
          mina.elastic
        );
        pathSVGdownLft.stop().animate(
          {
            path: _overSVGPathsLft.resetDown,
          },
          200,
          mina.elastic
        );
        pathSVGcenterLft.stop().animate(
          {
            path: _overSVGPathsLft.resetCenter,
          },
          200,
          mina.elastic
        );
      }
    }
  ); //end hover
} //end fModalArrowsNav

/********************************************************************************************
     =BLOCK ANIMATIONS
*********************************************************************************************/
function animBlockDownUp(do_animDownUp) {
  if ($_body.hasClass("mobile")) return;

  if (!do_animDownUp) {
    $_window.off("scroll", $.debounce(10, animBlockDownUp_inViewport));
    return false;
  } else {
    $_window.on("scroll", $.debounce(10, animBlockDownUp_inViewport));
  }

  var $elementsWrapper = $(".anim-wrap-DownUp"),
    $elements = $(".anim-DownUp");

  //positionate elements
  animBlockDownUp_start();

  function animBlockDownUp_start() {
    var windowHeight = verge.viewportH() / 2;
    $elements.velocity(
      {
        translateY: windowHeight,
      },
      0
    );
  } //end function

  function animBlockDownUp_inViewport() {
    var scrollVal = verge.scrollY();
    var dataDelay = 0;
    $elementsWrapper.each(function (i) {
      var $this = $(this);
      var $thisAnim = $this.find(".anim-DownUp");

      if (verge.inY($this, -300)) {
        $thisAnim.each(function (i) {
          var $this = $(this);
          if ($this.hasClass("js-anim-done")) return;
          $this.addClass("js-anim-done");

          var aux = $this.attr("data-delay");
          if (aux) {
            dataDelay = aux;
          }

          $this.velocity(
            {
              translateZ: 0,
              translateY: 0,
            },
            {
              duration: 1000,
              easing: [0.075, 0.82, 0.165, 1.0],
              //easing: [.71,.45,.82,.69],
              // easing: [0,1.13,.25,.99],
              //easing:"easeOutSine",
              mobileHA: true,
              delay: dataDelay,
            }
          );
        });
      } //end if
    }); //end each
  } //end viewport
} //end animBlockDownUp()

/* *******************************************************************************************
     =FOOTER75 - foooter like modalidade
*********************************************************************************************/
function fFooter2c(do_footer2c) {
  if (!do_footer2c) {
    return false;
  }

  $(".footer-2c .cell-rgt").on("mouseenter", function (event) {
    var $this = $(this);
    $(".footer-2c .cell-rgt .btn-arrow").doTimeout(
      "fOver",
      100,
      "addClass",
      "over"
    );
    event.preventDefault();
  }); //end click

  $(".footer-2c .cell-rgt").on("mouseleave", function (event) {
    var $this = $(this);

    $(".footer-2c .cell-rgt .btn-arrow").doTimeout(
      "fOver",
      0,
      "removeClass",
      "over"
    );
    event.preventDefault();
  });

  /* ALEX - ver poois footer esta fixo! e com translate desaparece! */
  $(".btn-js").click(function () {
    $(".page-current .push-footer").removeClass("push-footer");
    $(".page-current .footer").css("position", "relative");
    return;
  });
} //////end function

/** *******************************************************************************************
     =FORMS INITIATION, AJAX CALLS AND VALIDATION
*********************************************************************************************/
function formMarcarVisitaEvents() {
  var $form = $(".marcar-visita-lightbox #form-parceiro"),
    $formInputs = $(".marcar-visita-lightbox #form-parceiro input"),
    $submitForm = $form.find("button"),
    $radioButton = $(".radio-buttons li");

  $form.find(".rgpd-wrapper svg").on("click", function () {
    var $this = $(this);
    $this.closest("div").toggleClass("active");

    if ($this.closest("div").hasClass("active")) {
      $this.closest("div").find("input").prop("checked", true);
      $form.find("button").addClass("enable");
    } else {
      $this.closest("div").find("input").prop("checked", false);
      $form.find("button").removeClass("enable");
    }
  });

  $radioButton.on("click", function () {
    var $this = $(this),
      inputChecked = $this.data("check");

    if ($this.find(".radio-selection").hasClass("selected")) {
      $this
        .find(".radio-selection")
        .removeClass("selected")
        .addClass("unselected");
      $('#form-parceiro input[data-check-input="' + inputChecked + '"]').attr(
        "checked",
        false
      );
    } else {
      $this
        .find(".radio-selection")
        .removeClass("unselected")
        .addClass("selected");
      $('#form-parceiro input[data-check-input="' + inputChecked + '"]').attr(
        "checked",
        true
      );
    }
  });

  $formInputs.blur(function () {
    var $this = $(this),
      defeito = this.defaultValue;

    if (!$this.hasClass("required") && !$this.val()) return;
    check($this, defeito, 0);

    if ($this.hasClass("erro")) {
      $this.parent().addClass("erro");
    } else {
      $this.parent().removeClass("erro");
    }
  });

  $formInputs.focus(function () {
    var $this = $(this);
    $this.removeClass("erro");
    $this.parent().removeClass("erro");
  });

  /*Submit Form*/
  $submitForm.on("click", function () {
    event.preventDefault();

    if (validateForm($form) && !$form.hasClass("sending")) {
      $form.addClass("sending");
      formAnimLoadingNEW($submitForm, "loading");
      // campainMonitorForm($form);

      $.doTimeout(2700, function () {
        $.ajax({
          data: $form.serialize(),
          type: $form.attr("method"),
          dataType: "json",
          url: $form.attr("action"),
          cache: false,
          contentType: "application/json; charset=utf-8",
          success: function (data) {
            // console.log("sent", data);
            if (data.result == "success") {
              formAnimLoadingNEW($submitForm, "sent-ok");
              $form.removeClass("sending");
            } else {
              formAnimLoadingNEW($submitForm, "sent-error");
              $form.removeClass("sending");
            }
          },
          error: function (data) {
            // console.log("erro", data);
            formAnimLoadingNEW($submitForm, "sent-error");
            $form.removeClass("sending");
          },
        });
      });
    }
  });
}

function formPromocaoEvents() {
  var $form = $(".promo-lightbox #form-parceiro"),
    $formInputs = $(".promo-lightbox #form-parceiro input"),
    $submitForm = $form.find("button"),
    $radioButton = $(".promo-lightbox #form-parceiro .radio-buttons li");

  $form.find(".rgpd-wrapper svg").on("click", function () {
    var $this = $(this);
    $this.closest("div").toggleClass("active");

    if ($this.closest("div").hasClass("active")) {
      $this.closest("div").find("input").prop("checked", true);
      $form.find("button").addClass("enable");
    } else {
      $this.closest("div").find("input").prop("checked", false);
      $form.find("button").removeClass("enable");
    }
  });

  $radioButton.on("click", function () {
    var $this = $(this),
      inputChecked = $this.data("check");

    if ($this.find(".radio-selection").hasClass("selected")) {
      $this
        .find(".radio-selection")
        .removeClass("selected")
        .addClass("unselected");
      $('#form-parceiro input[data-check-input="' + inputChecked + '"]').attr(
        "checked",
        false
      );
    } else {
      $this
        .find(".radio-selection")
        .removeClass("unselected")
        .addClass("selected");
      $('#form-parceiro input[data-check-input="' + inputChecked + '"]').attr(
        "checked",
        true
      );
    }
  });

  if ($radioButton.length == 1) {
    $radioButton.click();
  }

  $formInputs.blur(function () {
    var $this = $(this),
      defeito = this.defaultValue;

    if (!$this.hasClass("required") && !$this.val()) return;
    check($this, defeito, 0);

    if ($this.hasClass("erro")) {
      $this.parent().addClass("erro");
    } else {
      $this.parent().removeClass("erro");
    }
  });

  $formInputs.focus(function () {
    var $this = $(this);
    $this.removeClass("erro");
    $this.parent().removeClass("erro");
  });

  /*Submit Form*/
  $submitForm.on("click", function () {
    event.preventDefault();

    if (validateForm($form) && !$form.hasClass("sending")) {
      $form.addClass("sending");
      formAnimLoadingNEW($submitForm, "loading");
      // campainMonitorForm($form);

      var $promoName = $(".promo-lightbox .content h3").text();

      $.doTimeout(2700, function () {
        $.ajax({
          type: "GET",
          dataType: "xml",
          url:
            $form.attr("action") +
            $form.serialize() +
            "&functionOptions[extra_23]=" +
            $promoName,
          success: function (data) {
            // console.log("sent", data);
            if (
              data.getElementsByTagName("status")[0].textContent == "success"
            ) {
              if (data.getElementsByTagName("ERROR").length > 0) {
                formAnimLoadingNEW($submitForm, "sent-error");
                $form.removeClass("sending");
              } else {
                formAnimLoadingNEW($submitForm, "sent-ok");
                $form.removeClass("sending");
              }
            } else {
              formAnimLoadingNEW($submitForm, "sent-error");
              $form.removeClass("sending");
            }
          },
          error: function (data) {
            // console.log("erro", data);
            formAnimLoadingNEW($submitForm, "sent-error");
            $form.removeClass("sending");
          },
        });
      });
    }
  });
}
/*-----------------------------------------------------------------------
 =Instrutores
-----------------------------------------------------------------------*/
function initiateInstrutorForm() {
  var $instrutorSubmit = $(".page-current .form-team-member button"),
    $instrutorInputs = $(".page-current form input"),
    $form = $(".page-current .form-team-member"),
    server_hostname = document.location.origin;

  $form.find(".rgpd-wrapper svg").on("click", function () {
    var $this = $(this);
    $this.closest("div").toggleClass("active");

    if ($this.closest("div").hasClass("active")) {
      $this.closest("div").find("input").prop("checked", true);
      $form.find(".btn[type=submit]").addClass("enable");
    } else {
      $this.closest("div").find("input").prop("checked", false);
      $form.find(".btn[type=submit]").removeClass("enable");
    }
  });

  $instrutorInputs.blur(function () {
    var $this = $(this),
      defeito = this.defaultValue;

    if (!$this.hasClass("required") && !$this.val()) {
      $this.removeClass("error");
      return;
    }
    check($this, defeito, 0);
  });

  $instrutorInputs.focus(function () {
    var $this = $(this);
    $this.removeClass("error");
    $this.parent().removeClass("error");
  });

  $instrutorSubmit.on("click", function (event) {
    event.preventDefault();

    if (validateForm($form) && !$form.hasClass("sending")) {
      formAnimLoadingNEW($instrutorSubmit, "loading");
      $form.addClass("sending");
      $.doTimeout(2700, function () {
        $.ajax({
          data: $form.serialize(),
          type: "post",
          dataType: "json",
          url: server_hostname + "/wp-admin/admin-ajax.php",
          success: function (data) {
            console.log("sucesso", data);
            $form.removeClass("sending");
            if (data.status == "success") {
              formAnimLoadingNEW($instrutorSubmit, "sent-ok");
              $form.removeClass("sending");
              // $instrutorSubmit.find('.msg').text('Enviado');
            } else {
              formAnimLoadingNEW($instrutorSubmit, "sent-error");
              $form.removeClass("sending");
            }
          },
          error: function (data) {
            console.log("erro", data);
            formAnimLoadingNEW($instrutorSubmit, "sent-error");
            $form.removeClass("sending");
          },
        });
      });
    }
  });
}

/*-----------------------------------------------------------------------
 =Newsletter
-----------------------------------------------------------------------*/
function newsletterForm() {
  $(document).on("click", "#subForm .rgpd-wrapper svg", function () {
    var $this = $(this);
    $this.closest("div").toggleClass("active");

    if ($this.closest("div").hasClass("active")) {
      $this.closest("div").find("input").prop("checked", true);
      $(".footer #subForm").find("button").addClass("enable");
    } else {
      $this.closest("div").find("input").prop("checked", false);
      $(".footer #subForm").find("button").removeClass("enable");
    }
  });

  $(document).on("focus", "#subForm input[type=email]", function () {
    $(".footer #subForm").find(".rgpd-wrapper").addClass("show");
  });

  $(document).on("click", "#subForm button", function () {
    event.preventDefault();

    var $this = $(this);
    $this.addClass("sending");
    console.log($(".footer #subForm").serialize());
    $.ajax({
      type: "GET",
      dataType: "xml",
      url:
        $(".footer #subForm").attr("action") +
        $(".footer #subForm").serialize(),

      success: function (data) {
        //console.log("sent", data);
        if (data.getElementsByTagName("status")[0].textContent == "success") {
          if (data.getElementsByTagName("ERROR").length > 0) {
            $.doTimeout(2000, function () {
              $this.removeClass("sending").addClass("done");
            });
            $.doTimeout(2300, function () {
              $this.addClass("error");
            });
            $.doTimeout(4000, function () {
              $this.removeClass("error done");
            });
          } else {
            $.doTimeout(2000, function () {
              $this.removeClass("sending").addClass("done");
            });
            $.doTimeout(2300, function () {
              $this.addClass("sent");
            });
            $.doTimeout(4000, function () {
              $(".footer #subForm")[0].reset();
              $(".footer #subForm button").removeClass("enable");
              $(".footer #subForm .rgpd-wrapper").removeClass("show");
              $this.removeClass("sent done");
            });
          }
        }
      },
      error: function (data) {
        // console.log("erro", data);
        $.doTimeout(2000, function () {
          $this.removeClass("sending").addClass("done");
        });
        $.doTimeout(2300, function () {
          $this.addClass("error");
        });
        $.doTimeout(4000, function () {
          $this.removeClass("error done");
        });
      },
    });
  });
} //////end function

/*-----------------------------------------------------------------------
 =promosForm
-----------------------------------------------------------------------*/
function promosForm() {
  $(document).on("submit", "#form-promo", function (event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    var gim = $(".radio-buttons .radio-selection.selected")
      .parent("li")
      .find(".value")
      .text();
    $("#fielddlukhjuk").val(gim);

    $.getJSON(this.action + "?callback=?", $(this).serialize(), function (
      data
    ) {
      if (data.Status === 200) {
        $("form").css({
          opacity: "0",
          "pointer-events": "none",
        });
        $(".promo-thanks").fadeIn(300);

        $.doTimeout(2000, function () {
          $("#lightbox .btn-close-modal").click();
        });
      }
    }); //end json
  }); //end Submit form
} //////end function

//https://github.com/drojdjou/bartekdrozdz.com/blob/master/static/src/framework/VirtualScroll.js
var VirtualScroll = (function (document) {
  var vs = {};

  var numListeners,
    listeners = [],
    initialized = false;

  var touchStartX, touchStartY;

  // [ These settings can be customized with the options() function below ]
  // Mutiply the touch action by two making the scroll a bit faster than finger movement
  var touchMult = 2;
  // Firefox on Windows needs a boost, since scrolling is very slow
  var firefoxMult = 15;
  // How many pixels to move with each key press
  var keyStep = 120;
  // General multiplier for all mousehweel including FF
  var mouseMult = 1;

  var bodyTouchAction;

  var hasWheelEvent = "onwheel" in document;
  var hasMouseWheelEvent = "onmousewheel" in document;
  var hasTouch = "ontouchstart" in document;
  var hasTouchWin =
    navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1;
  var hasPointer = !!window.navigator.msPointerEnabled;
  var hasKeyDown = "onkeydown" in document;

  var isFirefox = navigator.userAgent.indexOf("Firefox") > -1;

  var event = {
    y: 0,
    x: 0,
    deltaX: 0,
    deltaY: 0,
    originalEvent: null,
  };

  vs.on = function (f) {
    if (!initialized) initListeners();
    listeners.push(f);
    numListeners = listeners.length;
  };

  vs.options = function (opt) {
    keyStep = opt.keyStep || 120;
    firefoxMult = opt.firefoxMult || 15;
    touchMult = opt.touchMult || 2;
    mouseMult = opt.mouseMult || 1;
  };

  vs.off = function (f) {
    listeners.splice(f, 1);
    numListeners = listeners.length;
    if (numListeners <= 0) destroyListeners();
  };

  var notify = function (e) {
    event.x += event.deltaX;
    event.y += event.deltaY;
    event.originalEvent = e;

    for (var i = 0; i < numListeners; i++) {
      listeners[i](event);
    }
  };

  var onWheel = function (e) {
    // In Chrome and in Firefox (at least the new one)
    event.deltaX = e.wheelDeltaX || e.deltaX * -1;
    event.deltaY = e.wheelDeltaY || e.deltaY * -1;

    // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
    // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
    if (isFirefox && e.deltaMode == 1) {
      event.deltaX *= firefoxMult;
      event.deltaY *= firefoxMult;
    }

    event.deltaX *= mouseMult;
    event.deltaY *= mouseMult;

    notify(e);
  };

  var onMouseWheel = function (e) {
    // In Safari, IE and in Chrome if 'wheel' isn't defined
    event.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
    event.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;

    notify(e);
  };

  var onTouchStart = function (e) {
    var t = e.targetTouches ? e.targetTouches[0] : e;
    touchStartX = t.pageX;
    touchStartY = t.pageY;
  };

  var onTouchMove = function (e) {
    // e.preventDefault(); // < This needs to be managed externally
    var t = e.targetTouches ? e.targetTouches[0] : e;

    event.deltaX = (t.pageX - touchStartX) * touchMult;
    event.deltaY = (t.pageY - touchStartY) * touchMult;

    touchStartX = t.pageX;
    touchStartY = t.pageY;

    notify(e);
  };

  var onKeyDown = function (e) {
    // 37 left arrow, 38 up arrow, 39 right arrow, 40 down arrow
    event.deltaX = event.deltaY = 0;
    switch (e.keyCode) {
      case 37:
        event.deltaX = -keyStep;
        break;
      case 39:
        event.deltaX = keyStep;
        break;
      case 38:
        event.deltaY = keyStep;
        break;
      case 40:
        event.deltaY = -keyStep;
        break;
    }

    notify(e);
  };

  var initListeners = function () {
    if (hasWheelEvent) document.addEventListener("wheel", onWheel);
    if (hasMouseWheelEvent)
      document.addEventListener("mousewheel", onMouseWheel);

    if (hasTouch) {
      document.addEventListener("touchstart", onTouchStart);
      document.addEventListener("touchmove", onTouchMove);
    }

    if (hasPointer && hasTouchWin) {
      bodyTouchAction = document.body.style.msTouchAction;
      document.body.style.msTouchAction = "none";
      document.addEventListener("MSPointerDown", onTouchStart, true);
      document.addEventListener("MSPointerMove", onTouchMove, true);
    }

    if (hasKeyDown) document.addEventListener("keydown", onKeyDown);

    initialized = true;
  };

  var destroyListeners = function () {
    if (hasWheelEvent) document.removeEventListener("wheel", onWheel);
    if (hasMouseWheelEvent)
      document.removeEventListener("mousewheel", onMouseWheel);

    if (hasTouch) {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
    }

    if (hasPointer && hasTouchWin) {
      document.body.style.msTouchAction = bodyTouchAction;
      document.removeEventListener("MSPointerDown", onTouchStart, true);
      document.removeEventListener("MSPointerMove", onTouchMove, true);
    }

    if (hasKeyDown) document.removeEventListener("keydown", onKeyDown);

    initialized = false;
  };

  return vs;
})(document);

function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
  return (
    ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) + minAllowed
  );
}

/**
 * Prevent body scroll and overscroll.
 * Tested on mac, iOS chrome / Safari, Android Chrome.
 *
 * Based on: https://benfrain.com/preventing-body-scroll-for-modals-in-ios/
 *           https://stackoverflow.com/a/41601290
 *
 * Use in combination with:
 * html, body {overflow: hidden;}
 *
 * and: -webkit-overflow-scrolling: touch; for the element that should scroll.
 *
 * disableBodyScroll(true, '.i-can-scroll');
 */
var disableBodyScroll = (function () {
  /**
   * Private variables
   */
  var _selector = false,
    _element = false,
    _clientY;

  /**
   * Polyfills for Element.matches and Element.closest
   */
  if (!Element.prototype.matches)
    Element.prototype.matches =
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;

  if (!Element.prototype.closest)
    Element.prototype.closest = function (s) {
      var ancestor = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (ancestor.matches(s)) return ancestor;
        ancestor = ancestor.parentElement;
      } while (ancestor !== null);
      return el;
    };

  /**
   * Prevent default unless within _selector
   *
   * @param  event object event
   * @return void
   */
  var preventBodyScroll = function (event) {
    if (false === _element || !event.target.closest(_selector)) {
      event.preventDefault();
    }
  };

  /**
   * Cache the clientY co-ordinates for
   * comparison
   *
   * @param  event object event
   * @return void
   */
  var captureClientY = function (event) {
    // only respond to a single touch
    if (event.targetTouches.length === 1) {
      _clientY = event.targetTouches[0].clientY;
    }
  };

  /**
   * Detect whether the element is at the top
   * or the bottom of their scroll and prevent
   * the user from scrolling beyond
   *
   * @param  event object event
   * @return void
   */
  var preventOverscroll = function (event) {
    // only respond to a single touch
    if (event.targetTouches.length !== 1) {
      return;
    }

    var clientY = event.targetTouches[0].clientY - _clientY;

    // The element at the top of its scroll,
    // and the user scrolls down
    if (_element.scrollTop === 0 && clientY > 0) {
      event.preventDefault();
    }

    // The element at the bottom of its scroll,
    // and the user scrolls up
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
    if (
      _element.scrollHeight - _element.scrollTop <= _element.clientHeight &&
      clientY < 0
    ) {
      event.preventDefault();
    }
  };

  /**
   * Disable body scroll. Scrolling with the selector is
   * allowed if a selector is porvided.
   *
   * @param  boolean allow
   * @param  string selector Selector to element to change scroll permission
   * @return void
   */
  return function (allow, selector) {
    if (typeof selector !== "undefined") {
      _selector = selector;
      _element = document.querySelector(selector);
    }

    if (true === allow) {
      if (false !== _element) {
        _element.addEventListener("touchstart", captureClientY, {
          passive: false,
        });
        _element.addEventListener("touchmove", preventOverscroll, {
          passive: false,
        });
      }
      $("body, html").css("overflow", "hidden");
      document.body.addEventListener("touchmove", preventBodyScroll, {
        passive: false,
      });
    } else {
      if (false !== _element) {
        _element.removeEventListener("touchstart", captureClientY, {
          passive: false,
        });
        _element.removeEventListener("touchmove", preventOverscroll, {
          passive: false,
        });
      }
      $("body, html").css("overflow", "");
      document.body.removeEventListener("touchmove", preventBodyScroll, {
        passive: false,
      });
    }
  };
})();

!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.Scrollbar = e())
    : (t.Scrollbar = e());
})(this, function () {
  return (function (t) {
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { exports: {}, id: r, loaded: !1 });
      return t[r].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports;
    }
    var n = {};
    return (e.m = t), (e.c = n), (e.p = ""), e(0);
  })([
    function (t, e, n) {
      t.exports = n(1);
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
        return (0, u.default)(t);
      }
      var i = n(2),
        u = r(i),
        a = n(55),
        c = r(a),
        l = n(62),
        f = r(l);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var s =
          "function" == typeof f.default && "symbol" == typeof c.default
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof f.default &&
                  t.constructor === f.default &&
                  t !== f.default.prototype
                  ? "symbol"
                  : typeof t;
              },
        d = n(78),
        h = n(89);
      n(129),
        n(145),
        n(158),
        n(173),
        n(187),
        (e.default = d.SmoothScrollbar),
        (d.SmoothScrollbar.version = "7.4.1"),
        (d.SmoothScrollbar.init = function (t, e) {
          if (!t || 1 !== t.nodeType)
            throw new TypeError(
              "expect element to be DOM Element, but got " +
                ("undefined" == typeof t ? "undefined" : s(t))
            );
          if (h.sbList.has(t)) return h.sbList.get(t);
          t.setAttribute("data-scrollbar", "");
          var n = [].concat(o(t.childNodes)),
            r = document.createElement("div");
          r.innerHTML =
            '\n        <div class="scroll-content"></div>\n        <div class="scrollbar-track scrollbar-track-x">\n            <div class="scrollbar-thumb scrollbar-thumb-x"></div>\n        </div>\n        <div class="scrollbar-track scrollbar-track-y">\n            <div class="scrollbar-thumb scrollbar-thumb-y"></div>\n        </div>\n        <canvas class="overscroll-glow"></canvas>\n    ';
          var i = r.querySelector(".scroll-content");
          return (
            [].concat(o(r.childNodes)).forEach(function (e) {
              return t.appendChild(e);
            }),
            n.forEach(function (t) {
              return i.appendChild(t);
            }),
            new d.SmoothScrollbar(t, e)
          );
        }),
        (d.SmoothScrollbar.initAll = function (t) {
          return []
            .concat(o(document.querySelectorAll(h.selectors)))
            .map(function (e) {
              return d.SmoothScrollbar.init(e, t);
            });
        }),
        (d.SmoothScrollbar.has = function (t) {
          return h.sbList.has(t);
        }),
        (d.SmoothScrollbar.get = function (t) {
          return h.sbList.get(t);
        }),
        (d.SmoothScrollbar.getAll = function () {
          return [].concat(o(h.sbList.values()));
        }),
        (d.SmoothScrollbar.destroy = function (t, e) {
          return (
            d.SmoothScrollbar.has(t) && d.SmoothScrollbar.get(t).destroy(e)
          );
        }),
        (d.SmoothScrollbar.destroyAll = function (t) {
          h.sbList.forEach(function (e) {
            e.destroy(t);
          });
        }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      t.exports = { default: n(3), __esModule: !0 };
    },
    function (t, e, n) {
      n(4), n(48), (t.exports = n(12).Array.from);
    },
    function (t, e, n) {
      "use strict";
      var r = n(5)(!0);
      n(8)(
        String,
        "String",
        function (t) {
          (this._t = String(t)), (this._i = 0);
        },
        function () {
          var t,
            e = this._t,
            n = this._i;
          return n >= e.length
            ? { value: void 0, done: !0 }
            : ((t = r(e, n)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    function (t, e, n) {
      var r = n(6),
        o = n(7);
      t.exports = function (t) {
        return function (e, n) {
          var i,
            u,
            a = String(o(e)),
            c = r(n),
            l = a.length;
          return c < 0 || c >= l
            ? t
              ? ""
              : void 0
            : ((i = a.charCodeAt(c)),
              i < 55296 ||
              i > 56319 ||
              c + 1 === l ||
              (u = a.charCodeAt(c + 1)) < 56320 ||
              u > 57343
                ? t
                  ? a.charAt(c)
                  : i
                : t
                ? a.slice(c, c + 2)
                : ((i - 55296) << 10) + (u - 56320) + 65536);
        };
      };
    },
    function (t, e) {
      var n = Math.ceil,
        r = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(9),
        o = n(10),
        i = n(25),
        u = n(15),
        a = n(26),
        c = n(27),
        l = n(28),
        f = n(44),
        s = n(46),
        d = n(45)("iterator"),
        h = !([].keys && "next" in [].keys()),
        v = "@@iterator",
        _ = "keys",
        p = "values",
        y = function () {
          return this;
        };
      t.exports = function (t, e, n, b, g, m, x) {
        l(n, e, b);
        var S,
          E,
          M,
          O = function (t) {
            if (!h && t in j) return j[t];
            switch (t) {
              case _:
                return function () {
                  return new n(this, t);
                };
              case p:
                return function () {
                  return new n(this, t);
                };
            }
            return function () {
              return new n(this, t);
            };
          },
          w = e + " Iterator",
          P = g == p,
          k = !1,
          j = t.prototype,
          T = j[d] || j[v] || (g && j[g]),
          A = T || O(g),
          R = g ? (P ? O("entries") : A) : void 0,
          L = "Array" == e ? j.entries || T : T;
        if (
          (L &&
            ((M = s(L.call(new t()))),
            M !== Object.prototype &&
              (f(M, w, !0), r || a(M, d) || u(M, d, y))),
          P &&
            T &&
            T.name !== p &&
            ((k = !0),
            (A = function () {
              return T.call(this);
            })),
          (r && !x) || (!h && !k && j[d]) || u(j, d, A),
          (c[e] = A),
          (c[w] = y),
          g)
        )
          if (
            ((S = { values: P ? A : O(p), keys: m ? A : O(_), entries: R }), x)
          )
            for (E in S) E in j || i(j, E, S[E]);
          else o(o.P + o.F * (h || k), e, S);
        return S;
      };
    },
    function (t, e) {
      t.exports = !0;
    },
    function (t, e, n) {
      var r = n(11),
        o = n(12),
        i = n(13),
        u = n(15),
        a = "prototype",
        c = function (t, e, n) {
          var l,
            f,
            s,
            d = t & c.F,
            h = t & c.G,
            v = t & c.S,
            _ = t & c.P,
            p = t & c.B,
            y = t & c.W,
            b = h ? o : o[e] || (o[e] = {}),
            g = b[a],
            m = h ? r : v ? r[e] : (r[e] || {})[a];
          h && (n = e);
          for (l in n)
            (f = !d && m && void 0 !== m[l]),
              (f && l in b) ||
                ((s = f ? m[l] : n[l]),
                (b[l] =
                  h && "function" != typeof m[l]
                    ? n[l]
                    : p && f
                    ? i(s, r)
                    : y && m[l] == s
                    ? (function (t) {
                        var e = function (e, n, r) {
                          if (this instanceof t) {
                            switch (arguments.length) {
                              case 0:
                                return new t();
                              case 1:
                                return new t(e);
                              case 2:
                                return new t(e, n);
                            }
                            return new t(e, n, r);
                          }
                          return t.apply(this, arguments);
                        };
                        return (e[a] = t[a]), e;
                      })(s)
                    : _ && "function" == typeof s
                    ? i(Function.call, s)
                    : s),
                _ &&
                  (((b.virtual || (b.virtual = {}))[l] = s),
                  t & c.R && g && !g[l] && u(g, l, s)));
        };
      (c.F = 1),
        (c.G = 2),
        (c.S = 4),
        (c.P = 8),
        (c.B = 16),
        (c.W = 32),
        (c.U = 64),
        (c.R = 128),
        (t.exports = c);
    },
    function (t, e) {
      var n = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = n);
    },
    function (t, e) {
      var n = (t.exports = { version: "2.4.0" });
      "number" == typeof __e && (__e = n);
    },
    function (t, e, n) {
      var r = n(14);
      t.exports = function (t, e, n) {
        if ((r(t), void 0 === e)) return t;
        switch (n) {
          case 1:
            return function (n) {
              return t.call(e, n);
            };
          case 2:
            return function (n, r) {
              return t.call(e, n, r);
            };
          case 3:
            return function (n, r, o) {
              return t.call(e, n, r, o);
            };
        }
        return function () {
          return t.apply(e, arguments);
        };
      };
    },
    function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    },
    function (t, e, n) {
      var r = n(16),
        o = n(24);
      t.exports = n(20)
        ? function (t, e, n) {
            return r.f(t, e, o(1, n));
          }
        : function (t, e, n) {
            return (t[e] = n), t;
          };
    },
    function (t, e, n) {
      var r = n(17),
        o = n(19),
        i = n(23),
        u = Object.defineProperty;
      e.f = n(20)
        ? Object.defineProperty
        : function (t, e, n) {
            if ((r(t), (e = i(e, !0)), r(n), o))
              try {
                return u(t, e, n);
              } catch (t) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t;
          };
    },
    function (t, e, n) {
      var r = n(18);
      t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function (t, e, n) {
      t.exports =
        !n(20) &&
        !n(21)(function () {
          return (
            7 !=
            Object.defineProperty(n(22)("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (t, e, n) {
      t.exports = !n(21)(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, e, n) {
      var r = n(18),
        o = n(11).document,
        i = r(o) && r(o.createElement);
      t.exports = function (t) {
        return i ? o.createElement(t) : {};
      };
    },
    function (t, e, n) {
      var r = n(18);
      t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
          return o;
        if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t))))
          return o;
        if (!e && "function" == typeof (n = t.toString) && !r((o = n.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    function (t, e, n) {
      t.exports = n(15);
    },
    function (t, e) {
      var n = {}.hasOwnProperty;
      t.exports = function (t, e) {
        return n.call(t, e);
      };
    },
    function (t, e) {
      t.exports = {};
    },
    function (t, e, n) {
      "use strict";
      var r = n(29),
        o = n(24),
        i = n(44),
        u = {};
      n(15)(u, n(45)("iterator"), function () {
        return this;
      }),
        (t.exports = function (t, e, n) {
          (t.prototype = r(u, { next: o(1, n) })), i(t, e + " Iterator");
        });
    },
    function (t, e, n) {
      var r = n(17),
        o = n(30),
        i = n(42),
        u = n(39)("IE_PROTO"),
        a = function () {},
        c = "prototype",
        l = function () {
          var t,
            e = n(22)("iframe"),
            r = i.length,
            o = "<",
            u = ">";
          for (
            e.style.display = "none",
              n(43).appendChild(e),
              e.src = "javascript:",
              t = e.contentWindow.document,
              t.open(),
              t.write(
                o + "script" + u + "document.F=Object" + o + "/script" + u
              ),
              t.close(),
              l = t.F;
            r--;

          )
            delete l[c][i[r]];
          return l();
        };
      t.exports =
        Object.create ||
        function (t, e) {
          var n;
          return (
            null !== t
              ? ((a[c] = r(t)), (n = new a()), (a[c] = null), (n[u] = t))
              : (n = l()),
            void 0 === e ? n : o(n, e)
          );
        };
    },
    function (t, e, n) {
      var r = n(16),
        o = n(17),
        i = n(31);
      t.exports = n(20)
        ? Object.defineProperties
        : function (t, e) {
            o(t);
            for (var n, u = i(e), a = u.length, c = 0; a > c; )
              r.f(t, (n = u[c++]), e[n]);
            return t;
          };
    },
    function (t, e, n) {
      var r = n(32),
        o = n(42);
      t.exports =
        Object.keys ||
        function (t) {
          return r(t, o);
        };
    },
    function (t, e, n) {
      var r = n(26),
        o = n(33),
        i = n(36)(!1),
        u = n(39)("IE_PROTO");
      t.exports = function (t, e) {
        var n,
          a = o(t),
          c = 0,
          l = [];
        for (n in a) n != u && r(a, n) && l.push(n);
        for (; e.length > c; ) r(a, (n = e[c++])) && (~i(l, n) || l.push(n));
        return l;
      };
    },
    function (t, e, n) {
      var r = n(34),
        o = n(7);
      t.exports = function (t) {
        return r(o(t));
      };
    },
    function (t, e, n) {
      var r = n(35);
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (t) {
            return "String" == r(t) ? t.split("") : Object(t);
          };
    },
    function (t, e) {
      var n = {}.toString;
      t.exports = function (t) {
        return n.call(t).slice(8, -1);
      };
    },
    function (t, e, n) {
      var r = n(33),
        o = n(37),
        i = n(38);
      t.exports = function (t) {
        return function (e, n, u) {
          var a,
            c = r(e),
            l = o(c.length),
            f = i(u, l);
          if (t && n != n) {
            for (; l > f; ) if (((a = c[f++]), a != a)) return !0;
          } else
            for (; l > f; f++)
              if ((t || f in c) && c[f] === n) return t || f || 0;
          return !t && -1;
        };
      };
    },
    function (t, e, n) {
      var r = n(6),
        o = Math.min;
      t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    },
    function (t, e, n) {
      var r = n(6),
        o = Math.max,
        i = Math.min;
      t.exports = function (t, e) {
        return (t = r(t)), t < 0 ? o(t + e, 0) : i(t, e);
      };
    },
    function (t, e, n) {
      var r = n(40)("keys"),
        o = n(41);
      t.exports = function (t) {
        return r[t] || (r[t] = o(t));
      };
    },
    function (t, e, n) {
      var r = n(11),
        o = "__core-js_shared__",
        i = r[o] || (r[o] = {});
      t.exports = function (t) {
        return i[t] || (i[t] = {});
      };
    },
    function (t, e) {
      var n = 0,
        r = Math.random();
      t.exports = function (t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++n + r).toString(36)
        );
      };
    },
    function (t, e) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
        ","
      );
    },
    function (t, e, n) {
      t.exports = n(11).document && document.documentElement;
    },
    function (t, e, n) {
      var r = n(16).f,
        o = n(26),
        i = n(45)("toStringTag");
      t.exports = function (t, e, n) {
        t &&
          !o((t = n ? t : t.prototype), i) &&
          r(t, i, { configurable: !0, value: e });
      };
    },
    function (t, e, n) {
      var r = n(40)("wks"),
        o = n(41),
        i = n(11).Symbol,
        u = "function" == typeof i,
        a = (t.exports = function (t) {
          return r[t] || (r[t] = (u && i[t]) || (u ? i : o)("Symbol." + t));
        });
      a.store = r;
    },
    function (t, e, n) {
      var r = n(26),
        o = n(47),
        i = n(39)("IE_PROTO"),
        u = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function (t) {
          return (
            (t = o(t)),
            r(t, i)
              ? t[i]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? u
              : null
          );
        };
    },
    function (t, e, n) {
      var r = n(7);
      t.exports = function (t) {
        return Object(r(t));
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(13),
        o = n(10),
        i = n(47),
        u = n(49),
        a = n(50),
        c = n(37),
        l = n(51),
        f = n(52);
      o(
        o.S +
          o.F *
            !n(54)(function (t) {
              Array.from(t);
            }),
        "Array",
        {
          from: function (t) {
            var e,
              n,
              o,
              s,
              d = i(t),
              h = "function" == typeof this ? this : Array,
              v = arguments.length,
              _ = v > 1 ? arguments[1] : void 0,
              p = void 0 !== _,
              y = 0,
              b = f(d);
            if (
              (p && (_ = r(_, v > 2 ? arguments[2] : void 0, 2)),
              void 0 == b || (h == Array && a(b)))
            )
              for (e = c(d.length), n = new h(e); e > y; y++)
                l(n, y, p ? _(d[y], y) : d[y]);
            else
              for (s = b.call(d), n = new h(); !(o = s.next()).done; y++)
                l(n, y, p ? u(s, _, [o.value, y], !0) : o.value);
            return (n.length = y), n;
          },
        }
      );
    },
    function (t, e, n) {
      var r = n(17);
      t.exports = function (t, e, n, o) {
        try {
          return o ? e(r(n)[0], n[1]) : e(n);
        } catch (e) {
          var i = t.return;
          throw (void 0 !== i && r(i.call(t)), e);
        }
      };
    },
    function (t, e, n) {
      var r = n(27),
        o = n(45)("iterator"),
        i = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (r.Array === t || i[o] === t);
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(16),
        o = n(24);
      t.exports = function (t, e, n) {
        e in t ? r.f(t, e, o(0, n)) : (t[e] = n);
      };
    },
    function (t, e, n) {
      var r = n(53),
        o = n(45)("iterator"),
        i = n(27);
      t.exports = n(12).getIteratorMethod = function (t) {
        if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)];
      };
    },
    function (t, e, n) {
      var r = n(35),
        o = n(45)("toStringTag"),
        i =
          "Arguments" ==
          r(
            (function () {
              return arguments;
            })()
          ),
        u = function (t, e) {
          try {
            return t[e];
          } catch (t) {}
        };
      t.exports = function (t) {
        var e, n, a;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" == typeof (n = u((e = Object(t)), o))
          ? n
          : i
          ? r(e)
          : "Object" == (a = r(e)) && "function" == typeof e.callee
          ? "Arguments"
          : a;
      };
    },
    function (t, e, n) {
      var r = n(45)("iterator"),
        o = !1;
      try {
        var i = [7][r]();
        (i.return = function () {
          o = !0;
        }),
          Array.from(i, function () {
            throw 2;
          });
      } catch (t) {}
      t.exports = function (t, e) {
        if (!e && !o) return !1;
        var n = !1;
        try {
          var i = [7],
            u = i[r]();
          (u.next = function () {
            return { done: (n = !0) };
          }),
            (i[r] = function () {
              return u;
            }),
            t(i);
        } catch (t) {}
        return n;
      };
    },
    function (t, e, n) {
      t.exports = { default: n(56), __esModule: !0 };
    },
    function (t, e, n) {
      n(4), n(57), (t.exports = n(61).f("iterator"));
    },
    function (t, e, n) {
      n(58);
      for (
        var r = n(11),
          o = n(15),
          i = n(27),
          u = n(45)("toStringTag"),
          a = [
            "NodeList",
            "DOMTokenList",
            "MediaList",
            "StyleSheetList",
            "CSSRuleList",
          ],
          c = 0;
        c < 5;
        c++
      ) {
        var l = a[c],
          f = r[l],
          s = f && f.prototype;
        s && !s[u] && o(s, u, l), (i[l] = i.Array);
      }
    },
    function (t, e, n) {
      "use strict";
      var r = n(59),
        o = n(60),
        i = n(27),
        u = n(33);
      (t.exports = n(8)(
        Array,
        "Array",
        function (t, e) {
          (this._t = u(t)), (this._i = 0), (this._k = e);
        },
        function () {
          var t = this._t,
            e = this._k,
            n = this._i++;
          return !t || n >= t.length
            ? ((this._t = void 0), o(1))
            : "keys" == e
            ? o(0, n)
            : "values" == e
            ? o(0, t[n])
            : o(0, [n, t[n]]);
        },
        "values"
      )),
        (i.Arguments = i.Array),
        r("keys"),
        r("values"),
        r("entries");
    },
    function (t, e) {
      t.exports = function () {};
    },
    function (t, e) {
      t.exports = function (t, e) {
        return { value: e, done: !!t };
      };
    },
    function (t, e, n) {
      e.f = n(45);
    },
    function (t, e, n) {
      t.exports = { default: n(63), __esModule: !0 };
    },
    function (t, e, n) {
      n(64), n(75), n(76), n(77), (t.exports = n(12).Symbol);
    },
    function (t, e, n) {
      "use strict";
      var r = n(11),
        o = n(26),
        i = n(20),
        u = n(10),
        a = n(25),
        c = n(65).KEY,
        l = n(21),
        f = n(40),
        s = n(44),
        d = n(41),
        h = n(45),
        v = n(61),
        _ = n(66),
        p = n(67),
        y = n(68),
        b = n(71),
        g = n(17),
        m = n(33),
        x = n(23),
        S = n(24),
        E = n(29),
        M = n(72),
        O = n(74),
        w = n(16),
        P = n(31),
        k = O.f,
        j = w.f,
        T = M.f,
        A = r.Symbol,
        R = r.JSON,
        L = R && R.stringify,
        I = "prototype",
        D = h("_hidden"),
        C = h("toPrimitive"),
        N = {}.propertyIsEnumerable,
        F = f("symbol-registry"),
        H = f("symbols"),
        z = f("op-symbols"),
        B = Object[I],
        G = "function" == typeof A,
        W = r.QObject,
        V = !W || !W[I] || !W[I].findChild,
        U =
          i &&
          l(function () {
            return (
              7 !=
              E(
                j({}, "a", {
                  get: function () {
                    return j(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function (t, e, n) {
                var r = k(B, e);
                r && delete B[e], j(t, e, n), r && t !== B && j(B, e, r);
              }
            : j,
        X = function (t) {
          var e = (H[t] = E(A[I]));
          return (e._k = t), e;
        },
        q =
          G && "symbol" == typeof A.iterator
            ? function (t) {
                return "symbol" == typeof t;
              }
            : function (t) {
                return t instanceof A;
              },
        K = function (t, e, n) {
          return (
            t === B && K(z, e, n),
            g(t),
            (e = x(e, !0)),
            g(n),
            o(H, e)
              ? (n.enumerable
                  ? (o(t, D) && t[D][e] && (t[D][e] = !1),
                    (n = E(n, { enumerable: S(0, !1) })))
                  : (o(t, D) || j(t, D, S(1, {})), (t[D][e] = !0)),
                U(t, e, n))
              : j(t, e, n)
          );
        },
        J = function (t, e) {
          g(t);
          for (var n, r = y((e = m(e))), o = 0, i = r.length; i > o; )
            K(t, (n = r[o++]), e[n]);
          return t;
        },
        Y = function (t, e) {
          return void 0 === e ? E(t) : J(E(t), e);
        },
        Q = function (t) {
          var e = N.call(this, (t = x(t, !0)));
          return (
            !(this === B && o(H, t) && !o(z, t)) &&
            (!(e || !o(this, t) || !o(H, t) || (o(this, D) && this[D][t])) || e)
          );
        },
        Z = function (t, e) {
          if (((t = m(t)), (e = x(e, !0)), t !== B || !o(H, e) || o(z, e))) {
            var n = k(t, e);
            return (
              !n || !o(H, e) || (o(t, D) && t[D][e]) || (n.enumerable = !0), n
            );
          }
        },
        $ = function (t) {
          for (var e, n = T(m(t)), r = [], i = 0; n.length > i; )
            o(H, (e = n[i++])) || e == D || e == c || r.push(e);
          return r;
        },
        tt = function (t) {
          for (
            var e, n = t === B, r = T(n ? z : m(t)), i = [], u = 0;
            r.length > u;

          )
            !o(H, (e = r[u++])) || (n && !o(B, e)) || i.push(H[e]);
          return i;
        };
      G ||
        ((A = function () {
          if (this instanceof A)
            throw TypeError("Symbol is not a constructor!");
          var t = d(arguments.length > 0 ? arguments[0] : void 0),
            e = function (n) {
              this === B && e.call(z, n),
                o(this, D) && o(this[D], t) && (this[D][t] = !1),
                U(this, t, S(1, n));
            };
          return i && V && U(B, t, { configurable: !0, set: e }), X(t);
        }),
        a(A[I], "toString", function () {
          return this._k;
        }),
        (O.f = Z),
        (w.f = K),
        (n(73).f = M.f = $),
        (n(70).f = Q),
        (n(69).f = tt),
        i && !n(9) && a(B, "propertyIsEnumerable", Q, !0),
        (v.f = function (t) {
          return X(h(t));
        })),
        u(u.G + u.W + u.F * !G, { Symbol: A });
      for (
        var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
            ","
          ),
          nt = 0;
        et.length > nt;

      )
        h(et[nt++]);
      for (var et = P(h.store), nt = 0; et.length > nt; ) _(et[nt++]);
      u(u.S + u.F * !G, "Symbol", {
        for: function (t) {
          return o(F, (t += "")) ? F[t] : (F[t] = A(t));
        },
        keyFor: function (t) {
          if (q(t)) return p(F, t);
          throw TypeError(t + " is not a symbol!");
        },
        useSetter: function () {
          V = !0;
        },
        useSimple: function () {
          V = !1;
        },
      }),
        u(u.S + u.F * !G, "Object", {
          create: Y,
          defineProperty: K,
          defineProperties: J,
          getOwnPropertyDescriptor: Z,
          getOwnPropertyNames: $,
          getOwnPropertySymbols: tt,
        }),
        R &&
          u(
            u.S +
              u.F *
                (!G ||
                  l(function () {
                    var t = A();
                    return (
                      "[null]" != L([t]) ||
                      "{}" != L({ a: t }) ||
                      "{}" != L(Object(t))
                    );
                  })),
            "JSON",
            {
              stringify: function (t) {
                if (void 0 !== t && !q(t)) {
                  for (var e, n, r = [t], o = 1; arguments.length > o; )
                    r.push(arguments[o++]);
                  return (
                    (e = r[1]),
                    "function" == typeof e && (n = e),
                    (!n && b(e)) ||
                      (e = function (t, e) {
                        if ((n && (e = n.call(this, t, e)), !q(e))) return e;
                      }),
                    (r[1] = e),
                    L.apply(R, r)
                  );
                }
              },
            }
          ),
        A[I][C] || n(15)(A[I], C, A[I].valueOf),
        s(A, "Symbol"),
        s(Math, "Math", !0),
        s(r.JSON, "JSON", !0);
    },
    function (t, e, n) {
      var r = n(41)("meta"),
        o = n(18),
        i = n(26),
        u = n(16).f,
        a = 0,
        c =
          Object.isExtensible ||
          function () {
            return !0;
          },
        l = !n(21)(function () {
          return c(Object.preventExtensions({}));
        }),
        f = function (t) {
          u(t, r, { value: { i: "O" + ++a, w: {} } });
        },
        s = function (t, e) {
          if (!o(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!i(t, r)) {
            if (!c(t)) return "F";
            if (!e) return "E";
            f(t);
          }
          return t[r].i;
        },
        d = function (t, e) {
          if (!i(t, r)) {
            if (!c(t)) return !0;
            if (!e) return !1;
            f(t);
          }
          return t[r].w;
        },
        h = function (t) {
          return l && v.NEED && c(t) && !i(t, r) && f(t), t;
        },
        v = (t.exports = {
          KEY: r,
          NEED: !1,
          fastKey: s,
          getWeak: d,
          onFreeze: h,
        });
    },
    function (t, e, n) {
      var r = n(11),
        o = n(12),
        i = n(9),
        u = n(61),
        a = n(16).f;
      t.exports = function (t) {
        var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
        "_" == t.charAt(0) || t in e || a(e, t, { value: u.f(t) });
      };
    },
    function (t, e, n) {
      var r = n(31),
        o = n(33);
      t.exports = function (t, e) {
        for (var n, i = o(t), u = r(i), a = u.length, c = 0; a > c; )
          if (i[(n = u[c++])] === e) return n;
      };
    },
    function (t, e, n) {
      var r = n(31),
        o = n(69),
        i = n(70);
      t.exports = function (t) {
        var e = r(t),
          n = o.f;
        if (n)
          for (var u, a = n(t), c = i.f, l = 0; a.length > l; )
            c.call(t, (u = a[l++])) && e.push(u);
        return e;
      };
    },
    function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    function (t, e) {
      e.f = {}.propertyIsEnumerable;
    },
    function (t, e, n) {
      var r = n(35);
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == r(t);
        };
    },
    function (t, e, n) {
      var r = n(33),
        o = n(73).f,
        i = {}.toString,
        u =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        a = function (t) {
          try {
            return o(t);
          } catch (t) {
            return u.slice();
          }
        };
      t.exports.f = function (t) {
        return u && "[object Window]" == i.call(t) ? a(t) : o(r(t));
      };
    },
    function (t, e, n) {
      var r = n(32),
        o = n(42).concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return r(t, o);
        };
    },
    function (t, e, n) {
      var r = n(70),
        o = n(24),
        i = n(33),
        u = n(23),
        a = n(26),
        c = n(19),
        l = Object.getOwnPropertyDescriptor;
      e.f = n(20)
        ? l
        : function (t, e) {
            if (((t = i(t)), (e = u(e, !0)), c))
              try {
                return l(t, e);
              } catch (t) {}
            if (a(t, e)) return o(!r.f.call(t, e), t[e]);
          };
    },
    function (t, e) {},
    function (t, e, n) {
      n(66)("asyncIterator");
    },
    function (t, e, n) {
      n(66)("observable");
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var i = n(79),
        u = r(i),
        a = n(82),
        c = r(a),
        l = n(86),
        f = r(l);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.SmoothScrollbar = void 0);
      var s = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                (0, f.default)(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        d = n(89),
        h = n(112);
      e.SmoothScrollbar = (function () {
        function t(e) {
          var n = this,
            r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          o(this, t), e.setAttribute("tabindex", "1");
          var i = (0, h.findChild)(e, "scroll-content"),
            a = (0, h.findChild)(e, "overscroll-glow"),
            l = (0, h.findChild)(e, "scrollbar-track-x"),
            f = (0, h.findChild)(e, "scrollbar-track-y");
          (0, h.setStyle)(e, { overflow: "hidden", outline: "none" }),
            (0, h.setStyle)(a, { display: "none", "pointer-events": "none" }),
            this.__readonly(
              "targets",
              (0, c.default)({
                container: e,
                content: i,
                canvas: { elem: a, context: a.getContext("2d") },
                xAxis: (0, c.default)({
                  track: l,
                  thumb: (0, h.findChild)(l, "scrollbar-thumb-x"),
                }),
                yAxis: (0, c.default)({
                  track: f,
                  thumb: (0, h.findChild)(f, "scrollbar-thumb-y"),
                }),
              })
            )
              .__readonly("offset", { x: 0, y: 0 })
              .__readonly("thumbOffset", { x: 0, y: 0 })
              .__readonly("limit", { x: 1 / 0, y: 1 / 0 })
              .__readonly("movement", { x: 0, y: 0 })
              .__readonly("movementLocked", { x: !1, y: !1 })
              .__readonly("overscrollRendered", { x: 0, y: 0 })
              .__readonly("overscrollBack", !1)
              .__readonly("thumbSize", { x: 0, y: 0, realX: 0, realY: 0 })
              .__readonly("bounding", { top: 0, right: 0, bottom: 0, left: 0 })
              .__readonly("children", [])
              .__readonly("parents", [])
              .__readonly("size", this.getSize())
              .__readonly("isNestedScrollbar", !1),
            (0, u.default)(this, {
              __hideTrackThrottle: {
                value: (0, h.debounce)(this.hideTrack.bind(this), 1e3, !1),
              },
              __updateThrottle: {
                value: (0, h.debounce)(this.update.bind(this)),
              },
              __touchRecord: { value: new h.TouchRecord() },
              __listeners: { value: [] },
              __handlers: { value: [] },
              __children: { value: [] },
              __timerID: { value: {} },
            }),
            this.__initOptions(r),
            this.__initScrollbar();
          var s = e.scrollLeft,
            v = e.scrollTop;
          if (
            ((e.scrollLeft = e.scrollTop = 0),
            this.setPosition(s, v, !0),
            d.sbList.set(e, this),
            "function" == typeof d.GLOBAL_ENV.MutationObserver)
          ) {
            var _ = new d.GLOBAL_ENV.MutationObserver(function () {
              n.update(!0);
            });
            _.observe(i, { childList: !0 }),
              Object.defineProperty(this, "__observer", { value: _ });
          }
        }
        return (
          s(t, [
            {
              key: "MAX_OVERSCROLL",
              get: function () {
                var t = this.options,
                  e = this.size;
                switch (t.overscrollEffect) {
                  case "bounce":
                    var n = Math.floor(
                        Math.sqrt(
                          Math.pow(e.container.width, 2) +
                            Math.pow(e.container.height, 2)
                        )
                      ),
                      r = this.__isMovementLocked() ? 2 : 10;
                    return d.GLOBAL_ENV.TOUCH_SUPPORTED
                      ? (0, h.pickInRange)(n / r, 100, 1e3)
                      : (0, h.pickInRange)(n / 10, 25, 50);
                  case "glow":
                    return 150;
                  default:
                    return 0;
                }
              },
            },
            {
              key: "scrollTop",
              get: function () {
                return this.offset.y;
              },
            },
            {
              key: "scrollLeft",
              get: function () {
                return this.offset.x;
              },
            },
          ]),
          t
        );
      })();
    },
    function (t, e, n) {
      t.exports = { default: n(80), __esModule: !0 };
    },
    function (t, e, n) {
      n(81);
      var r = n(12).Object;
      t.exports = function (t, e) {
        return r.defineProperties(t, e);
      };
    },
    function (t, e, n) {
      var r = n(10);
      r(r.S + r.F * !n(20), "Object", { defineProperties: n(30) });
    },
    function (t, e, n) {
      t.exports = { default: n(83), __esModule: !0 };
    },
    function (t, e, n) {
      n(84), (t.exports = n(12).Object.freeze);
    },
    function (t, e, n) {
      var r = n(18),
        o = n(65).onFreeze;
      n(85)("freeze", function (t) {
        return function (e) {
          return t && r(e) ? t(o(e)) : e;
        };
      });
    },
    function (t, e, n) {
      var r = n(10),
        o = n(12),
        i = n(21);
      t.exports = function (t, e) {
        var n = (o.Object || {})[t] || Object[t],
          u = {};
        (u[t] = e(n)),
          r(
            r.S +
              r.F *
                i(function () {
                  n(1);
                }),
            "Object",
            u
          );
      };
    },
    function (t, e, n) {
      t.exports = { default: n(87), __esModule: !0 };
    },
    function (t, e, n) {
      n(88);
      var r = n(12).Object;
      t.exports = function (t, e, n) {
        return r.defineProperty(t, e, n);
      };
    },
    function (t, e, n) {
      var r = n(10);
      r(r.S + r.F * !n(20), "Object", { defineProperty: n(16).f });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(93);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
    },
    function (t, e, n) {
      t.exports = { default: n(91), __esModule: !0 };
    },
    function (t, e, n) {
      n(92), (t.exports = n(12).Object.keys);
    },
    function (t, e, n) {
      var r = n(47),
        o = n(31);
      n(85)("keys", function () {
        return function (t) {
          return o(r(t));
        };
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(94);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
      var l = n(95);
      (0, a.default)(l).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return l[t];
            },
          });
      });
      var f = n(111);
      (0, a.default)(f).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return f[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = function (t) {
          var e = {},
            n = {};
          return (
            (0, a.default)(t).forEach(function (r) {
              (0, i.default)(e, r, {
                get: function () {
                  if (!n.hasOwnProperty(r)) {
                    var e = t[r];
                    n[r] = e();
                  }
                  return n[r];
                },
              });
            }),
            e
          );
        },
        l = {
          MutationObserver: function () {
            return (
              window.MutationObserver ||
              window.WebKitMutationObserver ||
              window.MozMutationObserver
            );
          },
          TOUCH_SUPPORTED: function () {
            return "ontouchstart" in document;
          },
          EASING_MULTIPLIER: function () {
            return navigator.userAgent.match(/Android/) ? 0.5 : 0.25;
          },
          WHEEL_EVENT: function () {
            return "onwheel" in window ? "wheel" : "mousewheel";
          },
        };
      e.GLOBAL_ENV = c(l);
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(96),
        i = r(o);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var u = new i.default(),
        a = u.set.bind(u),
        c = u.delete.bind(u);
      (u.update = function () {
        u.forEach(function (t) {
          t.__updateTree();
        });
      }),
        (u.delete = function () {
          var t = c.apply(void 0, arguments);
          return u.update(), t;
        }),
        (u.set = function () {
          var t = a.apply(void 0, arguments);
          return u.update(), t;
        }),
        (e.sbList = u);
    },
    function (t, e, n) {
      t.exports = { default: n(97), __esModule: !0 };
    },
    function (t, e, n) {
      n(75), n(4), n(57), n(98), n(108), (t.exports = n(12).Map);
    },
    function (t, e, n) {
      "use strict";
      var r = n(99);
      t.exports = n(104)(
        "Map",
        function (t) {
          return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function (t) {
            var e = r.getEntry(this, t);
            return e && e.v;
          },
          set: function (t, e) {
            return r.def(this, 0 === t ? 0 : t, e);
          },
        },
        r,
        !0
      );
    },
    function (t, e, n) {
      "use strict";
      var r = n(16).f,
        o = n(29),
        i = n(100),
        u = n(13),
        a = n(101),
        c = n(7),
        l = n(102),
        f = n(8),
        s = n(60),
        d = n(103),
        h = n(20),
        v = n(65).fastKey,
        _ = h ? "_s" : "size",
        p = function (t, e) {
          var n,
            r = v(e);
          if ("F" !== r) return t._i[r];
          for (n = t._f; n; n = n.n) if (n.k == e) return n;
        };
      t.exports = {
        getConstructor: function (t, e, n, f) {
          var s = t(function (t, r) {
            a(t, s, e, "_i"),
              (t._i = o(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[_] = 0),
              void 0 != r && l(r, n, t[f], t);
          });
          return (
            i(s.prototype, {
              clear: function () {
                for (var t = this, e = t._i, n = t._f; n; n = n.n)
                  (n.r = !0), n.p && (n.p = n.p.n = void 0), delete e[n.i];
                (t._f = t._l = void 0), (t[_] = 0);
              },
              delete: function (t) {
                var e = this,
                  n = p(e, t);
                if (n) {
                  var r = n.n,
                    o = n.p;
                  delete e._i[n.i],
                    (n.r = !0),
                    o && (o.n = r),
                    r && (r.p = o),
                    e._f == n && (e._f = r),
                    e._l == n && (e._l = o),
                    e[_]--;
                }
                return !!n;
              },
              forEach: function (t) {
                a(this, s, "forEach");
                for (
                  var e,
                    n = u(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (e = e ? e.n : this._f);

                )
                  for (n(e.v, e.k, this); e && e.r; ) e = e.p;
              },
              has: function (t) {
                return !!p(this, t);
              },
            }),
            h &&
              r(s.prototype, "size", {
                get: function () {
                  return c(this[_]);
                },
              }),
            s
          );
        },
        def: function (t, e, n) {
          var r,
            o,
            i = p(t, e);
          return (
            i
              ? (i.v = n)
              : ((t._l = i = {
                  i: (o = v(e, !0)),
                  k: e,
                  v: n,
                  p: (r = t._l),
                  n: void 0,
                  r: !1,
                }),
                t._f || (t._f = i),
                r && (r.n = i),
                t[_]++,
                "F" !== o && (t._i[o] = i)),
            t
          );
        },
        getEntry: p,
        setStrong: function (t, e, n) {
          f(
            t,
            e,
            function (t, e) {
              (this._t = t), (this._k = e), (this._l = void 0);
            },
            function () {
              for (var t = this, e = t._k, n = t._l; n && n.r; ) n = n.p;
              return t._t && (t._l = n = n ? n.n : t._t._f)
                ? "keys" == e
                  ? s(0, n.k)
                  : "values" == e
                  ? s(0, n.v)
                  : s(0, [n.k, n.v])
                : ((t._t = void 0), s(1));
            },
            n ? "entries" : "values",
            !n,
            !0
          ),
            d(e);
        },
      };
    },
    function (t, e, n) {
      var r = n(15);
      t.exports = function (t, e, n) {
        for (var o in e) n && t[o] ? (t[o] = e[o]) : r(t, o, e[o]);
        return t;
      };
    },
    function (t, e) {
      t.exports = function (t, e, n, r) {
        if (!(t instanceof e) || (void 0 !== r && r in t))
          throw TypeError(n + ": incorrect invocation!");
        return t;
      };
    },
    function (t, e, n) {
      var r = n(13),
        o = n(49),
        i = n(50),
        u = n(17),
        a = n(37),
        c = n(52),
        l = {},
        f = {},
        e = (t.exports = function (t, e, n, s, d) {
          var h,
            v,
            _,
            p,
            y = d
              ? function () {
                  return t;
                }
              : c(t),
            b = r(n, s, e ? 2 : 1),
            g = 0;
          if ("function" != typeof y) throw TypeError(t + " is not iterable!");
          if (i(y)) {
            for (h = a(t.length); h > g; g++)
              if (
                ((p = e ? b(u((v = t[g]))[0], v[1]) : b(t[g])),
                p === l || p === f)
              )
                return p;
          } else
            for (_ = y.call(t); !(v = _.next()).done; )
              if (((p = o(_, b, v.value, e)), p === l || p === f)) return p;
        });
      (e.BREAK = l), (e.RETURN = f);
    },
    function (t, e, n) {
      "use strict";
      var r = n(11),
        o = n(12),
        i = n(16),
        u = n(20),
        a = n(45)("species");
      t.exports = function (t) {
        var e = "function" == typeof o[t] ? o[t] : r[t];
        u &&
          e &&
          !e[a] &&
          i.f(e, a, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(11),
        o = n(10),
        i = n(65),
        u = n(21),
        a = n(15),
        c = n(100),
        l = n(102),
        f = n(101),
        s = n(18),
        d = n(44),
        h = n(16).f,
        v = n(105)(0),
        _ = n(20);
      t.exports = function (t, e, n, p, y, b) {
        var g = r[t],
          m = g,
          x = y ? "set" : "add",
          S = m && m.prototype,
          E = {};
        return (
          _ &&
          "function" == typeof m &&
          (b ||
            (S.forEach &&
              !u(function () {
                new m().entries().next();
              })))
            ? ((m = e(function (e, n) {
                f(e, m, t, "_c"),
                  (e._c = new g()),
                  void 0 != n && l(n, y, e[x], e);
              })),
              v(
                "add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(
                  ","
                ),
                function (t) {
                  var e = "add" == t || "set" == t;
                  t in S &&
                    (!b || "clear" != t) &&
                    a(m.prototype, t, function (n, r) {
                      if ((f(this, m, t), !e && b && !s(n)))
                        return "get" == t && void 0;
                      var o = this._c[t](0 === n ? 0 : n, r);
                      return e ? this : o;
                    });
                }
              ),
              "size" in S &&
                h(m.prototype, "size", {
                  get: function () {
                    return this._c.size;
                  },
                }))
            : ((m = p.getConstructor(e, t, y, x)),
              c(m.prototype, n),
              (i.NEED = !0)),
          d(m, t),
          (E[t] = m),
          o(o.G + o.W + o.F, E),
          b || p.setStrong(m, t, y),
          m
        );
      };
    },
    function (t, e, n) {
      var r = n(13),
        o = n(34),
        i = n(47),
        u = n(37),
        a = n(106);
      t.exports = function (t, e) {
        var n = 1 == t,
          c = 2 == t,
          l = 3 == t,
          f = 4 == t,
          s = 6 == t,
          d = 5 == t || s,
          h = e || a;
        return function (e, a, v) {
          for (
            var _,
              p,
              y = i(e),
              b = o(y),
              g = r(a, v, 3),
              m = u(b.length),
              x = 0,
              S = n ? h(e, m) : c ? h(e, 0) : void 0;
            m > x;
            x++
          )
            if ((d || x in b) && ((_ = b[x]), (p = g(_, x, y)), t))
              if (n) S[x] = p;
              else if (p)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return _;
                  case 6:
                    return x;
                  case 2:
                    S.push(_);
                }
              else if (f) return !1;
          return s ? -1 : l || f ? f : S;
        };
      };
    },
    function (t, e, n) {
      var r = n(107);
      t.exports = function (t, e) {
        return new (r(t))(e);
      };
    },
    function (t, e, n) {
      var r = n(18),
        o = n(71),
        i = n(45)("species");
      t.exports = function (t) {
        var e;
        return (
          o(t) &&
            ((e = t.constructor),
            "function" != typeof e ||
              (e !== Array && !o(e.prototype)) ||
              (e = void 0),
            r(e) && ((e = e[i]), null === e && (e = void 0))),
          void 0 === e ? Array : e
        );
      };
    },
    function (t, e, n) {
      var r = n(10);
      r(r.P + r.R, "Map", { toJSON: n(109)("Map") });
    },
    function (t, e, n) {
      var r = n(53),
        o = n(110);
      t.exports = function (t) {
        return function () {
          if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
          return o(this);
        };
      };
    },
    function (t, e, n) {
      var r = n(102);
      t.exports = function (t, e) {
        var n = [];
        return r(t, !1, n.push, n, e), n;
      };
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.selectors = "scrollbar, [scrollbar], [data-scrollbar]";
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(113);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(114);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
      var l = n(115);
      (0, a.default)(l).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return l[t];
            },
          });
      });
      var f = n(116);
      (0, a.default)(f).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return f[t];
            },
          });
      });
      var s = n(117);
      (0, a.default)(s).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return s[t];
            },
          });
      });
      var d = n(118);
      (0, a.default)(d).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return d[t];
            },
          });
      });
      var h = n(119);
      (0, a.default)(h).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return h[t];
            },
          });
      });
      var v = n(120);
      (0, a.default)(v).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return v[t];
            },
          });
      });
      var _ = n(121);
      (0, a.default)(_).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return _[t];
            },
          });
      });
      var p = n(122);
      (0, a.default)(p).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return p[t];
            },
          });
      });
      var y = n(123);
      (0, a.default)(y).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return y[t];
            },
          });
      });
      var b = n(124);
      (0, a.default)(b).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return b[t];
            },
          });
      });
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.buildCurve = function (t, e) {
        if (e <= 0) return [t];
        for (
          var n = [],
            r = Math.round((e / 1e3) * 60) - 1,
            o = t ? Math.pow(1 / Math.abs(t), 1 / r) : 0,
            i = 1;
          i <= r;
          i++
        )
          n.push(t - t * Math.pow(o, i));
        return n.push(t), n;
      };
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = 100;
      e.debounce = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n,
          r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if ("function" == typeof t) {
          var o = void 0;
          return function () {
            for (var n = arguments.length, i = Array(n), u = 0; u < n; u++)
              i[u] = arguments[u];
            !o &&
              r &&
              setTimeout(function () {
                return t.apply(void 0, i);
              }),
              clearTimeout(o),
              (o = setTimeout(function () {
                (o = void 0), t.apply(void 0, i);
              }, e));
          };
        }
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
        return (0, u.default)(t);
      }
      var i = n(2),
        u = r(i);
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.findChild = function (t, e) {
        var n = t.children,
          r = null;
        return (
          n &&
            [].concat(o(n)).some(function (t) {
              if (t.className.match(e)) return (r = t), !0;
            }),
          r
        );
      };
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var n = { STANDARD: 1, OTHERS: -3 },
        r = [1, 28, 500],
        o = function (t) {
          return r[t] || r[0];
        };
      e.getDelta = function (t) {
        if ("deltaX" in t) {
          var e = o(t.deltaMode);
          return {
            x: (t.deltaX / n.STANDARD) * e,
            y: (t.deltaY / n.STANDARD) * e,
          };
        }
        return "wheelDeltaX" in t
          ? { x: t.wheelDeltaX / n.OTHERS, y: t.wheelDeltaY / n.OTHERS }
          : { x: 0, y: t.wheelDelta / n.OTHERS };
      };
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.getPointerData = function (t) {
        return t.touches ? t.touches[t.touches.length - 1] : t;
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getPosition = void 0);
      var r = n(118);
      e.getPosition = function (t) {
        var e = (0, r.getPointerData)(t);
        return { x: e.clientX, y: e.clientY };
      };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getTouchID = void 0);
      var r = n(118);
      e.getTouchID = function (t) {
        var e = (0, r.getPointerData)(t);
        return e.identifier;
      };
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.isOneOf = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e.some(function (e) {
          return t === e;
        });
      };
    },
    function (t, e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      e.pickInRange = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : -(1 / 0),
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 1 / 0;
        return Math.max(e, Math.min(t, n));
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(90),
        i = r(o);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var u = ["webkit", "moz", "ms", "o"],
        a = new RegExp("^-(?!(?:" + u.join("|") + ")-)"),
        c = function (t) {
          var e = {};
          return (
            (0, i.default)(t).forEach(function (n) {
              if (!a.test(n)) return void (e[n] = t[n]);
              var r = t[n];
              (n = n.replace(/^-/, "")),
                (e[n] = r),
                u.forEach(function (t) {
                  e["-" + t + "-" + n] = r;
                });
            }),
            e
          );
        };
      e.setStyle = function (t, e) {
        (e = c(e)),
          (0, i.default)(e).forEach(function (n) {
            var r = n.replace(/^-/, "").replace(/-([a-z])/g, function (t, e) {
              return e.toUpperCase();
            });
            t.style[r] = e[n];
          });
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
        return (0, a.default)(t);
      }
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      var u = n(2),
        a = r(u),
        c = n(86),
        l = r(c),
        f = n(125),
        s = r(f);
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.TouchRecord = void 0);
      var d =
          s.default ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        h = (function () {
          function t(t, e) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                (0, l.default)(t, r.key, r);
            }
          }
          return function (e, n, r) {
            return n && t(e.prototype, n), r && t(e, r), e;
          };
        })(),
        v = n(119),
        _ = (function () {
          function t(e) {
            i(this, t),
              (this.updateTime = Date.now()),
              (this.delta = { x: 0, y: 0 }),
              (this.velocity = { x: 0, y: 0 }),
              (this.lastPosition = (0, v.getPosition)(e));
          }
          return (
            h(t, [
              {
                key: "update",
                value: function (t) {
                  var e = this.velocity,
                    n = this.updateTime,
                    r = this.lastPosition,
                    o = Date.now(),
                    i = (0, v.getPosition)(t),
                    u = { x: -(i.x - r.x), y: -(i.y - r.y) },
                    a = o - n || 16,
                    c = (u.x / a) * 1e3,
                    l = (u.y / a) * 1e3;
                  (e.x = 0.8 * c + 0.2 * e.x),
                    (e.y = 0.8 * l + 0.2 * e.y),
                    (this.delta = u),
                    (this.updateTime = o),
                    (this.lastPosition = i);
                },
              },
            ]),
            t
          );
        })();
      e.TouchRecord = (function () {
        function t() {
          i(this, t),
            (this.touchList = {}),
            (this.lastTouch = null),
            (this.activeTouchID = void 0);
        }
        return (
          h(t, [
            {
              key: "__add",
              value: function (t) {
                if (this.__has(t)) return null;
                var e = new _(t);
                return (this.touchList[t.identifier] = e), e;
              },
            },
            {
              key: "__renew",
              value: function (t) {
                if (!this.__has(t)) return null;
                var e = this.touchList[t.identifier];
                return e.update(t), e;
              },
            },
            {
              key: "__delete",
              value: function (t) {
                return delete this.touchList[t.identifier];
              },
            },
            {
              key: "__has",
              value: function (t) {
                return this.touchList.hasOwnProperty(t.identifier);
              },
            },
            {
              key: "__setActiveID",
              value: function (t) {
                (this.activeTouchID = t[t.length - 1].identifier),
                  (this.lastTouch = this.touchList[this.activeTouchID]);
              },
            },
            {
              key: "__getActiveTracker",
              value: function () {
                var t = this.touchList,
                  e = this.activeTouchID;
                return t[e];
              },
            },
            {
              key: "isActive",
              value: function () {
                return void 0 !== this.activeTouchID;
              },
            },
            {
              key: "getDelta",
              value: function () {
                var t = this.__getActiveTracker();
                return t ? d({}, t.delta) : this.__primitiveValue;
              },
            },
            {
              key: "getVelocity",
              value: function () {
                var t = this.__getActiveTracker();
                return t ? d({}, t.velocity) : this.__primitiveValue;
              },
            },
            {
              key: "getLastPosition",
              value: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  e = this.__getActiveTracker() || this.lastTouch,
                  n = e ? e.lastPosition : this.__primitiveValue;
                return t ? (n.hasOwnProperty(t) ? n[t] : 0) : d({}, n);
              },
            },
            {
              key: "updatedRecently",
              value: function () {
                var t = this.__getActiveTracker();
                return t && Date.now() - t.updateTime < 30;
              },
            },
            {
              key: "track",
              value: function (t) {
                var e = this,
                  n = t.targetTouches;
                return (
                  [].concat(o(n)).forEach(function (t) {
                    e.__add(t);
                  }),
                  this.touchList
                );
              },
            },
            {
              key: "update",
              value: function (t) {
                var e = this,
                  n = t.touches,
                  r = t.changedTouches;
                return (
                  [].concat(o(n)).forEach(function (t) {
                    e.__renew(t);
                  }),
                  this.__setActiveID(r),
                  this.touchList
                );
              },
            },
            {
              key: "release",
              value: function (t) {
                var e = this;
                return (
                  (this.activeTouchID = void 0),
                  [].concat(o(t.changedTouches)).forEach(function (t) {
                    e.__delete(t);
                  }),
                  this.touchList
                );
              },
            },
            {
              key: "__primitiveValue",
              get: function () {
                return { x: 0, y: 0 };
              },
            },
          ]),
          t
        );
      })();
    },
    function (t, e, n) {
      t.exports = { default: n(126), __esModule: !0 };
    },
    function (t, e, n) {
      n(127), (t.exports = n(12).Object.assign);
    },
    function (t, e, n) {
      var r = n(10);
      r(r.S + r.F, "Object", { assign: n(128) });
    },
    function (t, e, n) {
      "use strict";
      var r = n(31),
        o = n(69),
        i = n(70),
        u = n(47),
        a = n(34),
        c = Object.assign;
      t.exports =
        !c ||
        n(21)(function () {
          var t = {},
            e = {},
            n = Symbol(),
            r = "abcdefghijklmnopqrst";
          return (
            (t[n] = 7),
            r.split("").forEach(function (t) {
              e[t] = t;
            }),
            7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
          );
        })
          ? function (t, e) {
              for (
                var n = u(t), c = arguments.length, l = 1, f = o.f, s = i.f;
                c > l;

              )
                for (
                  var d,
                    h = a(arguments[l++]),
                    v = f ? r(h).concat(f(h)) : r(h),
                    _ = v.length,
                    p = 0;
                  _ > p;

                )
                  s.call(h, (d = v[p++])) && (n[d] = h[d]);
              return n;
            }
          : c;
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(130);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(131);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
      var l = n(132);
      (0, a.default)(l).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return l[t];
            },
          });
      });
      var f = n(133);
      (0, a.default)(f).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return f[t];
            },
          });
      });
      var s = n(134);
      (0, a.default)(s).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return s[t];
            },
          });
      });
      var d = n(135);
      (0, a.default)(d).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return d[t];
            },
          });
      });
      var h = n(136);
      (0, a.default)(h).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return h[t];
            },
          });
      });
      var v = n(137);
      (0, a.default)(v).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return v[t];
            },
          });
      });
      var _ = n(138);
      (0, a.default)(_).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return _[t];
            },
          });
      });
      var p = n(139);
      (0, a.default)(p).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return p[t];
            },
          });
      });
      var y = n(140);
      (0, a.default)(y).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return y[t];
            },
          });
      });
      var b = n(141);
      (0, a.default)(b).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return b[t];
            },
          });
      });
      var g = n(142);
      (0, a.default)(g).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return g[t];
            },
          });
      });
      var m = n(143);
      (0, a.default)(m).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return m[t];
            },
          });
      });
      var x = n(144);
      (0, a.default)(x).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return x[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      var r = n(78);
      r.SmoothScrollbar.prototype.clearMovement = r.SmoothScrollbar.prototype.stop = function () {
        (this.movement.x = this.movement.y = 0),
          cancelAnimationFrame(this.__timerID.scrollTo);
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
        return (0, u.default)(t);
      }
      var i = n(2),
        u = r(i),
        a = n(78),
        c = n(112),
        l = n(89);
      a.SmoothScrollbar.prototype.destroy = function (t) {
        var e = this.__listeners,
          n = this.__handlers,
          r = this.__observer,
          i = this.targets,
          u = i.container,
          a = i.content;
        if (
          (n.forEach(function (t) {
            var e = t.evt,
              n = t.elem,
              r = t.fn;
            n.removeEventListener(e, r);
          }),
          (n.length = e.length = 0),
          this.stop(),
          cancelAnimationFrame(this.__timerID.render),
          r && r.disconnect(),
          l.sbList.delete(u),
          !t && u.parentNode)
        ) {
          for (var f = [].concat(o(a.childNodes)); u.firstChild; )
            u.removeChild(u.firstChild);
          f.forEach(function (t) {
            return u.appendChild(t);
          }),
            (0, c.setStyle)(u, { overflow: "" }),
            (u.scrollTop = this.scrollTop),
            (u.scrollLeft = this.scrollLeft);
        }
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(78);
      r.SmoothScrollbar.prototype.getContentElem = function () {
        return this.targets.content;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(78);
      r.SmoothScrollbar.prototype.getSize = function () {
        var t = this.targets.container,
          e = this.targets.content;
        return {
          container: { width: t.clientWidth, height: t.clientHeight },
          content: {
            width: e.offsetWidth - e.clientWidth + e.scrollWidth,
            height: e.offsetHeight - e.clientHeight + e.scrollHeight,
          },
        };
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(78);
      r.SmoothScrollbar.prototype.infiniteScroll = function (t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50;
        if ("function" == typeof t) {
          var n = { x: 0, y: 0 },
            r = !1;
          this.addListener(function (o) {
            var i = o.offset,
              u = o.limit;
            u.y - i.y <= e &&
              i.y > n.y &&
              !r &&
              ((r = !0),
              setTimeout(function () {
                return t(o);
              })),
              u.y - i.y > e && (r = !1),
              (n = i);
          });
        }
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(78);
      r.SmoothScrollbar.prototype.isVisible = function (t) {
        var e = this.bounding,
          n = t.getBoundingClientRect(),
          r = Math.max(e.top, n.top),
          o = Math.max(e.left, n.left),
          i = Math.min(e.right, n.right),
          u = Math.min(e.bottom, n.bottom);
        return r < u && o < i;
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(78);
      (r.SmoothScrollbar.prototype.addListener = function (t) {
        "function" == typeof t && this.__listeners.push(t);
      }),
        (r.SmoothScrollbar.prototype.removeListener = function (t) {
          "function" == typeof t &&
            this.__listeners.some(function (e, n, r) {
              return e === t && r.splice(n, 1);
            });
        });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t, e, n) {
        return (
          e in t
            ? (0, l.default)(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function i(t, e) {
        return (
          !!e.length &&
          e.some(function (e) {
            return t.match(e);
          })
        );
      }
      function u() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : s.REGIESTER,
          e = d[t];
        return function () {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          this.__handlers.forEach(function (n) {
            var o = n.elem,
              u = n.evt,
              a = n.fn,
              c = n.hasRegistered;
            (c && t === s.REGIESTER) ||
              (!c && t === s.UNREGIESTER) ||
              (i(u, r) && (o[e](u, a), (n.hasRegistered = !c)));
          });
        };
      }
      var a,
        c = n(86),
        l = r(c),
        f = n(78),
        s = { REGIESTER: 0, UNREGIESTER: 1 },
        d =
          ((a = {}),
          o(a, s.REGIESTER, "addEventListener"),
          o(a, s.UNREGIESTER, "removeEventListener"),
          a);
      (f.SmoothScrollbar.prototype.registerEvents = u(s.REGIESTER)),
        (f.SmoothScrollbar.prototype.unregisterEvents = u(s.UNREGIESTER));
    },
    function (t, e, n) {
      "use strict";
      var r = n(78);
      r.SmoothScrollbar.prototype.scrollIntoView = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.alignToTop,
          r = void 0 === n || n,
          o = e.onlyScrollIfNeeded,
          i = void 0 !== o && o,
          u = e.offsetTop,
          a = void 0 === u ? 0 : u,
          c = e.offsetLeft,
          l = void 0 === c ? 0 : c,
          f = e.offsetBottom,
          s = void 0 === f ? 0 : f,
          d = this.targets,
          h = this.bounding;
        if (t && d.container.contains(t)) {
          var v = t.getBoundingClientRect();
          (i && this.isVisible(t)) ||
            this.__setMovement(
              v.left - h.left - l,
              r ? v.top - h.top - a : v.bottom - h.bottom - s
            );
        }
      };
    },
    function (t, e, n) {
      "use strict";
      var r = n(112),
        o = n(78);
      o.SmoothScrollbar.prototype.scrollTo = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.offset.x,
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.offset.y,
          n = this,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          i =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          u = this.options,
          a = this.offset,
          c = this.limit,
          l = this.__timerID;
        cancelAnimationFrame(l.scrollTo),
          (i = "function" == typeof i ? i : function () {}),
          u.renderByPixels && ((t = Math.round(t)), (e = Math.round(e)));
        var f = a.x,
          s = a.y,
          d = (0, r.pickInRange)(t, 0, c.x) - f,
          h = (0, r.pickInRange)(e, 0, c.y) - s,
          v = (0, r.buildCurve)(d, o),
          _ = (0, r.buildCurve)(h, o),
          p = v.length,
          y = 0,
          b = function t() {
            n.setPosition(f + v[y], s + _[y]),
              y++,
              y === p
                ? requestAnimationFrame(function () {
                    i(n);
                  })
                : (l.scrollTo = requestAnimationFrame(t));
          };
        b();
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(90),
        i = r(o),
        u = n(78);
      u.SmoothScrollbar.prototype.setOptions = function () {
        var t = this,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, i.default)(e).forEach(function (n) {
          t.options.hasOwnProperty(n) &&
            void 0 !== e[n] &&
            (t.options[n] = e[n]);
        });
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(125),
        i = r(o),
        u =
          i.default ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        a = n(112),
        c = n(78);
      c.SmoothScrollbar.prototype.setPosition = function () {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.offset.x,
          e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.offset.y,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        this.__hideTrackThrottle();
        var r = {},
          o = this.options,
          i = this.offset,
          c = this.limit,
          l = this.targets,
          f = this.__listeners;
        o.renderByPixels && ((t = Math.round(t)), (e = Math.round(e))),
          t !== i.x && this.showTrack("x"),
          e !== i.y && this.showTrack("y"),
          (t = (0, a.pickInRange)(t, 0, c.x)),
          (e = (0, a.pickInRange)(e, 0, c.y)),
          (t === i.x && e === i.y) ||
            ((r.direction = {
              x: t === i.x ? "none" : t > i.x ? "right" : "left",
              y: e === i.y ? "none" : e > i.y ? "down" : "up",
            }),
            this.__readonly("offset", { x: t, y: e }),
            (r.limit = u({}, c)),
            (r.offset = u({}, this.offset)),
            this.__setThumbPosition(),
            (0, a.setStyle)(l.content, {
              "-transform": "translate3d(" + -t + "px, " + -e + "px, 0)",
            }),
            n ||
              f.forEach(function (t) {
                o.syncCallbacks
                  ? t(r)
                  : requestAnimationFrame(function () {
                      t(r);
                    });
              }));
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t, e, n) {
        return (
          e in t
            ? (0, c.default)(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function i() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : f.SHOW,
          e = d[t];
        return function () {
          var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "both",
            r = this.options,
            o = this.movement,
            i = this.targets,
            u = i.container,
            a = i.xAxis,
            c = i.yAxis;
          o.x || o.y
            ? u.classList.add(s.CONTAINER)
            : u.classList.remove(s.CONTAINER),
            (r.alwaysShowTracks && t === f.HIDE) ||
              ((n = n.toLowerCase()),
              "both" === n &&
                (a.track.classList[e](s.TRACK), c.track.classList[e](s.TRACK)),
              "x" === n && a.track.classList[e](s.TRACK),
              "y" === n && c.track.classList[e](s.TRACK));
        };
      }
      var u,
        a = n(86),
        c = r(a),
        l = n(78),
        f = { SHOW: 0, HIDE: 1 },
        s = { TRACK: "show", CONTAINER: "scrolling" },
        d = ((u = {}), o(u, f.SHOW, "add"), o(u, f.HIDE, "remove"), u);
      (l.SmoothScrollbar.prototype.showTrack = i(f.SHOW)),
        (l.SmoothScrollbar.prototype.hideTrack = i(f.HIDE));
    },
    function (t, e, n) {
      "use strict";
      function r() {
        if ("glow" === this.options.overscrollEffect) {
          var t = this.targets,
            e = this.size,
            n = t.canvas,
            r = n.elem,
            o = n.context,
            i = window.devicePixelRatio || 1,
            u = e.container.width * i,
            a = e.container.height * i;
          (u === r.width && a === r.height) ||
            ((r.width = u), (r.height = a), o.scale(i, i));
        }
      }
      function o() {
        var t = this.size,
          e = this.thumbSize,
          n = this.targets,
          r = n.xAxis,
          o = n.yAxis;
        (0, u.setStyle)(r.track, {
          display: t.content.width <= t.container.width ? "none" : "block",
        }),
          (0, u.setStyle)(o.track, {
            display: t.content.height <= t.container.height ? "none" : "block",
          }),
          (0, u.setStyle)(r.thumb, { width: e.x + "px" }),
          (0, u.setStyle)(o.thumb, { height: e.y + "px" });
      }
      function i() {
        var t = this.options;
        this.__updateBounding();
        var e = this.getSize(),
          n = {
            x: Math.max(e.content.width - e.container.width, 0),
            y: Math.max(e.content.height - e.container.height, 0),
          },
          i = {
            realX: (e.container.width / e.content.width) * e.container.width,
            realY: (e.container.height / e.content.height) * e.container.height,
          };
        (i.x = Math.max(i.realX, t.thumbMinSize)),
          (i.y = Math.max(i.realY, t.thumbMinSize)),
          this.__readonly("size", e)
            .__readonly("limit", n)
            .__readonly("thumbSize", i),
          o.call(this),
          r.call(this),
          this.setPosition(),
          this.__setThumbPosition();
      }
      var u = n(112),
        a = n(78);
      a.SmoothScrollbar.prototype.update = function (t) {
        t ? requestAnimationFrame(i.bind(this)) : i.call(this);
      };
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(146);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(147);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
      var l = n(148);
      (0, a.default)(l).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return l[t];
            },
          });
      });
      var f = n(149);
      (0, a.default)(f).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return f[t];
            },
          });
      });
      var s = n(154);
      (0, a.default)(s).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return s[t];
            },
          });
      });
      var d = n(155);
      (0, a.default)(d).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return d[t];
            },
          });
      });
      var h = n(156);
      (0, a.default)(h).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return h[t];
            },
          });
      });
      var v = n(157);
      (0, a.default)(v).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return v[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
        return (0, a.default)(t);
      }
      function i() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = this.limit,
          i = this.options,
          u = this.movement;
        this.__updateThrottle(),
          i.renderByPixels && ((t = Math.round(t)), (e = Math.round(e)));
        var a = u.x + t,
          l = u.y + e;
        0 === r.x && (a = 0), 0 === r.y && (l = 0);
        var f = this.__getDeltaLimit(n);
        (u.x = c.pickInRange.apply(void 0, [a].concat(o(f.x)))),
          (u.y = c.pickInRange.apply(void 0, [l].concat(o(f.y))));
      }
      var u = n(2),
        a = r(u),
        c = n(112),
        l = n(78);
      Object.defineProperty(l.SmoothScrollbar.prototype, "__addMovement", {
        value: i,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r() {
        var t = this,
          e = this.movement,
          n = this.movementLocked;
        a.forEach(function (r) {
          n[r] = e[r] && t.__willOverscroll(r, e[r]);
        });
      }
      function o() {
        var t = this.movementLocked;
        a.forEach(function (e) {
          t[e] = !1;
        });
      }
      function i() {
        var t = this.movementLocked;
        return t.x || t.y;
      }
      var u = n(78),
        a = ["x", "y"];
      Object.defineProperty(u.SmoothScrollbar.prototype, "__autoLockMovement", {
        value: r,
        writable: !0,
        configurable: !0,
      }),
        Object.defineProperty(u.SmoothScrollbar.prototype, "__unlockMovement", {
          value: o,
          writable: !0,
          configurable: !0,
        }),
        Object.defineProperty(
          u.SmoothScrollbar.prototype,
          "__isMovementLocked",
          { value: i, writable: !0, configurable: !0 }
        );
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        if (t) {
          var e = this.options,
            n = this.movement,
            r = this.overscrollRendered,
            o = this.MAX_OVERSCROLL,
            i = (n[t] = (0, h.pickInRange)(n[t], -o, o)),
            u = e.overscrollDamping,
            a = r[t] + (i - r[t]) * u;
          e.renderByPixels && (a |= 0),
            !this.__isMovementLocked() &&
              Math.abs(a - r[t]) < 0.1 &&
              (a -= i / Math.abs(i || 1)),
            Math.abs(a) < Math.abs(r[t]) &&
              this.__readonly("overscrollBack", !0),
            (a * r[t] < 0 || Math.abs(a) <= 1) &&
              ((a = 0), this.__readonly("overscrollBack", !1)),
            (r[t] = a);
        }
      }
      function i(t) {
        var e = this.__touchRecord,
          n = this.overscrollRendered;
        return (
          n.x !== t.x ||
          n.y !== t.y ||
          !(!d.GLOBAL_ENV.TOUCH_SUPPORTED || !e.updatedRecently())
        );
      }
      function u() {
        var t = this,
          e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        if (e.length && this.options.overscrollEffect) {
          var n = this.options,
            r = this.overscrollRendered,
            u = l({}, r);
          if (
            (e.forEach(function (e) {
              return o.call(t, e);
            }),
            i.call(this, u))
          )
            switch (n.overscrollEffect) {
              case "bounce":
                return s.overscrollBounce.call(this, r.x, r.y);
              case "glow":
                return s.overscrollGlow.call(this, r.x, r.y);
              default:
                return;
            }
        }
      }
      var a = n(125),
        c = r(a),
        l =
          c.default ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          },
        f = n(78),
        s = n(150),
        d = n(89),
        h = n(112);
      Object.defineProperty(f.SmoothScrollbar.prototype, "__renderOverscroll", {
        value: u,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(151);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(152);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
      var l = n(153);
      (0, a.default)(l).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return l[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = this.size,
          r = this.offset,
          i = this.targets,
          u = this.thumbOffset,
          a = i.xAxis,
          c = i.yAxis,
          l = i.content;
        if (
          ((0, o.setStyle)(l, {
            "-transform":
              "translate3d(" + -(r.x + t) + "px, " + -(r.y + e) + "px, 0)",
          }),
          t)
        ) {
          var f = n.container.width / (n.container.width + Math.abs(t));
          (0, o.setStyle)(a.thumb, {
            "-transform":
              "translate3d(" + u.x + "px, 0, 0) scale3d(" + f + ", 1, 1)",
            "-transform-origin": t < 0 ? "left" : "right",
          });
        }
        if (e) {
          var s = n.container.height / (n.container.height + Math.abs(e));
          (0, o.setStyle)(c.thumb, {
            "-transform":
              "translate3d(0, " + u.y + "px, 0) scale3d(1, " + s + ", 1)",
            "-transform-origin": e < 0 ? "top" : "bottom",
          });
        }
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.overscrollBounce = r);
      var o = n(112);
    },
    function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = this.size,
          r = this.targets,
          a = this.options,
          c = r.canvas,
          l = c.elem,
          f = c.context;
        return t || e
          ? ((0, u.setStyle)(l, { display: "block" }),
            f.clearRect(0, 0, n.content.width, n.container.height),
            (f.fillStyle = a.overscrollEffectColor),
            o.call(this, t),
            void i.call(this, e))
          : (0, u.setStyle)(l, { display: "none" });
      }
      function o(t) {
        var e = this.size,
          n = this.targets,
          r = this.__touchRecord,
          o = this.MAX_OVERSCROLL,
          i = e.container,
          l = i.width,
          f = i.height,
          s = n.canvas.context;
        s.save(), t > 0 && s.transform(-1, 0, 0, 1, l, 0);
        var d = (0, u.pickInRange)(Math.abs(t) / o, 0, a),
          h = (0, u.pickInRange)(d, 0, c) * l,
          v = Math.abs(t),
          _ = r.getLastPosition("y") || f / 2;
        (s.globalAlpha = d),
          s.beginPath(),
          s.moveTo(0, -h),
          s.quadraticCurveTo(v, _, 0, f + h),
          s.fill(),
          s.closePath(),
          s.restore();
      }
      function i(t) {
        var e = this.size,
          n = this.targets,
          r = this.__touchRecord,
          o = this.MAX_OVERSCROLL,
          i = e.container,
          l = i.width,
          f = i.height,
          s = n.canvas.context;
        s.save(), t > 0 && s.transform(1, 0, 0, -1, 0, f);
        var d = (0, u.pickInRange)(Math.abs(t) / o, 0, a),
          h = (0, u.pickInRange)(d, 0, c) * l,
          v = r.getLastPosition("x") || l / 2,
          _ = Math.abs(t);
        (s.globalAlpha = d),
          s.beginPath(),
          s.moveTo(-h, 0),
          s.quadraticCurveTo(v, _, l + h, 0),
          s.fill(),
          s.closePath(),
          s.restore();
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.overscrollGlow = r);
      var u = n(112),
        a = 0.75,
        c = 0.25;
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        var e = this.options,
          n = this.offset,
          r = this.movement,
          o = this.__touchRecord,
          i = e.damping,
          u = e.renderByPixels,
          a = e.overscrollDamping,
          c = n[t],
          l = r[t],
          f = i;
        if (
          (this.__willOverscroll(t, l) ? (f = a) : o.isActive() && (f = 0.5),
          Math.abs(l) < 1)
        ) {
          var s = c + l;
          return {
            movement: 0,
            position: l > 0 ? Math.ceil(s) : Math.floor(s),
          };
        }
        var d = l * (1 - f);
        return u && (d |= 0), { movement: d, position: c + l - d };
      }
      function o() {
        var t = this.options,
          e = this.offset,
          n = this.limit,
          i = this.movement,
          a = this.overscrollRendered,
          c = this.__timerID;
        if (i.x || i.y || a.x || a.y) {
          var l = r.call(this, "x"),
            f = r.call(this, "y"),
            s = [];
          if (t.overscrollEffect) {
            var d = (0, u.pickInRange)(l.position, 0, n.x),
              h = (0, u.pickInRange)(f.position, 0, n.y);
            (a.x || (d === e.x && i.x)) && s.push("x"),
              (a.y || (h === e.y && i.y)) && s.push("y");
          }
          this.movementLocked.x || (i.x = l.movement),
            this.movementLocked.y || (i.y = f.movement),
            this.setPosition(l.position, f.position),
            this.__renderOverscroll(s);
        }
        c.render = requestAnimationFrame(o.bind(this));
      }
      var i = n(78),
        u = n(112);
      Object.defineProperty(i.SmoothScrollbar.prototype, "__render", {
        value: o,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
        return (0, a.default)(t);
      }
      function i() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = this.options,
          i = this.movement;
        this.__updateThrottle();
        var u = this.__getDeltaLimit(n);
        r.renderByPixels && ((t = Math.round(t)), (e = Math.round(e))),
          (i.x = c.pickInRange.apply(void 0, [t].concat(o(u.x)))),
          (i.y = c.pickInRange.apply(void 0, [e].concat(o(u.y))));
      }
      var u = n(2),
        a = r(u),
        c = n(112),
        l = n(78);
      Object.defineProperty(l.SmoothScrollbar.prototype, "__setMovement", {
        value: i,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = this.options,
          r = this.offset,
          o = this.limit;
        if (!n.continuousScrolling) return !1;
        var u = (0, i.pickInRange)(t + r.x, 0, o.x),
          a = (0, i.pickInRange)(e + r.y, 0, o.y),
          c = !0;
        return (
          (c &= u === r.x),
          (c &= a === r.y),
          (c &= u === o.x || 0 === u || a === o.y || 0 === a)
        );
      }
      var o = n(78),
        i = n(112);
      Object.defineProperty(
        o.SmoothScrollbar.prototype,
        "__shouldPropagateMovement",
        { value: r, writable: !0, configurable: !0 }
      );
    },
    function (t, e, n) {
      "use strict";
      function r() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!t) return !1;
        var n = this.offset,
          r = this.limit,
          o = n[t];
        return (
          (0, i.pickInRange)(e + o, 0, r[t]) === o && (0 === o || o === r[t])
        );
      }
      var o = n(78),
        i = n(112);
      Object.defineProperty(o.SmoothScrollbar.prototype, "__willOverscroll", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(159);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(160);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
      var l = n(161);
      (0, a.default)(l).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return l[t];
            },
          });
      });
      var f = n(168);
      (0, a.default)(f).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return f[t];
            },
          });
      });
      var s = n(169);
      (0, a.default)(s).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return s[t];
            },
          });
      });
      var d = n(170);
      (0, a.default)(d).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return d[t];
            },
          });
      });
      var h = n(171);
      (0, a.default)(h).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return h[t];
            },
          });
      });
      var v = n(172);
      (0, a.default)(v).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return v[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      function r() {
        var t = this,
          e = this.targets,
          n = e.container,
          r = e.content,
          o = !1,
          u = void 0,
          a = void 0;
        Object.defineProperty(this, "__isDrag", {
          get: function () {
            return o;
          },
          enumerable: !1,
        });
        var c = function e(n) {
          var r = n.x,
            o = n.y;
          if (r || o) {
            var i = t.options.speed;
            t.__setMovement(r * i, o * i),
              (u = requestAnimationFrame(function () {
                e({ x: r, y: o });
              }));
          }
        };
        this.__addEvent(n, "dragstart", function (e) {
          t.__eventFromChildScrollbar(e) ||
            ((o = !0),
            (a = e.target.clientHeight),
            (0, i.setStyle)(r, { "pointer-events": "auto" }),
            cancelAnimationFrame(u),
            t.__updateBounding());
        }),
          this.__addEvent(document, "dragover mousemove touchmove", function (
            e
          ) {
            if (o && !t.__eventFromChildScrollbar(e)) {
              cancelAnimationFrame(u), e.preventDefault();
              var n = t.__getPointerTrend(e, a);
              c(n);
            }
          }),
          this.__addEvent(
            document,
            "dragend mouseup touchend blur",
            function () {
              cancelAnimationFrame(u), (o = !1);
            }
          );
      }
      var o = n(78),
        i = n(112);
      Object.defineProperty(o.SmoothScrollbar.prototype, "__dragHandler", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o() {
        var t = this,
          e = this.targets,
          n = function (e) {
            var n = t.size,
              r = t.offset,
              o = t.limit,
              i = t.movement;
            switch (e) {
              case s.SPACE:
                return [0, 200];
              case s.PAGE_UP:
                return [0, -n.container.height + 40];
              case s.PAGE_DOWN:
                return [0, n.container.height - 40];
              case s.END:
                return [0, Math.abs(i.y) + o.y - r.y];
              case s.HOME:
                return [0, -Math.abs(i.y) - r.y];
              case s.LEFT:
                return [-40, 0];
              case s.UP:
                return [0, -40];
              case s.RIGHT:
                return [40, 0];
              case s.DOWN:
                return [0, 40];
              default:
                return null;
            }
          },
          r = e.container;
        this.__addEvent(r, "keydown", function (e) {
          if (document.activeElement === r) {
            var o = t.options,
              i = t.parents,
              u = t.movementLocked,
              a = n(e.keyCode || e.which);
            if (a) {
              var c = l(a, 2),
                f = c[0],
                s = c[1];
              if (t.__shouldPropagateMovement(f, s))
                return r.blur(), i.length && i[0].focus(), t.__updateThrottle();
              e.preventDefault(),
                t.__unlockMovement(),
                f && t.__willOverscroll("x", f) && (u.x = !0),
                s && t.__willOverscroll("y", s) && (u.y = !0);
              var d = o.speed;
              t.__addMovement(f * d, s * d);
            }
          }
        }),
          this.__addEvent(r, "keyup", function () {
            t.__unlockMovement();
          });
      }
      var i = n(162),
        u = r(i),
        a = n(165),
        c = r(a),
        l = (function () {
          function t(t, e) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var u, a = (0, c.default)(t);
                !(r = (u = a.next()).done) &&
                (n.push(u.value), !e || n.length !== e);
                r = !0
              );
            } catch (t) {
              (o = !0), (i = t);
            } finally {
              try {
                !r && a.return && a.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          }
          return function (e, n) {
            if (Array.isArray(e)) return e;
            if ((0, u.default)(Object(e))) return t(e, n);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          };
        })(),
        f = n(78),
        s = {
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
        };
      Object.defineProperty(f.SmoothScrollbar.prototype, "__keyboardHandler", {
        value: o,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      t.exports = { default: n(163), __esModule: !0 };
    },
    function (t, e, n) {
      n(57), n(4), (t.exports = n(164));
    },
    function (t, e, n) {
      var r = n(53),
        o = n(45)("iterator"),
        i = n(27);
      t.exports = n(12).isIterable = function (t) {
        var e = Object(t);
        return void 0 !== e[o] || "@@iterator" in e || i.hasOwnProperty(r(e));
      };
    },
    function (t, e, n) {
      t.exports = { default: n(166), __esModule: !0 };
    },
    function (t, e, n) {
      n(57), n(4), (t.exports = n(167));
    },
    function (t, e, n) {
      var r = n(17),
        o = n(52);
      t.exports = n(12).getIterator = function (t) {
        var e = o(t);
        if ("function" != typeof e) throw TypeError(t + " is not iterable!");
        return r(e.call(t));
      };
    },
    function (t, e, n) {
      "use strict";
      function r() {
        var t = this,
          e = this.targets,
          n = e.container,
          r = e.xAxis,
          o = e.yAxis,
          u = function (e, n) {
            var r = t.size,
              o = t.thumbSize;
            if ("x" === e) {
              var i = r.container.width - (o.x - o.realX);
              return (n / i) * r.content.width;
            }
            if ("y" === e) {
              var u = r.container.height - (o.y - o.realY);
              return (n / u) * r.content.height;
            }
            return 0;
          },
          a = function (t) {
            return (0, i.isOneOf)(t, [r.track, r.thumb])
              ? "x"
              : (0, i.isOneOf)(t, [o.track, o.thumb])
              ? "y"
              : void 0;
          },
          c = void 0,
          l = void 0,
          f = void 0,
          s = void 0,
          d = void 0;
        this.__addEvent(n, "click", function (e) {
          if (!l && (0, i.isOneOf)(e.target, [r.track, o.track])) {
            var n = e.target,
              c = a(n),
              f = n.getBoundingClientRect(),
              s = (0, i.getPosition)(e),
              d = t.offset,
              h = t.thumbSize;
            if ("x" === c) {
              var v = s.x - f.left - h.x / 2;
              t.__setMovement(u(c, v) - d.x, 0);
            } else {
              var _ = s.y - f.top - h.y / 2;
              t.__setMovement(0, u(c, _) - d.y);
            }
          }
        }),
          this.__addEvent(n, "mousedown", function (e) {
            if ((0, i.isOneOf)(e.target, [r.thumb, o.thumb])) {
              c = !0;
              var n = (0, i.getPosition)(e),
                u = e.target.getBoundingClientRect();
              (s = a(e.target)),
                (f = { x: n.x - u.left, y: n.y - u.top }),
                (d = t.targets.container.getBoundingClientRect());
            }
          }),
          this.__addEvent(window, "mousemove", function (e) {
            if (c) {
              e.preventDefault(), (l = !0);
              var n = t.offset,
                r = (0, i.getPosition)(e);
              if ("x" === s) {
                var o = r.x - f.x - d.left;
                t.setPosition(u(s, o), n.y);
              }
              if ("y" === s) {
                var a = r.y - f.y - d.top;
                t.setPosition(n.x, u(s, a));
              }
            }
          }),
          this.__addEvent(window, "mouseup blur", function () {
            c = l = !1;
          });
      }
      var o = n(78),
        i = n(112);
      Object.defineProperty(o.SmoothScrollbar.prototype, "__mouseHandler", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r() {
        this.__addEvent(window, "resize", this.__updateThrottle);
      }
      var o = n(78);
      Object.defineProperty(o.SmoothScrollbar.prototype, "__resizeHandler", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r() {
        var t = this,
          e = !1,
          n = void 0,
          r = this.targets,
          o = r.container,
          u = r.content,
          a = function e(r) {
            var o = r.x,
              i = r.y;
            if (o || i) {
              var u = t.options.speed;
              t.__setMovement(o * u, i * u),
                (n = requestAnimationFrame(function () {
                  e({ x: o, y: i });
                }));
            }
          },
          c = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            (0, i.setStyle)(o, { "-user-select": t });
          };
        this.__addEvent(window, "mousemove", function (r) {
          if (e) {
            cancelAnimationFrame(n);
            var o = t.__getPointerTrend(r);
            a(o);
          }
        }),
          this.__addEvent(u, "selectstart", function (r) {
            return t.__eventFromChildScrollbar(r)
              ? c("none")
              : (cancelAnimationFrame(n), t.__updateBounding(), void (e = !0));
          }),
          this.__addEvent(window, "mouseup blur", function () {
            cancelAnimationFrame(n), c(), (e = !1);
          }),
          this.__addEvent(o, "scroll", function (t) {
            t.preventDefault(), (o.scrollTop = o.scrollLeft = 0);
          });
      }
      var o = n(78),
        i = n(112);
      Object.defineProperty(o.SmoothScrollbar.prototype, "__selectHandler", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o() {
        var t = this,
          e = this.targets,
          n = this.__touchRecord,
          r = e.container;
        this.__addEvent(r, "touchstart", function (e) {
          if (!t.__isDrag) {
            var r = t.__timerID,
              o = t.movement;
            cancelAnimationFrame(r.scrollTo),
              t.__willOverscroll("x") || (o.x = 0),
              t.__willOverscroll("y") || (o.y = 0),
              n.track(e),
              t.__autoLockMovement();
          }
        }),
          this.__addEvent(r, "touchmove", function (e) {
            if (!(t.__isDrag || (s && s !== t))) {
              n.update(e);
              var r = n.getDelta(),
                o = r.x,
                i = r.y;
              if (t.__shouldPropagateMovement(o, i))
                return t.__updateThrottle();
              var u = t.movement,
                a = t.MAX_OVERSCROLL,
                c = t.options;
              if (u.x && t.__willOverscroll("x", o)) {
                var l = 2;
                "bounce" === c.overscrollEffect &&
                  (l += Math.abs((10 * u.x) / a)),
                  Math.abs(u.x) >= a ? (o = 0) : (o /= l);
              }
              if (u.y && t.__willOverscroll("y", i)) {
                var f = 2;
                "bounce" === c.overscrollEffect &&
                  (f += Math.abs((10 * u.y) / a)),
                  Math.abs(u.y) >= a ? (i = 0) : (i /= f);
              }
              t.__autoLockMovement(),
                e.preventDefault(),
                t.__addMovement(o, i, !0),
                (s = t);
            }
          }),
          this.__addEvent(r, "touchcancel touchend", function (e) {
            if (!t.__isDrag) {
              var r = t.options.speed,
                o = n.getVelocity(),
                i = {};
              (0, u.default)(o).forEach(function (t) {
                var e = (0, l.pickInRange)(
                  o[t] * c.GLOBAL_ENV.EASING_MULTIPLIER,
                  -1e3,
                  1e3
                );
                i[t] = Math.abs(e) > f ? e * r : 0;
              }),
                t.__addMovement(i.x, i.y, !0),
                t.__unlockMovement(),
                n.release(e),
                (s = null);
            }
          });
      }
      var i = n(90),
        u = r(i),
        a = n(78),
        c = n(89),
        l = n(112),
        f = 100,
        s = null;
      Object.defineProperty(a.SmoothScrollbar.prototype, "__touchHandler", {
        value: o,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r() {
        var t = this,
          e = this.targets.container,
          n = !1,
          r = (0, i.debounce)(
            function () {
              n = !1;
            },
            30,
            !1
          );
        this.__addEvent(e, u.GLOBAL_ENV.WHEEL_EVENT, function (e) {
          var o = t.options,
            u = (0, i.getDelta)(e),
            a = u.x,
            c = u.y;
          return (
            (a *= o.speed),
            (c *= o.speed),
            t.__shouldPropagateMovement(a, c)
              ? t.__updateThrottle()
              : (e.preventDefault(),
                r(),
                t.overscrollBack && (n = !0),
                n &&
                  (t.__willOverscroll("x", a) && (a = 0),
                  t.__willOverscroll("y", c) && (c = 0)),
                void t.__addMovement(a, c, !0))
          );
        });
      }
      var o = n(78),
        i = n(112),
        u = n(89);
      Object.defineProperty(o.SmoothScrollbar.prototype, "__wheelHandler", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(174);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      var o = n(86),
        i = r(o),
        u = n(90),
        a = r(u);
      Object.defineProperty(e, "__esModule", { value: !0 });
      var c = n(175);
      (0, a.default)(c).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return c[t];
            },
          });
      });
      var l = n(176);
      (0, a.default)(l).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return l[t];
            },
          });
      });
      var f = n(177);
      (0, a.default)(f).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return f[t];
            },
          });
      });
      var s = n(178);
      (0, a.default)(s).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return s[t];
            },
          });
      });
      var d = n(179);
      (0, a.default)(d).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return d[t];
            },
          });
      });
      var h = n(182);
      (0, a.default)(h).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return h[t];
            },
          });
      });
      var v = n(183);
      (0, a.default)(v).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return v[t];
            },
          });
      });
      var _ = n(184);
      (0, a.default)(_).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return _[t];
            },
          });
      });
      var p = n(185);
      (0, a.default)(p).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return p[t];
            },
          });
      });
      var y = n(186);
      (0, a.default)(y).forEach(function (t) {
        "default" !== t &&
          "__esModule" !== t &&
          (0, i.default)(e, t, {
            enumerable: !0,
            get: function () {
              return y[t];
            },
          });
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t, e, n) {
        var r = this;
        if (!t || "function" != typeof t.addEventListener)
          throw new TypeError("expect elem to be a DOM element, but got " + t);
        var o = function (t) {
          for (
            var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), o = 1;
            o < e;
            o++
          )
            r[o - 1] = arguments[o];
          (!t.type.match(/drag/) && t.defaultPrevented) ||
            n.apply(void 0, [t].concat(r));
        };
        e.split(/\s+/g).forEach(function (e) {
          r.__handlers.push({ evt: e, elem: t, fn: o, hasRegistered: !0 }),
            t.addEventListener(e, o);
        });
      }
      var o = n(78);
      Object.defineProperty(o.SmoothScrollbar.prototype, "__addEvent", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r() {
        var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = t.target;
        return this.children.some(function (t) {
          return t.contains(e);
        });
      }
      var o = n(78);
      Object.defineProperty(
        o.SmoothScrollbar.prototype,
        "__eventFromChildScrollbar",
        { value: r, writable: !0, configurable: !0 }
      );
    },
    function (t, e, n) {
      "use strict";
      function r() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = this.options,
          n = this.offset,
          r = this.limit;
        return t && (e.continuousScrolling || e.overscrollEffect)
          ? { x: [-(1 / 0), 1 / 0], y: [-(1 / 0), 1 / 0] }
          : { x: [-n.x, r.x - n.x], y: [-n.y, r.y - n.y] };
      }
      var o = n(78);
      Object.defineProperty(o.SmoothScrollbar.prototype, "__getDeltaLimit", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = this.bounding,
          r = n.top,
          o = n.right,
          u = n.bottom,
          a = n.left,
          c = (0, i.getPosition)(t),
          l = c.x,
          f = c.y,
          s = { x: 0, y: 0 };
        return 0 === l && 0 === f
          ? s
          : (l > o - e ? (s.x = l - o + e) : l < a + e && (s.x = l - a - e),
            f > u - e ? (s.y = f - u + e) : f < r + e && (s.y = f - r - e),
            s);
      }
      var o = n(78),
        i = n(112);
      Object.defineProperty(o.SmoothScrollbar.prototype, "__getPointerTrend", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
        return (0, h.default)(t);
      }
      function i(t) {
        var e = this,
          n = {
            speed: 1,
            damping: 0.1,
            thumbMinSize: 20,
            syncCallbacks: !1,
            renderByPixels: !0,
            alwaysShowTracks: !1,
            continuousScrolling: "auto",
            overscrollEffect: !1,
            overscrollEffectColor: "#87ceeb",
            overscrollDamping: 0.2,
          },
          r = {
            damping: [0, 1],
            speed: [0, 1 / 0],
            thumbMinSize: [0, 1 / 0],
            overscrollEffect: [!1, "bounce", "glow"],
            overscrollDamping: [0, 1],
          },
          i = function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "auto";
            if (n.overscrollEffect !== !1) return !1;
            switch (t) {
              case "auto":
                return e.isNestedScrollbar;
              default:
                return !!t;
            }
          },
          u = {
            set ignoreEvents(t) {
              console.warn(
                "`options.ignoreEvents` parameter is deprecated, use `instance#unregisterEvents()` method instead. https://github.com/idiotWu/smooth-scrollbar/wiki/Instance-Methods#instanceunregisterevents-regex--regex-regex--"
              );
            },
            set friction(t) {
              console.warn(
                "`options.friction=" +
                  t +
                  "` is deprecated, use `options.damping=" +
                  t / 100 +
                  "` instead."
              ),
                (this.damping = t / 100);
            },
            get syncCallbacks() {
              return n.syncCallbacks;
            },
            set syncCallbacks(t) {
              n.syncCallbacks = !!t;
            },
            get renderByPixels() {
              return n.renderByPixels;
            },
            set renderByPixels(t) {
              n.renderByPixels = !!t;
            },
            get alwaysShowTracks() {
              return n.alwaysShowTracks;
            },
            set alwaysShowTracks(t) {
              (t = !!t), (n.alwaysShowTracks = t);
              var r = e.targets.container;
              t
                ? (e.showTrack(), r.classList.add("sticky"))
                : (e.hideTrack(), r.classList.remove("sticky"));
            },
            get continuousScrolling() {
              return i(n.continuousScrolling);
            },
            set continuousScrolling(t) {
              "auto" === t
                ? (n.continuousScrolling = t)
                : (n.continuousScrolling = !!t);
            },
            get overscrollEffect() {
              return n.overscrollEffect;
            },
            set overscrollEffect(t) {
              t &&
                !~r.overscrollEffect.indexOf(t) &&
                (console.warn(
                  "`overscrollEffect` should be one of " +
                    (0, s.default)(r.overscrollEffect) +
                    ", but got " +
                    (0, s.default)(t) +
                    ". It will be set to `false` now."
                ),
                (t = !1)),
                (n.overscrollEffect = t);
            },
            get overscrollEffectColor() {
              return n.overscrollEffectColor;
            },
            set overscrollEffectColor(t) {
              n.overscrollEffectColor = t;
            },
          };
        (0, l.default)(n)
          .filter(function (t) {
            return !u.hasOwnProperty(t);
          })
          .forEach(function (t) {
            (0, a.default)(u, t, {
              enumerable: !0,
              get: function () {
                return n[t];
              },
              set: function (e) {
                if (isNaN(parseFloat(e)))
                  throw new TypeError(
                    "expect `options." +
                      t +
                      "` to be a number, but got " +
                      ("undefined" == typeof e ? "undefined" : b(e))
                  );
                n[t] = g.pickInRange.apply(void 0, [e].concat(o(r[t])));
              },
            });
          }),
          this.__readonly("options", u),
          this.setOptions(t);
      }
      var u = n(86),
        a = r(u),
        c = n(90),
        l = r(c),
        f = n(180),
        s = r(f),
        d = n(2),
        h = r(d),
        v = n(55),
        _ = r(v),
        p = n(62),
        y = r(p),
        b =
          "function" == typeof y.default && "symbol" == typeof _.default
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof y.default &&
                  t.constructor === y.default &&
                  t !== y.default.prototype
                  ? "symbol"
                  : typeof t;
              },
        g = n(112),
        m = n(78);
      Object.defineProperty(m.SmoothScrollbar.prototype, "__initOptions", {
        value: i,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      t.exports = { default: n(181), __esModule: !0 };
    },
    function (t, e, n) {
      var r = n(12),
        o = r.JSON || (r.JSON = { stringify: JSON.stringify });
      t.exports = function (t) {
        return o.stringify.apply(o, arguments);
      };
    },
    function (t, e, n) {
      "use strict";
      function r() {
        this.update(),
          this.__keyboardHandler(),
          this.__resizeHandler(),
          this.__selectHandler(),
          this.__mouseHandler(),
          this.__touchHandler(),
          this.__wheelHandler(),
          this.__dragHandler(),
          this.__render();
      }
      var o = n(78);
      Object.defineProperty(o.SmoothScrollbar.prototype, "__initScrollbar", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t, e) {
        return (0, u.default)(this, t, {
          value: e,
          enumerable: !0,
          configurable: !0,
        });
      }
      var i = n(86),
        u = r(i),
        a = n(78);
      Object.defineProperty(a.SmoothScrollbar.prototype, "__readonly", {
        value: o,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r() {
        var t = this.targets,
          e = this.size,
          n = this.offset,
          r = this.thumbOffset,
          i = this.thumbSize;
        (r.x = (n.x / e.content.width) * (e.container.width - (i.x - i.realX))),
          (r.y =
            (n.y / e.content.height) * (e.container.height - (i.y - i.realY))),
          (0, o.setStyle)(t.xAxis.thumb, {
            "-transform": "translate3d(" + r.x + "px, 0, 0)",
          }),
          (0, o.setStyle)(t.yAxis.thumb, {
            "-transform": "translate3d(0, " + r.y + "px, 0)",
          });
      }
      var o = n(112),
        i = n(78);
      Object.defineProperty(i.SmoothScrollbar.prototype, "__setThumbPosition", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r() {
        var t = this.targets.container,
          e = t.getBoundingClientRect(),
          n = e.top,
          r = e.right,
          o = e.bottom,
          i = e.left,
          u = window,
          a = u.innerHeight,
          c = u.innerWidth;
        this.__readonly("bounding", {
          top: Math.max(n, 0),
          right: Math.min(r, c),
          bottom: Math.min(o, a),
          left: Math.max(i, 0),
        });
      }
      var o = n(78);
      Object.defineProperty(o.SmoothScrollbar.prototype, "__updateBounding", {
        value: r,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
        return (0, a.default)(t);
      }
      function i() {
        var t = this.targets,
          e = t.container,
          n = t.content;
        this.__readonly(
          "children",
          [].concat(o(n.querySelectorAll(l.selectors)))
        ),
          this.__readonly("isNestedScrollbar", !1);
        for (var r = [], i = e; (i = i.parentElement); )
          l.sbList.has(i) &&
            (this.__readonly("isNestedScrollbar", !0), r.push(i));
        this.__readonly("parents", r);
      }
      var u = n(2),
        a = r(u),
        c = n(78),
        l = n(89);
      Object.defineProperty(c.SmoothScrollbar.prototype, "__updateTree", {
        value: i,
        writable: !0,
        configurable: !0,
      });
    },
    function (t, e) {},
  ]);
});

/*! -------------------------------------------------------------------------------------------
JAVASCRIPT main engine!

* @Version:    1.0 - 2015
* @author:     Burocratik (alexandre gomes - @alexrgomes)
* @email:      alex@burocratik.com, hello@burocratik.com
* @website:    http://www.burocratik.com
* @preserve
NOTES:
:: js-no-ajax class on body (nao pode ser no html) > take it off with js as soon I work with ajax
:: js-no-ajax = did refresh
:: body.js-byrefresh= when i start by direct link (refresh) do no show content before loading
:: #loading-page.js-loading-page = i need separate byrefresh of this when I have js off
:: js-loading-page = can be used if I need a global style only when I am loading content
:: mobile = tag html is via js, tag body is via php (can't be on html tag or is deleted), also used for IE<=10
:: _global_allowNavigate = do not allow multiple cliks to load ajax (arrow, keys, click)
:: js-no-transPage = when I want a domain link with no transition ajax animation
:: data-ajaxUrl = url dinamico quando uso ajax (WP with cache), onde so me carrega parte do conteudo
--------------------------------------------------------------------------------------------*/
$(document).ready(function() {
  //** outdatedbrowser.com (the first to be call or in older browsers IE6,7 will have weird js erros )
    outdatedBrowser({
        bgColor: '#f25648',
        color: '#fff',
        lowerThan: 'transform',
        languagePath: ''
    })
    //** MODERNIZR not supporter properties (backgroundcliptext, object-fit, cssclipPath )
    Modernizr.addTest('backgroundcliptext', function() {
        var div = document.createElement('div');
        div.style.cssText = Modernizr._prefixes.join('background-clip:text;');
        return !!div.style.cssText.replace(/\s/g, '').length;
    });

    Modernizr.addTest('object-fit', !!Modernizr.prefixed('objectFit') );

   !function(e){for(var t,n,i,r=[{name:"svg",value:"url(#test)"},{name:"inset",value:"inset(10px 20px 30px 40px)"},{name:"circle",value:"circle(60px at center)"},{name:"ellipse",value:"ellipse(50% 50% at 50% 50%)"},{name:"polygon",value:"polygon(50% 0%, 0% 100%, 100% 100%)"}],p=0;p<r.length;p++)t=r[p].name,n=r[p].value,e.addTest("cssclippath"+t,function(){if("CSS"in window&&"supports"in window.CSS){for(var t=0;t<e._prefixes.length;t++)if(i=e._prefixes[t]+"clip-path",window.CSS.supports(i,n))return!0;return!1}return e.testStyles("#modernizr { "+e._prefixes.join("clip-path:"+n+"; ")+" }",function(t){var n=getComputedStyle(t),i=n.clipPath;if(!i||"none"==i){i=!1;for(var r=0;r<e._domPrefixes.length;r++)if(test=e._domPrefixes[r]+"ClipPath",n[test]&&"none"!==n[test]){i=!0;break}}return e.testProp("clipPath")&&i})})}(Modernizr);
    /////////////////////////
}); //END LOAD DOCUMENT


/********************************************************************************************
     =NAVIGATION =MAIN
*********************************************************************************************/
function mainNavigation() {
    var close = null;
    $_btn_mainNav.on("click", function(event) {
        event.stopImmediatePropagation();
        ($_body.hasClass("open-nav")) ? close = true : close = false;
        mainNav_controll(close);
        $("html,body").toggleClass("open-nav");
        event.stopPropagation();
        event.preventDefault();

        if($_body.hasClass("open-nav")){
            disableBodyScroll(true);
        } else {
            disableBodyScroll(false);
        }

        return false;
    });
    $_mainHeaderSlide.on("clickoutside", function(event) {
        event.stopImmediatePropagation();
        ($_body.hasClass("open-nav")) ? close = true : close = false;
        if(close == false) return false;
        mainNav_controll(close);
        $("html,body").toggleClass("open-nav");
        event.stopPropagation();
        event.preventDefault();

        if($_body.hasClass("open-nav")){
            disableBodyScroll(true);
        } else {
            disableBodyScroll(false);
        }

        return false;
    });

} // end function

function mainNav_controll(close) {
    if ( $_html.hasClass("no-csstransforms3d") ) return; // <IE10
    if (Modernizr.mq('(max-width: 699px)')) return;
    var Yi = 0 ,
        Yf = "258px",
        Oi = 0 ,
        Of = .25,
        show = "block";
    if (close) {
        Yi = "258px";
        Yf = 0;
        Oi = .25;
        Of = 0;
        show = "none";
    }

    $_mainHeaderSlide.velocity({
        translateZ: 0,
        translateY: [Yf, Yi]
    }, {
            duration: 300,
            //easing: [1, 0, 0, 1],
            easing: [.17, .89, .16, .99],
            mobileHA: true
        })

    $_mainHeaderBg.velocity({
        opacity: [Of, Oi]
    }, {
            duration: 350,
            easing: "ease-in-out",
            display: show
        })
} //end

/* *******************************************************************************************
 **                                                                                       **
      =LOADING PAGES, SECTIONS - =transitions between pages, =ajax
 **                                                                                       **
*********************************************************************************************/
//** MAIN LOAD
function loadPages(newContent, pageDirection) {
    var $currentPage = $(".page-main.page-current"),
        $nextContent = $(".page-main.page-next"),
        $prevContent = $(".page-main.page-prev"); // can't be global
    var nextPageAlreadyLoaded = false;

    $("html,body").addClass("js-fixed-all");
    $_transition.show().css("opacity", "1");
    $_body.removeClass("js-no-ajax"); // I am using =ajax

     if(_currentView) {
      _currentView.kill();
      _currentView = null;
    }

    //** CASE 1: I am in a section with multiple loadings, i am sure i have content (by refresh or not)
    // OLD transition between modalities (case 1, but used for normal transition)
    if (pageDirection != "topDown") {
        // Am I going to a page already loaded (note the images preload is always done)
        nextPageAlreadyLoaded = fcheckWhereTo(newContent);
        if (nextPageAlreadyLoaded) {
            transitionPagesAnimOut(pageDirection);
            transitionPagesAnimIn(pageDirection);
            //change html
            $.doTimeout(1700, function() {
                $currentPage.remove();
                if (pageDirection === "next") {
                    $prevContent.remove();
                    $nextContent.removeClass('page-next');
                    $nextContent.addClass('page-current').removeAttr("aria-hidden");
                } else {
                    $nextContent.remove();
                    $prevContent.removeClass('page-prev');
                    $prevContent.addClass('page-current').removeAttr("aria-hidden");
                }
                var $newCurrentPage = $(".page-main.page-current"),
                    $newToPreload = $(".page-current .preload");
                $newCurrentPage.after('<div class="page-main page-prev" aria-hidden="true"></div>');
                $newCurrentPage.after('<div class="page-main page-next" aria-hidden="true"></div>');
                $newCurrentPage.attr("style", "");
                onStartPagewhenRefresh(false);

                // var nextContent = $newToPreload.find("a.next").attr('href'),
                //     prevContent = $newToPreload.find("a.prev").attr('href');
                var nextContent = $newToPreload.find("a.next").attr('data-ajaxUrl'),
                    prevContent = $newToPreload.find("a.prev").attr('data-ajaxUrl');

                loadPagesNextPrev(prevContent, nextContent);
            }) //end do timeout
            return false;
        }
        //return false;
    } //end case 1

    //** CASE 2: I am and going to a normal page OR from normal page no one with multiple loadings (clearPagesAfterloading)
    transitionPagesAnimOut(pageDirection);
    //need give time for the svg morthing, or will be on top of transparent
    $.doTimeout(500, function() {
        loadingLogoAnim($_transition, "show");
    })

    var nextContent = newContent,
        prevContent = null;
    _isLoadedPageAjax = false;

    loadPagesNextPrev(prevContent, nextContent);

    $.doTimeout(150, function() {
        if (_isLoadedPageAjax) {
            manageBodyClasses();
            classesForNavigation(); //logo and arrows navigation
            transitionPagesAnimIn(pageDirection);
            clearPagesAfterloading(1700);
            return false;
        }
        return true;
    });
    return false;
} //////end function main load content



//***** =LOAD PAGES LIKE =MODALITIES WITH MULTIPLE PAGES PRELOADING (like between each modality) ** /
// Note: when this section is load I have alread the prev and next html content!
function loadPagesFlip(newContent, $element, pageDirection, pageColor) {
    var $currentPage = $(".page-main.page-current"),
        $nextContent = $(".page-main.page-next"),
        $prevContent = $(".page-main.page-prev"); // can't be global
    /// change content variables
    var $currentPic = $(".page-main.page-current .modality-pic-current"),
        $newPicNext = $(".page-main.page-current .modality-pic-next"),
        $newPicPrev = $(".page-main.page-current .modality-pic-prev"),
        newPicNextHtml = $(".page-main.page-next .modality-pic-current").html(),
        newPicPrevHtml = $(".page-main.page-prev .modality-pic-current").html();
    var $currentTitle = $(".page-main.page-current .modality-title.current"),
        newTitleNextHtml = $(".page-main.page-next .modality-title.current").html(),
        newTitlePrevHtml = $(".page-main.page-prev .modality-title.current").html();
    // var $nextTitleExtra = $(".page-main.page-current .modality-title-extra.next span"),
    //     $prevTitleExtra = $(".page-main.page-current .modality-title-extra.prev span"),
    //     nextTitleExtraText = $(".page-main.page-next .modality-title-extra.current span").text(),
    //     prevTitleExtraText = $(".page-main.page-prev .modality-title-extra.current span").text();
    var $nextTitleExtra = $(".page-main.page-current .modality-title-extra.next"),
        $prevTitleExtra = $(".page-main.page-current .modality-title-extra.prev"),
        nextTitleExtraText = $(".page-main.page-next .modality-title-extra.current").html(),
        prevTitleExtraText = $(".page-main.page-prev .modality-title-extra.current").html();

    var $toAnimate = $(".page-main.page-current .transition-modalities"),
        $toAnimateBg = $(".page-main.page-current .transition-modalities-bg"),
        classToAddpic = null,
        classToAddTitle = null,
        yF = 0,
        yI = null,
        skI = null,
        $horarios = $(".page-main.page-current .content-horarios"),
        currentPicH = $currentPic.height(),
        viewportPlus50W = Math.round(_globalViewportW + _globalViewportW / 2);

    $("html,body").addClass("js-fixed-all");
    $_body.removeClass("js-no-ajax"); // I am using =ajax

    //insert html, classes etc depending of direction (not for clip: rect, animation not working when html inject via js)
    if (pageDirection == "next") {
        $newPicNext.append(newPicNextHtml);
        $currentTitle.after('<div class="modality-title next">' + newTitleNextHtml + '</div>');
        //$nextTitleExtra.text(nextTitleExtraText);
        $nextTitleExtra.append(nextTitleExtraText);
        //
        classToAddpic = "exit-goingToRght";
        classToAddTitle = "exit-goingToRght-title";
        yI = _globalViewportW;
        yF = "0";
        skI = "-25deg";
        //
        var newPicHeight = $newPicNext.height();
    } else {
        $newPicPrev.append(newPicPrevHtml);
        $currentTitle.after('<div class="modality-title next">' + newTitlePrevHtml + '</div>');
        // $prevTitleExtra.text(prevTitleExtraText);
        $prevTitleExtra.append(prevTitleExtraText);
        //
        classToAddpic = "exit-goingToLft";
        classToAddTitle = "exit-goingToLft-title";
        yI = -_globalViewportW - 500;
        yF = "-200px";
        skI = "25deg";
        //
        var newPicHeight = $newPicPrev.height();
    }

    // reset modality-info-list & reset over arrows

    _currentView.kill();
    _currentView = modalidadesSinglePage();
    _currentView.init(true);
    fArrowsNav(false);
    $_body.addClass("js-loading-page");

    // action
    $(".page-main.page-current .modality-pic-wrapper").addClass(classToAddpic);
    $(".page-main.page-current .modality-info").addClass(classToAddTitle);
    $(".page-main.page-current .modality-title-extra-wrapper").addClass(classToAddTitle);

    $toAnimate.addClass(pageColor);
    $toAnimate.velocity({
        translateZ: 0,
        translateX: [yF, yI]
    }, {
            duration: 490,
            // easing: [.27, .54, .6, .99],
            // easing: "[.57,0,.34,.98]",
            easing: "[.11,.7,.01,1.03]",
            mobileHA: true,
            delay: 0
        })

    $toAnimateBg.velocity({
        translateZ: 0,
        skewX: [0, skI]
    }, {
            duration: 550,
            // easing: "ease-out",
            easing: "[.11,.7,.01,1.03]",
            mobileHA: true,
            delay: 100,
            complete: function() {
                resetLoadedPageFlip();
                $("html,body").removeClass("js-fixed-all");
            }
        })

    var yHorariosF = newPicHeight - currentPicH;
    if (!yHorariosF) {
        yHorariosF = 0;
    }
    // $horarios.velocity({
    //     translateZ: 0,
    //     translateY: [yHorariosF, 0]
    // }, {
    //         duration: 300,
    //         easing: "ease-out",
    //         delay: 100
    //     })

    /// end of animation - reset stage
    function resetLoadedPageFlip() {
        $.doTimeout(90, function() {
            $currentPage.remove();
            if (pageDirection === "next") {
                $prevContent.remove();
                $nextContent.removeClass('page-next');
                $nextContent.addClass('page-current').removeAttr("aria-hidden");
            } else {
                $nextContent.remove();
                $prevContent.removeClass('page-prev');
                $prevContent.addClass('page-current').removeAttr("aria-hidden");
            }
            var $newCurrentPage = $(".page-main.page-current"),
                $newToPreload = $(".page-current .preload");
            $newCurrentPage.after('<div class="page-main page-prev" aria-hidden="true"></div>');
            $newCurrentPage.after('<div class="page-main page-next" aria-hidden="true"></div>');
            $newCurrentPage.attr("style", "");

            // var nextContent = $newToPreload.find("a.next").attr('href'),
            //     prevContent = $newToPreload.find("a.prev").attr('href');
            var nextContent = $newToPreload.find("a.next").attr('data-ajaxUrl'),
                prevContent = $newToPreload.find("a.prev").attr('data-ajaxUrl');


            // NEED TO BE SURE THAT PRELOAD IS DONE!
            _isLoadedPageAjax = false;
            _global_allowNavigate = false;

            loadPagesNextPrev(prevContent, nextContent);

            _currentView.kill();
            _currentView = modalidadesSinglePage();
            _currentView.init(false);

            $.doTimeout(40, function() {
                if (_isLoadedPageAjax) {
                    onStartPagewhenRefresh(false);
                   // $("html,body").removeClass("js-fixed-all");
                    $_body.removeClass("js-loading-page");
                    return false;
                }
                return true;
            }) //END if preloading next/prev pages done?
        }) //end maintimeout
    } //end function resetLoadedPageFlip

} //////end Function loadPages


//***** =LOAD PAGES =TEAM =INSTRUTORES, like  MODALITIES WITH MULTIPLE PAGES PRELOADING (like between each modality) ** /
// Note: when this section is load I have alread the prev and next html content!
function loadPagesFlipTeam(newContent, $element, pageDirection) {
    var $currentPage = $(".page-main.page-current"),
        $nextContent = $(".page-main.page-next"),
        $prevContent = $(".page-main.page-prev"); // can't be global
    /// change content variables
    var $currentPic = $(".page-main.page-current .modality-pic-current"),
        $newPicNext = $(".page-main.page-current .modality-pic-next"),
        $newPicPrev = $(".page-main.page-current .modality-pic-prev"),
        newPicNextHtml = $(".page-main.page-next .modality-pic-current").html(),
        newPicPrevHtml = $(".page-main.page-prev .modality-pic-current").html();

    var $currentInfo = $(".page-main.page-current .instruct-info.current"),
        $newNextInfo = $(".page-main.page-current .instruct-info.next"),
        $newPrevInfo = $(".page-main.page-current .instruct-info.prev"),
        newNextInfo = $(".page-main.page-next .instruct-info.current").html(),
        newPrevInfo = $(".page-main.page-prev .instruct-info.current").html();

    var $objTxt = null,
        yF = 0,
        yI = null,
        xI = null;

    $("html,body").addClass("js-fixed-all");
    $_body.removeClass("js-no-ajax"); // I am using =ajax
    fArrowsNav(false); // reset over arrows
    $_body.addClass("js-loading-page");

    //NOTA: nao estou a injectar html pois acho k é daqui que vem o undefined!!
    if (pageDirection == "next") {
        $newPicNext.append(newPicNextHtml);
        $newNextInfo.html(newNextInfo);
        $objTxt = $newNextInfo;
        xI = 10;
        classToAddpic = "exit-goingToRght";
    } else {
        $newPicPrev.append(newPicPrevHtml);
        $newPrevInfo.html(newPrevInfo);
        $objTxt = $newPrevInfo;
        xI = -10;
        classToAddpic = "exit-goingToLft";
    }

    //PIC: remove class filter when animated!
    $currentPic.removeClass("filter");
    $newPicNext.removeClass("filter");
    $newPicPrev.removeClass("filter");
    $(".page-main.page-current .modality-pic-wrapper").addClass(classToAddpic);
    //TEXT:
    $currentInfo.find(".vp-fullH").velocity({
        opacity: 0
    }, {
            duration: 200,
            easing: "linear"
        })

    $objTxt.css("opacity", 1);
    $objTxt.find(".instruct-info-lft").velocity({
        opacity: [1, 0],
        translateZ: 0,
        translateX: [0, xI]
    }, {
            duration: 450,
            easing: "ease-out",
            delay: 210
        })

    $objTxt.find(".instruct-info-rgt").velocity({
        opacity: [1, 0],
        translateZ: 0,
        translateX: [0, 0]
    }, {
            duration: 400,
            easing: "linear",
            delay: 700
        })

    $.doTimeout(1100, function() {
        $currentPage.remove();
        if (pageDirection === "next") {
            $prevContent.remove();
            $nextContent.removeClass('page-next');
            $nextContent.addClass('page-current').removeAttr("aria-hidden");
        } else {
            $nextContent.remove();
            $prevContent.removeClass('page-prev');
            $prevContent.addClass('page-current').removeAttr("aria-hidden");
        }
        var $newCurrentPage = $(".page-main.page-current"),
            $newToPreload = $(".page-current .preload");
        $newCurrentPage.after('<div class="page-main page-prev" aria-hidden="true"></div>');
        $newCurrentPage.after('<div class="page-main page-next" aria-hidden="true"></div>');
        $newCurrentPage.attr("style", "");

       // $("html,body").removeClass("js-fixed-all");
        // var nextContent = $newToPreload.find("a.next").attr('href'),
        //     prevContent = $newToPreload.find("a.prev").attr('href');
            var nextContent = $newToPreload.find("a.next").attr('data-ajaxUrl'),
                prevContent = $newToPreload.find("a.prev").attr('data-ajaxUrl');

        // NEED TO BE SURE THAT PRELOAD IS DONE!
        _isLoadedPageAjax = false;
        _global_allowNavigate = false;
        $("html,body").removeClass("js-fixed-all");
        loadPagesNextPrev(prevContent, nextContent);

        $.doTimeout(40, function() {
            if (_isLoadedPageAjax) {
                onStartPagewhenRefresh(false);
                $_body.removeClass("js-loading-page");
                return false;
            }
            return true;
        }) //END if preloading next/prev pages done?
    }) //end main Timeout
    return false;
} //////end Function loadPages TEAM

//***** =LOAD PAGES WITH FADE and COLOR (like modalities all) ** /
function loadPagesFade(newContent, $element, pageColor) {
    var $currentPage = $(".page-main.page-current"),
        $nextContent = $(".page-main.page-next"),
        $scaleWrap = $element.parents(".animScaleWrap");

    $("html,body").addClass("js-fixed-all");
    $_body.removeClass("js-no-ajax"); // I am using =ajax
    $_transitionFade.show();

    //START PRELOADING next page (if is in cache i may not need preloading animation)
    var nextContent = newContent,
        prevContent = null;
    _isLoadedPageAjax = false;
    loadPagesNextPrev(prevContent, newContent);

    //** check if content is on cache
    var timeToLoad = 0;

    $.doTimeout("isInCache", 10, function() {
        timeToLoad += 10;
        if (_isLoadedPageAjax) {
            timeToLoad = null;
            return false;
        }

        if (_isLoadedPageAjax == false && timeToLoad >= 160) { // I nead load animation (was 160)
            loadingLogoAnim($_transitionFade, "show");
            timeToLoad = null;
            return false;
        }
        return true
    })

    //ANIMATION
    var vProperty = obgProperties($element, $scaleWrap);
    $_transitionFade.addClass(pageColor);
    //Animate clip Rect
    $_transitionFade.velocity({
        clipTop: [0, vProperty.T],
        clipRight: [_globalViewportW, vProperty.R],
        clipBottom: [_globalViewportH, vProperty.B],
        clipLeft: [0, vProperty.L]
    }, {
            duration: 300,
            easing: [.91, .01, .6, .99],
            mobileHA: true,
            delay: 160
        })

    $.doTimeout(170, function() {
        $element.parent().css("opacity", "0");
    });
    //animate scale wraper page
    var forPageScaleX = vProperty.Cx,
        forPageScaleY = vProperty.CyRelative,
        forExceptionX = verge.rectangle($scaleWrap).left + 40;
    //exception for the 1st column
    if (vProperty.L <= forExceptionX) {
        forPageScaleX = vProperty.L;
    }
    $scaleWrap.css("transform-origin", "" + forPageScaleX + "px " + forPageScaleY + "px 0px");

    $scaleWrap.velocity({
        scale: [2.4, 1]
    }, {
            duration: 400,
            easing: [.91, .01, .6, .99],
            mobileHA: true,
            delay: 170,
            complete: function() {
                animationLoadPagesFadeDone();
                window.scroll(0, 0); //reset scroll
            }
        })

    function animationLoadPagesFadeDone() {
        $.doTimeout(50, function() {
            if (_isLoadedPageAjax) {
                clearPagesAfterloading(0); // calls onStartPagewhenRefresh
                classesForNavigation(); //logo and arrows navigation
                manageBodyClasses();
                $_transitionFade.velocity({
                    opacity: [0, 1],
                }, {
                        duration: 300,
                        easing: "ease-out",
                        mobileHA: true,
                        delay: 50,
                        complete: function() {
                            $("html,body").removeClass("js-fixed-all");
                            $_transitionFade.attr("style", "").attr("class", "");
                            loadingLogoAnim($_transitionFade, "hide");
                        }
                    })
                return false;
            }
            return true;
        });
    } //End function animation page loaded

    return false;
} //////end function load content width FADE

//***** =LOAD PAGES WITH circle and COLOR (like =home modalities) ** /
function loadPagesCircle(newContent, $element, pageColor) {
    var $currentPage = $(".page-main.page-current"),
        $nextContent = $(".page-main.page-next"),
        $scaleWrap = $element.parents(".list-modal-home"),
        $loadingCircle = $(".transition-circle-loading");

    $("html,body").addClass("js-fixed-all");
    $_body.removeClass("js-no-ajax"); // I am using =ajax
    $_transitionCircle.show();

    //START PRELOADING next page (if is in cache i may not need preloading animation)
    var nextContent = newContent,
        prevContent = null;
    _isLoadedPageAjax = false;
    loadPagesNextPrev(prevContent, newContent);

    //** check if content is on cache
    var timeToLoad = 0;

    $.doTimeout("isInCache", 10, function() {
        timeToLoad += 10;
        if (_isLoadedPageAjax) {
            timeToLoad = null;
            return false;
        }

        if (_isLoadedPageAjax == false && timeToLoad >= 1000) { // I nead load animation if takes more then 1s
            loadingLogoAnim($loadingCircle, "show");
            timeToLoad = null;
            return false;
        }
        return true
    })


    //ANIMATION
    var vProperty = obgProperties($element, $scaleWrap);
    $_transitionCircle.addClass(pageColor);

    $_transitionCircle.css({"left": vProperty.Cx , "top": vProperty.Cy});
    var maxValue =_globalViewportW;
    if ( _globalViewportW <= _globalViewportH) maxValue = _globalViewportH;
    var toScale = Math.round(2*maxValue/200);

    $element.parent().addClass("fadeout");
    $_transitionCircle.velocity({
        scale: [toScale, .1],
    }, {
            duration: 300,
            easing: [.91, .01, .6, .99],
            mobileHA: true,
            delay: 50
        })

    //animate scale wraper page
    var forPageScaleX = vProperty.Cx,
        forPageScaleY = vProperty.CyRelative
    $scaleWrap.css("transform-origin", "" + forPageScaleX + "px " + forPageScaleY + "px 0px");

    $scaleWrap.velocity({
        scale: [2.4, 1]
    }, {
            duration: 300,
            easing: [.91, .01, .6, .99],
            mobileHA: true,
            delay: 55,
            complete: function() {
                animationLoadPagesCircleDone();
                window.scroll(0, 0); //reset scroll
            }
        })

    function animationLoadPagesCircleDone() {
        $.doTimeout(50, function() {

            if (_isLoadedPageAjax) {
                clearPagesAfterloading(0); // calls onStartPagewhenRefresh
                classesForNavigation(); //logo and arrows navigation
                manageBodyClasses();
                $loadingCircle.addClass("fadeout");
                $_transitionCircle.velocity({
                    opacity: [0, 1],
                }, {
                        duration: 300,
                        easing: "ease-out",
                        mobileHA: true,
                        delay: 50,
                        complete: function() {
                            $("html,body").removeClass("js-fixed-all");
                            $_transitionCircle.attr("style", "").attr("class", "");
                            loadingLogoAnim($loadingCircle, "hide");
                            $loadingCircle.removeClass("fadeout").hide();
                        }
                    })
                return false;
            }
            return true;
        });
    } //End function animation page loaded

    return false;
} //////end function load content width CIRCLE

// Get getBoundingClientRect
function obgProperties($element, $container) {
    var vRect = new Object(),
        Top = verge.rectangle($element).top,
        Right = verge.rectangle($element).right,
        Bottom = verge.rectangle($element).bottom,
        Left = verge.rectangle($element).left,
        Width = Right - Left,
        Height = Bottom - Top,
        CenterX = Left + (Width / 2),
        CenterY = Top + (Height / 2),
        containerTop = verge.rectangle($container).top,
        elementRelativTop = Math.abs(containerTop - Top),
        elementCenterYrelative = elementRelativTop + (Height / 2);
    vRect = {
        T: Math.round(Top),
        R: Math.round(Right),
        B: Math.round(Bottom),
        L: Math.round(Left),
        W: Math.round(Width),
        H: Math.round(Height),
        Cx: Math.round(CenterX),
        Cy: Math.round(CenterY),
        CyRelative: Math.round(elementCenterYrelative)
    }
    return vRect;
}

//***** =LOAD PAGES SAME PAGE HEADER (like =GINASIOS) ** /
function loadPagesSame(newContent){
    var $currentPage = $(".page-main.page-current"),
        $nextContent = $(".page-main.page-next");

    $("html,body").addClass("js-fixed-all");
    $_body.removeClass("js-no-ajax");
    $_body.addClass("js-loading-page");

    //START PRELOADING next page (if is in cache i may not need preloading animation)
    var nextContent = newContent,
        prevContent = null;
    _isLoadedPageAjax = false;
    loadPagesNextPrev(prevContent, newContent);
    // I need time to end animation
    $.doTimeout(400, function() {
        $.doTimeout(50, function() {
            if (_isLoadedPageAjax) {
                clearPagesAfterloading(0); // calls onStartPagewhenRefresh
                manageBodyClasses();
                $("html,body").removeClass("js-fixed-all");
                $_body.removeClass("js-loading-page");
                  //=ALEX: width video remove auto scroll.
                 // $.doTimeout(700, function() {
                 //    var $toGoHere = $(".content-main-wrapper");
                 //    goTo( $toGoHere, 900, [0.7,0,0.3,1], -300);
                 // })
                return false;
            }
            return true;
        })//end timeout
    })


}//////end function load content same header (ginasios)

/*-------------------------------------------------------------------------------------------
    =TRANSITIONS pages animation
--------------------------------------------------------------------------------------------*/
function transitionPagesAnimOut(direction) {
    var $currentPage = $(".page-main.page-current"), // can't be global
        xTransI, xTransF, xPageI, xPageF,
        pathStart;
    var yTransI = 0,
        yTransF = 0,
        yPageI = 0,
        yPageF = 0;

    switch (direction) {
        case "next":
            xTransI = _globalViewportW - 200, xTransF = 0;
            xPageI = 0, xPageF = -_globalViewportW + 200;
            pathStart = _transitionPaths.startNext;
            break;
        case "prev":
            xTransI = -_globalViewportW + 200, xTransF = 0;
            xPageI = 0, xPageF = _globalViewportW - 200;
            pathStart = _transitionPaths.startPrev;
            break;
        default:
            xTransI = 0, xTransF = 0,
            xPageI = 0, xPageF = 0;
            yTransI = -_globalViewportH + 200, yTransF = 0;
            yPageI = 0, yPageF = _globalViewportH - 200;
            pathStart = _transitionPaths.startUpDown;
            break;
    }

    $_transitionPathSVG.attr("d", pathStart);

    $_transition.velocity({
        translateZ: 0,
        translateY: [yTransF, yTransI],
        translateX: [xTransF, xTransI]
    }, {
            duration: 600,
            easing: [.27, .54, .6, .99],
            mobileHA: true,
            delay: 0,
            complete: function() {
                classesForNavigation(); //logo and arrows navigation
                window.scroll(0, 0); //reset scroll
            }
        })

    $currentPage.velocity({
        translateZ: 0,
        translateY: [yPageF, yPageI],
        translateX: [xPageF, xPageI]
    }, {
            duration: 700,
            easing: [.91, .01, .6, .99],
            delay: 100,
            mobileHA: true
        })

    _transitionPathSVG.stop().animate({
        "path": _transitionPaths.full
    }, 700, mina.easeout);
} //end transition page anim OUT


function transitionPagesAnimIn(direction) {
    var $nextPage = $(".page-main.page-next"), // can't be global
        xTransI, xTransF, xPageI, xPageF,
        pathEnd,
        delay = 810;
    var yTransI = 0,
        yTransF = 0,
        yPageI = 0,
        yPageF = 0;

    switch (direction) {
        case "next":
            $nextPage = $(".page-main.page-next");
            pathEnd = _transitionPaths.endNext;
            xTransI = 0, xTransF = -_globalViewportW;
            xPageI = _globalViewportW - 200, xPageF = 0;
            //delay on text
            break;
        case "prev":
            $nextPage = $(".page-main.page-prev");
            pathEnd = _transitionPaths.endPrev;
            xTransI = 0, xTransF = _globalViewportW;
            xPageI = -_globalViewportW + 200, xPageF = 0;
            break;
        default:
            $nextPage = $(".page-main.page-next");
            pathEnd = _transitionPaths.endUpDown;
            xTransI = 0, xTransF = 0,
            xPageI = 0, xPageF = 0;
            yTransI = 0, yTransF = _globalViewportH;
            yPageI = -_globalViewportH + 200, yPageF = 0;
            break;
    }

    $.doTimeout(delay, function() {
        $_transition.velocity({
            translateZ: 0,
            translateY: [yTransF, yTransI],
            translateX: [xTransF, xTransI]
        }, {
                duration: 900,
                easing: [.91, .01, .6, .99],
                delay: 0,
                complete: function() {
                    $_transition.hide();
                    loadingLogoAnim($_transition, "hide");
                }
            })

        $nextPage.velocity({
            translateZ: 0,
            translateY: [yPageF, yPageI],
            translateX: [xPageF, xPageI]
        }, {
                duration: 900,
                easing: [.91, .01, .6, .99],
                delay: 0,
                complete: function() {
                    $("html,body").removeClass("js-fixed-all");
                    $nextPage.attr("style", ""); /* NEED if I have fixed elements on chrome */
                }
            })
    }) //end timeout
} //end transition page anim IN / ENTRADA


/**-------------------------------------------------------------------------------------------
    =Load NEXT PREV Pages on background =CLEAR content
--------------------------------------------------------------------------------------------*/
function loadPagesNextPrev(prevContent, nextContent) {
    var $prevContent = $(".page-main.page-prev"),
        $nextContent = $(".page-main.page-next"); // can't be global

    $nextContent.load(nextContent + " .page-toload", function(response, status, xhr) {
        var $this = $(this);
        $(".page-main.page-next .preload").imagesLoaded(function($images, $proper, $broken) {
            var fPreload = $(this).imagesLoaded();
            fPreload.always(function() {
                if (!$_body.hasClass('mobile')) {
                    $_newLoadImage = $(".page-main.page-next .animate-sprite");
                }
                $(".page-main.page-next .preload").find("picture").remove(); // I need the links
                _isLoadedPageAjax = true;
            })
        }) // end Images loaded
    }) // end nextContent

    if (!prevContent) return;
    $prevContent.load(prevContent + " .page-toload", function(response, status, xhr) {
        var $this = $(this);
    }) // end prevContent

} //////end function load next prev content


function clearPagesAfterloading(delay) {
    var $currentPage = $(".page-main.page-current"),
        $nextContent = $(".page-main.page-next"),
        $prevContent = $(".page-main.page-prev"); // can't be global

    $.doTimeout(delay, function() {
        $currentPage.remove();
        $prevContent.remove();
        $nextContent.removeClass('page-next');
        $nextContent.addClass('page-current').removeAttr("aria-hidden");
        var $newCurrentPage = $(".page-main.page-current"),
            $newToPreload = $(".page-current .preload");
        $newCurrentPage.after('<div class="page-main page-prev" aria-hidden="true"></div>');
        $newCurrentPage.after('<div class="page-main page-next" aria-hidden="true"></div>');
        $newCurrentPage.attr("style", "");
        onStartPagewhenRefresh(false);
        // If I go to a next/prev section of the site
        if ($newToPreload.hasClass("preload-more")) {
            // var nextContent = $newToPreload.find("a.next").attr('href'),
            //     prevContent = $newToPreload.find("a.prev").attr('href');
            var nextContent = $newToPreload.find("a.next").attr('data-ajaxUrl'),
                prevContent = $newToPreload.find("a.prev").attr('data-ajaxUrl');

            loadPagesNextPrev(prevContent, nextContent);
        } //end if
    }) //end do timeout
} //end function


/*-------------------------------------------------------------------------------------------
    =Loading pages helpers
--------------------------------------------------------------------------------------------*/
function fcheckWhereTo(newContent) {
    var nextPageAlreadyLoaded = false;
    var $links = $(".page-main.page-current").find(".preload-more a"); // nao pode ser global

    $links.each(function() {
        var compareURL = $(this).attr("href");
        if (compareURL === newContent) {
            nextPageAlreadyLoaded = true;
            return nextPageAlreadyLoaded;
        }
    })
    return nextPageAlreadyLoaded;
} //end function

//** loading P animation. Show and delete
function loadingLogoAnim($element, action) {
    var $container = $element.find(".loadigPage-anim"),
        $image = $element.find(".animate-sprite"),
        index = $image.attr('data-n');
        if ($container.length === 0) $container = $element;

    if (action == "show") {
        $container.show();
        $image.animateSpriteIMG({
            widthFrame: 225,
            heightFrame: 209,
            totalFrames: _loadingObjs[index].nframes,
            totalRow: _loadingObjs[index].nrow,
            totalColumn: _loadingObjs[index].ncolumn,
            speed: 30,
            loop: true
        });
    } else {
        $image.destroy();
        $_loadigPageHolder.empty().append($_newLoadImage); //=LOADING animation - change image
        //$container.hide();
    }
} //end function


/*-------------------------------------------------------------------------------------------
    =CLASSES FOR NAVIGATION =for modalities, team and id
--------------------------------------------------------------------------------------------*/
function classesForNavigation() {
    ($('.page-main.page-next .home').length) ? $_body.addClass('home') : $_body.removeClass('home');
    ($('.page-main.page-next .has-arrows').length) ? $_body.addClass('has-arrows') : $_body.removeClass('has-arrows');
} //end function



/********************************************************************************************
 **                                                                                       **
     =START EACH PAGE - refresh or ajax
 **                                                                                       **
*********************************************************************************************/
function onStartPagewhenRefresh(byRefresh) {
    if (byRefresh) {
        // :BUG CHROME: even wit this is not scrolling top is some section, needed hack after preloading with animate
        window.scrollTo(0, 0);
        $("html,body").scrollTop(0);
        //
        $("html,body").addClass("js-fixed-all");
        $_transition.addClass("js-byrefresh");
        $_body.removeClass("js-byrefresh");

        manageBodyClasses();

        if($(".promo-link").hasClass("active")) {
          setTimeout(function() {
            if(!Cookies.get('promo-modal-closed'))
              $(".promo-link").click();
          }, 20000)
        }

        if (!$_body.hasClass('mobile')) {
            loadingLogoAnim($_transition, "show");
            //when I want mupliple preloads (=modalidades, =Team)
            // next and prev content is always loaded by ajax so no need of attr('href')
            if ($_toPreload.hasClass("preload-more")) {
                // var nextContent = $_toPreload.find("a.next").attr('href'),
                //     prevContent = $_toPreload.find("a.prev").attr('href');
                var nextContent = $_toPreload.find("a.next").attr('data-ajaxUrl'),
                    prevContent = $_toPreload.find("a.prev").attr('data-ajaxUrl');
                loadPagesNextPrev(prevContent, nextContent);
            } //end if
        }
        // else {
        //   $(".loadigPage-mobile-anim").addClass("anim-go");
        // }

        $_toPreload.imagesLoaded(function($images, $proper, $broken) {
            var fPreload = $(this).imagesLoaded();
            fPreload.always(function() {
                classesForNavigation(); //logo and arrows navigation
                if ($('.page-current .home').length) {
                    $_body.addClass('home');
                } //home logo
                if ($('.page-current .has-arrows').length) {
                    $_body.addClass('has-arrows');
                } //arrows
                // ** =LOADING animation - change image (if not mobile!)
                if (!$_body.hasClass('mobile')) {
                    $_newLoadImage = $(".page-main.page-current .animate-sprite");
                }
                $_toPreload.find("img").remove();

                $("html,body").animate({
                    scrollTop: 0
                }, 100); // :BUG CHROME: need anim or timeout to force scroll top ( the value 100ms is arbitrary, less was not working and also must be after preloading)

                $_transition.velocity({
                    opacity: 0
                }, 600, function() {
                        $("html,body").removeClass("js-fixed-all");
                        $_transition.removeClass("js-byrefresh").hide();
                        if (!$_body.hasClass('mobile')) {
                            loadingLogoAnim($_transition, "hide");
                        }
                        // else {
                        //    $(".loadigPage-mobile-anim").removeClass("anim-go").hide();
                        // }
                        onStartPage();
                    });
            }) //end always
        }) //end preload images

    } else {
        onStartPage();
    }

} //////end function

/*-------------------------------------------------------------------------------------------
    =START EACH PAGE - call of functions and events
--------------------------------------------------------------------------------------------*/
function onStartPage() {

    // ** =ALLOW user load other pages
    _global_allowNavigate = true;

     /*Refresh global values*/
    $_pageHeader = $(".page-current .page-header");
    $_pageFooter = $(".page-current .page-footer");
    $_pageContent = $(".page-current .page-content");
    $_pageToLoad = $(".page-current .page-toload");

    // **=POLYFILL ASYNC
    callAsyncFunctions();

    if(_currentView)
      _currentView.kill();

    switch($_pageToLoad.attr("data-bodyClass").split(" ")[0]) {
        case 'home' :
            _currentView = homePage();
            _currentView.init();
        break;

        case 'horarios' :
            _currentView = horariosPage();
            _currentView.init();
        break;

        case 'ginasios-all' :
            _currentView = ginasiosPage();
            _currentView.init();
        break;

        case 'ginasios' :
            _currentView = ginasioPage();
            _currentView.init();
        break;

        case 'modalidades-all' :
            _currentView = modalidadesPage();
            _currentView.init();
        break;

        case 'modalidades' :
            _currentView = modalidadesSinglePage();
            _currentView.init();
        break;

        case 'team-all' :
            _currentView = teamPage();
            _currentView.init();
        break;

        case 'team-member' :
            _currentView = teamSinglePage();
            _currentView.init();
        break;

        case 'corporate' :
            _currentView = corporatePage();
            _currentView.init();
        break;

        case 'nutricao-all' :
            _currentView = blogAllPage();
            _currentView.init();
        break;

        case 'health-all' :
            _currentView = blogAllPage();
            _currentView.init();
        break;

        case 'nutricao-single' :
            _currentView = blogSinglePage();
            _currentView.init();
        break;

        case 'health-single' :
            _currentView = blogSinglePage();
            _currentView.init();
        break;

        case 'recruta' :
            _currentView = recrutaPage();
            _currentView.init();
        break;

        case 'inscricoes' :
            _currentView = inscricoesPage();
            _currentView.init();
        break;

        case 'page-404' :
            _currentView = page404Page();
            _currentView.init();
        break;
    }

    //** =LOADING animation - change image (if not mobile && new Image value when loading next section)
    // NOTE: can't be here or i see the P animation change ate the end of the ploading > put in loadingLogoAnim()!!
    // if (!$_body.hasClass('mobile')) {
    //     $_loadigPageHolder.empty().append($_newLoadImage);
    // }

    // ** =MODALIDADES/TEAM = ARROWNS NAVIGATIONS
    ($('.page-current .has-arrows').length) ? do_navArrows = true : do_navArrows = false;
    fArrowsNav(do_navArrows);

    // // ** =FOOTER 2c
    ($('.page-current .footer-2c').length) ? do_footer2c = true : do_footer2c = false;
    fFooter2c(do_footer2c);

    // //** ANIMATION intro blocks ( ALEX: apagar???? na nova versao? )
    ($('.page-current .anim-wrap-DownUp').length) ? do_animDownUp = true : do_animDownUp = false;
    animBlockDownUp(do_animDownUp);


    // ** =URL com ancoras onload
    var hasHash = window.location.hash;
    if ( hasHash != "") {
      var $toGoHere = $(""+hasHash+"")
      $.doTimeout(100, function() {
          goTo( $toGoHere, 1000, [0.7,0,0.3,1], 0);
      });
    }

    //** General events
    forForms();
    defaultBuroEvents();

} //////end function


/*******************************************************************************************
 **                                                                                       **
      =GENERAL FUNCTIONS AND PLUGINGS CONTROL
 **                                                                                       **
*********************************************************************************************/
/** =Global page values */
function calculateGlobalValues() {
    _globalViewportW = verge.viewportW();
    _globalViewportH = verge.viewportH();
    _globalHalfViewportW = _globalViewportW/2;
    _globalHalfViewportH = _globalViewportH/2;
    _globalOneFiveViewportH = _globalViewportH/1.5;
}
/** =ASYNC PLUGINS (polyfill, etc) */
function callAsyncFunctions() {
  if( window.respimage ) respimage();
  if( window.svg4everybody ) svg4everybody();
}
/** =Random integer between min (included) and max (excluded) */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/* Detects page ratio NOTE: dont need, have the plugin that puts on html orientation_landscape and
portrait*/
// function viewportRatio(){
//     var vRatio = verge.aspect().toFixed(2);
//         ( vRatio <= 1) ? $_body.addClass("v-lowRatio") : $_body.removeClass("v-lowRatio");
// }

/*-------------------------------------------------------------------------------------------
=FORMS (needed to be repeated because of ajax and resize input)
--------------------------------------------------------------------------------------------*/
function forForms() {
    //** =Clear input on click
    $('input[type=text], input[type=email], input.text, input.email, textarea').each(function() {
        var $this = $(this);
        if ( !$this.hasClass("txtClear") ) return;

        var defeito = this.defaultValue;
        $this.focus(function() {
            $this.parents("form").addClass("focus-on");
            if ($this.val() == defeito) {
                $this.val("")
            }
        });
        $this.blur(function() {
            $this.parents("form").removeClass("focus-on");
            if ($this.val() == "") {
              $this.val(defeito)
            }
            $("input.resizeIt").each(resizeInput); //exception if i have resize it
        });
    })

} //// end Form forms

//=input fields
function resizeInput() {
  // if ($_body.hasClass("mobile")) return false;
  var $this = $(this);
  $this.attr('size', $this.val().length);
}

/*-----------------------------------------------------------------------
 =FORMS ANIMATION LOADING
 NOTE: changed to giv error on element and not parent
-----------------------------------------------------------------------*/
function formAnimLoading($element) {
    $element.addClass('loading');
    //give time mouseOut animation
    $.doTimeout(550, function() {
        $element.addClass('go');
    })

    // IF OK SENT
    $.doTimeout(3400, function() {
        $element.addClass("go-ok");
    })
    $.doTimeout(5500, function() {
        // $element.addClass("go-ok-done");
        $element.addClass('go-reset');
    })
    //end all
    $.doTimeout(6500, function() {
        $element.removeClass('loading go go-ok go-reset');
    })

}

//New form animation with 1 more exception — Error State
function formAnimLoadingNEW($element, state) {

    if (state == 'loading') {
        //Anim send button -> Replace in function
        $element.addClass('loading');
        //give time mouseOut animation
        $.doTimeout(550, function() {
            $element.addClass('go');
        });
        $.doTimeout(2700, function() {
            $element.addClass('pause');
        });
    } else if (state == 'sent-ok') {
        // IF OK SENT
        $.doTimeout(0, function() {
            $element.removeClass('pause');
            $element.addClass("go-ok");
        });
        $.doTimeout(2100, function() {
            // $element.addClass("go-ok-done");
            $element.addClass('go-reset');
        });
        //end all
        $.doTimeout(3100, function() {
          $element.removeClass('go go-ok go-reset loading enable');
          $element.parents("form").find("input:not([type='checkbox'])").val("");
          $element.parents("form").find("textarea").val("");
          $element.parents("form").find(".js-file-name").text($element.parents("form").find(".js-file-name").attr("data-placeholder")).attr("style","");
          $element.parents("form").find(".rgpd-wrapper").removeClass("active");
          $element.parents("form").find(".radio-selection").removeClass("selected");
          $element.parents("form").find("input[type='checkbox']").removeAttr("checked");
        });
    } else if (state == 'sent-error') {
        // // IF OK ERROR
        // $.doTimeout(0, function() {
        //     $element.removeClass('pause');
        // });
        // $.doTimeout(400, function() {
        //     $element.addClass("go-error")
        // });
        // $.doTimeout(2100, function() {
        //     // $element.addClass("go-ok-done");
        //     $element.addClass('go-reset');
        // });
        // //end all
        // $.doTimeout(3100, function() {
        //     $element.removeClass('go go-error go-reset loading');
        // });

        // IF OK SENT
        $.doTimeout(0, function() {
            $element.removeClass('pause');
            $element.addClass("go-error");
        });
        $.doTimeout(2100, function() {
            // $element.addClass("go-ok-done");
            $element.addClass('go-reset');
        });
        //end all
        $.doTimeout(3100, function() {
          $element.removeClass('go go-ok go-reset loading enable');
          $element.parents("form").find("input:not([type='checkbox'])").val("");
          $element.parents("form").find("textarea").val("");
          $element.parents("form").find(".js-file-name").text($element.parents("form").find(".js-file-name").attr("data-placeholder")).attr("style","");
          $element.parents("form").find(".rgpd-wrapper").removeClass("active");
          $element.parents("form").find(".radio-selection").removeClass("selected");
          $element.parents("form").find("input[type='checkbox']").removeAttr("checked");
        });
    }
}

/*-----------------------------------------------------------------------
 =FORMS VALIDADTE
 NOTE: changed to giv error on element and not parent
-----------------------------------------------------------------------*/

function campainMonitorForm($form) {
  var cmform = document.createElement("form");

  cmform.setAttribute('method', "post");
  cmform.setAttribute('action', $form.attr("data-cmaction"));

  $form.find("input").each(function() {
    var $this = $(this),
        cmname = $this.attr("data-cmname");

    if(cmname){
      var i = document.createElement("input"); //input element, text

      if($this.attr("data-cmemail") == "true")
        i.setAttribute('type', "email");
      else
        i.setAttribute('type', $this.attr('type'));

      i.setAttribute('name', cmname);
      i.setAttribute('value', $this.attr('value'));

      cmform.appendChild(i);
    }

  }).promise().done(function(){
    var $cmform = $(cmform);

    $.ajax({
      data: $cmform.serialize(),
      type: 'post',
      dataType: 'jsonp',
      url: $cmform.attr('action'),
      success: function(data) {
        console.log("sent", data.Message);
      },
      error: function(data) {
        console.log("erro", data);
      }
    });
  });
}

function validateForm($form) {

    $form.find(".formMsg").hide();
    var error = 0;
    $form.find(".required").each(function() {
        var $this = $(this),
            defeito = this.defaultValue;
        error = check($this, defeito, error);
    }) //end each
    if (error > 0) {
        return false;
    } else {
        return true;
    }
} //end validate form

//functiom check inputs
function check($this, defeito, error) {

    //is an email
    if ($this.hasClass("email")) { // is this an email
        if (!validateEmail($this)) {
            error += 1;
            $this.parent().addClass("error");
            $this.addClass("error");
            return error;
        } else {
            $this.parent().removeClass("error");
            $this.removeClass("error");
            return error;
        }
    } //end if mail

    //is an phone
    if ($this.hasClass("phone")) { // is is a phone
        if (!validatePhone($this)) {
            error += 1;
            $this.parent().addClass("error");
            $this.addClass("error");
            return error;
        } else {
            $this.parent().removeClass("error");
            $this.removeClass("error");
            return error;
        }
    } //end if mail

    //is an birthdate
    if ($this.hasClass("birthdate")) { // is is a birthdate
        if (!validateBirthdate($this)) {
            error += 1;
            $this.parent().addClass("error");
            $this.addClass("error");
            return error;
        } else {
            $this.parent().removeClass("error");
            $this.removeClass("error");
            return error;
        }
    } //end if birthdate

    //is an number
    if ($this.hasClass("number")) { // is is a birthdate
        if (!validateNumbers($this)) {
            error += 1;
            $this.parent().addClass("error");
            $this.addClass("error");
            return error;
        } else {
            $this.parent().removeClass("error");
            $this.removeClass("error");
            return error;
        }
    } //end if number

    //is a number or email
    if ($this.hasClass("phonemail")) { // is is a phone
        if ( validatePhone($this) ) {
            $this.parent().removeClass("error");
            $this.removeClass("error");
            return error;
        } else if ( validateEmail($this) ) {
            $this.parent().removeClass("error");
            $this.removeClass("error");
            return error;
        } else {
            error += 1;
            $this.parent().addClass("error");
            $this.addClass("error");
            return error;
        }
    } //end

    // //is an radio
    // if ($this.hasClass("select")) { // is is a select

    //     if (!validateSelect($this)) {
    //         error += 1;
    //         $this.parent().addClass("erro");
    //         return error;
    //     } else {
    //         $this.parent().removeClass("erro");
    //         return error;
    //     }
    // } //end if radio

    //is an captcha
    if ($this.hasClass("cap")) { // is is an email
        if ($this.val() == "" || $this.val() == defeito) {
            $this.parent().children("span").addClass("on");
            error += 1;
            $this.parent().addClass("error");
            $this.parent().addClass("error");
            return error;
        } else {
            $this.parent().children("span").removeClass("on");
            $this.parent().removeClass("error");
            return error;
        }
    } //end if mail

    //not empty field
    if ($this.val() == "" || $this.val() == defeito) {
        error += 1;
        $this.parent().addClass("error");
        $this.addClass("error");
        return error;
    } else {
        $this.parent().removeClass("error");
        $this.removeClass("error");
        return error;
    } //end if
} //end function

//email validation
function validateEmail($this) {
    var a = $this.val();
    var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
    if (filter.test(a)) {
        return true;
    } else {
        return false;
    }
}
//Phone validation
function validatePhone($this) {
    var a = $this.val();
    var filter = /^[+]?[0-9 ]{6,}$/;
    if (filter.test(a)) {
        return true;
    } else {
        return false;
    }
}
//Birthdate validation
function validateBirthdate($this) {
    var a = $this.val();
    var filter = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
    if (filter.test(a)) {
        return true;
    } else {
        return false;
    }
}
//Numbers validation
function validateNumbers($this) {
    var a = $this.val();
    var filter = /[0-9 -()+]+$/;
    if (filter.test(a)) {
        return true;
    } else {
        return false;
    }
}
//Radio validation
function validateSelect($this) {
    $this.each(function() {
        var a = $this.attr('checked');
        if (a == 'checked') {
            return true;
        } else {
            return false;
        }
    });
}

////ONLY TYPE NUMBERS and , .
function onlyNumber(event) {
    if (event.shiftKey) {
        event.preventDefault();
    }
    if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 190 || event.keyCode == 188) {
    } else {
        if (event.keyCode < 95) {
            if (event.keyCode < 48 || event.keyCode > 57) {
                event.preventDefault();
            }
        } else {
            if (event.keyCode < 96 || event.keyCode > 105) {
                event.preventDefault();
            }
        }
    }
} //end function

/*******************************************************************************************
 ****                                                                                   ****
    =DOCUMENT =READY =START Document ready
 ****                                                                                   ****
*********************************************************************************************/
$(document).ready(function() {
    //** =Global objects
    $_window = $(window),
    $_body = $("body"),
    $_html = $("html"),
    $_mainHeader = $("#header-main"),
    $_mainHeaderSlide = $("#header-main .nav-sec-mobile"),
    $_mainHeaderBg = $("#header-bg"),
    $_btn_mainNav = $(".open-nav-main"),
    $_mainNav = $("#nav-main"),
    $_mainNavWrap = $("#nav-main-control"),
    $_mainPage = $(".page-main"),
    $_footer = $(".footer"),

    $_currentPage = $(".page-main.page-current"),
    $_btns_close_x = $(".page-current .btn-close .btn"),
    $_toPreload = $(".preload"),
    $_holderLoad = $("#holderLoad");
    //** =global variables*/
    calculateGlobalValues();
    _global_allowNavigate = false; //When loading do not allow clicks by user ( onStartPage revers to true)
    _global_useViewPort = true;
    _currentView = null;

    _customScroll = null;

    $_pageHeader = $(".page-current .page-header");
    $_pageFooter = $(".page-current .page-footer");
    $_pageContent = $(".page-current .page-content");
    $_pageToLoad = $(".page-current .page-toload");

    //_audioFadeInterval = null;

    _globalCalendarColor_lagrimas = "rgba(0,0,0,0.09)";
    _globalCalendarColor_celas = "rgba(255,255,255,.10)";

    //** =audio Global
    $_audioBtn = $(".mute-button");
    _audioGlobal = true;
    _audiAllM = document.getElementById("soundfx_allM");
    _audioSingleM = document.getElementById("soundfx_singleM");
//    $homeVideo_ = $("#home-video")[0];
    $homeAudio_ = $("#soundfx_phive")[0];
    _loop_404 = null;

    //** =Global Page Transitions (morph with snapsvg)
    $_transitionFade = $("#transition-fade"),
    $_transitionCircle = $("#transition-circle"),
    $_transition = $("#transition"),
    $_transitionBg = $("#transition-bg"),
    $_transitionPathSVG = $(".transition-svg path");
    var transitionSVG = $(".transition-svg")[0];
    _transitionSnapSVG = Snap(transitionSVG);
    _transitionPathSVG = _transitionSnapSVG.select('path'),
    _transitionPaths = {
        full: "M800,600H0V0h800V600z",

        startNext: "M800,600h-2.333L435,0h365V600z",
        middleNext: "M509.5,600H0V0h676.5L509.5,600z",
        endNext: "M7.5,600H0V0h179.5L7.5,600z",
        // endNext : "M11.5,600H0V0h192.5L11.5,600z",

        startPrev: "M3.5,600H0V0h308.5L3.5,600z",
        endPrev: "M800.5,600h-8L640.5,0H800L800.5,600z",
        //endPrev : "M800,600h-2.333L435,0h365V600z",

        startUpDown: "M800,3.5L0,258.5V0h800V3.5z",
        endUpDown: "M800,600H0v-4.832l800,1.333V600z"
    };

    //** =Global LOADING Animations
    $_loadigPageHolder = $(".loadingPage-anim-random");
    $_newLoadImage = null;
    _loadingObjs = new Array();
    _loadingObjs[0] = {
        nframes: 24,
        nrow: 2,
        ncolumn: 13
    }
    _loadingObjs[1] = {
        nframes: 24,
        nrow: 2,
        ncolumn: 13
    }
    _loadingObjs[2] = {
        nframes: 39,
        nrow: 3,
        ncolumn: 13
    }
    _loadingObjs[3] = {
        nframes: 39,
        nrow: 3,
        ncolumn: 13
    }
    _loadingObjs[4] = {
        nframes: 52,
        nrow: 4,
        ncolumn: 13
    }
    _loadingObjs[5] = {
        nframes: 52,
        nrow: 4,
        ncolumn: 13
    }

    _rAF_loop = window.requestAnimationFrame ||
               window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               window.msRequestAnimationFrame ||
               window.oRequestAnimationFrame ||
               // IE Fallback, you can even fallback to onscroll
               function(callback){ window.setTimeout(callback, 1000/60) };
    _cancel_rAF_loop = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    _raf_loop_id = null;
    _raf_main_id = null;

    //** =START PAGES and PLUGINS
    onStartPagewhenRefresh(true); // this one calls onStartPageForAjax() + add class for lightbox mobile + header for mobile
    callAsyncFunctions();
    mainNavigation();
    newsletterForm();
    promosForm();
    //viewportRatio();
    startModal();


    //** =SAFARI ios > back-forward cache
    if ( $_html.hasClass("ios") ) {
      $_window.on("pageshow", function(event) {
        if (event.originalEvent.persisted) {
            window.location.reload();
        }
      })
    }


  /** -----------------------------------------------------------------------------------------
  =LOAD SECTIONS - triger events =CLICK to LOAD PAGE
  body class="js-no-ajax ismobile" > inserida via php == no nosso caso a mobile
  --------------------------------------------------------------------------------------------*/
    var domainSite = window.location.host,
        mainTitle = " | Phive — Health & fitness centers",
        homeTitle = $("h1 a").attr("data-title-home");
    $_linkInternal = $('a[href*="' + domainSite + '"]');

    //** =LOAD SECTIONS =EVENTS

    $(document).on('click', ' a[href*="' + domainSite + '"] ', function() {
        var $this = $(this);

        // **ALLOW user load other pages only after page is loaded ( onStartPage )
        if (!_global_allowNavigate) return false;
        _global_allowNavigate = false;
        // exit
        if ($_body.hasClass('mobile')) {
            $_transition.addClass("js-byrefresh").attr('style', '');
            window.location.href = $(this).attr("href"); //need like this because of swipe But i loose back history!!
            return true;
        }
        if ($this.hasClass('modal') || $this.hasClass('js-no-transPage')) return;
        //audio
        var thisAudio = $this.attr("data-audio");
        if ( thisAudio==="off") audioMuteAll();
        //
        var thisHref = $this.attr("href"), // need for history
            thisHrefAjax = $this.attr("data-ajaxUrl"),
            thisTitle = $this.attr("data-title"),
            pageDirection = $this.attr("data-direction"), //next, prev (do no use rel because semantic/google)
            pageColor = $this.attr("data-bgcolor"), // transition pages that I need bg Color
            pageTransition = $this.attr("data-pageTrans"), // if not default is with fade or flip

            forHistory = thisHref,
            newContent = thisHrefAjax,
            forTitle = thisTitle + mainTitle;


        //home page
        if (!thisTitle) {
            forTitle = homeTitle;
        }
        var hasHash = $this.prop("hash");
        if (($(".page-current .home").length) && $this.hasClass("js-scroll")) {
            goTo($("" + hasHash + ""), 2200, "easeInOutCubic");
            _global_allowNavigate = true;
            return false;
        }
        //for history
        history.pushState({}, forTitle, forHistory);
        // for title
        $('head title').html(forTitle);
        ga('send', 'pageview', window.location.pathname); //analytics

        //If I havepages transitions that are not default (all modalities and between modalities)
        // =ALEX: se a team tiver uma especifica mete-la aqui!! e o default ser para outros sitios

        if (pageTransition) {
            if (pageTransition == "flip" || pageTransition == "flipTeam") {
                if (Modernizr.mq('(max-width: 920px)')) return true;
                //HERE the direction i want (rel here has semantic meaning)
                pageDirection = $this.attr("rel");
                //Do I need to scroll top first?
                var scrollVal = verge.scrollY(),
                    speed = null,
                    curve = null;
                if (scrollVal <= 30) {
                    if (pageTransition == "flip") {
                        loadPagesFlip(newContent, $this, pageDirection, pageColor); //modalidades
                    } else {
                        loadPagesFlipTeam(newContent, $this, pageDirection); //team
                    }
                    return false;
                }
                if (scrollVal <= 300) {
                    speed = 300;
                    curve = "easeInOutQuart";
                } else {
                    speed = 600;
                    curve = "easeInOutQuint";
                }
                goTo($_body, speed, curve, null);
                $.doTimeout(speed, function() {
                    if (pageTransition == "flip") {
                        loadPagesFlip(newContent, $this, pageDirection, pageColor); //modalidades
                    } else {
                        loadPagesFlipTeam(newContent, $this, pageDirection); //team
                    }
                })
                return false;
            } else if (pageTransition == "circle" ) {
                $this.addClass("clicked");
                loadPagesCircle(newContent, $this, pageColor);
            } else if (pageTransition == "fade" ) {
                $this.addClass("clicked");
                loadPagesFade(newContent, $this, pageColor);
            }
            //else if ( pageTransition == "samePage" ) {
            //     return false;
            //     var scrollVal = verge.scrollY(),
            //         speed = null,
            //         curve = null;

            //         if (scrollVal <= 300) {
            //           speed = 300;
            //           curve = "easeInOutQuart";
            //         } else {
            //           speed = 600;
            //           curve = "easeInOutQuint";
            //         }
            //         goTo($_body, speed, curve, null);
            //         $.doTimeout(speed, function() {
            //             loadPagesSame(newContent);
            //         })

            // }
            return false;
        }
        //default transitions (right, left , top down)
        // note can't always use rel=next, prev Because has semantic meaning!
        if (!pageDirection) {
            pageDirection = "topDown";
        }
        loadPages(newContent, pageDirection);
        return false;
    }); //end click

    /// =HISTORY
    //  note: Chrome and Safari will fire a popstate event when the page loads but Firefox doesnt. When your page loads, it might have a non-null state object and the page will receive an onload event, but no popstate event. (window.history.state; on refresh page)
    if (window.addEventListener) {
        window.addEventListener('popstate', function(e) {
            if ($_html.hasClass('mobile')) return false;
            if (!e.state && $_html.hasClass('safari')) return false;  //webkit bug
            if (!e.state) return false;  //webkit bug on pagespeed, without this can+t go to the page but we lose first history
            $_body.addClass("js-no-ajax");
            $("html,body").addClass("js-byrefresh");
            window.location = window.location; // reload page for this new adress!
            return false;
        });
    } //endif: does not excute for <= IE8

    /*-------------------------------------------------------------------------------------------
    =EVENTS General
    --------------------------------------------------------------------------------------------*/
    var $btn_close_mainNav = $("#header-main .btn-close"),
        $btn_arrow_square = $(".btn-arrow");

    $(".js-btn-mainNav-close, #header-bg").on('click touchstart', function(event) {
        event.stopImmediatePropagation();

        $_btn_mainNav.click();
        $btn_close_mainNav.removeClass('over');
        //mainNav_controll(true);
        // $("#nav-main").hide();
        event.stopPropagation();
        event.preventDefault();
        return false;
    });

    $("#header-bg").on('mouseenter', function(event) {
        $btn_close_mainNav.addClass('over');
    });
    $("#header-bg").on('mouseleave', function(event) {
        $btn_close_mainNav.removeClass('over');
    });

    $("#nav-main-list a, #nav-main-sec a").on('click', function(event) {
        $_btn_mainNav.click();

        // if ( ! $_body.hasClass('mobile') ){

        // } else {
        //   $("html,body").removeClass("open-nav");
        // }

    });

    /* *** =BTN SQUARES with ARROWS */
    $(document).on("mouseenter", ".btn-arrow", function(event) {
        var $this = $(this);
        if ($this.hasClass("loading")) return false;
        $this.doTimeout("fOver", 100, "addClass", "over");
        event.preventDefault();
    }); //end click

    $(document).on("mouseleave", ".btn-arrow", function(event) {
        var $this = $(this);
        if ($this.hasClass("loading")) return false;
        $this.doTimeout("fOver", 0, "removeClass", "over");
        event.preventDefault();
    });

    $(document).on("click", ".btn-arrow", function(event) {
        if ($_body.hasClass('mobile')) return true;
        var $this = $(this);
        $this.doTimeout("fOver", 0, "removeClass", "over");
        //event.preventDefault();
    });

    $(document).on("mouseleave", ".underline-anim", function(event) {
        var $this = $(this);
        if( $this.hasClass("hover-out") ) return;
        $this.addClass("hover-out");
        $this.doTimeout("fOverUnderline", 500, "removeClass", "hover-out");
        event.preventDefault();
    });


    /* *** =BTN WATCH MODALITY */
    $(document).on("mouseenter", ".watch-modality", function(event) {
        var $this = $(this);
        if ($this.hasClass("loading")) return false;
        $this.doTimeout("fOver", 100, "addClass", "over");
        event.preventDefault();
    }); //end click

    $(document).on("mouseleave", ".watch-modality", function(event) {
        var $this = $(this);
        if ($this.hasClass("loading")) return false;
        $this.doTimeout("fOver", 0, "removeClass", "over");
        event.preventDefault();
    });

    $(document).on("click", ".watch-modality", function(event) {

        if ($_body.hasClass('mobile')) return true;
        var $this = $(this);
        $this.doTimeout("fOver", 0, "removeClass", "over");
        event.preventDefault();
    });


    /**** =main nav svg */
    $(document).on("mouseenter", "#nav-main-list a", function(event) {
        var $this = $(this);
        $this.doTimeout("fOver", 50, "addClass", "over");
        event.preventDefault();
    }); //end click

    $(document).on("mouseleave", "#nav-main-list a", function(event) {
        var $this = $(this);
        $this.doTimeout("fOver", 0, "removeClass", "over");
        event.preventDefault();
    });

    /**** =AUDIO BTN */
    $_audioBtn.on("click", function(event) {
        var $this = $(this);
        ( $this.hasClass("sound-on") ) ? $this.removeClass("sound-on") : $this.addClass("sound-on");

        if ( _audioGlobal ) {
          _audioGlobal = false;
          audioMuteAll();
        } else {
          _audioGlobal = true;
          audioUnMute();
        }
        event.preventDefault();
    });



    /*-------------------------------------------------------------------------------------------
    =KEYS and CLICK
    --------------------------------------------------------------------------------------------*/
    $(document).on("keydown", function(event) {
        switch (event.which) {
            case 40: //down
                //return false;
                break;
            case 38: //up
                // return false;
                break;
            case 39: //next
                if ( ($('.page-current .has-arrows').length) ) {
                    $("#nav-main-control a.next").click();
                }
                if ($('body').hasClass('modal-open')) {
                    //animSlide("next");
                    $("#modalWrapper a.next").click();
                }
                return false;
                break;
            case 37: //prev
                if ( ($('.page-current .has-arrows').length) ) {
                    $("#nav-main-control a.prev").click();
                }
                if ($('body').hasClass('modal-open')) {
                    //animSlide("prev");
                    $("#modalWrapper a.prev").click();
                }
                return false;
                break;
            case 27: //close (esc)
                if ($('body').hasClass('modal-open')) {
                    //modalClose(); //modal
                    $("#lightbox .btn-close-modal").click()
                    return false;
                }
                if ($('.content-horarios').hasClass('open')) {
                    $('.page-current .js-btn-calendar-close .btn').click();
                } else {
                    $_btn_mainNav.click();
                }
                //if ( $('body').hasClass('openNav') ) $_btn_mainNav.click();

                return false;
            break
            default:
                break;
        } //end switch
    }); //end keypress

    // $(document).on("swiperight", function(event) {
    //   if ( ($('.page-current .has-arrows').length) ) {
    //     $("#nav-main-control a.prev").click();
    //   }
    // });
    //  $(document).on("swipeleft", function(event) {
    //   if ( ($('.page-current .has-arrows').length) ) {
    //     $("#nav-main-control a.next").click();
    //   }
    // });

    /*-------------------------------------------------------------------------------------------
    =RESIZE on
    --------------------------------------------------------------------------------------------*/
    $_window.on('resize', $.debounce(100, function() {
        //** =recalculate global variables
        calculateGlobalValues();
        //** =MAIN NAVIGATION
        if (Modernizr.mq('(max-width: 699px)')) {
            $("html,body").removeClass("open-nav");
            $_mainHeaderSlide.attr('style', '');
            $("#header-bg").attr('style', '');
        }

        //** =MODALIDADES ALL (need to recalculate functions)
        if($_body.hasClass("modalidades-all") && !$_body.hasClass("mobile"))
            modalidadesPage();

        if ($_body.hasClass('modal-open')) {
            modalResize();
        }
    })) //end resize window

    //RESIZE INPUT
    function resizeInput() {
        if ( $("body").hasClass("mobile"))  return;
        var $this = $(this);
        $this.attr('size', $this.val().length);
    }
    $("input.resizeIt")
        // event handler
        .keyup(resizeInput)
        // resize on page load
        .each(resizeInput);

    /*-------------------------------------------------------------------------------------------
    =onSCROLL
    --------------------------------------------------------------------------------------------*/
    $_window.on("scroll.nav", rAF_scroll_nav)

    function rAF_scroll_nav() {
        if ( $_body.hasClass('mobile') || $_html.hasClass('safari') || $_html.hasClass('ios')) return;
        window.requestAnimationFrame(f_rAF_scroll_nav);
    }

    function f_rAF_scroll_nav() {
        var yScroll = verge.scrollY();
        if ( $_body.hasClass("home") ) {
          ( yScroll > 2*_globalViewportH ) ? $_mainNavWrap.addClass("goBg") : $_mainNavWrap.removeClass("goBg");
          return;
        }
        ( yScroll > 100 ) ? $_mainNavWrap.addClass("goBg") : $_mainNavWrap.removeClass("goBg");
    }

    /////////////////////////
}); //END LOAD DOCUMENT

/*******************************************************************************************
 **                                                                                       **
    =SLIDESHOWS PLUGIN SLICK
    only if i have more then 4 elements
 **                                                                                       **
*********************************************************************************************/

function slideshow_slick() {
  var $slideObg = $(".slideshow-slick");

  $slideObg.each(function() {
      var $this = $(this);

      $this.slick({
        infinite: false,
        cssEase: "cubic-bezier(.56,.13,.06,.97)",
        dots: true,
        arrows: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1271,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })//end plugin
  })//end each

  $slideObg.on('init afterChange', function(event, slick, direction){
    var $removeOver = $(".slick-slide"),
        $addOver = $(".slick-active");

    if (Modernizr.mq('(max-width: 414px)')) {
      $removeOver.removeClass("over");
    } else {
      $removeOver.removeClass("over");
      $addOver.addClass("over");
    }
  })

}//end function

/** *******************************************************************************************
     =AUDIO
*********************************************************************************************/
// ** BTN AUDIO **/
function audioBtnShow(logic) {
  (logic) ? $_audioBtn.removeClass("hide") : $_audioBtn.addClass("hide");
}

// ** CROSSFADE **/
function audioCrossFade($el1, $el2, time) {
    var i=0,
        x=0;
    $el2.volume=0;
    $el2.play();
    $.doTimeout( time,function(){
        i = (i+1);
        x = i/100;
        var loss = Math.cos(x * 0.5*Math.PI); // volume down
        var gain = Math.cos((1.0 - x) * 0.5*Math.PI); // volume up
        $el1.volume=loss;
        $el2.volume=gain;
        if( i < 100 ) {
          return true;
        } else {
          $el1.pause();
          $el1.currentTime = 0;
          return false;
        }
    })
}//end function audioCrassfade


// ** FADE IN OUT **/
function audioFade($el1, inout, time) {
    var i=0,
        x=0,
        vl = null;
    if ( inout !== "out" ) {
      $el1.volume=0;
      if ( !($('.page-current .home').length) ) $el1.play();
    }

    $.doTimeout(time,function(){
     // console.log(i)
        i = (i+1);
        x = i/100;
        if ( inout === "out") {
          //var vl = Math.cos(x * 0.5*Math.PI);
          vl = (1.0 - x) ;
        } else {
          vl = x;
          //var vl = Math.cos((1.0 - x) * 0.5*Math.PI);
        }
        $el1.volume=vl;
        if( i < 100 ) {
          return true;
        } else {
          if ( inout === "out" ) {
              if ( !($('.page-current .home').length) ) {
                $el1.pause();
                $el1.currentTime = 0;
              }
          }
          return false;
        }
    })
}//end function audioCrassfade

// ** MUTE ALL AUDIO  **/
function audioMuteAll() {
  if ( !_audioSingleM.paused  ) {
    audioFade(_audioSingleM, "out", 16);
  }
  if ( !_audiAllM.paused  ) {
    audioFade(_audiAllM, "out", 16);
  }
  if ( ($('.page-current .home').length) ) {
    audioFade($homeAudio_, "out", 16);
    if ( !$homeVideo_.pause() ) {
      audioFade($homeVideo_, "out", 16);
    }
  }

}//end function audioCrassfade

// ** PLAY IF GLOBAL is MUTED **/
function audioUnMute() {
  if ( $('.page-current .modalidades.has-arrows').length  ) {
    audioFade(_audioSingleM, "in", 16);
  }
  if ( $('.page-current .modalidades-all').length ) {
    audioFade(_audiAllM, "in", 16);
  }

  if ( ($('.page-current .home').length) ) {
    if ( !$homeVideo_.pause() ) {
      audioFade($homeVideo_, "in", 16);
    }
  }

}//end function audioCrassfade



/*******************************************************************************************
 **                                                                                       **
    =MODAL =LIGHTBOX
 **                                                                                       **
*********************************************************************************************/
function startModal() {
  var $modalBg = $("#modal-bg"),
    $modalWrapper = $("#modal-wrapper"),
    $modalContent = $("#modal-content"),
    $btnModal = $(".modal"),
    originalURL = "",
    originalTitle = "";



  //CLICK -event open modal (todas as modais tem de ter esta classe para abrir)
  $(document).on('click', '.modal', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var $this = $(this);
        originalURL = window.location.pathname;
        originalTitle = $('head title').text();


    var forContent = $this.attr("data-ajaxUrl"),
        forUrl = $this.attr("href"),
        forTitle = $this.attr("data-title");
    //for history
    // history.replaceState({}, forTitle, forUrl);
    $('head title').html(forTitle);

    if (_global_allowNavigate) {
        openModal(forContent, originalURL, originalTitle)
    }
    return false
  }) //end click

  //CLICK -event close modal
  $(document).on('click', '#lightbox .btn-close-modal', function(event) {
    if ($_body.hasClass("js-no-ajax")) return;

    event.stopImmediatePropagation();
    event.preventDefault();
    event.stopPropagation();

    if($(this).parent().hasClass("promo-lightbox"))
      Cookies.set('promo-modal-closed', true);

    closeModal(originalURL, originalTitle);
  });

  //RIGHTCLICK Open brand guides
  $(document).on("contextmenu", ".brand-guides", function(event) {
    event.preventDefault();
    event.stopPropagation();

    var $this = $(this);
        originalURL = window.location.pathname;
        originalTitle = $('head title').text();


    var forContent = $this.attr("data-url-brandAjax"),
        forUrl = $this.attr("data-url-brand"),
        forTitle = $this.attr("data-title-brand");
    //for history
    history.replaceState({}, forTitle, forUrl);
    $('head title').html(forTitle);

    if (_global_allowNavigate) {
        openModal(forContent, originalURL, originalTitle)
    }
    return false

  });

  //FUNCTION OPEN MODAL
  function openModal(forContent, originalURL, originalTitle) {

    //Evitar que sejam feitas mais chamadas ajax enquanto esta se está a processar
    _global_allowNavigate = false;
    $_body.addClass("js-loading-page");

    $modalContent.velocity({
        scale: .7,
        opacity: 0
    }, 0);
    $modalBg.velocity({
        opacity: 0
    }, 0);

    $modalContent.load(forContent + " .toload", function() {
      var $this = $(this);
      //Nao esquecer _global_allowNavigate = true depois de carregar e tirar a classe no ajax se abre via ajax
      $_body.removeClass("js-no-ajax "); //I am using ajax

      if (!$this.html()) { //go to 404
          window.location = forContent;
          return false;
      }
      $("html,body").addClass("modal-open");
      $_body.removeClass("js-loading-page");

      //ga('send', 'pageview', window.location.pathname); //analytics

      var fPreload = $("#modal-content .toload img:eq(0)").imagesLoaded();

      fPreload.always(function(instance) {
          //animation contents
          $modalContent
              .velocity({
                  scale: [1, .7]
              }, {
                  duration: 700,
                  easing: [.02, .78, 0, .95],
                  queue: false,
                  delay: 50
              })
              .velocity({
                  opacity: [1, 0],
              }, {
                  duration: 200,
                  easing: "ease"
              })


          $modalBg
              .velocity({
                  opacity: [.8, 0]
              }, {
                  duration: 1000,
                  easing: "ease",
                  complete: endForBtnClose
              })
      })

      //Close Outside Lightbox can't delegate event to document
      $('#lightbox').on("clickoutside", function(event) {
          event.preventDefault();
          event.stopPropagation();
           event.stopImmediatePropagation();
          $("#lightbox .btn-close-modal").click();

      }); //end click


      if($('.toload').hasClass('promo-lightbox')){
        formPromocaoEvents();
      }

      if($('.toload').hasClass('marcar-visita-lightbox')){
        formMarcarVisitaEvents();
      }
      //Podemos continuar a navegar
      _global_allowNavigate = true;
    });

  } //end Open Modal

  //FUNCTION CLOSE MODAL
  function closeModal(originalURL, originalTitle) {
    $modalContent
      .velocity({
        scale: [.9, 1]
      }, {
        duration: 700,
        easing: "ease",
        queue: false,
        delay: 50
      })
      .velocity({
        opacity: [0, 1],
      }, {
        duration: 500,
        easing: "ease"
      })


    $modalBg
      .velocity({
        opacity: [0, .8]
      }, {
        duration: 1000,
        easing: "ease",
        complete: function() {
          history.replaceState({}, originalTitle, originalURL);
          $modalWrapper.removeClass("js-on");
          $("#modal-wrapper").scrollTop(0);
          $('head title').html(originalTitle);
          $("html,body").removeClass("modal-open");
          $("#lightbox").remove();
          $(".modal-open #modal-wrapper").off('scroll', scroll_fixBtnClose);
        }
      })
    return false;


  } //end Close Modal

  // fixe btnClose
  function endForBtnClose(){
    $modalWrapper.addClass("js-on");
    var $socialReference=$(".modal-open #modal-wrapper .btn-close-modal");
    var offset_ = $socialReference.position();
        _globalYiniForBtnClose=offset_.top;
    $(".modal-open #modal-wrapper").on('scroll', scroll_fixBtnClose);
  };//end function

  //** =FIX Close Modal on scroll
  function scroll_fixBtnClose(){
    var YpageScrollForClose=$(".modal-open #modal-wrapper").scrollTop();

    if( YpageScrollForClose >=  _globalYiniForBtnClose) {
      var aux=YpageScrollForClose-_globalYiniForBtnClose-1;
      $('.btn-close-modal').css({transform: 'translateY('+ aux +'px)' });
    }
    else{
      $('.btn-close-modal').css({transform: 'translateY(0)' });
    }
  }
} //////end function startModal

/** *******************************************************************************************
    =DEFAULT BURO EVENTS
*********************************************************************************************/
function defaultBuroEvents() {
    //OPEN NEW WINDOW
    $("a[rel=external]").click(function(event) {
        event.stopImmediatePropagation();
        event.preventDefault();
        event.stopPropagation();
        var linkExterno = window.open($(this).attr("href"));
        return linkExterno.closed;
    })
    //PRINT
    $("a[rel=print]").click(function() {
        var imprimir = window.print();
        return false;
    })
    //E-MAIL: has classclass="email", e [-at-]
    $("a.email").each(function() {
        var mailReal = $(this).text().replace("[-at-]", "@");
        $(this).text(mailReal);
        $(this).attr("href", "mailto:" + mailReal);
    })
    //CLEAR FORMS
    $('input[type=text], input[type=email], input.text, input.email, textarea').each(function() {
        var $this = $(this);
        if ( !$this.hasClass("txtClear") ) return;

        var defeito = this.defaultValue;
        $this.focus(function() {
            $this.parents("form").addClass("focus-on");
            if ($this.val() == defeito) {
                $this.val("")
            }
        });
        $this.blur(function() {
            $this.parents("form").removeClass("focus-on");
            if ($this.val() == "") {
                $this.val(defeito)
            }
            $("input.resizeIt").each(resizeInput); //exception if i have resize it
        });
    })
    //OPEN POPUP
    $(".newWindow").click(function() {
        event.stopImmediatePropagation();
        event.preventDefault();
        event.stopPropagation();
        var newwindow = window.open($(this).attr('href'), '', 'height=480,width=560');
        if (window.focus) {
            newwindow.focus();
        }
        return false;
    })
    //MUTE SOUND ON TAB CHANGED
    Visibility.change(function (e, state) {
      if ( 'hidden' == state ) {
        _audiAllM.volume = 0;
        _audioSingleM.volume = 0;
        if ( ($('.page-current .home').length) ) {
          if ( !$homeVideo_.pause() && !$("#home-start .bg-p").hasClass("go-video-sound")) {
            $homeVideo_.pause();
          }
        }
      }
      if ( 'visible' == state ) {
        audioUnMute();
        if ( ($('.page-current .home').length) ) {
          if ( !$homeVideo_.pause() && $("#home-start .bg-p").hasClass("go-video-sound")) {
            $homeVideo_.play();
          }
        }
      }
    });

    // function fadeOutLeaveBrowser(time) {
    //   var i=0,
    //       x=0,
    //       vl = null;

    //   var audioFadeInterval = setInterval(function(){
    //      i = (i+1);
    //      x = i/10;
    //      vl = (1.0 - x);
    //      console.log("fds");
    //     if( vl <= 0) {
    //       clearInterval(audioFadeInterval);
    //     }
    //     //Variables for each page
    //     _audiAllM.volume = vl;
    //     _audioSingleM.volume = vl;
    //     $homeAudio_.volume = vl;
    //   }, time);
    // }
//end defaultBuroEvents
}

function manageBodyClasses() {
  if($_body.hasClass("js-no-ajax")) {
    $_body.addClass($(".page-main.page-current .page-toload").attr("data-bodyClass"));
  } else {
    $_body.removeClass($(".page-main.page-current .page-toload").attr("data-bodyClass"));
    $_body.addClass($(".page-main.page-next .page-toload").attr("data-bodyClass"));
  }
}

function blogAllPage() {
  /*Variables*/
  var $jsLoadMore = $('.js-load-more'),
      $list = $(".nutricao-list > .block-content");

  /*DOM variables*/

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.blogAll", rAF_scroll_BlogAllP);
    }
    else {
      _page_scroll_listener = function(status) {
        blogAll_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("blog-all page");

    /*inits*/

    //Events
    audioBtnShow(false);

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventBlogAll", $.debounce(500, resizeBlogAll));
  }

  var kill = function() {
    //Kill Events

    //DEFAULT KILL EVENTS
    $_window.off("scroll.blogAll");
    $_window.off("resize.resizeEventBlogAll");
    
    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {
    $jsLoadMore.on("click", function(event) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();

      //var url = $(this).attr('href');
      var url = $(this).attr('data-ajaxUrl');

      $.get(url, function(data) {
        var $source = $('<div>' + data + '</div>');
        var $load_more_link = $source.find('.js-load-more');

        $source.find('.nutricao-list > .block-content article').each(function(index){
          $(this).attr("id", "js-loaded-" + index).addClass("js-loaded");
        });
        $list.append($source.find('.nutricao-list > .block-content > *')
          .velocity({
            opacity: [1, 0]
          }, {
            duration: 200,
            easing: "ease",
            complete: function(){
              //Facebook Comments
              $list.find('.js-loaded').each(function(index){
                var id = "js-loaded-" + index;
                FB.XFBML.parse(document.getElementById(id));
              }).removeClass("js-loaded").attr("id","");

            }
          }));

        if ($load_more_link.length > 0) {
          $(".js-load-more").show();
          $(".js-load-more").attr("href", $load_more_link.attr("href"));
          $(".js-load-more").attr("data-ajaxUrl", $load_more_link.attr("data-ajaxUrl"));
        } else {
          $(".js-load-more").hide();
        }
      });
    });

    //Facebook Comments
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.async=true;
      js.src = "//connect.facebook.net/pt_PT/sdk.js#xfbml=1&version=v2.5";
      fjs.parentNode.insertBefore(js, fjs);

    }(document, 'script', 'facebook-jssdk'));

    if(!$_body.hasClass("js-no-ajax")){
      $.doTimeout(200, function(){
        if(FB)
          FB.XFBML.parse();
      });
    }
  }

  function resizeBlogAll() {

  }

  function rAF_scroll_BlogAllP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_BlogAllP);
    }
  }

  function f_rAF_scroll_BlogAllP(status) {
    
  }

  return {
    init: init,
    kill: kill
  }
}
function blogSinglePage() {
  /*Variables*/

  /*DOM variables*/

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.blogSingle", rAF_scroll_BlogSingleP);
    }
    else {
      _page_scroll_listener = function(status) {
        blogSingle_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("blog-single page");

    /*inits*/

    //Events
    audioBtnShow(false);

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventBlogSingle", $.debounce(500, resizeBlogSingle));
  }

  var kill = function() {
    //Kill Events

    //DEFAULT KILL EVENTS
    $_window.off("scroll.blogSingle");
    $_window.off("resize.resizeEventBlogSingle");
    
    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {
    //Facebook Comments
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.async=true;
      js.src = "//connect.facebook.net/pt_PT/sdk.js#xfbml=1&version=v2.5";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    if(!$_body.hasClass("js-no-ajax"))
      $.doTimeout(200, function(){
        FB.XFBML.parse();
      });
  }

  function resizeBlogSingle() {

  }

  function rAF_scroll_BlogSingleP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_BlogSingleP);
    }
  }

  function f_rAF_scroll_BlogSingleP(status) {
    
  }

  return {
    init: init,
    kill: kill
  }
}
function corporatePage() {
  /*Variables*/
  var $form = $("#form-parceiro"),
      $formInputs = $("#form-parceiro input"),
      $submitForm = $form.find("button"),
      $tabsNav = $(".tabs nav"),
      $tabs = $(".tabs-list"),
      $tabsContentWrapper = $(".tabs-content-wrapper"),
      $tabsList = $(".tabs-list li"),
      $tabsContent = $(".tabs-content"),
      $radioButton = $(".radio-buttons li"),
      duration_height = 0;
      
  /*DOM variables*/

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.corporate", rAF_scroll_CorporateP);
    }
    else {
      _page_scroll_listener = function(status) {
        Corporate_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("corporate page");

    /*inits*/

    //Events
    audioBtnShow(false);

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventCorporate", $.debounce(500, resizeCorporate));
  }

  var kill = function() {
    //Kill Events

    //DEFAULT KILL EVENTS
    $_window.off("scroll.corporate");
    $_window.off("resize.resizeEventCorporate");
    
    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {
    $tabsList.on("click", function(){
      var $this = $(this),
          target =$this.data("target"),
          delay = 800,
          distance_top = $tabsContentWrapper.offset().top - verge.scrollY();

      if(distance_top > 71)
        delay = 0;

      if( Modernizr.mq('(min-width: 1025px)') && QA_scene.enabled() ){
        goTo( $tabsContentWrapper, 500, [0.7,0,0.3,1], -72 );
      }
      $.doTimeout(delay, function(){
        $tabsList.removeClass("on");
        $this.addClass("on");
        $tabsContent.removeClass("on");
        $(target).addClass("on");
      });
    });

    $form.find(".rgpd-wrapper svg").on("click", function() {
      var $this = $(this);
      $this.closest("div").toggleClass("active");

      if($this.closest("div").hasClass("active")){
        $this.closest("div").find("input").prop('checked', true);
        $form.find("button").addClass("enable");
      } else{
        $this.closest("div").find("input").prop('checked', false);
        $form.find("button").removeClass("enable");
      }
    });

    $radioButton.on("click", function(){
      var $this = $(this),
          inputChecked = $this.data('check');
  
      if($this.find(".radio-selection").hasClass("selected")){
        $this.find(".radio-selection").removeClass("selected").addClass("unselected");
        $form.find('input[data-check-input="' + inputChecked + '"]').attr('checked', false);
      }
      else {
        $this.find(".radio-selection").removeClass("unselected").addClass("selected");
        $form.find('input[data-check-input="' + inputChecked + '"]').attr('checked', true);
      }
    });

    $formInputs.blur(function() {
      var $this = $(this),
          defeito = this.defaultValue;

      if(!$this.hasClass("required") && !$this.val() ) return;
      check($this, defeito, 0);

      if ($this.hasClass('erro')) {
          $this.parent().addClass('erro');
      } else {
          $this.parent().removeClass('erro');
      }
    });

    $formInputs.focus(function() {
        var $this = $(this);
        $this.removeClass('erro');
        $this.parent().removeClass('erro');
    });

    /*Submit Form*/
    $submitForm.on("click", function(){
      event.preventDefault();
        if (validateForm($form) && !$form.hasClass('sending')) {
          formAnimLoadingNEW($submitForm, 'loading');
          $form.addClass('sending');
          // campainMonitorForm($form);

          console.log($form.serialize());
          $.doTimeout(2700, function() {
            $.ajax({

              type: 'GET',
              dataType: 'xml',                
              url: $form.attr('action') + $form.serialize(),

              // data: $form.serialize(),
              // type: $form.attr('method'),
              // dataType: 'json',
              // url: $form.attr('action'),
              // cache: false,
              // contentType: 'application/json; charset=utf-8',
              success: function(data) {
                // console.log("sent", data);
                if (data.getElementsByTagName("status")[0].textContent == 'success') {                                                                                    
                  if(data.getElementsByTagName("ERROR").length > 0){                      
                    formAnimLoadingNEW($submitForm, 'sent-error');
                    $form.removeClass('sending');
                  } else {
                    formAnimLoadingNEW($submitForm, 'sent-ok');
                    $form.removeClass('sending');
                  }
                }
                else{
                  formAnimLoadingNEW($submitForm, 'sent-error');
                  $form.removeClass('sending');
                }

                  // if (data.result == 'success') {
                  //     formAnimLoadingNEW($submitForm, 'sent-ok');
                  //     $form.removeClass('sending');
                  // } else {
                  //     formAnimLoadingNEW($submitForm, 'sent-error');
                  //     $form.removeClass('sending');
                  // }
              },
              error: function(data) {
                // console.log("erro", data);
                formAnimLoadingNEW($submitForm, 'sent-error');
                $form.removeClass('sending');
              }
            });
          })//end loading simulation
        }
    });

    var QA_controller = new ScrollMagic.Controller();

    var QA_scene = new ScrollMagic.Scene({triggerElement: ".corporate-parcerias .tabs-content-wrapper", triggerHook: "onLeave", duration: parcerias_getQAheight })
      .setPin(".corporate-parcerias .tabs-list")
      .addTo(QA_controller)
      .offset(-72);

      if( Modernizr.mq('(max-width: 1023px)') ) {
        QA_scene.enabled(false);
      }
      if( $_html.hasClass("mobile") ) {
        QA_scene.enabled(false);
        QA_scene.destroy(true);
      }

    function parcerias_getQAheight() {
      var $tabsContentLast = $(".corporate-parcerias .tabs-content.on li:last-child");
      if ( !$tabsContentLast.length) return;
      if( Modernizr.mq('(max-width: 1023px)') )
        duration_height = 0;
      else
        duration_height = $tabsContentLast.position().top - 210;
      return duration_height;
    }

    var $gymLink = $(".corporate .content-2c-fullH-gym .visual a");

    $gymLink.on("mouseenter", function(){
      var $this = $(this);
      $this.parent().addClass('over');
    })
    $gymLink.on("mouseleave", function(){
      var $this = $(this);
      $this.parent().removeClass('over');
    })
  }

  function resizeCorporate() {
    if( Modernizr.mq('(max-width: 1023px)') && QA_scene.enabled() ){
      QA_scene.enabled(false);
    }
    else if( Modernizr.mq('(min-width: 1024px)') && !QA_scene.enabled() ){
      QA_scene.enabled(true);
    }
  }

  function rAF_scroll_CorporateP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_CorporateP);
    }
  }

  function f_rAF_scroll_CorporateP(status) {

  }

  return {
    init: init,
    kill: kill
  }
}
function page404Page() {
  /*Variables*/
  $four04Video = $(".page-404 .bg-video")[0];
  $four04VideoPromise_ = $four04Video.play();

  /*DOM variables*/

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.error", rAF_scroll_ErrorP);
    }
    else {
      _page_scroll_listener = function(status) {
        error_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("error page");

    /*inits*/

    //Events
    audioBtnShow(true);

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventError", $.debounce(500, resizeError));
  }

  var kill = function() {
    //Kill Events
    if(_loop_404 != null )
      _loop_404.stop();

    //DEFAULT KILL EVENTS
    $_window.off("scroll.error");
    $_window.off("resize.resizeEventError");

    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {
    var $muteBtn = $(".mute-button");

    $muteBtn.on("click", function() {
      var $this = $(this);
      if($this.hasClass("sound-on"))
        _loop_404.start("audio");
      else
        _loop_404.stop();
    });

    if ($four04VideoPromise_ !== undefined) {
      $four04VideoPromise_.then(function() {
        if (!$_body.hasClass('mobile')) {
          _loop_404 = new SeamlessLoop();
          _loop_404.addUri("/public/audio/cant-touch-this-loop.mp3", 7185, "audio");
          _loop_404.callback(soundsLoaded);
        }

        function soundsLoaded() {
          _loop_404.start("audio");
          _loop_404.volume(0.5);
        }
      }).catch(function(error) {
        //error
      });
    }
  }

  function resizeError() {

  }

  function rAF_scroll_ErrorP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_ErrorP);
    }
  }

  function f_rAF_scroll_ErrorP(status) {

  }

  return {
    init: init,
    kill: kill
  }
}
function ginasioPage() {
  /*Variables*/
  var $form = $("#form-visita"),
    $formInputs = $("#form-visita input"),
    $submitForm = $form.find("button");

  var $addClassAnim = $(".to-anim"),
    $addClassAnimNow = $(".to-anim-now"),
    whenViewport = Math.round(_globalViewportH / 1.4);
  var $$gymVideo = $("#gym-video"),
    videoTotalTime = $$gymVideo.attr("data-time"),
    $gymVideo = $("#gym-video")[0];

  if (!$_body.hasClass("mobile")) $gymVideoPromise_ = $gymVideo.play();

  /*DOM variables*/

  var init = function () {
    if (_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.ginasio", rAF_scroll_GinasioP);
    } else {
      _page_scroll_listener = function (status) {
        ginasio_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("ginasio page");

    /*inits*/

    //Events
    audioBtnShow(false);

    if (!$_body.hasClass("mobile")) {
      if ($gymVideoPromise_ !== undefined) {
        $gymVideoPromise_
          .then(function () {})
          .catch(function (error) {
            //error
          });
      }
    }

    //DEFAULT EVENTS
    initEvents();
    if (!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventGinasio", $.debounce(500, resizeGinasio));
  };

  var kill = function () {
    //Kill Events
    videoEndedControlGinasios(false);

    //DEFAULT KILL EVENTS
    $_window.off("scroll.ginasio");
    $_window.off("resize.resizeEventGinasio");

    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if (_customScroll) _customScroll.removeListener(_page_scroll_listener);
  };

  /*page functions*/
  function initEvents() {
    $(".ginasios .content-header .center-stage").addClass("go");

    $form.find(".rgpd-wrapper svg").on("click", function () {
      var $this = $(this);
      $this.closest("div").toggleClass("active");

      if ($this.closest("div").hasClass("active")) {
        $this.closest("div").find("input").prop("checked", true);
        $form.find("button").addClass("enable");
      } else {
        $this.closest("div").find("input").prop("checked", false);
        $form.find("button").removeClass("enable");
      }
    });

    $formInputs.blur(function () {
      var $this = $(this),
        defeito = this.defaultValue;

      if (!$this.hasClass("required") && !$this.val()) return;
      check($this, defeito, 0);

      if ($this.hasClass("erro")) {
        $this.parent().addClass("erro");
      } else {
        $this.parent().removeClass("erro");
      }
    });

    $formInputs.focus(function () {
      var $this = $(this);
      $this.removeClass("erro");
      $this.parent().removeClass("erro");
    });

    /*Submit Form*/

    $submitForm.on("click", function () {
      event.preventDefault();
      if (validateForm($form) && !$form.hasClass("sending")) {
        formAnimLoadingNEW($submitForm, "loading");
        $form.addClass("sending");
        // campainMonitorForm($form);

        $.doTimeout(2700, function () {
          $.ajax({
            type: "GET",
            dataType: "xml",
            url: $form.attr("action") + $form.serialize(),
            success: function (data) {
              if (
                data.getElementsByTagName("status")[0].textContent == "success"
              ) {
                if (data.getElementsByTagName("ERROR").length > 0) {
                  formAnimLoadingNEW($submitForm, "sent-error");
                  $form.removeClass("sending");
                } else {
                  formAnimLoadingNEW($submitForm, "sent-ok");
                  $form.removeClass("sending");
                }
              } else {
                formAnimLoadingNEW($submitForm, "sent-error");
                $form.removeClass("sending");
              }
            },
            error: function (data) {
              // console.log("erro", data);
              formAnimLoadingNEW($submitForm, "sent-error");
              $form.removeClass("sending");
            },
          });
        }); //end loading simulation
      }
    });

    if (!$_body.hasClass("mobile")) {
      videoEndedControlGinasios(true);
    }
  }

  //*** VIDEO *** //
  function videoEndedControlGinasios(start) {
    if (!start) {
      $.doTimeout("videoisplayingGinasios", false);
      return false;
    }
    var $toGoHere = $(".content-main-wrapper");
    if (!$gymVideo) return;
    $.doTimeout("videoisplayingGinasios", 40, function () {
      if ($gymVideo.currentTime >= videoTotalTime && !$gymVideo.paused) {
        goTo($toGoHere, 1200, [0.7, 0, 0.3, 1], 0);
        return false;
      }
      return true;
    }); //end timeout
  } //end videoEndedControl

  function resizeGinasio() {}

  function rAF_scroll_GinasioP() {
    if (!$_body.hasClass("mobile")) {
      window.requestAnimationFrame(f_rAF_scroll_GinasioP);
    }
  }

  function f_rAF_scroll_GinasioP(status) {
    var scrollVal = verge.scrollY();
    var dataDelay = 0;
    //
    $addClassAnim.each(function (i) {
      var $this = $(this);
      if (verge.inY($this, -whenViewport)) {
        if ($this.hasClass("anim-go")) return;
        $this.addClass("anim-go");
      } //end verge
    }); //end each

    $addClassAnimNow.each(function (i) {
      var $this = $(this);
      if (verge.inY($this, 0)) {
        if ($this.hasClass("anim-go")) return;
        $this.addClass("anim-go");
      } //end verge
    }); //end each

    //video
    if ($_body.hasClass("mobile") || !$gymVideo) return;
    if (scrollVal >= _globalViewportH - 130) {
      if ($gymVideoPromise_ !== undefined) {
        $gymVideoPromise_
          .then(function () {
            $gymVideo.pause();
          })
          .catch(function (error) {
            //error
          });
      }

      videoEndedControlGinasios(false);
    } else {
      videoEndedControlGinasios(true);

      if ($gymVideoPromise_ !== undefined) {
        $gymVideoPromise_
          .then(function () {
            $gymVideo.play();
          })
          .catch(function (error) {
            //error
          });
      }
    }
  }

  return {
    init: init,
    kill: kill,
  };
}

function ginasiosPage() {
  /*Variables*/
  var $gymColumn = $(".gym-column"),
      $headerGym = $(".header-ginasios"),
      sliderGymAll = null,
      page_loop = 0,
      mouseX = 0,
      container_offset = $(".header-ginasios .gym-column").width()*$(".header-ginasios .gym-column").length - _globalViewportW;

  /*DOM variables*/

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.ginasios", rAF_scroll_GinasiosP);
    }
    else {
      _page_scroll_listener = function(status) {
        ginasios_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("ginasios page");

    /*inits*/
    page_loop = _rAF_loop(animationLoop);

    if ($_body.hasClass('mobile')) {
      var sliderGymAll = new Swiper ('.header-ginasios', {
        grabCursor: true,
        slidesPerView: 'auto',
        resistanceRatio: 0.5,
        navigation: {
          nextEl: '.next.gym-btn',
          prevEl: '.prev.gym-btn',
        },
        containerModifierClass: 'header-ginasios',
        wrapperClass: 'scroll-wrapper-horizontal',
        slideClass: 'gym-column'
      })
    }

    //Events
    audioBtnShow(false);

    // if ( $_body.hasClass('mobile') ) return;

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventGinasios", $.debounce(500, resizeGinasios));

    if($_body.hasClass("mobile"))
      $_window.on("orientationchange.orientationEventGinasios", $.debounce(500, orientationGinasios));
  }

  var kill = function() {
    //Kill Events
    window.cancelAnimationFrame(page_loop);
    $headerGym.off("mousemove");
    if(sliderGymAll)
      sliderGymAll.destroy();

    //DEFAULT KILL EVENTS
    $_window.off("scroll.ginasios");
    $_window.off("resize.resizeEventGinasios");
    $_window.off("orientationchange.orientationEventGinasios");

    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {
    $gymColumn.find(".gym-link").on("mouseenter", function(){
      if ( $headerGym.hasClass("clickall") ) return;
      var $this = $(this);
      $this.find(".arrow-gyms").addClass("anim-arrow");
    })//end mouse enter

    $gymColumn.find(".gym-link").on("mouseleave", function(){
      if ( $headerGym.hasClass("clickall") ) return;
      var $this = $(this);
      $this.find(".arrow-gyms").removeClass("anim-arrow");
    })//end mouse leave

    $gymColumn.on("mouseenter", function(){
      if ( $headerGym.hasClass("clickall") ) return;
      var $this = $(this);
      $this.addClass("js-gym-anime");
    })//end mouse enter

    $gymColumn.on("mouseleave", function(){
      if ( $headerGym.hasClass("clickall") ) return;
      var $this = $(this);
      $this.removeClass("js-gym-anime");
    })//end mouse leave

    if (!$_body.hasClass('mobile')) {
      $gymColumn.find(".gym-link").on("click", function(){
        var $this = $(this),
            thisHrefAjax = $this.attr("data-ajaxUrl"),
            newContent = thisHrefAjax,
            scrollVal = verge.scrollY(),
            speed = null,
            curve = null;

        if (scrollVal > 0) {
          speed = 600;
          curve = "easeInOutQuint";
        } else {
          speed = 0;
          curve = 0;
        }

        goTo($_body, speed, curve, null);
        $headerGym.addClass("clickall");

        $.doTimeout(speed, function() {
          TweenMax.set($this.parent(), {
            width: _globalViewportW
          });
          TweenMax.set($this.parent().find(".block-bg-cover"), {
            x: 0,
            roundProps: "x"
          });
          TweenMax.to($this.parent(), 1, {
            x: "-=" + $this.parent().offset().left,
            roundProps: "x",
            zIndex: 1,
            ease: Expo.easeOut,
            onComplete: function() {
              $.doTimeout(500, function() {
                loadPagesSame(newContent);
              })
            }
          });
        })

        return;
      })//end click
    }

    // $(".gym-btn").on("mouseenter", function() {
    //   var $this = $(this);
    //   $this.find(".bg-hover").doTimeout("fOver", 100, "addClass", "over");
    //   event.preventDefault();
    // }).on("mouseleave", function() {
    //   var $this = $(this);
    //   $this.find(".bg-hover").doTimeout("fOver", 0, "removeClass", "over");
    //   event.preventDefault();
    // });

    if (!$_body.hasClass('mobile')) {
      $headerGym.on("mousemove", function(event) {
        var $this = $(this);

        if(!$this.hasClass("clickall"))
          mouseX = event.clientX;
      })
    }
  }

  function resizeGinasios() {
    container_offset = $(".header-ginasios .gym-column").width()*$(".header-ginasios .gym-column").length - _globalViewportW;
  }

  function orientationGinasios() {
    var sliderGymAll = document.querySelector('.header-ginasios').swiper;
    sliderGymAll.update();
  }

  function rAF_scroll_GinasiosP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_GinasiosP);
    }
  }

  function animationLoop() {
    page_loop = _rAF_loop(animationLoop);

    if (!$_body.hasClass('mobile')) {
      var offset = scaleBetween(mouseX, 0, container_offset, 0, _globalViewportW);

      TweenMax.set($(".scroll-wrapper-horizontal"), {
        x : -offset
      })
    }
  }

  function f_rAF_scroll_GinasiosP(status) {

  }

  return {
    init: init,
    kill: kill
  }
}
function homePage() {
  /*Variables*/
  var $campaign = $(".campaign-monitor"),
      $campaignCard = $(".campaign-monitor-wrapper"),
      title = $campaign.find("ul li a").text(),
      link = $campaign.find("ul li a").attr("href");
      $campaignCard.find("a").attr("href", link);
      $campaignCard.find(".campaign-monitor-title").text(title),
      scrollVal = 0,
      scrollLimit = 0,
      page_loop = 0,
      scrollDirection = null,
      sliderHome = null;

  var $svgP = $(".home-p"),
      $svgPcontainer = $("#home-start .bg-p"),
      $line = $("#home-start .line"),
      //$homeVideo = $("#home-video"),
      //videoTotalTime = $homeVideo.attr("data-time"),
      homeAudioPlayed = false,
      mouseX = 0,
      container_offset = $(".content-map-home .gym-column").width()*$(".content-map-home .gym-column").length - _globalViewportW;

  $homeVideo_ = $("#home-video")[0];
  $homeAudio_ = $("#soundfx_phive")[0];

  if (!$_body.hasClass('mobile'))
    $homeVideoPromise_ = $homeVideo_.play();

  var obgHomeHeadini = {};
      obgHomeHeadini.xi = 0;
      obgHomeHeadini.xf = _globalViewportH/2;
      obgHomeHeadini.yi = 1;
      obgHomeHeadini.yf = 3;
      obgHomeHeadini.m = (obgHomeHeadini.yf-obgHomeHeadini.yi)/(obgHomeHeadini.xf-obgHomeHeadini.xi);
      obgHomeHeadini.b = obgHomeHeadini.yi-obgHomeHeadini.m*obgHomeHeadini.xi;

  var homeHeadLine = {};
      homeHeadLine.xi = 0;
      homeHeadLine.xf = 1.5*_globalViewportH;
      homeHeadLine.yi = -200;
      homeHeadLine.yf = 0;
      homeHeadLine.m = (homeHeadLine.yf-homeHeadLine.yi)/(homeHeadLine.xf-homeHeadLine.xi);
      homeHeadLine.b = homeHeadLine.yi-homeHeadLine.m*homeHeadLine.xi;

  var $gymBlock = $(".content-gym-home"),
      $gymFixedBlock = $(".content-gym-home .visual"),
      $gymInfo = $(".content-gym-home .info"),
      $gymPics = $(".content-gym-home .toRect"),
      $gymInfoTrigger = $(".content-gym-home .triggerToRect"),
      height_gymInfoTrigger = [];

  //Prepare svg anim
  // if ( !$_body.hasClass('mobile') ) {
  //   var svgModal36Anim = new Vivus('svg-modal36-anim', {
  //                           type: "async",
  //                           duration: 45,
  //                           start: "manual"
  //                        });
  //   var svgCrossfitAnim = new Vivus('svg-crossfit-anim', {
  //                           type: "delayed",
  //                           duration: 45,
  //                           start: "manual"
  //                        });
  //   var svgMassagAnim = new Vivus('svg-massag-anim', {
  //                           type: "delayed",
  //                           duration: 45,
  //                           start: "manual"
  //                        });
  //   var svgModal24Anim = new Vivus('svg-modal24-anim', {
  //                           type: "async",
  //                           duration: 45,
  //                           start: "manual"
  //                        });
  //   var svgPoolAnim = new Vivus('svg-pool-anim', {
  //                           type: "async",
  //                           duration: 35,
  //                           start: "manual"
  //                        });
  //   var svgSpaAnim = new Vivus('svg-spa-anim', {
  //                           type: "async",
  //                           duration: 90,
  //                           start: "manual"
  //                        });
  // }

  /*DOM variables*/

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.home", rAF_scroll_HomeP);
    }
    else {
      _page_scroll_listener = function(status) {
        home_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("home page");

    /*inits*/
    page_loop = _rAF_loop(animationLoop);

    //Events
    audioBtnShow(true);

    if ($_body.hasClass('mobile')) {
      var sliderHome = new Swiper ('.content-map-home', {
        grabCursor: true,
        slidesPerView: 'auto',
        resistanceRatio: 0.5,
        navigation: {
          nextEl: '.next.gym-btn',
          prevEl: '.prev.gym-btn',
        },
        wrapperClass: 'scroll-wrapper-horizontal',
        slideClass: 'gym-column'
      });
    }

    if (!$_body.hasClass('mobile')) {
      if ($homeVideoPromise_ !== undefined) {
        $homeVideoPromise_.then(function() {
          $homeVideo_.pause();
        }).catch(function(error) {
          //error
        });
      }
    }

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventHome", $.debounce(500, resizeHome));

    if($_body.hasClass("mobile"))
      $_window.on("orientationchange.orientationEventHome", $.debounce(500, orientationHome));
  }

  var kill = function() {
    //Kill Events
    videoEndedControl(false);
    $(".content-map-home").off("mousemove");
    // VirtualScroll.off();
    window.cancelAnimationFrame(page_loop);
    if(sliderHome)
      sliderHome.destroy();

    //DEFAULT KILL EVENTS
    $_window.off("scroll.home");
    $_window.off("resize.resizeEventHome");
    $_window.off("orientationchange.orientationEventHome");

    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {
    /*Modalidades Random por ajax para contornar a cache*/
    var server_hostname = document.location.origin;
    $.ajax({
      url: server_hostname + '/wp-admin/admin-ajax.php',
      data: {
          action: 'initRandomModalidades'
      },
      success: function(data) {
          $('.list-modal-home').append(data);
      },
      error: function(data){
      }
    });

    if($_body.hasClass("mobile"))
      $_mainHeader.addClass("show");

    $line.addClass("startScroll");

    if ( !$_body.hasClass('mobile') ) {
      $(".sentence, .break").blast({
          delimiter: "character",
          search: false,
          tag: "span",
          customClass: "" ,
          generateIndexID: false,
          generateValueClass: false,
          stripHTMLTags: false,
          returnGenerated: true,
          aria: true
      });
    }
    else {
        TweenMax.set($("#home-start .call-to-action-leiria"), {
          autoAlpha: 1
        })
    }
    $("#home-start .sentence").css("opacity","1");
    if ( !$_body.hasClass('mobile') ) {
      if ( !$_html.hasClass('firefox') ) {
          $(".parallax-home-start").buroParallax({
              scale: false,
              scaleValue: 1,
              rotate: false,
              rotateYdy: 2.03,
              rotateXdx: 2.035,
              usePerspective: false,
              shineGlow: false,
              resetPositions: false,
              destroy: false
          });
      };
    }

    //*** GINASIOS GYM *** //

    //start cliprect
    $gymInfoTrigger.each(function(i) {
        var $this = $(this),
            positionYini = $this.offset().top - $this.innerHeight(),
            positionYend = positionYini + $this.innerHeight();
        height_gymInfoTrigger[i] = {
            iniScroll: positionYini,
            endScroll: positionYend
        }
    });//end each
    $gymPics.css("clip", "rect("+_globalViewportH+"px, "+_globalViewportW+"px, "+_globalViewportH+"px, 0px)");

    //*** MODALIDADES (use of .on because comes from ajax) *** //
    if (Modernizr.mq('(min-width: 414px)')) {
        $(document).on("mouseenter", ".modality-home .circle-btn", function(){
          var $this = $(this);
          $this.parent().addClass( "over" );
        })
        $(document).on("mouseleave", ".modality-home .circle-btn", function(){
          var $this = $(this);
          $this.parent().removeClass( "over" );
        })
    }


    //*** CAMPANHAS ** //
    if ( !$_body.hasClass('mobile') ) {
      if ( $_html.hasClass('chrome') ) {
          // $(".parallax-campg").buroParallax({
          //     scale: true,
          //     scaleValue: 1.020,
          //     rotate: false,
          //     rotateYdy: 0.03,
          //     rotateXdx: 0.035,
          //     usePerspective: true,
          //     shineGlow: true,
          //     resetPositions: true,
          //     destroy: false
          // })
      }
    }


    //**** =HASHTAG ****\\
    var hasHash = window.location.hash;
    if (hasHash != "") {
        goTo($("" + hasHash + ""), 2200, "easeInOutCubic");
    }

    // $(".gym-btn").on("mouseenter", function() {
    //   var $this = $(this);
    //   $this.find(".bg-hover").doTimeout("fOver", 100, "addClass", "over");
    //   event.preventDefault();
    // }).on("mouseleave", function() {
    //   var $this = $(this);
    //   $this.find(".bg-hover").doTimeout("fOver", 0, "removeClass", "over");
    //   event.preventDefault();
    // });

    if (!$_body.hasClass('mobile')) {
      $(".content-map-home").on("mousemove", function(event) {
        mouseX = event.clientX;
      });
    }
  }

  function videoEndedControl(start) {
    if ( !start ) {
      $.doTimeout("videoisplaying",false);
      return false;
    }

    $.doTimeout("videoisplaying", 100, function(){
      if ( $homeVideo_.currentTime >= videoTotalTime  && !$homeVideo_.paused) {
        goTo( $(".content-modal-home"), 1500, [0.7,0,0.3,1], 0);
        return false;
      }
      return true;
    })//end timeout
  }//end videoEndedControl

  function resizeHome() {
    $gymInfo.removeClass("goAnim");
    svgModal36Anim.play();
    svgCrossfitAnim.play();
    svgMassagAnim.play();
    svgModal24Anim.play();
    svgPoolAnim.play();
    svgSpaAnim.play();
    container_offset = $(".content-map-home .gym-column").width()*$(".content-map-home .gym-column").length - _globalViewportW;
  }

  function orientationHome() {
    var sliderHome = document.querySelector('.content-map-home').swiper;
    sliderHome.update();
  }

  function rAF_scroll_HomeP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_HomeP);
    }
  }

  function animationLoop() {
    page_loop = _rAF_loop(animationLoop);
    
    if (!$_body.hasClass('mobile')) {
      var offset = scaleBetween(mouseX, 0, container_offset, 0, _globalViewportW);

      TweenMax.to($(".scroll-wrapper-horizontal"), 1, {
        x : -offset,
        ease: Power4.easeOut
      })
    }
  }
  
  function f_rAF_scroll_HomeP(status) {
    var yScroll = verge.scrollY();
    console.log(yScroll);

    if(scollLastVal < yScroll){
      scrollPos = true;
    }else{
      scrollPos=false;
    }
    scollLastVal = yScroll;

    if(yScroll > 950) {
      if(scrollPos){
    var scaleIni = obgHomeHeadini.m * yScroll + obgHomeHeadini.b;
    var lineH = homeHeadLine.m * yScroll +homeHeadLine.b;

  }else{
    var scaleIni = obgHomeHeadini.m * yScroll - obgHomeHeadini.b;
    var lineH = homeHeadLine.m * yScroll -homeHeadLine.b;

  }
    }


    if(yScroll > 695) {
    
      $(".section-animation").addClass("animate-fix");
      $("#containerSection").addClass("animate-fix-bg");



    }
    if(yScroll < 695) {
       $(".section-animation").removeClass("animate-fix");
             $("#containerSection").removeClass("animate-fix-bg");
      $(".home-p").addClass("backredcolor");
 
    }

    if(yScroll > 750){
      $(".section-animation").css("transition", "all .1s ease-in-out")
      $(".home-p").css("transition", "all 3s ease-in-out")
    }
    if(yScroll < 750) {      $(".section-animation").css("transition", "")}
    if(yScroll > 950){
        if(scrollPos){  v1 = v1 + add ;  }
      else{
        if(!v1 < 1){ v1 = v1 - add ;}
        if(v1 < 1 ){ v1 = 1; }
      }

      $(".home-p").removeClass("backredcolor");
      $(".home-p").css("transform", "scale3d("+scaleIni+","+scaleIni+",1)");

    }
    if(yScroll < 950){
            $(".home-p").css("transform", "scale3d(1,1,1)");
    }

     if( yScroll > 2400 ) {
        $svgPcontainer.addClass("fadeInsideP");  

       }
      else{ $svgPcontainer.removeClass("fadeInsideP"); }

      if(yScroll > 2400){
        $(".home-p").css("opacity", "0");
      }
      if(yScroll < 2400 && scrollPos == false){
        $(".home-p").css("opacity", "1");
      }

      if(yScroll > 2800){
          $("#needHide").hide();
          $("#mainTextCon").fadeIn();
      }
      if(yScroll <2800 && scrollPos == false){
        $("#needHide").show();
          $("#mainTextCon").fadeOut();


      }
      if(yScroll > 3100 ){
        $(".section-animation").removeClass("animate-fix");
        $("#containerSection").removeClass("animate-fix-bg");
      }

    //if(yScroll > 650){
     // $(".section-animation").fadeOut();
    //}
    // if(yScroll > 350){
    //   $(".home-p").css("transform", "scale3d(1."+yScroll+",1."+yScroll+",1."+yScroll+")");
    //         $('.home-p').removeClass("backredcolor");

    // }
            // scaleEnd = obgHomeHeadEnd.m * yScroll + obgHomeHeadEnd.b;
      //    console.log(yScroll);
        //*** HEADER *** //
   
   // if( yScroll > 630 ) { $line.removeClass("startScroll");  } else { $line.addClass("startScroll"); }

    //if ( yScroll > 630 ){
     // if(!$_body.hasClass("mobile")) $_mainHeader.addClass("show");

    //   if ( !$(".f1").hasClass("in") ) {
    //     TweenMax.staggerTo($(".f1 span"), .4, {
    //       y: "0%",
    //       ease: Circ.easeOut
    //     }, .07);
      

    //     if ( $(".f1").addClass("in") );
    //     $(".call-to-action-leiria").addClass("in");
    //   }
    // } else {
    //   //if(!$_body.hasClass("mobile")) $_mainHeader.removeClass("show");
    //   $(".call-to-action-leiria").removeClass("in");
    //   if ( !$(".f1").hasClass("out") ) {
    //     if ( $(".f1").hasClass("in") ) {
    //         TweenMax.staggerTo($(".f1 span"), .4, {
    //           y: "-100%",
    //           ease: Circ.easeIn
    //         }, 1.2);
    //         if ( $(".f1").addClass("out") );
    //     }
    //   }
    // }

    if ( yScroll <= 5 ){
      $(".f1").removeClass("in out")
    }

    // LINE
    $line.css("backgroundPosition", "0" +lineH+"px");
 //   BG P
    if (!$_body.hasClass('mobile')) {
      if ( yScroll <= 2400) {
        $svgPcontainer.removeClass("go-p");
        $svgPcontainer.removeClass("go-video-sound");
        //$svgP.css("transform", "scale3d("+scaleIni+","+scaleIni+",1)");
        if ($homeVideoPromise_ !== undefined) {
          $homeVideoPromise_.then(function() {
            $homeVideo_.pause();
            videoEndedControl(false);
          }).catch(function(error) {
            //error
          });
        }
      } else if ( yScroll >= 1.5*_globalViewportH ) {
        $svgPcontainer.removeClass("go-video-sound");
        $line.css("backgroundPosition", "0 0");
        if ($homeVideoPromise_ !== undefined) {
          $homeVideoPromise_.then(function() {
            $homeVideo_.pause();
            videoEndedControl(false);
          }).catch(function(error) {
            //error
          });
        }
      } else if(yScroll > 2400) {
          $svgPcontainer.addClass("go-p");
            $svgPcontainer.addClass("go-video-sound");

        if ($homeVideoPromise_ !== undefined) {
          $homeVideoPromise_.then(function() {
            $homeVideo_.play();
            //audio only plays once
            if ( !homeAudioPlayed ) {
              $homeAudio_.play();
              homeAudioPlayed = true;
            }
            videoEndedControl(true);
            if ( !_audioGlobal ) {
              $homeVideo_.volume=0;
              $homeAudio_.volume=0;
            }
          }).catch(function(error) {
            //error
          });
        }
      }
    }

    //*** GINASIOS GYM *** //
    $gymBlock.each(function(i) {
      var $this = $(this),
          $fixedthis = $this.find(".visual"),
          $whatInfo = $this.find(".info");

      //fix elements
      if(!$_html.hasClass("safari"))  $fixedthis.removeClass("fixed");
      if ( verge.inY($this, 0) ) {
        if (verge.rectangle($fixedthis).top <= 10) {
            $gymFixedBlock.removeClass("fixed");
            $fixedthis.addClass("fixed");
        }
      } else {
        if($_html.hasClass("safari"))  $fixedthis.removeClass("fixed");
      }
    })//end each gym

    $gymPics.each(function(i) {
      var $this = $(this);
      if( yScroll >= height_gymInfoTrigger[i].iniScroll && yScroll <= height_gymInfoTrigger[i].endScroll ) {
          var b = height_gymInfoTrigger[i].endScroll,
              curve = -yScroll+b;
          $this.css("clip", "rect("+curve+"px, "+_globalViewportW+"px, "+_globalViewportH+"px, 0px)");
      } else if ( yScroll > height_gymInfoTrigger[i].endScroll ) {
          $this.css("clip", "rect(0px, "+_globalViewportW+"px, "+_globalViewportH+"px, 0px)");
      }else{
          $this.css("clip", "rect("+_globalViewportH+"px, "+_globalViewportW+"px, "+_globalViewportH+"px, 0px)");
      }
    });//end each

    // Gyms svg
    $gymInfo.each(function(i) {
      var $this = $(this),
          $svgAnim = $this.find(".home-icon"),
          $txtAnim = $this.find(".break span");
      if ( verge.inY($this, -_globalOneFiveViewportH) ) {
          if ( $this.hasClass("goAnim") ) return;
          $this.addClass("goAnim");
          TweenMax.staggerTo($txtAnim, .4, {
            y: 0,
            ease: Circ.easeOut
          }, .02);
          // if ( $svgAnim.attr("id") == "svg-modal36-anim") svgModal36Anim.play();
          // if ( $svgAnim.attr("id") == "svg-crossfit-anim") svgCrossfitAnim.play();
          // if ( $svgAnim.attr("id") == "svg-massag-anim") svgMassagAnim.play();
          // if ( $svgAnim.attr("id") == "svg-modal24-anim") svgModal24Anim.play();
          // if ( $svgAnim.attr("id") == "svg-pool-anim") svgPoolAnim.play();
          // if ( $svgAnim.attr("id") == "svg-spa-anim") svgSpaAnim.play();
      }
    })//end each gym
  }

  return {
    init: init,
    kill: kill
  }
}
function horariosPage() {
  /*Variables*/
  var scrollVal = 0,
      lastScroll = -1,
      scrollLimit = 0,
      page_loop = 0,
      scrollDirection = null,
      sliderHorarios = null,
      mouseX = 0,
      container_offset = $(".horarios .content-horarios .gym-column").width()*$(".horarios .content-horarios .gym-column").length - _globalViewportW;

  /*DOM variables*/
  var $gymColumn = $(".gym-column");

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.horarios", rAF_scroll_HorariosP);
    }
    else {
      _page_scroll_listener = function(status) {
        horarios_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("horarios page");

    /*inits*/
    page_loop = _rAF_loop(animationLoop);

    if ($_body.hasClass('mobile')) {
      var sliderHorarios = new Swiper ('.horarios .content-horarios', {
        grabCursor: true,
        slidesPerView: 'auto',
        resistanceRatio: 0.5,
        navigation: {
            nextEl: '.horarios .next.gym-btn',
            prevEl: '.horarios .prev.gym-btn',
        },
        wrapperClass: 'scroll-wrapper-horizontal',
        slideClass: 'gym-column'
      })
    }

    //Events
    audioBtnShow(false);

    fCalendar_ev_showClose();
    fCalendar_start();
    fCalendar_ev_estudios();
    fCalendar_ev_modalidades();

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventHorarios", $.debounce(500, resizeHorarios));

    if($_body.hasClass("mobile"))
      $_window.on("orientationchange.orientationEventHorarios", $.debounce(500, orientationHorarios));
  }

  var kill = function() {
    //Kill Events
    window.cancelAnimationFrame(page_loop);
    $(".horarios .content-horarios").off("mousemove");
    // VirtualScroll.off();
    if(sliderHorarios)
      sliderHorarios.destroy();

    //DEFAULT KILL EVENTS
    $_window.off("scroll.horarios");
    $_window.off("resize.resizeEventHorarios");
    $_window.off("orientationchange.orientationEventHorarios");

    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {
    var $noClick = $(".table-horarios a.mod-no-click");
    $noClick.on("click", function(event){
      event.preventDefault();
    });

    $gymColumn.on("mouseenter", function(){
      var $this = $(this);
      $this.find(".arrow-gyms").addClass("anim-arrow");
    })//end mouse enter

    $gymColumn.on("mouseleave", function(){
      var $this = $(this);
      $this.find(".arrow-gyms").removeClass("anim-arrow");
    })//end mouse leave

    // $(".gym-btn").on("mouseenter", function() {
    //   var $this = $(this);
    //   if($_body.hasClass('mobile')) return false;
    //   $this.find(".bg-hover").doTimeout("fOver", 100, "addClass", "over");
    //   event.preventDefault();
    // }).on("mouseleave", function() {
    //   var $this = $(this);
    //   if($_body.hasClass('mobile')) return false;
    //   $this.find(".bg-hover").doTimeout("fOver", 0, "removeClass", "over");
    //   event.preventDefault();
    // });

    if (!$_body.hasClass('mobile')) {
      $(".horarios .content-horarios").on("mousemove", function(event) {
        var $this = $(this);

        if(!$this.hasClass("stop-mousemove"))
          mouseX = event.clientX;
      })
    }
  }

  function resizeHorarios() {
    container_offset = $(".horarios .content-horarios .gym-column").width()*$(".horarios .content-horarios .gym-column").length - _globalViewportW;
  }

  function orientationHorarios() {
    var sliderHorarios = document.querySelector('.horarios .content-horarios').swiper;
    sliderHorarios.update();

    if($('.horarios .content-horarios').hasClass("open")) {
      $(".gym-btn").css("display", "");
      TweenMax.set($(".horarios .content-horarios .gym-column.open").find(".click-area"), { autoAlpha: 1 });
      TweenMax.set($(".horarios .content-horarios .gym-column.open"), { x: 0 });
      $('.horarios .content-horarios').removeClass('open');
      $.doTimeout(400, function() {
        $('.horarios .content-horarios').removeClass('stop-mousemove swiper-no-swiping');
        sliderHorarios.update();
      })
      $(".horarios .content-horarios .gym-column.open").removeClass("open");
    }
  }

  function rAF_scroll_HorariosP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_HorariosP);
    }
  }

  function animationLoop() {
    page_loop = _rAF_loop(animationLoop);

    if (!$_body.hasClass('mobile')) {
      var offset = scaleBetween(mouseX, 0, container_offset, 0, _globalViewportW);

      TweenMax.to($(".scroll-wrapper-horizontal"), 1, {
        x : -offset,
        ease: Power4.easeOut
      })
    }
  }

  function f_rAF_scroll_HorariosP(status) {
    // var $contentHorarios = $(".content-horarios").find(".gym-column.open");

    // if(!$contentHorarios.length)
    //   return false;
    //   content_horarios_top = $contentHorarios.offset().top - 80;
    // if ($_window.width() >= 768) {
    //   if ( $_window.scrollTop() >= content_horarios_top )
    //       $contentHorarios.find(".btn-close").addClass("fix");
    //   else
    //     $contentHorarios.find(".btn-close").removeClass("fix");
    // }
  }

  return {
    init: init,
    kill: kill
  }
}
function inscricoesPage() {
  /*Variables*/
  var $navInsc      = $("#nav-inscricoes button"),
      $navInscWrap      = $("#nav-inscricoes-wrapper"),
      vHeader           = $("#nav-inscricoes .text");
  var $menuInsc     = $("#nav-inscricoes ul"),
  $menuInscList     = $("#nav-inscricoes li");
  var $menuInscLink = $("#nav-inscricoes a");

  //** =SVG menu
  var svgContainer = document.querySelector('div.morph-svg');
  var svgElement   = svgContainer.querySelector('svg');
  var resetShape   = $(".morph-svg path").attr("d");
  var newShapeEnd  = $(".morph-svg").attr("data-morph-end");
  var svgMenu      = Snap(svgElement);
  var pathSVG      = svgMenu.select('path');

  /*DOM variables*/

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.inscricoes", rAF_scroll_InscricoesP);
    }
    else {
      _page_scroll_listener = function(status) {
        inscricoes_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("inscricoes page");

    /*inits*/
    initiateInscricoesForms();

    //Events
    audioBtnShow(false);

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventInscricoes", $.debounce(500, resizeInscricoes));
  }

  var kill = function() {
    //Kill Events

    //DEFAULT KILL EVENTS
    $_window.off("scroll.inscricoes");
    $_window.off("resize.resizeEventInscricoes");

    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {
    //** =MENU
    $navInsc.on("click", function() {
        var startedPage = false;
        $navInscWrap.toggleClass('open');

        if ($navInscWrap.hasClass('open')) {
            navIn();
        } else {
            navOut();
        }
        return false;
    }) //end CLICK

    $menuInscLink.on("click", function(event) {
        var $this = $(this),
            vHash = $this.attr("href"),
            vText = $this.text();

        vHeader.text(vText);
        window.location.hash = vHash;

        if (!$navInscWrap.hasClass('open')) return false;
        $navInsc.click();
        return false;
    }) //end CLICK


    function navIn() {
        $menuInscList.velocity(
            "transition.slideDownIn", {
                stagger: 50,
                duration: 200,
                delay: 50
            });

        pathSVG.stop().animate({
            "path": newShapeEnd
        }, 250, mina.easeout);
    } //end function

    function navOut() {
        $menuInscList.velocity(
            "transition.slideUpOut", {
                stagger: 0,
                duration: 200,
                delay: 0
            })
        pathSVG.stop().animate({
            "path": resetShape
        }, 250, mina.easeout);
    } //end function

    $navInsc.on("clickoutside", function(event) {
        if (!$navInscWrap.hasClass('open')) return false;
        $navInsc.click();
        event.preventDefault();
    })

    $menuInscLink.click(function(e) {
        var $this = $(this);
        var thisHref = $this.attr('href');
        var aux = thisHref.replace("#", ".");
        var $whereTo = $("" + aux + "");

        $menuInscLink.removeClass('on');
        $this.addClass('on');

        $(".inscricoes-form").hide();
        $whereTo.show();
        //reset totals
        totalToPay(true, $this);

        e.preventDefault;
        //end click
    })

    //** =TOOLTIP
    $(".icon-svg-auto.info")
        .mouseover(function(e) {
            $(this).doTimeout('tooltip', 200, tooltipHover, this);
        }).mouseout(function() {
        $(this).doTimeout('tooltip', 0, tooltipOut, this);
    })

    function tooltipHover(elem) {
        $(elem).next().velocity("transition.flipXIn", 170);
    }
    function tooltipOut(elem) {
        $(elem).next().velocity("transition.expandOut", 120);
    }


    //** START
    var hasHash = window.location.hash;
    if (!hasHash) {
        hasHash = "#lagrimas";
    }
    $("#nav-inscricoes a[href=" + hasHash + "]").click();

    //** =FORMS **
    var valorInscricao = $(".add-inscricao").text();


    $(".planos .main-selection").click(function(event) {
        var $this = $(this);

        $(".planos .main-selection").removeClass('selected');
        $this.addClass('selected');

        $this.parent().find(".radio-planos").prop('checked', false);
        $this.find(".radio-planos").prop('checked', true);

        //reset the other one
        $(".periocidade .inputType-radio").removeClass('selected');
        $(".periocidade .inputType-radio").find("input").prop('checked', false);
        $(".planos .main-selection").attr("data-option", "");

        //dropdown
        $(".periocidade").velocity(
            "slideUp", {
                duration: 200
            });
        $this.parent().find(".periocidade").velocity(
            "slideDown", {
                delay: 10,
                duration: 400,
                easing: [150, 18]
            });

        event.preventDefault();
        event.stopPropagation();
    }) //end click


    $(".periocidade .inputType-radio").click(function(event) {
        var $this = $(this),
            forPlanos = $this.attr("data-option"),
            forInscricao = $this.attr("data-inscricao");

        $this.parents(".column").find(".main-selection").attr("data-option", forPlanos);

        $this.parent().find(".inputType-radio").removeClass('selected');
        $this.addClass('selected');

        $this.parent().find("input").prop('checked', false);
        $this.find("input").prop('checked', true);

        $(".table-inscricoes .add-inscricao").text(forInscricao);
        var tipoDePagamento = $this.find("label").attr("data-tipo");
        var valorDePagamento = $this.find("input").val();
        var valorDeSeguro = $this.parents('form').find('.add-seguro').text();

        $(".table-inscricoes .valor-periocidade .add-tipo").text(tipoDePagamento);
        $(".table-inscricoes .valor-periocidade .add").text(valorDePagamento);

        //alert( $(this).find("input:checked").val() );
        var $table = $this.parents("form").find(".table-inscricoes");
        totalToPay(false, $table);

        if (forPlanos == 'anual-selected') {
            $this.parents('form').find('.end').css('display', 'block');

            $this.parents('form').find('.end-tipo').text('anuidade');
            var aux = parseFloat(valorDePagamento) + parseFloat(valorDeSeguro);
            $this.parents('form').find('.end strong').text("€" + aux.toFixed(2));

        } else if (forPlanos == 'mensal-selected') {
            $this.parents('form').find('.end').css('display', 'block');

            $this.parents('form').find('.end-tipo').text('mensalidade');
            $this.parents('form').find('.end strong').text("€" + valorDePagamento);
        } else {
            $this.parents('form').find('.end').css('display', 'block');

            if ($this.parents('form').hasClass('celas')) {
                $this.parents('form').find('.end p').html('Valor de iniciação, o próximo <span class="end-tipo">pagamento</span> será de <strong>€' + valorDePagamento + '.</strong>');
            } else {
                $this.parents('form').find('.end-tipo').text('anuidade');
                var aux = parseFloat(valorDePagamento) + parseFloat(valorDeSeguro);
                $this.parents('form').find('.end strong').text("€" + aux.toFixed(2));
            }
        }

        event.preventDefault();
        event.stopPropagation();
    }) //end click

    $(".pagamento .inputType-radio").click(function(event) {
        var $this = $(this);

        $this.parent().find(".inputType-radio").removeClass('selected');
        $this.addClass('selected');

        $this.parent().find("input").prop('checked', false);
        $this.find("input").prop('checked', true);

        event.preventDefault();
        event.stopPropagation();
    }) //end click


    function totalToPay(reset, $element) {
        var $total = $element.find(".valor-total"),
            $error = $element.find(".total"),
            soma = 0 ,
            somaTotal = 0;

        if (reset) {
            $(".add-inscricao, .add-tipo, .valor-total, .valor-periocidade .add").text("—");
            $error.removeClass('error');
            return;
        }

        $element.find(".add").each(function(i) {
            // $(".table-inscricoes .add").each(function(i){
            var $this = $(this),
                value = parseFloat($this.text());
            soma = soma + value;
        }) //end each
        if ((typeof soma) !== "number" || isNaN(soma)) {
            $error.addClass('error');
            return;
        } else {
            $error.removeClass('error');
            somaTotal = soma.toFixed(2);
        }

        $total.text(somaTotal);
    } //end function
  }

  function resizeInscricoes() {

  }

  function rAF_scroll_InscricoesP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_InscricoesP);
    }
  }

  function f_rAF_scroll_InscricoesP(status) {

  }

  return {
    init: init,
    kill: kill
  }
}
function modalidadesPage() {
  /*Variables*/
  // **  y=mx+b
  _$group_AllModal = $(".section-group-all"),
  _$videoContainer_AllModal = $(".bg-video-container");
  $power = $("#power"),
  vPower = {
      iNav: 15,
      fNav: 85,
      iScroll: 0,
      fScroll: verge.rectangle($power).height / 1.5,
      yIniPower: 0,
      $bgPower: $("#power .bg")
  };
  var $flow = $("#flow"),
      yIniFlow = $flow.offset().top;
  vFlow = {
      iNav: 319,
      fNav: 387,
      iScroll: yIniFlow - _globalViewportH / 2,
      fScroll: yIniFlow + (verge.rectangle($flow).height / 2),
      yIniFlow: yIniFlow,
      $bgFlow: $("#flow .bg")
  };
  var $moves = $("#moves"),
      yIniMoves = $moves.offset().top;
  vMoves = {
      iNav: 113,
      fNav: 197,
      iScroll: yIniMoves - _globalViewportH / 2,
      fScroll: yIniMoves + (verge.rectangle($moves).height / 2),
      yIniMoves: yIniMoves,
      $bgMoves: $("#moves .bg")
  };
  var $aqua = $("#aqua"),
      yIniAqua = $aqua.offset().top;
  vAqua = {
      iNav: 415,
      fNav: 482,
      iScroll: yIniAqua - _globalViewportH / 2,
      fScroll: yIniAqua + (verge.rectangle($aqua).height / 2),
      yIniAqua: yIniAqua,
      $bgAqua: $("#aqua .bg")
  };
  var $ride = $("#ride"),
      yIniRide = $ride.offset().top;
  vRide = {
      iNav: 225,
      fNav: 290,
      iScroll: yIniRide - _globalViewportH / 2,
      fScroll: yIniRide + (verge.rectangle($ride).height / 2),
      yIniRide: yIniRide,
      $bgRide: $("#ride .bg")
  };
  var $growup = $("#growup"),
      yIniGrowup = $growup.offset().top;
  vGrowup = {
      iNav: 510,
      fNav: 626,
      iScroll: yIniGrowup - _globalViewportH / 2,
      fScroll: yIniGrowup + (verge.rectangle($growup).height / 3),
      yIniGrowup: yIniGrowup,
      $bgGrowup: $("#growup .bg")
  };

  var $opacityNav = $(".trigger"),
      yIniOpacityNav = $opacityNav.offset().top;
  vOpacityNav = {
      iNav: 1,
      fNav: 0,
      iScroll: yIniOpacityNav - _globalViewportH,
      fScroll: $(document).height() - _globalViewportH - 300,
      yIniOpacityNav: yIniOpacityNav,
      $navModal: $(".nav-modality-all")
  };

  $.doTimeout(600, function() { /* Delay for document.height when using ajax*/
      vOpacityNav.fScroll = $(document).height() - _globalViewportH - 300;
      _mOpacityNav_AllModal = (vOpacityNav.fNav - vOpacityNav.iNav) / (vOpacityNav.fScroll - vOpacityNav.iScroll);
      _bOpacityNav_AllModal = vOpacityNav.iNav - _mOpacityNav_AllModal * vOpacityNav.iScroll;
  })


  //** =SVG TITLE
  _mTitle_AllModal = (0.95 - 0.15) / (_globalViewportH / 2 - 0);
  _bFlowTitle_AllModal = 0.15 - _mTitle_AllModal * yIniFlow;
  _bMovesTitle_AllModal = 0.15 - _mTitle_AllModal * yIniMoves;
  _bAquaTitle_AllModal = 0.15 - _mTitle_AllModal * yIniAqua;
  _bRideTitle_AllModal = 0.15 - _mTitle_AllModal * yIniRide;
  _bGrowupTitle_AllModal = 0.15 - _mTitle_AllModal * yIniGrowup;

  //** =CLICK NAV
  var $navSec = $(".nav-modality-all a"),
      $NavSecLi = $(".nav-modality-all li"),
      $NavSecCrl = $(".nav-modality-all .crl"),
      $navCities = $(".cities-picker");

  $firstVideo = $(".section-group-all").eq(0).find("video")[0];

  if (!$_body.hasClass('mobile'))
    $firstVideoPromise_ = $firstVideo.play();

  /*DOM variables*/

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.modalidades", rAF_scroll_ModalidadesP);
    }
    else {
      _page_scroll_listener = function(status) {
        Modalidades_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("modalidades page");

    /*inits*/
    if (!$_body.hasClass('mobile')) {
      if ($firstVideoPromise_ !== undefined) {
        $firstVideoPromise_.then(function() {
          // =audio start
          if( !$_body.hasClass("mobile") ) {
            if ( !_audioSingleM.paused  ) {
                _audioSingleM.pause();
                _audioSingleM.currentTime = 0;
            }
            _audiAllM.pause();
            _audiAllM.currentTime = 0;
            if ( _audioGlobal ) {
                _audiAllM.play();
                _audiAllM.volume=1;
            }
          }
        }).catch(function(error) {
          //error
        });
      }
    }

    //Events
    $(".cities-picker ul li").on("click", function() {
      var $this = $(this),
          target = $this.attr("data-target");

      TweenMax.to(".cities-picker ul li", .5, {
        className:"-=active"
      });

      TweenMax.to($this, .5, {
        className:"+=active"
      });

      if(target == 'all') {
        TweenMax.to(".nav-modality-list li", .5, {
          opacity: 1,
          pointerEvents: "initial"
        });
      }
      else {
        TweenMax.to(".nav-modality-list li", .5, {
          opacity: .2,
          pointerEvents: "none"
        });

        TweenMax.to("."+target, .5, {
          opacity: 1,
          pointerEvents: "initial"
        });
      }
    })

    audioBtnShow(true);

    $navSec.click(function(event) {
        var $this = $(this),
            vHash = $this.attr("href");
        _global_useViewPort = false;
        allModalNavSec($this);
        event.preventDefault();
    })

    //** =ONSTART PAGE
    allModalNavSec($(".nav-modality-all a[href=#power]")); //power has class on
    $("#power .bg-video-container").addClass("fixed-always"); //first video this class only after transition animation

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventModalidades", $.debounce(500, resizeModalidades));
  }

  var kill = function() {
    //Kill Events
    _$group_AllModal = null,
    _$videoContainer_AllModal = null;
    vPower = null,
    vFlow = null,
    vMoves = null,
    vAqua = null,
    vRide = null,
    vGrowup = null;
    vOpacityNav = null,
    _mOpacityNav_AllModal = null,
    _bOpacityNav_AllModal = null;
    _mTitle_AllModal = null;
    _bFlowTitle_AllModal = null;
    _bMovesTitle_AllModal = null;
    _bAquaTitle_AllModal = null;
    _bRideTitle_AllModal = null;
    _bGrowupTitle_AllModal = null;

    //DEFAULT KILL EVENTS
    $_window.off("scroll.modalidades");
    $_window.off("resize.resizeEventModalidades");

    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {

  }

  function allModalNavSec($this) {
    var $navSec = $(".nav-modality-all a"),
        $NavSecLi = $(".nav-modality-all li"),
        $NavSecCrl = $(".nav-modality-all .crl");

    var resize = $this.find(".txt").height();

    $navSec.removeClass('on');
    $this.addClass('on');

    $NavSecLi.css("height", "18px");
    $this.parent("li").css("height", resize);

    $NavSecCrl.css("height", "18px");
    $this.find(".crl").css("height", resize);
  }

  function resizeModalidades() {
    if (!$_body.hasClass('mobile')) {

    }
  }

  function rAF_scroll_ModalidadesP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_ModalidadesP);
    }
  }

  function f_rAF_scroll_ModalidadesP(status) {
    var scrollVal = verge.scrollY();

    _$group_AllModal.each(function(i) {
        var $this = $(this);
        var $thisVideoContainer = $this.find(".bg-video-container");
        var $thisTitleSvg = $this.find(".header-group");
        var $thisTitleSvgBg = $this.find(".header-group .bg");

        /// =Video show/hide
        if (!verge.inY($this, 0)) {
            $thisVideoContainer.addClass("off");
            if (!$_body.hasClass('mobile')) {
                $thisVideoContainer.find("video").get(0).pause();
            }
        }
        ; //end if

        if (verge.inY($this, 0)) {
            $thisVideoContainer.removeClass("off");
            if (!$_body.hasClass('mobile')) {
                $thisVideoContainer.find("video").get(0).play();
            }
            if (verge.rectangle($thisVideoContainer).top <= 0) {
                //do not fixe last video, to have acces to the footer
                _$videoContainer_AllModal.removeClass('fixed');
                if (!$thisVideoContainer.hasClass("last")) {
                    $thisVideoContainer.addClass('fixed');
                }

                //** SVG TITLE (need start function before normal yScrollIni for not having fliker)
                $(".header-group").removeClass('header-fixed');
                if (!$thisVideoContainer.hasClass("last")) {
                    $thisTitleSvg.addClass('header-fixed');
                }

                var opac = _mTitle_AllModal * scrollVal + 0.15;
                if (scrollVal > vFlow.iScroll) {
                    opac = _mTitle_AllModal * scrollVal + _bFlowTitle_AllModal;
                }
                if (scrollVal > vMoves.iScroll) {
                    opac = _mTitle_AllModal * scrollVal + _bMovesTitle_AllModal;
                }
                if (scrollVal > vAqua.iScroll) {
                    opac = _mTitle_AllModal * scrollVal + _bAquaTitle_AllModal;
                }
                if (scrollVal > vRide.iScroll) {
                    opac = _mTitle_AllModal * scrollVal + _bRideTitle_AllModal;
                }
                if (scrollVal > vGrowup.iScroll) {
                    opac = _mTitle_AllModal * scrollVal + _bGrowupTitle_AllModal;
                }

                if( opac >= .95) opac = .95;
                $thisTitleSvgBg.css("opacity", opac);
            }

        } //end if on viewport

        //** FOR SEC NAVIGATION
        if (verge.inY($this, -_globalHalfViewportH)) {
            if (!_global_useViewPort) return;
            var aux = $this.attr("id"),
                auxHash = "#" + aux;
            var $elemento = $(".nav-modality-all a[href='" + auxHash + "']");
            allModalNavSec($elemento);
        }
    }) //end each group

    //** SVG TITLE default values
    var auxH = _globalViewportH / 2;
    if (scrollVal <= vPower.yIniPower) {
        vPower.$bgPower.css("opacity", .15);
    }
    if (scrollVal > vPower.yIniPower + auxH) {
        vPower.$bgPower.css("opacity", .95);
    }

    if (scrollVal < vFlow.yIniFlow) {
        vFlow.$bgFlow.css("opacity", .15);
    }
    if (scrollVal > vFlow.yIniFlow + auxH) {
        vFlow.$bgFlow.css("opacity", .95);
    }

    if (scrollVal < vMoves.yIniMoves) {
        vMoves.$bgMoves.css("opacity", .15);
    }
    if (scrollVal > vMoves.yIniMoves + auxH) {
        vMoves.$bgMoves.css("opacity", .95);
    }

    if (scrollVal < vAqua.yIniAqua) {
        vAqua.$bgAqua.css("opacity", .15);
    }
    if (scrollVal > vAqua.yIniAqua + auxH) {
        vAqua.$bgAqua.css("opacity", .95);
    }

    if (scrollVal < vRide.yIniRide) {
        vRide.$bgRide.css("opacity", .15);
    }
    if (scrollVal > vRide.yIniRide + auxH) {
        vRide.$bgRide.css("opacity", .95);
    }

    if (scrollVal < vGrowup.yIniGrowup) {
        vGrowup.$bgGrowup.css("opacity", .15);
    }
    if (scrollVal > vGrowup.yIniGrowup + auxH) {
        vGrowup.$bgGrowup.css("opacity", .95);
    }

    //** SEC NAV Opacity
    if (scrollVal < vOpacityNav.iScroll) {
        vOpacityNav.$navModal.css({
          "opacity": "1",
          "visibility": "visible"
        });
    }
    if (verge.inY($(".trigger"), 0)) {
      var opac = _mOpacityNav_AllModal * scrollVal + _bOpacityNav_AllModal;
      vOpacityNav.$navModal.css({
        "opacity": opac,
        "visibility": "hidden"
      });

      TweenMax.to($navCities, .5, {
        autoAlpha: 0
      });
    } else {
      TweenMax.to($navCities, .5, {
        autoAlpha: 1
      });
    }
  }

  return {
    init: init,
    kill: kill
  }
}
function modalidadesSinglePage() {
  /*Variables*/
  var $currentPageName = $(".page-main.page-current .page-toload"),
      modalidName = $currentPageName.attr("data-modname"),
      do_reset = false,
      $gymColumn = $(".gym-column"),
      page_loop = 0,
      mouseX = 0,
      sliderModalidades = null,
      container_offset = $(".modalidades .page-current .content-horarios .gym-column").width()*$(".modalidades .page-current .content-horarios .gym-column").length - _globalViewportW;

  /*DOM variables*/

  var init = function(do_reset) {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.modalidadesSingle", rAF_scroll_ModalidadesSingleP);
    }
    else {
      _page_scroll_listener = function(status) {
        ModalidadesSingle_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("Modalidades-single page");

    /*inits*/
    do_reset = do_reset;
    page_loop = _rAF_loop(animationLoop);

    if ($_body.hasClass('mobile')) {
      var sliderModalidades = new Swiper ('.modalidades .page-current .content-horarios', {
        grabCursor: true,
        slidesPerView: 'auto',
        resistanceRatio: 0.5,
        navigation: {
            nextEl: '.modalidades .page-current .next.gym-btn',
            prevEl: '.modalidades .page-current .prev.gym-btn',
        },
        wrapperClass: 'scroll-wrapper-horizontal',
        slideClass: 'gym-column'
      })
    }

    fCalendar_ev_showClose();
    fCalendar_start();
    fCalendar_ev_estudios();
    fCalendar_ev_modalidades();

    //Events
    $_mainNav.attr("class","");
    $_mainNav.addClass(modalidName);
		if ( $_body.hasClass('mobile') || $_html.hasClass('safari') || $_html.hasClass('ios')) {
      $_mainNav.attr("class","");
    }

    // =audio
    if( !$_body.hasClass("mobile") ) {
        audioBtnShow(true);
        if ( _audioGlobal ) {
          if ( !_audiAllM.paused  ) {
            audioCrossFade(_audiAllM, _audioSingleM, 25);
          } else if (_audioSingleM.paused ) {
            _audioSingleM.pause();
            _audioSingleM.currentTime = 0;
            _audioSingleM.play();
            _audioSingleM.volume=1;
          }
        }
    }

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventModalidadesSingle", $.debounce(500, resizeModalidadesSingle));

    if($_body.hasClass("mobile"))
      $_window.on("orientationchange.orientationEventModalidadesSingle", $.debounce(500, orientationModalidadesSingle));
  }

  var kill = function() {
    //Kill Events
    $_mainNav.removeClass(modalidName);
    window.cancelAnimationFrame(page_loop);
    $(".modalidades .page-current .content-horarios").off("mousemove");
    if(sliderModalidades)
      sliderModalidades.destroy();

    //DEFAULT KILL EVENTS
    $_window.off("scroll.modalidadesSingle");
    $_window.off("resize.resizeEventModalidadesSingle");
    $_window.off("orientationchange.orientationEventModalidadesSingle");

    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {
  	// SWIPE
    var $toswipe = $(".modality-pic, .modality-info, .modality-title-extra, .modality-info-list"),
        $nextBtn = $("#nav-main-control a.next"),
        $prevBtn = $("#nav-main-control a.prev");
    $toswipe.on("swiperight",function (e,data){
        $prevBtn.click();
        e.preventDefault();
    })
    $toswipe.on("swipeleft",function (e,data){
        $nextBtn.click();
        e.preventDefault();
    })

    /*Dar cor ao menu por causa das sobreposições. Ignorar se for safari pq tem outro efeito*/
    // if(!$_html.hasClass("safari")) {
    //   var bg = $_currentPage.find(".page-toload").css('background-color');
    //   if(bg.indexOf('a') == -1){
    //       var result = bg.replace(')', ', 0.95)').replace('rgb', 'rgba');
    //       $_mainHeader.css("background-color", result);
    //   }
    // }

    //Bloquear o evento do <a> do horario para não saltar para o topo da pagina
    var $horarioLink = $(".table-horarios a");
    $horarioLink.on("click", function(event){
      event.preventDefault();
    });

    var intensidade = $(".page-current .inten").attr("data-val");
    // $(".page-current .modality-info-list li").velocity("transition.expandIn", {
    //     duration: 250,
    //     delay: 340,
    //     stagger: 100
    // })
    // $(".page-current .modality-content").addClass('animModalityIn');

    var el_time_modalidade = $(".odometerTime")[0],
        timeString = $(".page-current .time").attr("data-val"),
        timeArray = timeString.split(","),
        timeHowMany = timeArray.length,
        numberToChange;

    //Reset to zero for modalities transition
    if (do_reset) {
      changeTimeModalityLoop(el_time_modalidade, 1, [00], true);
      $(".page-current .odometerTime").remove();
      $(".page-current .time .table-vh-center").html('<span class="table-cell odometerTime">00</span>');
      $(".page-current .time").attr("class", "time");
      $(".page-current .modality-info-list").addClass("click-mainBtn-reset");

      $(".page-current .inten").attr('class', 'inten');
      $(".page-current .target").removeClass("goAnim").addClass("exitAnim");
      return;
    }

    /* Info de modalidades */
    $.doTimeout("loopInfo", 0, function() {
        if (timeHowMany <= 1) {
            changeTimeModalityLoop(el_time_modalidade, timeHowMany, timeArray, true);
        } else {
            changeTimeModalityLoop(el_time_modalidade, timeHowMany, timeArray, false);
        }
    });

    $.doTimeout(350, function() {
        $(".page-current .inten").addClass("val-" + intensidade);
    });

    $.doTimeout(700, function() {
        $(".page-current .target").addClass("goAnim");
    });

    //Reinitiate SocialCount
    $(SocialCount.initSelector).each(function() {
        var $el = $(this);
        SocialCount.init($el);
    });

    // $(".gym-btn").on("mouseenter", function() {
    //   var $this = $(this);
    //   $this.find(".bg-hover").doTimeout("fOver", 100, "addClass", "over");
    //   event.preventDefault();
    // }).on("mouseleave", function() {
    //   var $this = $(this);
    //   $this.find(".bg-hover").doTimeout("fOver", 0, "removeClass", "over");
    //   event.preventDefault();
    // });

    $gymColumn.on("mouseenter", function(){
      var $this = $(this);
      if($this.hasClass('off')) return false;
      $this.find(".arrow-gyms").addClass("anim-arrow");
    })//end mouse enter

    $gymColumn.on("mouseleave", function(){
      var $this = $(this);
      if($this.hasClass('off')) return false;
      $this.find(".arrow-gyms").removeClass("anim-arrow");
    })//end mouse leave

    if (!$_body.hasClass('mobile')) {
      $(".modalidades .page-current .content-horarios").on("mousemove", function(event) {
        var $this = $(this);

        if(!$this.hasClass("stop-mousemove"))
          mouseX = event.clientX;
      })
    }
  }

  function changeTimeModality(el_time_modalidade, numberToChange, speed) {
		if (!el_time_modalidade) return;
		od_time_modalidade = new Odometer({
		    el: el_time_modalidade,
		    value: 00,
		    duration: speed,
		    format: '(dd)'
		});

		od_time_modalidade.update(numberToChange);
	} //end function


	function changeTimeModalityLoop(el_time_modalidade, timeHowMany, timeArray, stop) {
		var i = 0;
		var numberToChange = timeArray[i];
		$(".page-current .time").addClass("t" + numberToChange);
		$(".page-current .time").addClass("click-mainBtn");
		changeTimeModality(el_time_modalidade, numberToChange, 350);

		if (stop) {
		    $.doTimeout("loopTime");
		    return;
		}

		$.doTimeout("loopTime", 2500, function() {
	    i++;
	    $(".page-current .time").removeClass("click-mainBtn");

	    $.doTimeout(50, function() {
	        $(".page-current .time").addClass("click-mainBtn");
	        numberToChange = timeArray[i];
	        $(".page-current .time").addClass("t" + numberToChange);
	        changeTimeModality(el_time_modalidade, numberToChange, 350);
	    })

	    if (i > timeHowMany - 1) {
	        i = 0;
	        $(".page-current .time").removeClass("t30 t45 t60");
	        changeTimeModality(el_time_modalidade, "00", 350);
	        return true;
	    } else {
	        return true;
	    }
		}) //end main timeout
	} //end function

  function resizeModalidadesSingle() {
    container_offset = $(".modalidades .page-current .content-horarios .gym-column").width()*$(".modalidades .page-current .content-horarios .gym-column").length - _globalViewportW;
  }

  function orientationModalidadesSingle() {
    var sliderModalidades = document.querySelector('.modalidades .page-current .content-horarios').swiper;
    sliderModalidades.update();

    if($('.modalidades .page-current .content-horarios').hasClass("open")) {
      TweenMax.set($(".modalidades .page-current .content-horarios .gym-column"), {
        autoAlpha: 1,
        clearProps: "opacity, visibility"
      });
      $(".gym-btn").css("display", "");
      TweenMax.set($(".modalidades .page-current .content-horarios .gym-column.open").find(".click-area"), { autoAlpha: 1 });
      TweenMax.set($(".modalidades .page-current .content-horarios .gym-column.open"), { x: 0 });
      $('.modalidades .page-current .content-horarios').removeClass('open');
      $.doTimeout(400, function() {
        $('.modalidades .page-current .content-horarios').removeClass('stop-mousemove swiper-no-swiping');
        sliderModalidades.update();
      })
      $(".modalidades .page-current .content-horarios .gym-column.open").removeClass("open");
    }
  }

  function rAF_scroll_ModalidadesSingleP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_ModalidadesSingleP);
    }
  }

  function animationLoop() {
    page_loop = _rAF_loop(animationLoop);

    if (!$_body.hasClass('mobile')) {
      var offset = scaleBetween(mouseX, 0, container_offset, 0, _globalViewportW);

      TweenMax.to($(".page-current .scroll-wrapper-horizontal"), 1, {
        x : -offset,
        ease: Power4.easeOut
      })
    }
  }

  function f_rAF_scroll_ModalidadesSingleP(status) {
    // var $contentHorarios = $(".content-horarios").find(".grid-cell.open");

    // if(!$contentHorarios.length)
    //   return;
    //   content_horarios_top = $contentHorarios.offset().top - 80;
    // if (Modernizr.mq('(min-width: 768px)')) {
    //   if ( $_window.scrollTop() >= content_horarios_top )
    //       $contentHorarios.find(".btn-close").addClass("fix");
    //   else
    //     $contentHorarios.find(".btn-close").removeClass("fix");
    // }
  }

  return {
    init: init,
    kill: kill
  }
}
function recrutaPage() {
  /*Variables*/
  var $form = $(".recruta-form"),
      $formInputs = $(".recruta-form input"),
      $formFileName = $('.js-file-name'),
      $submitForm = $form.find("button"),
      server_hostname = document.location.origin;

  /*DOM variables*/

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.recruta", rAF_scroll_RecrutaP);
    }
    else {
      _page_scroll_listener = function(status) {
        recruta_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("recruta page");

    /*inits*/

    //Events
    audioBtnShow(false);

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventRecruta", $.debounce(500, resizeRecruta));
  }

  var kill = function() {
    //Kill Events

    //DEFAULT KILL EVENTS
    $_window.off("scroll.recruta");
    $_window.off("resize.resizeEventRecruta");
    
    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {
    $jsUpload = $(".js-upload"),
    $file = $('input[type=file]');

    $jsUpload.on("click", function() {
      $file.click();
    });

    $formInputs.blur(function() {
      var $this = $(this),
          defeito = this.defaultValue;

      if(!$this.hasClass("required") && !$this.val() ) return;
      check($this, defeito, 0);

      if ($this.hasClass('erro')) {
          $this.parent().addClass('erro');
      } else {
          $this.parent().removeClass('erro');
      }
    });

    $formInputs.focus(function() {
        var $this = $(this);
        $this.removeClass('erro');
        $this.parent().removeClass('erro');
    });

    $file.change(function(e) {
      var file = $(document).find('input[type="file"]');
      var individual_file = file[0].files[0];
      var file_name = $(".recruta-file-name");

      $formFileName.html(individual_file["name"]);
      file_name.css("color", "#242a30");
      file_name.parent().removeClass("error");
    });

    $form.find(".rgpd-wrapper svg").on("click", function() {
      var $this = $(this);
      $this.closest("div").toggleClass("active");

      if($this.closest("div").hasClass("active")){
        $this.closest("div").find("input").prop('checked', true);
        $form.find("button").addClass("enable");
      } else{
        $this.closest("div").find("input").prop('checked', false);
        $form.find("button").removeClass("enable");
      }
    });

    /*Submit Form*/
    $submitForm.on("click", function(){
      event.preventDefault();

      if (validateForm($form) && !$form.hasClass('sending')) {
        $form.addClass('sending');
        formAnimLoadingNEW($submitForm, 'loading');

        var fd = new FormData();
        var file = $(document).find('input[type="file"]');
        var individual_file = file[0].files[0];

        fd.append("recruta-form-proposal-name", $form.find('input[name="recruta-form-proposal-name"]').val());
        fd.append("recruta-form-proposal", $form.find('input[name="recruta-form-proposal"]').val());
        fd.append("recruta-form-nome", $form.find('input[name="recruta-form-nome"]').val());
        fd.append("recruta-form-email", $form.find('input[name="recruta-form-email"]').val());
        fd.append("recruta-form-contacto", $form.find('input[name="recruta-form-contacto"]').val());
        fd.append("recruta-form-localidade", $form.find('input[name="recruta-form-localidade"]').val());
        fd.append("recruta-form-mensagem", $form.find('textarea').val());

        fd.append("file", individual_file);
        fd.append("_wp_http_referer", $form.find('input[name="_wp_http_referer"]').val());
        fd.append("recruta_nonce", $form.find('input[name="recruta_nonce"]').val());
        fd.append('action', 'initRecruta');

        $.doTimeout(2700, function() {
          $.ajax({
            data: fd,
            type: 'post',
            contentType: false,
            processData: false,
            url: server_hostname + '/wp-admin/admin-ajax.php',
            success: function(data) {
              formAnimLoadingNEW($submitForm, 'sent-ok');
              $form.removeClass('sending');
            },
            error: function(data) {
              formAnimLoadingNEW($submitForm, 'sent-error');
              $form.removeClass('sending');
            }
          });
        });
      }
    });
  }

  function resizeRecruta() {

  }

  function rAF_scroll_RecrutaP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_RecrutaP);
    }
  }

  function f_rAF_scroll_RecrutaP(status) {

  }

  return {
    init: init,
    kill: kill
  }
}
function teamPage() {
  /*Variables*/
  _$titleSVGteam = $(".team-main .bg"),
  _yEnd = _globalViewportH / 2,
  _mTitle_SVGteam = (0.95 - 0.15) / (_yEnd - 0);

  $teamVideo = $(".section-group-all video")[0];

  if (!$_body.hasClass('mobile'))
    $teamVideoPromise_ = $teamVideo.play();

  /*DOM variables*/
  var $navCities = $(".cities-picker");

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.team", rAF_scroll_TeamP);
    }
    else {
      _page_scroll_listener = function(status) {
        Team_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("team page");

    /*inits*/

    //Events
    if (!$_body.hasClass('mobile')) {
      if ($teamVideoPromise_ !== undefined) {
        $teamVideoPromise_.then(function() {

        }).catch(function(error) {
          //error
        });
      }
    }

    $(".cities-picker ul li").on("click", function() {
      var $this = $(this),
          target = $this.attr("data-target");

      TweenMax.to(".cities-picker ul li", .5, {
        className:"-=active"
      });

      TweenMax.to($this, .5, {
        className:"+=active"
      });

      if(target == 'all') {
        TweenMax.to(".nav-modality-list li", .5, {
          opacity: 1,
          pointerEvents: "initial"
        });
      }
      else {
        TweenMax.to(".nav-modality-list li", .5, {
          opacity: .2,
          pointerEvents: "none"
        });

        TweenMax.to("."+target, .5, {
          opacity: 1,
          pointerEvents: "initial"
        });
      }
    })

    audioBtnShow(false);

    if ( $_body.hasClass('mobile') ) return;

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventTeam", $.debounce(500, resizeTeam));
  }

  var kill = function() {
    //Kill Events
    _$titleSVGteam = null,
    _mTitle_SVGteam = null,
    _yEnd = null;

    //DEFAULT KILL EVENTS
    $_window.off("scroll.team");
    $_window.off("resize.resizeEventTeam");

    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {

  }

  function resizeTeam() {

  }

  function rAF_scroll_TeamP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_TeamP);
    }
  }

  function f_rAF_scroll_TeamP(status) {
    var scrollVal = verge.scrollY();

    var opac = _mTitle_SVGteam * scrollVal + 0.15;
    if (scrollVal > _yEnd) {
        opac = .95;
    }
    if (scrollVal <= 20) {
        opac = .15;
    }
    _$titleSVGteam.css("opacity", opac);

    if (verge.inY($(".trigger"), -200)) {
      TweenMax.to($navCities, .5, {
        autoAlpha: 0
      });
    } else {
      TweenMax.to($navCities, .5, {
        autoAlpha: 1
      });
    }
  }

  return {
    init: init,
    kill: kill
  }
}
function teamSinglePage() {
  /*Variables*/

  /*DOM variables*/

  var init = function() {

    if(_customScroll == null) {
      /*Attach the event with a reference to kill after exit */
      $_window.on("scroll.teamSingle", rAF_scroll_TeamSingleP);
    }
    else {
      _page_scroll_listener = function(status) {
        TeamSingle_scroll_rAF(status);
      };

      _customScroll.addListener(_page_scroll_listener);
    }
    console.log("team-single page");

    /*inits*/
    initiateInstrutorForm();

    //Events
    audioBtnShow(false);

    //DEFAULT EVENTS
    initEvents();
    if(!$_body.hasClass("mobile"))
      $_window.on("resize.resizeEventTeamSingle", $.debounce(500, resizeTeamSingle));
  }

  var kill = function() {
    //Kill Events

    //DEFAULT KILL EVENTS
    $_window.off("scroll.teamSingle");
    $_window.off("resize.resizeEventTeamSingle");
    
    _scrollRef = null;
    cancelAnimationFrame(_raf_main_id);

    if(_customScroll)
      _customScroll.removeListener(_page_scroll_listener);
  }

  /*page functions*/
  function initEvents() {
    //Bloquear o evento do <a> do horario para não saltar para o topo da pagina
    var $noClick = $("a.mod-no-click");
    $noClick.on("click", function(event){
      event.preventDefault();
    });

    // SWIPE
    var $toswipe = $(".modality-pic, .instruct-info-lft h2, .instruct-info-rgt"),
        $nextBtn = $("#nav-main-control a.next"),
        $prevBtn = $("#nav-main-control a.prev");
    $toswipe.on("swiperight",function (e,data){
        $prevBtn.click();
        e.preventDefault();
    })
    $toswipe.on("swipeleft",function (e,data){
        $nextBtn.click();
        e.preventDefault();
    })

    //SELECT form
    var $select1 = $("#team-modality"),
        $selectedTxt1 = $("#team-modality-txt"),
        $select2 = $("#team-gym"),
        $selectedTxt2 = $("#team-gym-txt");

    $select1.change(function() {
        var option = $("#team-modality option:selected").text();
        var $select = $(this);
        $selectedTxt1.text(option);
        resizeSelect($select, $selectedTxt1);
    })
    $select2.change(function() {
        var option = $("#team-gym option:selected").text();
        var $select = $(this);
        $selectedTxt2.text(option);
        resizeSelect($select, $selectedTxt2);
    })
    resizeSelect($select1, $selectedTxt1);
    resizeSelect($select2, $selectedTxt2);
    //Resize Input
    $("input.resizeIt").keyup(resizeInput).each(resizeInput);
    $("input.email").attr('size', '3'); // bug for txt email with this type

    //OVER MODALIDADES - title
    var $linkModality = $(".list-modality a"),
        $nameModality = $(".name-modality .anim-txt-ud");

    $linkModality.mouseenter(function(e){
        var $this = $(this),
            txtModality = $this.find(".txt").text();
        var direction = null,
            stopThis = null,
            x_old = 0;

        $this.mousemove(function(e){
          if ( stopThis ) return;
          if ( e.pageX < x_old ) {
            direction = "lft";
          } else if ( e.pageX > x_old) {
            direction = "rgt";
          }
            x_old = e.pageX;
        })
        $.doTimeout(50, function() {
            stopThis = true;
            $nameModality.text(txtModality);
            if (direction == "lft") {
              $nameModality.addClass("down");
            } else {
              $nameModality.addClass("up");
            }
        })
    })//end mouseenter

    $linkModality.mouseleave(function(e){
      $nameModality.removeClass("up down");
      $.doTimeout(50, function() { $nameModality.removeClass("up down"); }) //make sure doesnt stay on
    })//end mouseleave
  }

  //=FORM SELECTED FIELDS =team =intrutores
  function resizeSelect($selected, $txtElement) {
      var forpadding = 45;
      if ($_html.hasClass('mobile')) {
          forpadding = 52;
      }
      var comp = $txtElement[0].offsetWidth + forpadding;
      $selected.css("width", comp);
  }

  function resizeTeamSingle() {

  }

  function rAF_scroll_TeamSingleP() {
    if (!$_body.hasClass('mobile')) {
      window.requestAnimationFrame(f_rAF_scroll_TeamSingleP);
    }
  }

  function f_rAF_scroll_TeamSingleP(status) {
    // var $viewportControl = $(".vpControl"),
    var $picture = $(".instruct-pic"),
        $btnScrollDown = $(".team .center-stage");

    var scrollY = verge.scrollY();
    var opaI = 1,
        opaF = .45,
        yI = _globalViewportH,
        yF = 1.5 * _globalViewportH,
        m = ((opaF - opaI) / (yF - yI)),
        b = 1 - m * yI,
        yIBtn = yI + 171; /* (77 - margin bottom +94 height)*/

    //opacity image
    if (scrollY >= yI) {
        var opacF = m * scrollY + b;
        if (opacF <= opaF) {
            opacF = opaF;
        }
        $picture.css("opacity", opacF);
        if (scrollY >= yI + 77 + 97) {
            $btnScrollDown.css("bottom", "-77px");
        }
    } else {
        $picture.css("opacity", 1);
        $btnScrollDown.attr("style", "");
    }
    //btnscroll down
    if (scrollY >= yIBtn) {
        $btnScrollDown.css("bottom", "-177px");
    } else {
        $btnScrollDown.attr("style", "");
    }
  }

  return {
    init: init,
    kill: kill
  }
}
//# sourceMappingURL=main-engine.js.map
