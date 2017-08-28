$(function () {
  var active = $("#program");
  $(".side-bar li").mouseenter(function () {
    $(active).removeClass("side-bar-active");
    $("." + $(active).attr("id")).hide();
    $(this).addClass("side-bar-active");
    $("." + $(this).attr("id")).stop().slideDown();
    if ($(this).attr("id")=="about") {
      $(".search-wrap").stop().slideUp();
    }else {
      $(".search-wrap").stop().slideDown();
    }
    active = this;
  })
})
$(function () {
  content();
})
window.onresize = function () {
  content();
}
function content() {
  var height = window.innerHeight;  //使用jQuery方法出现BUG,改为原生方法解决。
  var width = window.innerWidth;
  var bwidth = $(".side-bar").width();
  $(".side-bar").height(height);
  $(".content").width(width-bwidth).height(height);
}
$(function () {
  $("#g-search-input").keydown(function(e){
      // alert(e.keyCode);
      if (e.keyCode===13) {
        $("#g-search-form").submit();
      }
  })
  $("#b-search-input").keydown(function(e){
      // alert(e.keyCode);
      if (e.keyCode===13) {
        $("#b-search-form").submit();
      }
  })
})
