// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------

$(document).foundation();




//
// Custom JS
// --------------------------------------------------

// $(window).on('scroll', function() {
//     var scrollPosition = $(this).scrollTop();
//     var imageUrl;
//     var bgpos;
//     if (scrollPosition >= 680) {
//         // If the function is only supposed to fire once
//         //$(this).off('scroll');
//         imageUrl = '../assets/img/bg2.jpg';
//         // Other function stuff here...
//         bgpos = '0% 20%';
//     }
//     else{
//         imageUrl = '../assets/img/cover3.jpg';
//         bgpos = 'bottom';
//     }
//     $(".parallax-background").css({"background-image": "url('" + imageUrl + "')","background-position": bgpos});
// });


$(".coursesgrid .cell h3").click(function() {
    $(".coursesgrid .cell").removeClass('actives').addClass('op');
    $(".coursesgrid .cell").first().removeClass('op');
    $(this).parent().addClass('actives').removeClass('op');
    $('.ctabtn0').addClass('animated bounce');
    setTimeout(function() {
      $('.ctabtn0').removeClass('animated bounce');
    }, 700);
});


function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$('.v1').html(randomNumberFromRange(200, 700)+'+');




$('.v2').click(function(e){
  e.preventDefault();
  $('.vw1').fadeOut(600);
  $('.vw2').delay(800).fadeIn(600);
  $('#iframe_div').html(`
    <iframe frameborder="0" allowfullscreen="" scrolling="no" allow="autoplay;fullscreen" src="https://onelineplayer.com/player.html?autoplay=true&autopause=true&muted=false&loop=true&url=https%3A%2F%2Fvimeo.com%2F226137389&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true" style="position: absolute; height: 100%; width: 100%; left: 0px; top: 0px;"></iframe>
  `);

  //$("#testimonial_div").html("");
  function slideFade (elem, callback) {
      const fade = { opacity: 0, transition: 'opacity 0.5s' };
      elem.css(fade).delay(100).slideUp("slow", callback);
  }
  setInterval(function () {
    var top_element = $("#testimonial_div").children()[0];
    slideFade($(top_element), function () {
      $("#testimonial_div").children()[0].remove();
      $("#testimonial_div").append($(top_element).show());
      $(top_element).css({opacity: 100});
    });
    // $($("#testimonial_div").children()[0]).slideUp('slow', function () {
    //   $("#testimonial_div").children()[0].remove();
    //   $("#testimonial_div").append($(top_element).show());
    // });    
    // $.each($("#testimonial_div").children(), function (index, value) {
    //   value.show("slide", {direction: "up"}, "1000")
    // });
  }, 2000);

  $('.v2').slideUp().addClass('v3');
  setTimeout(function(){
    $('.v3').removeClass('success v2').html('Start my first class').slideDown();
  }, 5000);
});
