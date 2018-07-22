/*global $*/
/*global ready*/
$(document).ready(function(){
  $("#sec1p2").typeIt({
    lifeLike:true,
    speed:100,
    startDelay:1000
  });
  $(".scrolla").scrolla({
    mobile:true,
    once:true
  });
})
