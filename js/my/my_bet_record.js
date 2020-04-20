$(document).ready(function(){
    console.log("my_bet_record.js");
//撤單_頁面切換
    $("aside.my_windows_bet_record div.content ul.record li .white_red.white_red , aside.delete_windows ul .btn_group .close").click(function() {
        console.log('message click');
       if ($("aside.jump_window.delete_windows").hasClass("active") != true) {
        return $("aside.jump_window.delete_windows").addClass('active');
       }else{
         return  $("aside.jump_window.delete_windows").removeClass('active');
       }
     });
    //歷史注單與注單切換_drow down
    $("aside .hidden_title .tack").click(function() {
        console.log('message click');
       if ($(this).hasClass("active") != true) {
        return $(this).addClass('active');
       }else{
         return  $(this).removeClass('active');
       }
     });
});//total