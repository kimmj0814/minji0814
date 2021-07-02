var jb = jQuery.noConflict();

jb(document).ready(function(){

   jb('#bannerSlider').slick({
     autoplay : true,
     dots: false,
     infinite: false,
     speed: 500,
     fade: true,
     arrows : false,
     cssEase: 'linear'
   });


});
