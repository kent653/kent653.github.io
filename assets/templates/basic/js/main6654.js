"use strict";
(function ($) {
  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {
    // ============== Header Hide Click On Body Js Start ========
    $(".header-button").on("click", function () {
      $(".body-overlay").toggleClass("show");
    });
    $(".body-overlay").on("click", function () {
      $(".header-button").trigger("click");
      $(this).removeClass("show");
    });
    // =============== Header Hide Click On Body Js End =========

    //============================ Scroll To Top Icon Js Start =========
    (function () {
      const btn = $(".scroll-top");
      $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 300) {
          $(".header").addClass("fixed-header");
        } else {
          $(".header").removeClass("fixed-header");
        }
      });

      btn.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "300");
      });
    })();
    // ========================== Header Hide Scroll Bar Js Start =====================
    $(".navbar-toggler.header-button").on("click", function () {
      $("body").toggleClass("scroll-hide-sm");
    });
    $(".body-overlay").on("click", function () {
      $("body").removeClass("scroll-hide-sm");
    });
    // ========================== Header Hide Scroll Bar Js End =====================

    // ========================== Add Attribute For Bg Image Js Start =====================
    $(".bg-img").css("background-image", function () {
      return `url(${$(this).data("background-image")})`;
    });
    // ========================== Add Attribute For Bg Image Js End =====================

    /* ==================== Dynamically Add Mask Image JS Start ====================== */
    $('.mask-img').css('mask-image', function () {
      return `url(${$(this).data('mask-image')})`;
    });
    /* ==================== Dynamically Add Mask Image JS End ======================== */

    // ========================== add active class to ul>li top Active current page Js Start =====================
    function dynamicActiveMenuClass(selector) {
      if (!$(selector).length) return;

      let fileName = window.location.pathname.split("/").reverse()[0];
      selector.find("li").each(function () {
        let anchor = $(this).find("a");
        if ($(anchor).attr("href") == fileName) {
          $(this).addClass("active");
        }
      });
      // if any li has active element add class
      selector.children("li").each(function () {
        if ($(this).find(".active").length) {
          $(this).addClass("active");
        }
      });
      // if no file name return
      if ("" == fileName) {
        selector.find("li").eq(0).addClass("active");
      }
    }
    dynamicActiveMenuClass($("ul.sidebar-menu-list"));

    // ========================== add active class to ul>li top Active current page Js End =====================

    // ================== Password Show Hide Js Start ==========
    $(".toggle-password").on("click", function () {
      $(this).toggleClass("fa-eye");
      var input = $(this).closest(".form-group").find("input");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });

    // =============== Password Show Hide Js End =================

    // ================== Sidebar Menu Js Start ===============
    // Sidebar Dropdown Menu Start
    $(".has-dropdown > a").click(function () {
      $(".sidebar-submenu").slideUp(200);
      if ($(this).parent().hasClass("active")) {
        $(".has-dropdown").removeClass("active");
        $(this).parent().removeClass("active");
      } else {
        $(".has-dropdown").removeClass("active");
        $(this).next(".sidebar-submenu").slideDown(200);
        $(this).parent().addClass("active");
      }
    });
    // Sidebar Dropdown Menu End
    // Sidebar Icon & Overlay js
    $(".dashboard-body__bar-icon").on("click", function () {
      $(".sidebar-menu").addClass("show-sidebar");
      $(".sidebar-overlay").addClass("show");
    });
    $(".sidebar-menu__close, .sidebar-overlay").on("click", function () {
      $(".sidebar-menu").removeClass("show-sidebar");
      $(".sidebar-overlay").removeClass("show");
    });
    // Sidebar Icon & Overlay js
    // ===================== Sidebar Menu Js End =================


    // ==================== Dashboard User Profile Dropdown Start ==================
    $(".user-info__button").on("click", function () {
      $(".user-info-dropdown").toggleClass("show");
    });
    $(".user-info__button").attr("tabindex", -1).focus();

    $(".user-info__button").on("focusout", function () {
      $(".user-info-dropdown").removeClass("show");
    });
    // ==================== Dashboard User Profile Dropdown End ==================

    //Plugin Customization Start
    // ========================= Select2 Js Start ==============
    (function () {
      $(".select2").each((index, select) => {
        $(select)
          .wrap('<div class="select2-wrapper"></div>')
          .select2({
            dropdownParent: $(select).closest(".select2-wrapper"),
          });
      });
    })();
    // ========================= Select2 Js End ==============


    /* ==================== Scroll To Top Button JS Start =========================== */
    let scrollTopBtn = $('.scroll-top');

    if (scrollTopBtn.length) {
      let progressPath = scrollTopBtn.find('.scroll-top-progress path');
      let pathLength = progressPath[0].getTotalLength();
      let offset = 250;
      let duration = 550;

      progressPath.css({
        transition: 'none',
        WebkitTransition: 'none',
        strokeDasharray: `${pathLength} ${pathLength}`,
        strokeDashoffset: pathLength,
        transition: 'stroke-dashoffset 10ms linear',
        WebkitTransition: 'stroke-dashoffset 10ms linear',
      });

      function updateProgress() {
        let scroll = $(window).scrollTop();
        let height = $(document).height() - $(window).height();
        let progress = pathLength - (scroll * pathLength / height);
        progressPath.css('strokeDashoffset', progress)
      }

      updateProgress();

      $(window).on('scroll', function () {
        updateProgress();
        if ($(this).scrollTop() > offset) {
          scrollTopBtn.addClass('active');
        } else {
          scrollTopBtn.removeClass('active');
        }
      });

      scrollTopBtn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
      });
    }
    /* ==================== Scroll To Top Button JS End ============================= */



    // ========================= Slick Slider Js Start ==============
    (function () {
      const sliderConfig = {
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1500,
        dots: false,
        pauseOnHover: true,
        arrows: false,
        prevArrow:
          '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
        nextArrow:
          '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
      };

      if ($(".testimonial-slider").length) {
        $(".testimonial-slider").slick({
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          prevArrow:
            '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',

          responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              },
            },
          ],
        });
      }

      if ($(".payment-slider__items").length) {
        $(".payment-slider__items").slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
          pauseOnHover: true,
          speed: 2000,
          dots: false,
          arrows: false,
          prevArrow:
            '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>',
          nextArrow:
            '<button type="button" class="slick-next"><i class="fa-solid fa-arrow-right"></i></button>',
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 6,
              },
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 3,
              },
            },
          ],
        });
      }
    })();
    // ========================= Slick Slider Js End ===================

  });

  // ========================= Custom Language Dropdown Js Start =====================
  $(".language-dropdown > .language-dropdown__selected").on(
    "click",
    function () {
      $(this).parent().toggleClass("open");
    }
  );

  $(
    ".language-dropdown > .language-dropdown__list > .language-dropdown__list__item"
  ).on("click", function () {
    $(
      ".language-dropdown > .language-dropdown__list > .language-dropdown__list__item"
    ).removeClass("selected");
    $(this)
      .addClass("selected")
      .parent()
      .parent()
      .removeClass("open")
      .children(".language-dropdown__selected")
      .html($(this).html());
  });

  $(document).on("keyup", function (evt) {
    if ((evt.keyCode || evt.which) === 27) {
      $(".language-dropdown").removeClass("open");
    }
  });

  $(document).on("click", function (evt) {
    if (
      $(evt.target).closest(".language-dropdown > .language-dropdown__selected")
        .length === 0
    ) {
      $(".language-dropdown").removeClass("open");
    }
  });
  // ========================= Custom Language Dropdown Js End =====================

  // ========================= Preloader Js Start =====================
  $(window).on("load", function () {
    $(".preloader").fadeOut();
    //Initialize WOW JS
    new WOW().init();
  });

  // ========================= Preloader Js End=====================
  $('[data-highlight]').each(function () {
    const $this = $(this);
    let originalText = $this.text().trim().split(' ');
    let textLength = originalText.length;
    const highlight = $this.data('highlight').toString();
    const highlight_class = $this.data('highlight-class')?.toString() || 'text--base';
    const highlightToArray = highlight.split(',');
    // Loop through each highlight range
    $.each(highlightToArray, function (i, element) {
      const index = element.toString().split('_');
      var startIndex = index[0];
      var endIndex = index.length > 1 ? index[1] : startIndex;
      if (startIndex < 0) {
        startIndex = textLength - Math.abs(startIndex);
      }
      if (endIndex < 0) {
        endIndex = textLength - Math.abs(endIndex);
      }
      const startIndexValue = originalText[startIndex];
      const endIndexValue = originalText[endIndex];
      if (startIndex === endIndex) {
        originalText[startIndex] = `<span class="${highlight_class}">${startIndexValue}</span>`;
      } else {
        originalText[startIndex] = `<span class="${highlight_class}">${startIndexValue}`;
        originalText[endIndex] = `${endIndexValue}</span>`;
      }
    });
    $this.html(originalText.join(' '))
  });

  // required (*) 
  $.each($("input, select, textarea"), function (i, element) {
    if (element.hasAttribute("required")) {
      $(element)
        .closest(".form-group")
        .find("label")
        .first()
        .addClass("required");
    }
  });
})(jQuery);

