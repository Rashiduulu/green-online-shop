$(document).ready(function () {
  // menu bar
  $(".toggle-icon").click(function () {
    $(".toggle-icon").toggle();
    $(".navbar").toggleClass("active");
    $(".catalog").removeClass("active");
    let htmlOverflow = $("html").css("overflow-y");
    $("html").css(
      "overflow-y",
      htmlOverflow === "hidden" ? "scroll" : "hidden"
    );
  });



  // nav active
  // $(".navbar-nav li").click(function () {
  //   $(".navbar-nav li").removeClass("nav-active");
  //   $(this).addClass("nav-active");
  // });

  // hide menubar on click item
  $(
    "a[href='#outerwear'], a[href='#jackets-and-suits'], a[href='#children-outerwear']"
  ).click(function () {
    $(".toggle-icon, .navbar, .catalog").removeClass("active");
    $(".toggle-icon").toggle();
    $("html").css("overflow-y", "scroll");
  });

  // left side active
  $(".dropdown-category li").click(function () {
    $(".dropdown-category li").removeClass("category-active");
    $(this).addClass("category-active");
  });

  // left side category active
  $(".navbar-nav li").click(function () {
    $(".navbar-nav li").removeClass("nav-active");
    $(this).addClass("nav-active");
  });

  // hide&show on scroll
  let prevScrollPos = $(window).scrollTop();
  let header = $(".header");

  $(window).scroll(function () {
    var currentScrollPos = $(window).scrollTop();

    if (prevScrollPos > currentScrollPos) {
      header.removeClass("hide");
    } else {
      header.addClass("hide");
    }

    prevScrollPos = currentScrollPos;
  });

  // catalog toggle
  $(".toggle-catalog").click(function () {
    $(".catalog").toggleClass("active");
  });

  // search toggle
  $(".search-toggle").click(function () {
    $(".logo-img, .header-left, .header-right").toggleClass("hidden");
    $(".search-block").toggleClass("active");
  });

  // application modal
  $(".application-btn").click(function () {
    $(".modal-window-application").show();
    $("html").css("overflow", "hidden");
  });

  $(".x-mark-modal-window").click(function () {
    $(".modal-window-application").hide();
    $("html").css("overflow-y", "scroll");
  });
  // size table modal
  $(".size-table").click(function () {
    $(".modal-window-size-table").show();
    $("html").css("overflow", "hidden");
  });

  $(".x-mark-modal-window").click(function () {
    $(".modal-window-size-table").hide();
    $("html").css("overflow-y", "scroll");
  });

  // banner slider
  $(".banner-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    // variableWidth: true,
    // slidesToShow: 3,
  });

  // new collegtion slider
  $(".new-collection-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow:
      '<img class="arrow-left arrow" src="./assets/images/arrow-right.svg"/>',
    nextArrow:
      '<img class="arrow-right arrow" src="./assets/images/arrow-right.svg"/>',
  });

  //new-collection-second-slider
  $(".new-collection-second-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 3,
    arrows: false,
    arrows: false,
    adaptiveHeight: true,
    variableHeight: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          variableWidth: true,
          slidesToShow: 2,
        },
      },
    ],
  });

  // pagination
  // let items = $(".product-cards .product-card");
  // let numItems = items.length;
  // let perPage = 4;

  // items.slice(perPage).hide();

  // $(".pagination-container").pagination({
  //   items: numItems,
  //   itemsOnPage: perPage,
  //   prevText: "<",
  //   nextText: ">",
  //   onPageClick: function (pageNumber) {
  //     let showFrom = perPage * (pageNumber - 1);
  //     let showTo = showFrom + perPage;
  //     items.hide().slice(showFrom, showTo).show();
  //     window.scrollTo(0, 0);
  //   },
  // });

  // dropdown toggle
  $(".dropdown-toggle").click(function () {
    var dropdown = $(this).next(".dropdown-category");
    dropdown.slideToggle("fast");
    $(this).find(".fa-chevron-right").toggleClass("rotate");
  });

  // closed dropdown when clicked item
  // $(".dropdown-category li").click(function () {
  //   var selectedValue = $(this).text();
  //   // alert("Selected: " + selectedValue);
  //   $(this).closest(".dropdown-category").slideUp("fast");
  // });
});

$(document).ready(function () {
  // vertical thumbnail slick slider

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: ".slider-for",
    dots: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          vertical: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          vertical: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        },
      },
    ],
  });

  // tabs
  $("#tabs-nav li:first-child").addClass("active");
  $(".tab-content").hide();
  $(".tab-content:first").show();

  $("#tabs-nav li").click(function () {
    $("#tabs-nav li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });

  //similar-products-slider
  $(".similar-products-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 4,
    adaptiveHeight: true,
    arrows: true,
    prevArrow:
      '<img class="arrow-left arrow" src="./assets/images/arrow-right-green.svg"/>',
    nextArrow:
      '<img class="arrow-right arrow" src="./assets/images/arrow-right-green.svg"/>',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          vertical: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          // slidesToShow: 2,
          vertical: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          // variableWidth: true,
          // slidesToShow: 3,
        },
      },
    ],
  });

  // circle color active
  $(".circle-color").click(function () {
    // $(this).toggleClass('active-color');
    $(".circle-color").removeClass("active-color");
    $(this).addClass("active-color");
  });

  // like active
  $(".like-heart").click(function () {
    $(this).toggleClass("liked");
    $(this).toggleClass("not-liked");

    if ($(this).hasClass("liked")) {
      $(this).html('<i class="fas fa-heart"></i>');
    } else {
      $(this).html('<i class="far fa-heart"></i>');
    }
  });
});

let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

window.onscroll = function () {
  scrollFunction();
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// $(document).ready(function () {
//   $(".play-stop-icon").click(function () {
//     const videoId = $(this).data("video");
//     const video = $("#" + videoId)[0];
//     const action = $(this).data("action");

//     if (action === "play") {
//       video.play();
//       $(this).data("action", "pause");
//     } else {
//       video.pause();
//       $(this).data("action", "play");
//     }
//   });
// });

$(document).ready(function () {
  $(".play-stop-icon").click(function () {
    const videoId = $(this).data("video");
    const video = $("#" + videoId)[0];
    const status = $(video).data("status");

    if (status === "paused") {
      $(this).find("svg").fadeOut();
      video.play();
      $(video).data("status", "playing");
    } else {
      $(this).find("svg").fadeIn();
      video.pause();
      $(video).data("status", "paused");
    }
  });

  $("video").click(function () {
    const iconButton = $(
      ".play-stop-icon[data-video='" + $(this).attr("id") + "']"
    );
    const status = $(this).data("status");

    if (status === "paused") {
      iconButton.find("svg").fadeOut();
      this.play();
      $(this).data("status", "playing");
    } else {
      iconButton.find("svg").fadeIn();
      this.pause();
      $(this).data("status", "paused");
    }
  });
});
