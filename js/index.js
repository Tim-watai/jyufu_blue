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
   $('aside.my_windows div.header ul li.option,aside div.get_out').click(function(){
    console.log('mb');
    if($('aside.my_windows_set').hasClass('active') !== true)
    {
     return $('aside.my_windows_set').addClass('active');    
    }else{
      return $('aside.my_windows_set').removeClass('active');   
    }
  });
  $('aside.my_windows_set div.row_btn div.box div.check span').click(function(){
    if($(this).hasClass('active') !== true)
    {
      $(this).addClass('active');
     return $(this).siblings().removeClass('active');  
    }
  });
  //switch
  $('aside.my_windows_set div.row_btn div.box_empty div.check span.switch').click(function(){
    if($(this).hasClass('active') !== true)
    {
      return $(this).addClass('active');    
    }else{
      return $(this).removeClass('active');   
    }
  });

  //切換_我的視窗_幫助中心
  'aside.my_windows div.row_btn'
  $('aside.my_windows div.row_btn , aside.my_windows_help div.header ul li.back').click(function(){
   
    if($('aside.my_windows_help').hasClass('active') !== true)
    {
      return $('aside.my_windows_help').addClass('active');    
    }else{
      return $('aside.my_windows_help').removeClass('active');   
    }
  });


  //切換_我的視窗_錢包
  $('aside.my_windows div.group ul li.my_mb , aside.my_windows_mb div.header ul li.back').click(function(){
   
    if($('aside.my_windows_mb').hasClass('active') !== true)
    {
      return $('aside.my_windows_mb').addClass('active');    
    }else{
      return $('aside.my_windows_mb').removeClass('active');   
    }
  });
  //切換_我的視窗_錢包_取款
  $('aside.my_windows_mb_take_out div.header ul li.back , aside.my_windows_mb div.mb_content div.btns div.take_out').click(function(){
    console.log('mb');
    if($('aside.my_windows_mb_take_out').hasClass('active') !== true)
    {
      return $('aside.my_windows_mb_take_out').addClass('active');    
    }else{
      return $('aside.my_windows_mb_take_out').removeClass('active');   
    }
  });
  //切換_我的視窗_錢包_轉帳
  $('aside.my_windows_mb_transfer div.header ul li.back , aside.my_windows_mb div.mb_content div.btns div.transfer').click(function(){
    console.log('mb');
    if($('aside.my_windows_mb_transfer').hasClass('active') !== true)
    {
      return $('aside.my_windows_mb_transfer').addClass('active');    
    }else{
      return $('aside.my_windows_mb_transfer').removeClass('active');   
    }
  });
  
  //switch
  $('aside.my_windows_mb_transfer div.auto div.box_empty div.check').click(function(){
    if($(this).hasClass('active') !== true)
    {
      return $(this).addClass('active');    
    }else{
      return $(this).removeClass('active');   
    }
  });
    //切換_我的視窗_錢包_存款
    $('aside.my_windows_mb_save div.header ul li.back , aside.my_windows_mb div.mb_content div.title div.save_money').click(function(){
      console.log('mb');
      if($('aside.my_windows_mb_save').hasClass('active') !== true)
      {
        return $('aside.my_windows_mb_save').addClass('active');    
      }else{
        return $('aside.my_windows_mb_save').removeClass('active');   
      }
    });
//切換_我的視窗_卡片管理
$('aside.my_windows_card div.header ul li.back , aside.my_windows_mb div.mb_content div.btns div.card').click(function(){
  console.log('mb');
  if($('aside.my_windows_card').hasClass('active') !== true)
  {
    return $('aside.my_windows_card').addClass('active');    
  }else{
    return $('aside.my_windows_card').removeClass('active');   
  }
});


  //切換_我的視窗_投注紀錄
  $('aside.my_windows_bet_record div.header ul li.back , aside.my_windows div.group ul li.my_rd').click(function(){
    console.log('mb');
    if($('aside.my_windows_bet_record').hasClass('active') !== true)
    {
      return $('aside.my_windows_bet_record').addClass('active');    
    }else{
      return $('aside.my_windows_bet_record').removeClass('active');   
    }
  });



}); //total
