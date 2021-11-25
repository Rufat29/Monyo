// FAQ
document.querySelectorAll(".left-b").forEach(a => {
  a.addEventListener("click", () => {
    document.querySelectorAll(".extra").forEach(t => {
      t.style.display = "none";
    })
    let id = a.getAttribute("data-open");
    document.getElementById(id).style.display = 'block';
  });
})

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";
}
// FAQ-END

// NAVBAR
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".fresh-nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))
// NAVBAR-END

// SLIDER-1
$('.slider-1').slick({
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  prevArrow: '<i class="fas fa-chevron-left my-arrow left-arrow-slider1"></i>',
  nextArrow: '<i class="fas fa-chevron-right my-arrow right-arrow-slider1"></i>',
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// SLIDER-1-END

// ANIMATION-START
var b = 0;
$(window).scroll(function () {
  var bTop = $('#control').offset().top - window.innerHeight;
  if (b == 0 && $(window).scrollTop() > bTop) {
    $(".ad1").addClass("item-control1");
    $(".ad2").addClass("control-line1");
    $(".ad3").addClass("item-control2");
    $(".ad4").addClass("control-line2");
    $(".ad5").addClass("item-control3");
    b = 1;
  }
});
// ANIMATION-END

// COUNTER
var a = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      },

        {

          duration: 5000,
          // delay:550,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});
// COUNTER-END

// COMMENT-SLIDER
$('.slider-11').slick({
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  infinite: true,
  prevArrow: '<i class="fal fa-long-arrow-left my-arrow left-arrow-slider2"></i>',
  nextArrow: '<i class="fal fa-long-arrow-right my-arrow right-arrow-slider2"></i>',
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// COMMENT-SLIDER-END


$(function () {
  $('.scroll-down').click(function () {
    $('html, body').animate({ scrollTop: $('section.ok').offset().top }, 'slow');
    return false;
  });
});







