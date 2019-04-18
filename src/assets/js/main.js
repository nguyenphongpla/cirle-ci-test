
$(document).ready(function () {

  homeBannerSlider();
  homePhoneSlider();
  homeInternetSlider();
  supportSlider();
  handleToggleSupport();
  showLeftPushClick();


});

function homeBannerSlider() {
  $("#myCarousel").on("slide.bs.carousel", function (e) {
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item")
            .eq(i)
            .appendTo(".carousel-inner");
        } else {
          $(".carousel-item")
            .eq(0)
            .appendTo($(this).find(".carousel-inner"));
        }
      }
    }
  });
}



function homePhoneSlider() {
  $('.owl-phone').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsiveClass: true,
    navText: ['<img class="prev " src="assets/images/prev-icon.png ">', '<img class="next " src="assets/images/next-icon.png ">'],

    responsive: {
      0: {
        items: 1,

      },
      768: {
        items: 2,
      },

      991: {
        items: 3,
        loop: false,
      }
    }
  });

}



function supportSlider() {

  $('.owl-support').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,

      },
      768: {
        items: 2,

      },
      1000: {
        items: 1,

      }

    }
  });
}

function homeInternetSlider() {
  $('.owl-internet').owlCarousel({
    loop: true,
    margin: 15,
    nav: true,
    responsiveClass: true,
    navText: ['<img class="prev " src="assets/images/prev-icon.png ">', '<img class="next " src="assets/images/next-icon.png ">'],

    responsive: {
      0: {
        items: 1,

      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,

      },
      1200: {
        items: 4,

      },
      1300: {
        items: 4,

      }
    }
  });

}

// icon menu animation
$(document).ready(function () {
  $('#showLeftPush').click(function () {
    $(this).toggleClass('open');
  });


  $("#loadMore").on('click', function (e) {
    $("#loadMore").addClass("d-none");
    $('#more-content').slideToggle(500, function () { });
  });

  $("#close-more").on('click', function (e) {
    $("#loadMore").removeClass("d-none");
    $('#more-content').slideToggle(500, function () { });
  });


  $("#moredetail").on('click', function (e) {
    $("#moredetail").addClass("d-none");
    $('#moredetailcontent').slideToggle(500, function () { });
  });

});


function handleToggleSupport() {
  $('.hotro ol li a').click(function () {
    var tabContent = $(this).attr("data-tab");

    $(tabContent).slideToggle(500, function () { });
  });

}

function showLeftPushClick() {
  var menuLeft = document.getElementById('cbp-spmenu-s1'),
    showLeftPush = document.getElementById('showLeftPush');
  body = document.body;
  showLeftPush.onclick = function () {
    classie.toggle(this, 'active');
    classie.toggle(body, 'cbp-spmenu-push-toright');
    classie.toggle(menuLeft, 'cbp-spmenu-open');
    disableOther('showLeftPush');
  };
}

function disableOther(button) {
  if (button !== 'showLeftPush') {
    classie.toggle(showLeftPush, 'disabled');
  }
}


