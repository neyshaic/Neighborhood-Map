/**
Setup general viewport to fit full screen of page:
Credit goes to Jeremy Church - URL- https://j.eremy.net/set-element-height-to-viewport/
Small vlog illustrates how to go about create these effect
**/
$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('#map').css('min-height', windowHeight);//added line to put into consideration the MAP
    $('#sidebar').css('min-height', windowHeight);
    };
  setHeight();
  $(window).resize(function() {
    setHeight();
  });
});
