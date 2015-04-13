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

    function faqButton(){
      var answer = $('.answer');
      var up = $('.arrow-icon.up');
      var down = $('.arrow-icon.down');
      var icon=$('.arrow-icon.down').attr('id');
      var iconUp=$('.arrow-icon.up').attr('id');
      var buttonId= $(this).id;

      answer.hide();
      up.hide();



      $('.question-arrow').click(function(){
        up.delay(600).fadeIn();
        down.fadeOut(600);
        answer.slideToggle(600);
      });



      // icon.click(function(){
      //   alert('hi');
      // });

    }

    faqButton();
});


