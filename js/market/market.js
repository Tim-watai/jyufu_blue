$(document).ready(function() {
  console.log('market.js');

//換膚 0522
function check_play_type (){
  let t_day = localStorage.getItem('type');
  if(t_day == 'night'){
    console.log('nn');
    $('body').addClass('dk');
   return 
  }else{
    $('body').removeClass('dk');
  return  console.log('ll');
  }
}


localStorage.setItem('type','light');
localStorage.setItem('type','night');
check_play_type();

//***設置n&l_切換
$('aside.set_window ul.side_bar li div.box div.check span').click(
  function(){
  
  }
);




  //今日_滾球_早盤_串關
  $("header ul li.title").click(function(){
    console.log("title");
   
    if($(this).hasClass('active') != true){

                $('aside.type_ch,aside.type_ch ul').addClass('active');
                $(this).addClass('active');
       return   $(this).parent().parent().css('z-index','502');
    }else{
                      $('aside.type_ch,aside.type_ch ul').removeClass('active');
                      $(this).removeClass('active');
          return      $(this).parent().parent().css('z-index','100');
    }

  });


  //抓取種類座標&定位
  // $("nav.kinds ul").scrollLeft(300);
  $("nav.kinds ul").scroll(
    function()
    {
      let scroll_pos = $(this).scrollLeft();
      console.log('scroll_pos ='+scroll_pos);
    }
  );

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
  );
  //開啟_未結算注單
  $('footer ul li.not_yet , aside.yet_bill .windows span.close').click(
    function(){
      if($('aside.yet_bill').hasClass('active') != true){
        return $('aside.yet_bill').addClass('active');
      }else{
        return $('aside.yet_bill').removeClass('active');
      }
    }
  );
  //開啟_已結算注單
  $('footer ul li.yes_do , aside.finish_bill .windows span.close').click(
    function(){
      if($('aside.finish_bill').hasClass('active') != true){
        return $('aside.finish_bill').addClass('active');
      }else{
        return $('aside.finish_bill').removeClass('active');
      }
    }
  );
  //開啟注單頁面_空
  // $("footer ul li.yes_do ,aside.now_bet_empty").click(function() {
  //   if ($("aside.now_bet_empty").hasClass("active") != true) {
  //     return $("aside.now_bet_empty").addClass("active");
  //   }else{
  //       return $("aside.now_bet_empty").removeClass("active");
  //   }
  // });
}); //total
