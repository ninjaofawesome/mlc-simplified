$(document).ready(function(){
  console.log('the basics have loaded');

  //change function for touch events, not click.
  function toggleMenu(){
    $('.drop-button').show();
    $('.drop-button').click(function(){
      $('.drop-menu').toggle();

    })

  }

  function checkWidth() {
      var windowSize = $(window).width();

      if ($(window).width() >= 1 && $(window).width() <=768) {
       console.log('smallest');
        $('.nav-links').hide();
        toggleMenu();
      } else {
        $('.dropdown-button, .dropdown-menu').hide();
        $('.nav-links').show();

      }
    }

    checkWidth();
    $(window).resize(checkWidth);
});