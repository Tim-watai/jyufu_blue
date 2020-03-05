$(document).ready(function(){


$('nav.kinds ul li').click(
    function () {
        if($(this).hasClass('active') == false){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
    }
);


});//total