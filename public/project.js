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

var imagecount = 1;
var total = 3;


function slide(x) {
	var Image = document.getElementById("img");
	imagecount = imagecount + x;
	if(imagecount > total){imagecount = 1;}
  if(imagecount < 1){imagecount = total;}
  $('#img').fadeOut("slow", function(){
    $(this).attr('src',"Images/img" + imagecount+ ".jpg").bind('onreadystatechange load', function(){
       if (this.complete) $(this).fadeIn("slow");
    });
  });
};

window.setInterval(function slideA() {
	var Image = document.getElementById('img');
	imagecount = imagecount + 1;
	if(imagecount >  total){imagecount = 1;}
	if(imagecount < 1){imagecount = total;}
  $('#img').fadeOut("slow", function(){
    $(this).attr('src',"Images/img" + imagecount+ ".jpg").bind('onreadystatechange load', function(){
       if (this.complete) $(this).fadeIn("fast");
    });
  });
},10000);
