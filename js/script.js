$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 90) {
        $("header").addClass("scrolled");
      } else {
        $("header").removeClass("scrolled");
      }
    });
  });