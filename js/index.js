$(document).ready(function() {
  console.log("index ready");

 
  //切換_熱門賽事
  $("li.hot_btn , article.bg span.close").click(function() {
    if ($("aside.hot_windows").hasClass("active") != true) {
      return $("aside.hot_windows").addClass('active');
     }else{
       return  $("aside.hot_windows").removeClass('active');
     }
    
  });
 
  //切換_訊息視窗
  $("li.message_icon , aside.title_windows div.close").click(function() {
    if ($("aside.title_windows").hasClass("active") != true) {
     return $("aside.title_windows").addClass('active');
    }else{
      return  $("aside.title_windows").removeClass('active');
    }
  });

  //切換_賭盤種類
  $('main article.menu aside.btn_group button').click(
    function () {
        if($(this).hasClass('hot') == false){
            $(this).addClass('hot');
            $(this).siblings().removeClass('hot');
        }

        if($(this).hasClass('today') === true)
        {
           $('main article.menu ul.today').css('display','block');
           $('main article.menu ul.run_ball').css('display','none');
           $('main article.menu ul.early').css('display','none');
           $('main article.menu ul.double').css('display','none');
        }
        else if($(this).hasClass('run_ball') === true){
            $('main article.menu ul.today').css('display','none');
            $('main article.menu ul.run_ball').css('display','block');
            $('main article.menu ul.early').css('display','none');
            $('main article.menu ul.double').css('display','none');
        }
        else if($(this).hasClass('early') === true){
            $('main article.menu ul.today').css('display','none');
            $('main article.menu ul.run_ball').css('display','none');
            $('main article.menu ul.early').css('display','block');
            $('main article.menu ul.double').css('display','none');
        }
        else if($(this).hasClass('double') === true){
            $('main article.menu ul.today').css('display','none');
            $('main article.menu ul.run_ball').css('display','none');
            $('main article.menu ul.early').css('display','none');
            $('main article.menu ul.double').css('display','block');
        }
    });
  //切換_我的視窗
  $('footer ul li.my ,aside.my_windows div.header ul li.close').click(function(){
    if($('aside.my_windows').hasClass('active') !== true)
    {
      $('aside.my_windows').addClass('active');    
    }else{
      $('aside.my_windows').removeClass('active');   
    }
  });
   //切換_我的視窗_設定
   $('aside.my_windows div.header ul li.option , aside div.header ul li.back').click(function(){
    if($('aside.my_windows_set').hasClass('active') !== true)
    {
      $('aside.my_windows_set').addClass('active');    
    }else{
      $('aside.my_windows_set').removeClass('active');   
    }
  });
  //首頁_關閉全部彈窗



}); //total
