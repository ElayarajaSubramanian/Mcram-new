$(document).ready(function() {
    $(window).scroll(function() {
      if ($(document).scrollTop() > 90) {
        $("header").addClass("scrolled");
      } else {
        $("header").removeClass("scrolled");
      }
    });
  });

  //GlobalVariables
var no_of_slides, arrows_to_show;

//OnWindowResize
if (window.matchMedia("(max-width: 920px)").matches === true && window.matchMedia("(max-width: 621px)").matches === false) {
    no_of_slides = 2; arrows_to_show = true;
} else if (window.matchMedia("(max-width: 620px)").matches === true) {
    no_of_slides = 1; arrows_to_show = false;
} else {
    no_of_slides = 6, arrows_to_show = true;
}

//JquerySlider
$('.card-slider').slick({
    slidesToShow: no_of_slides,
    slidesToScroll: 6,
    dots: false,
    arrows:arrows_to_show,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
});

function openIndustry(evt, industryName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(industryName).style.display = "block";
  evt.currentTarget.className += " active";

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

