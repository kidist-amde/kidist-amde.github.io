/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    const MINIMUM_WIDTH = 1024;

    // Adjust if the follow button is shown based upon screen size
    var width = $(window).width();
    var show = $(".author__urls-wrapper button").length === 0 ? width > MINIMUM_WIDTH : !$(".author__urls-wrapper button").is(":visible");

    // Don't show the follow button if there is no content for it
    var count = $('.author__urls.social-icons li').length - $('li[class="author__desktop"]').length;
    if (width <= MINIMUM_WIDTH && count === 0) {
      $(".author__urls-wrapper button").hide();
      show = false;
    }

    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

});
