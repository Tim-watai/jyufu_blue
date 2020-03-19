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
        return $("aside.bet_window").removeClass("active");
    }
  });
  //開啟_設置頁面
  $('footer ul li.set_table ,aside.set_window ul.side_bar li.close').click(
    function (){
      if($('aside.set_window').hasClass('active') != true){
        return $('aside.set_window').addClass('active');
      }
      else{
        return $('aside.set_window').removeClass('active');
      }
    }
  );
  //***設置頁面_切換
  $('aside.set_window ul.side_bar li div.box div.check span').click(
    function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active')
    }
  );
  //開啟_賽事選擇頁面_search_window
  $('header ul.market li.search , aside.search_window div.header ul li.close').click(
    function(){
      if($('aside.search_window').hasClass('active') != true){
        return $('aside.search_window').addClass('active');
      }else{
        return $('aside.search_window').removeClass('active');
      }
    }
  )
  
 
}); //total
