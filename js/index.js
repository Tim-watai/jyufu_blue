$(document).ready(function(){
    console.log("index ready");

    $('li.hot_btn').click(
        function(){
            if($('aside.hot_windows').hasClass('active') != true){
                $('aside.hot_windows').removeClass('disabled');
                $('aside.hot_windows').addClass('active');
                return
           }
        }
    );
   $('article.bg span.close').click(
     function(){
       
        if($('aside.hot_windows').hasClass('active') == true){
              $('aside.hot_windows').removeClass('active');
              $('aside.hot_windows').addClass('disabled');
              return
         }
     }
   );


   $('li.message_icon').click(
       function(){
        if($('aside.title_windows').hasClass('active') != true){
            $('aside.title_windows').removeClass('disabled');
            $('aside.title_windows').addClass('active');
            return
       }
       }
   );
    $('aside.title_windows div.close').click(
        function(){
         
           if($('aside.title_windows').hasClass('active') == true){
                 $('aside.title_windows').removeClass('active');
                 $('aside.title_windows').addClass('disabled');
                 return
            }
        }
   
      );

});//total