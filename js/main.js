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
  // console.log("window-widht   :"+width);
  // console.log("window-height  :"+height);
  // console.log("side-bar-width :"+bwidth);
  // console.log("side-bar-height:"+$(".side-bar").height());
  // console.log("content-width  :"+$(".content").width());
  // console.log("width-bwidth   :"+(width-bwidth));
  // console.log("content-height :"+$(".content").height());
  // console.log("------------------------");

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
