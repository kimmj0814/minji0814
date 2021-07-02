var jb = jQuery.noConflict();

jb(document).ready(function(){

   jb('#rollingNotice').slick({
      vertical : true,
      autoplay : true,
      arrows : false,
   });

   


   jb('.searchBtn > a').click(function(){

      jb(".searchFix").addClass('show');

      jb(".show").addClass('hide');
   });


});
