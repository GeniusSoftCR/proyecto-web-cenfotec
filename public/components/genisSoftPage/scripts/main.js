console.log('Website Develop by gravity.cr - Andrés Castillo | follow me @aazcast')

//Header has Scroll
jQuery(function(){
  var $document = jQuery(document),
      $element = jQuery('header'),
      className = 'hasScrolled';

  $document.scroll(function() {
    if ($document.scrollTop() >= 77) {
      // user scrolled 50 pixels or more;
      // do stuff
      $element.addClass(className);
      // $rightnav.css('background', '#f4f4f4');
    } else {
      $element.removeClass(className);
      // $rightnav.css('background', '#f4f4f4');
    }
  });
});

jQuery(function(){
  $('.teamGenius').slick({
    autoplay: true,
    dots: true,
    slidesToShow: 1,
    arrows: true
  });
})

//Formulario Contacto
$('.btnForm').on('click', function (){
    
    var name2 = $('[name="name"]').val(),
        email2 = $('[name="mail"]').val(),
        checkForm = false,
        mensaje2 = $('[name="mensaje"]').val();
    
    if (name2 === '') {
      checkForm = true;
    } else  if (email2 === '') {
      checkForm = true;
    } else  if (mensaje2 === '') {
      checkForm = true;
    } else {
      checkForm = false;
    }

    if (checkForm) {
      $('.checkForm').fadeIn();
    } else {
      $('.checkForm').fadeOut();
      $(this).html('Procesando tu solicitud...');
      var parametrosArt = {
          "name" : name2,
          "mail" : email2,
          "mensaje" : mensaje2
      }
      
      $.ajax({
          data:  parametrosArt,
          url:   'http://www.aazcast.com/genius/mailsend.php',
          type:  'post',
          dataType: "json",
          beforeSend: function (data) {
                  // console.log('is sending');
          },
          success:  function () {
                 // $("#resultado").html(response);
          },
          error: function (data) {
              console.log('was send');
              $('.thanks').fadeIn();
              $('[name="name"]').val("");
              $('[name="mail"]').val("");
              $('[name="mensaje"]').val("");
              $('.btnForm').html('Enviar');
          }
      });
    }
})