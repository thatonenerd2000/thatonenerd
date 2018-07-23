/*global $*/
/*global ready*/
$(document).ready(function(){
  $("#sec1p2").typeIt({
    lifeLike:true,
    speed:100,
    startDelay:2500
  });
  $(".scrolla").scrolla({
    mobile:true,
    once:true
  });
  var userFeed = new Instafeed({
      get: 'user',
      userId: '5678013860',
      accessToken: '5678013860.1677ed0.74cfd557ff1b4fd8bc8e81211eb5f25e',
      resolution: 'standard_resolution',
      limit: 12,
      template: "<div data-adaptive-background data-ab-css-background style='padding-bottom:10px;' class='col-sm-3'><a data-lightbox='jpg' href='{{image}}' title='{{caption}}'><img  style='height:250px;' src='{{image}}' alt='{{caption}}' class='img-fluid'></a></div>"
  });
  userFeed.run();
})
