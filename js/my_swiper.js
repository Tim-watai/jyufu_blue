$(document).ready(function(){
    console.log("my_swiper.js");
   let mySwiper = new Swiper('.swiper-container', {
       speed:400,
       spaceBetween:50,
       autoplay:{
           delay:3000,
       }
   });
//    var mySwiper = new Swiper('.swiper-container', {
//     speed: 400,
//     spaceBetween: 100
// });

});//total