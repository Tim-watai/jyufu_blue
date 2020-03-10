$(document).ready(function(){
   
$('header.double_inner section article.game_type span').click(
    function (){
        if($(this).hasClass('active') != true){
                $(this).addClass('active');
        return  $(this).siblings().removeClass('active');
        }
    }
)

});//total