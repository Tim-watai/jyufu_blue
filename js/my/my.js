$(document).ready(function() {
    console.log("my.js");

  //切換_我的視窗_設定
  $('header ul li.option , aside.my_windows_set div.get_out').click(function(){
    console.log('set_click');
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
  $('aside.my_windows div.row_btn , aside.my_windows_help div.header ul li.back').click(function(){
   
    if($('aside.my_windows_help').hasClass('active') !== true)
    {
      return $('aside.my_windows_help').addClass('active');    
    }else{
      return $('aside.my_windows_help').removeClass('active');   
    }
  });

  //切換_我的_分享APP
  $('aside.my_windows div.row_btn.share_app , aside .box_footer .quite_btn').click(function(){
   
    if($('aside.my_windows_share_app').hasClass('active') !== true)
    {
      return $('aside.my_windows_share_app').addClass('active');    
    }else{
      return $('aside.my_windows_share_app').removeClass('active');   
    }
  });

}); //total