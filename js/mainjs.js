// Main JS File
function loadReload(){
  var str = $(location).attr('hash');
  str = str.substring(1)
  if ( str === "") {
    $('#wrapper').load('includes/home.html');
  } else {
    $('#wrapper').load('includes/' + str + '.html');
  };
}

function linky(lnk){
  var pos = lnk.lastIndexOf("#") + 1;
  var str = lnk.substring(pos);
  $('#wrapper').load('includes/' + str + '.html');
}

function cR(){
  var d = new Date();
  $('#copyR').html(d.getFullYear());
}

function openMenu(){
  $('.open').css('display', 'none');
  $('.close').css({'display':'inline-block', 'borderBottom':'0'});
  $('.wide').css('display','block');
  $('.socialMenu').css('display','none');
}

function closeMenu(){
  $('.open').css('display', 'inline-block');
  $('.close').css('display', 'none');
  $('.wide').css('display', 'none');
  $('.socialMenu').css('display','inline-block');
}

function giveMeMore(elem){
  $(elem).toggleClass("active");
}

function iLikeYou(){
  alert ("You rebel! I like you!")
  $('.redButton').css('display', 'none')
}

function centrao(){
  var bodyHeight = $(window).height() - $('nav').height() - $('footer').height();
  var wrapperHeight = $('header').height() + $('main').height();
  var centrePage = (bodyHeight - wrapperHeight)/2;
  var asideHeight = $('aside').height();
  var windowWidth = $(window).width();
  $('#wrapper').css('marginTop', '0');
  $('#avatar').css('marginTop', '14px');
  if (windowWidth > 768) {
    if (wrapperHeight < bodyHeight) {
      $('#wrapper').css('marginTop', centrePage);
    };
    if (centrePage > asideHeight/2) {
      $('#avatar').css('marginTop', centrePage - asideHeight/3);
    };
  }
}

function blogCentrao(){
  var asideHeight = $('aside').height();
  $('#avatar').css('marginTop', '14px');
  $('#wrapper').css('marginTop', '14px');
}
