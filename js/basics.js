$(document).ready(function(){
  console.log('the basics have loaded');



  function checkWidth() {
      var windowSize = $(window).width();

      if ($(window).width() >= 1 && $(window).width() <=768) {
       console.log('smallest');
        $('.nav-links').hide();
        $('.drop-menu').hide();

        $('.drop-button').show();
        $('.drop-button').click(function(){
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
      var buttonUp = $('.button-slide-up');

      answer.hide();
      buttonUp.hide();

      $('.questionBox').click(function(){
        var myBox = $(this);
        myBox.children('.answer').slideToggle(function(){
          if('.answer:visible' == true) {
            console.log('yay');
            buttonUp.hide();
          } else {
            console.log('boo');
            buttonUp.show();
          }
        });
      });



    }

    faqButton();
});


