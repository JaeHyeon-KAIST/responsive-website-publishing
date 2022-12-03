$(function(){
// Trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  });
  $('section, .menu a').click(function(){
    $('.gnb').removeClass('active')
    $('.trigger').removeClass('active')
  });

  // Change CSS with Scroll
  $(window).scroll(function(){
    if ($(window).scrollTop() > 50) {
      $('header').addClass('active');
      $('.gototop').addClass('active');
    } else {
      $('header').removeClass('active');
      $('.gototop').removeClass('active');
    }
  });
})