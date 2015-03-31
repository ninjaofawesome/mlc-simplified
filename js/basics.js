$(document).ready(function(){
  console.log('the basics have loaded');

  function checkWidth() {
      var windowSize = $(window).width();

      if ($(window).width() >= 1 && $(window).width() <=768) {
       console.log('smallest');
        $('.nav-links').hide();
      }
    }

    checkWidth();
    $(window).resize(checkWidth);
});