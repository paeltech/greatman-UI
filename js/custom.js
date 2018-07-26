//var $dylay = jQuery('#dylay');
//
//// init
//$dylay.dylay({
//// speed of animation
//	speed: 1500,
//// make your animation yummy
//	easing: 'easeOutElastic',
//// selector to define elements
//	selector: '>li'
//});

// controls
jQuery('#filters a').on('click', function () {
	$dylay.dylay('filter', jQuery(this).data('filter'));	
	return false;
})

jQuery('#sorts a').on('click', function () {
	$dylay.dylay('sort', jQuery(this).data('sort-by'), jQuery(this).data('sort-way'));	
	return false;
})

var $header = $(".navbar-default");
var $logo = $("h1.navbar-brand-to-scroll > a");
var $bg =  $(".navbar-nav>li>a");
$(window).scroll(function () {
    var e = $(this).scrollTop();
    if (e > 120) {
        $header.css("background", "#fff").css("color","#16181F");
        $logo.addClass('navbar-brand-scroll');
        $bg.css("color", "#3f3729");
    } else {
        $header.css("background", "transparent").css("color", "#16181F");
        $logo.removeClass('navbar-brand-scroll');
        $bg.css("color", "#fff");
    }
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$(function() {
    var images = ['bg.jpg', 'bg2.jpg', 'bg3.jpg'];
    $('.flexbox').css({'background-image': 'url(./img/' + images[Math.floor(Math.random() * images.length)] + ')'});
});