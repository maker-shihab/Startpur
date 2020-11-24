$(document).ready(function () {
  // Mobile menu
  $(".menu-bars").click(function () {
    $(".menu ul").slideToggle(1000);

    return false;
  });
 
  // Scroll TOP
  $(".back-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });
  // Carousel Here t-t-c-body
  $(".t-h-c-t-item").owlCarousel({
    items: 4,
    loop: true,
    autoplay: false,
    nav: true,
    margin: 25,
    dots: false,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      800: {
        items: 3,
      },
      1100: {
        items: 4,
      },
    },
  });
  // Carousel Here t-h-c-t-item
  $(".t-c-f-c-body").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    dots: false,
  });
  $(".t-t-c-body").owlCarousel({
    items: 4,
    loop: true,
    autoplay: false,
    nav: false,
    margin: 25,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1100: {
        items: 4,
      },
    },
  });
  // image popup
  $(".img-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // sticky menu
  var menu = document.querySelector(".header-area");
  var origTopCoordinateMenu = menu.offsetTop;

  function scroll() {
    if ($(window).scrollTop() >= origTopCoordinateMenu) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }
  }

  document.onscroll = scroll;
});

$(window).scroll(function () {
  var scrollValu = $(this).scrollTop();

  if (scrollValu > 200) {
    $(".menu-header").addClass("fixed-header");
  } else {
    $(".menu-header").removeClass("fixed-header");
  }
});

// animated circle progreshbar js heat
$(document).ready(function () {
  $("svg.radial-progress").each(function (index, value) {
    $(this).find($("circle.complete")).removeAttr("style");
  });

  $(window)
    .scroll(function () {
      $("svg.radial-progress").each(function (index, value) {
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if (
          $(window).scrollTop() >
            $(this).offset().top - $(window).height() * 0.75 &&
          $(window).scrollTop() <
            $(this).offset().top + $(this).height() - $(window).height() * 0.25
        ) {
          // Get percentage of progress
          percent = $(value).data("percentage");
          // Get radius of the svg's circle.complete
          radius = $(this).find($("circle.complete")).attr("r");
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - (percent * circumference) / 100;
          // Transition progress for 1.25 seconds
          $(this)
            .find($("circle.complete"))
            .animate({ "stroke-dashoffset": strokeDashOffset }, 1550);
        }
      });
    })
    .trigger("scroll");
});
$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
});

function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}
