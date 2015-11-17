$( document ).ready(function() {
  if (window.innerWidth < 775) {
     $(".nav-links").removeClass('right menu');
  } else {
     $(".nav-links").addClass('right menu');
  }
  $(window).resize(function () {
     if (window.innerWidth < 775) {
        $(".nav-links").removeClass('right menu');
     } else {
        $(".nav-links").addClass('right menu');
     }
  });
});
