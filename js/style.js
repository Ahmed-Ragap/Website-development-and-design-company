$(document).ready(function() {

/*this for adding class active to links */
 $('.navbar .nav-item .nav-link').click(function() {
$('this').addClass('active-li').siblings().removeClass('active-li');
});

     /*this for scroll button to top*/
       $(window).on('scroll', function() {
         if (Math.round($(window).scrollTop()) >= 20) {
             $('nav').addClass('scroll');
         } else {
             $('nav').removeClass('scroll');
         }
       });
/*to top scroll*/
// $('header button.Down-arrow').click(function() {
//      $('html, body').animate({
//       scrollTop: ($('.about').offset().top - 50)
//       },1500);
//       });

      });
