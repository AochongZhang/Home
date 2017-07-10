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
  $(".content").height(hight).css("left",left);
})
window.onresize = function () {
  var height = $(window).height();
  var width = $(window).width();
  var bwidth = $(".side-bar").width();
  var content = $(".content");
  var websidewrap = $(".webside-wrap");
  var cwidth = $(".content").width();
  $(".side-bar").height(height);
  $(".content").css("left",bwidth).width(width-bwidth).height(height);
  if (cwidth>=1040) {
    websidewrap.width(1040);
  }else if (cwidth<1040&&cwidth>=780) {
    websidewrap.width(780);
  }else if (cwidth<780&&cwidth>=520) {
    websidewrap.width(520);
  }else if (cwidth<520&&cwidth>=260) {
    websidewrap.width(260);
  }
}
