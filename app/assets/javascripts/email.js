$(document).ready(function() {
  $('.mail-view').hide();
});

$(document).ready(function() {
  $('#mail1').click(function(){
    $('.mail-view, #output1').show();
    $('#output2').hide();
    $('#output3').hide();
    $('#output4').hide();
  })
});

$(document).ready(function() {
  $('#mail2').click(function(){
    $('#mail-view, #output2').show();
    $('#output1').hide();
    $('#output3').hide();
    $('#output4').hide();
  })
});

$(document).ready(function() {
  $('#mail3').click(function(){
    $('#mail-view, #output3').show();
    $('#output1').hide();
    $('#output2').hide();
    $('#output4').hide();
  })
});

$(document).ready(function() {
  $('#mail4').click(function(){
    $('#mail-view, #output4').show();
    $('#output1').hide();
    $('#output3').hide();
    $('#output2').hide();
  })
});
