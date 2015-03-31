$(document).ready(function(){
  console.log('the basics have loaded');

  //change function for touch events, not click.
  function toggleMenu(){
    $('.dropdown-button').show();
    $('.dropdown-button').click(function(){
      $('.dropdown-menu').slideToggle();

    })

  }

  function checkWidth() {
      var windowSize = $(window).width();

      if ($(window).width() >= 1 && $(window).width() <=768) {
       console.log('smallest');
        $('.nav-links').hide();
        toggleMenu();
      } else {
        $('.nav-links').show();
      }
    }

    checkWidth();
    $(window).resize(checkWidth);
});