$(function() {

  $('.kemosya').click(function() {
    $('.heart').animate({opacity: 1 })
    $('.clickMe').animate({opacity: 0})
  });

  $(function() {
    $('.mv-title').click(function() {
      $('.mv-title').toggleClass('painted'); //thisでも動く
    });
  });

});