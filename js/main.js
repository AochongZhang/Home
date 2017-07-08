$(function () {
  var active = $("#program");
  $(".side-bar li").mouseenter(function () {
    $(active).removeClass("side-bar-active");
    $("." + $(active).attr("id")).hide();
    $(this).addClass("side-bar-active");
    $("." + $(this).attr("id")).slideDown(500);
    active = this;
  })
})
$(function () {
  var hight = $(window).height();
  var left = $(".side-bar").width();
  $(".side-bar").height(hight);
  $(".content").height(hight).css("left",left-20);
})
window.onresize = function () {
  var hight = $(window).height();
  var left = $(".side-bar").width();
  $(".side-bar").height(hight);
  $(".content").height(hight).css("left", left);
}
