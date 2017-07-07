$(function () {
  var active = $("#program");
  $(".side-bar li").mouseenter(function () {
    $(active).removeClass("side-bar-active");
    $("." + $(active).attr("id")).stop().slideUp(500);
    $(this).addClass("side-bar-active");
    $("." + $(this).attr("id")).slideDown(500);
    active = this;
  })
})
