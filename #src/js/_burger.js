// burger 
$(document).ready(function () {
   $('.burger').click(function (event) {
      $('.burger,.menu__body').toggleClass('active');
      $('body').toggleClass('lock');
   });
});