$(document).ready(function(){
  console.log('the basics have loaded');



  function checkWidth() {
      var windowSize = $(window).width();

      if ($(window).width() >= 1 && $(window).width() <=768) {
       console.log('smallest');
        $('.nav-links').hide();
        $('.drop-menu').hide();

        $('.drop-button').show().click(function(){
          $('.drop-menu').slideToggle(1000);
        });

        $('.footer').hide();




      } else {
        $('.drop-button, .drop-menu').hide();
        $('.nav-links').show();
      }
    }

    checkWidth();
    $(window).resize(checkWidth);
});


