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
  $('.v2').slideUp().addClass('v3');
  setTimeout(function(){
    $('.v3').removeClass('success v2').html('Start my first class').slideDown();
  }, 5000);
});
