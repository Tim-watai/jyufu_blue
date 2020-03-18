$(document).ready(function() {
  //種類_active 未綁定
  $("nav.kinds ul li").click(function() {
    if ($(this).hasClass("active") == false) {
      $(this).addClass("active");
      $(this)
        .siblings()
        .removeClass("active");
    }
  });
  //***切換_新手/專業 版
  $("main.market aside article.option div.mode span").click(function() {
    if ($(this).hasClass("active") == false) {
      $(this).addClass("active");
      $(this)
        .siblings()
        .removeClass("active");
    }

    if ($(this).hasClass("beginner") === true) {
      $("main.market aside ul li.beginner").css("display", "block");
      $("main.market aside ul li.senior").css("display", "none");
    } else if ($(this).hasClass("senior") === true) {
      $("main.market aside ul li.senior").css("display", "block");
      $("main.market aside ul li.beginner").css("display", "none");
    }
  });
  //專業版波膽_active
  $(
    "main.market aside ul li.senior section.content span.point_box span.num_group span div"
  ).click(function() {
    if ($(this).hasClass("active") != true) {
      return $(this).addClass("active");
    } else {
      return $(this).removeClass("active");
    }
  });
  //開啟_投注頁面
  $("main.market aside ul li.beginner ,aside.bet_window div.bet_page span.close").click(function() {
    if ($("aside.bet_window").hasClass("active") != true) {
      return $("aside.bet_window").addClass("active");
    }else{
   //關閉_投注頁面
        return $("aside.bet_window").removeClass("active");
    }
  });
  
 
}); //total
