"use strict";

//lazy load & parallax init
var lazyLoaders = $(".lazy-load");
var parallaxer = $(".parallax");
var backB = $(".back-to-top");
var winHeight = $(".windowHeight");

function triggerLoad() {
  lazyLoaders.each(function () {
    if (
      this.getBoundingClientRect().top - window.innerHeight <=
      -window.innerHeight / 10
    ) {
      $(this).addClass("lazy-load-triggered");
    }
  });
}

function parallax() {
  parallaxer.each(function () {
    let pos = this.getBoundingClientRect().top;
    if (pos >= 0 && pos <= window.innerHeight) {
      let x = -pos / 20;
      $(this).css("transform", `translateY(${x}px)`);
    }
  });
}

function showBackButton() {
  if ($(document).scrollTop() > 200) {
    backB.fadeIn("fast");
  } else {
    backB.fadeOut("fast");
  }
}

backB.click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    800
  );
});

let toggled = false;
const nav = $(".nav");
const btn = $(".nav-tgl");

btn.click(function () {
  if (!toggled) {
    toggled = true;
    $(this).addClass("toggled");
    nav.addClass("active");
  } else {
    toggled = false;
    $(this).removeClass("toggled");
    nav.removeClass("active");
  }
});

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(document).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $(".head").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $(".head").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

backB.hover(
  function () {
    $(".back-top-chevron").addClass("back-top-chevron_up");
  },
  function () {
    $(".back-top-chevron").removeClass("back-top-chevron_up");
  }
);

$(document).ready(function () {
  triggerLoad();
  parallax();
  returnWinHeight();
});

$(window).resize(function () {
  returnWinHeight();
});

$(document).scroll(function () {
  triggerLoad();
  parallax();
  showBackButton();
  didScroll = true;
});

function returnWinHeight() {
  let winHeight = $(window).height();

  $(".flickity-page-dots").css("top", `${winHeight - 35}px`);
  $(".menubottom").css("top", `${winHeight - 35}px`);
}
