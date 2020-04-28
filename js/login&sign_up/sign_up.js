$(document).ready(function() {
    console.log('sign_up Ready');
    //選擇帳號開關
    $('main ul.sign_up_wrap li .wrap .box.drow').click(function(){
        if($('main ul.sign_up_wrap ul.drow').hasClass('active') != true){
            return $('main ul.sign_up_wrap ul.drow').addClass('active');
        }else{
            return $('main ul.sign_up_wrap ul.drow').removeClass('active');
        }
    });
    //送出註冊＿出現彈窗
    
}); //total