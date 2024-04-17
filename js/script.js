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
    no_of_slides = 4; arrows_to_show = true;
} else if (window.matchMedia("(max-width: 620px)").matches === true) {
    no_of_slides = 3; arrows_to_show = false;
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
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
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

const activitySlider = document.querySelector(".activity-slider");

const dragging = (e) => {
  activitySlider.scrollLeft = e.pageX;
}

activitySlider.addEventListener("mousemove", dragging);



//Activity Slider
$('.activity-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
