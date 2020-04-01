$(document).ready(function() {
    console.log("my.js");
}); //total

 //切換_訊息視窗
 $("header ul li.message_icon , aside.title_windows div.close").click(function() {
     console.log('message click');
    if ($("aside.title_windows").hasClass("active") != true) {
     return $("aside.title_windows").addClass('active');
    }else{
      return  $("aside.title_windows").removeClass('active');
    }
  });
  //切換_我的視窗_設定
  $('header ul li.option , aside.my_windows_set div.get_out').click(function(){
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
  $('aside.my_windows div.row_btn , aside.my_windows_help div.header ul li.back').click(function(){
   
    if($('aside.my_windows_help').hasClass('active') !== true)
    {
      return $('aside.my_windows_help').addClass('active');    
    }else{
      return $('aside.my_windows_help').removeClass('active');   
    }
  });