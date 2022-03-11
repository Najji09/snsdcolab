$(document).ready(function () {
  var btnTxt = $('a.btnView').text();
  console.log(btnTxt);
  console.log('21');
  $('a.btnView').click(function () {
    if ($('a.btnView span').text() == 'Close') {
      $('ul.contact').stop().slideUp();
      $('a.btnView span').text('Viewmore');
    } else {
      $('ul.contact').stop().slideDown();
      $('a.btnView span').text('Close');
    }
  });
  $('');
});
