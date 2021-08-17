$(document).ready(function () {
   $(".questions__title").click(function (event) {
      $(this).toggleClass("active").next().slideToggle(300);
   });
});