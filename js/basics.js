$(document).ready(function(){
  console.log('the basics have loaded');



  function checkWidth() {
      var windowSize = $(window).width();

      if ($(window).width() >= 1 && $(window).width() <=768) {
       console.log('smallest');
        $('.nav-links').hide();

        $('.btn.drop-button').show();
        $('.drop-menu').hide();

        function tapScreen(){
          // $('.drop-button').on('tap', function(){
          //   $('.drop-list').slideToggle(600);
          // }
        }

        tapScreen();

      } else {
        $('.drop-button, .drop-menu').hide();
        $('.nav-links').show();
      }
    }

    checkWidth();
    $(window).resize(checkWidth);
});


