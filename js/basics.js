$(document).ready(function(){
  console.log('the basics have loaded');



  function checkWidth() {
      var windowSize = $(window).width();

      if ($(window).width() >= 1 && $(window).width() <=768) {
       console.log('smallest');
        $('.nav-links').hide();
        toggleMenu();
      } else {
        $('.drop-button, .drop-menu').hide();
        $('.nav-links').show();

        //change function for touch events, not click.
        function toggleMenu(){
          $('.drop-button').fadeIn();
          $('.drop-list').hide();
          $('.drop-button').click(function(){
            $('.drop-list').slideToggle(600);

          })

        }

      }
    }

    checkWidth();
    $(window).resize(checkWidth);
});