$('.menu-items').click(function() {
  $('.dropd-menu').slideUp();
  if (!$(this).children('.dropd-menu').is(':visible')) {
    $(this).children('.dropd-menu').slideDown()
  }
});$('.next').click(function(scorri){
 var img_corrente = $('img.active');
 var dot_corrente = $('i.active');
 var img_successiva = img_corrente.next('img');
 var dot_successivo = dot_corrente.next('i');
 if (img_successiva.length == 0) {
   img_successiva = $('.slider img:first-child');
 }
 img_corrente.removeClass('active');
 img_successiva.addClass('active');
 if (dot_successivo.length == 0) {
   dot_successivo = $('.slider i:first-child');
 };
 dot_corrente.removeClass('active');
 dot_successivo.addClass('active');

});
$('.prev').click(function(){
 var img_corrente = $('img.active');
 var dot_corrente = $('i.active');
 var img_precedente = img_corrente.prev('img');
 var dot_precedente = dot_corrente.prev('i');
 if (img_precedente.length == 0) {
   img_precedente = $('.slider img:last-child');
  }
 img_corrente.removeClass('active');
 img_precedente.addClass('active');
 if (dot_precedente.length == 0) {
   dot_precedente = $('.slider i:last-child');
  }
 dot_corrente.removeClass('active');
 dot_precedente.addClass('active');
});
var clock = setInterval(function scorri() {
  var img_corrente = $('img.active');
  var img_successiva = img_corrente.next('img');
  if (img_successiva.length == 0) {
    img_successiva = $('.slider img:first-child');
  }
  img_corrente.removeClass('active');
  img_successiva.addClass('active');
  var dot_corrente = $('i.active');

  var dot_successivo = dot_corrente.next('i');

  if (dot_successivo.length == 0) {
    dot_successivo = $('.bullett i:first-child');
  }
  dot_corrente.removeClass('active');
  dot_successivo.addClass('active');

}, 3000);
