$(document).ready(function() {
  console.log("index ready");
  window.addEventListener('load',function() {
    setTimeout(function(){
    window.scrollTo(0, 1); }, 10);
  });
 

  $("li.hot_btn").click(function() {
    if ($("aside.hot_windows").hasClass("abled") != true) {
      $("aside.hot_windows").removeClass("disabled");
      $("aside.hot_windows").addClass("abled");
      return;
    }
  });
  $("article.bg span.close").click(function() {
    if ($("aside.hot_windows").hasClass("abled") == true) {
      $("aside.hot_windows").removeClass("abled");
      $("aside.hot_windows").addClass("disabled");
      return;
    }
  });

  $("li.message_icon").click(function() {
    if ($("aside.title_windows").hasClass("abled") != true) {
      $("aside.title_windows").removeClass("disabled");
      $("aside.title_windows").addClass("abled");
      return;
    }
  });
  $("aside.title_windows div.close").click(function() {
    if ($("aside.title_windows").hasClass("abled") == true) {
      $("aside.title_windows").removeClass("abled");
      $("aside.title_windows").addClass("disabled");
      return;
    }
  });

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
    }
   
);


}); //total
