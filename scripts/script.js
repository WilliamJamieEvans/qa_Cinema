$(document).ready(function(){
    $(".burger-menu").click(function(){
      $(".menu").slideToggle();
      $(".bar").toggleClass('change');
    });
  });