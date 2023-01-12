$(document).ready(function(){

$('.Skils-containt').hide();
$('.exp-containt').hide();


$('.one').addclass('.bgactive');
$('.one div').addclass('.mini-box bgactive');


$('.two').click(function(){
   $('.Skils-containt').show();
   $('.exp-containt').hide();
   $('.tabe-containt').hide();

  $('.one').removeclass('.bgactive');
  $('.one div').removeclass('.mini-box bgactive');

 $('.two').addClass('.bgactive');
 $('.two div').addClass('.mini-box bgactive');

 $('.three').removeclass('.bgactive');
 $('.three div').removeclass('.mini-box bgactive');

});
 

 $('.three').click(function(){
   $('.Skils-containt').hide();
   $('.exp-containt').show(); 
   $('.tabe-containt').hide();

 
  $('.one').removeclass('.bgactive');
  $('.one div').removeclass('.mini-box bgactive');

 $('.two').removeClass('.bgactive');
 $('.two div').removeClass('.mini-box bgactive');

 $('.three').addclass('.bgactive');
 $('.three div').addclass('.mini-box bgactive');

});

  $('.one').click(function(){
   $('.Skils-containt').hide();
   $('.exp-containt').hide(); 
   $('.tabe-containt').show();

 
  $('.one').addclass('.bgactive');
  $('.one div').addclass('.mini-box bgactive');

 $('.two').removeClass('.bgactive');
 $('.two div').removeClass('.mini-box bgactive');

 $('.three').removeclass('.bgactive');
 $('.three div').removeclass('.mini-box bgactive');

});

});