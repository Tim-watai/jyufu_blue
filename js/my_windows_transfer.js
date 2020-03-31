$(document).ready(function(){
    console.log("my_windows_transfer.js");
//轉帳頁面的轉帳彈窗
    $('aside.my_windows_mb_transfer div.content div.groups , aside.my_windows_mb_transfer_doing .windows div.content button').click(
        function (){
            console.log("my_windows_transfer.js");
            if($('aside.my_windows_mb_transfer_doing').hasClass('active') != true){
                return  $('aside.my_windows_mb_transfer_doing').addClass('active'); 
                
              }
              else{
                return $('aside.my_windows_mb_transfer_doing').removeClass('active');
              }
        }
    );
});//total