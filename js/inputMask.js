
(function( $ ){
	
  let $body;

  $(document).ready(function(){
    $body = $('body');

    $body
      .find('input[type="tel"]').each(function(){
          $(this).mask("+7 (999) 999-99-99", {autoсlear: false});
      });

    $body.on('keyup','input[type="tel"]',function(){
      let phone = $(this);
      let phoneVal = phone.val();
      let form = $(this).parents('form');

      if (phoneVal == '') {
        phone.css('background-image', 'none');
      }
      if (phoneVal != '') {
        phone.css({
        'background-image': 'url(img/tick.svg)',
        'background-size': '20px',
        'background-position': 'right',
        'background-repeat': 'no-repeat',
      })
    }
      if ( (phoneVal.indexOf("_") != -1) || phoneVal == '' ) {
        form.find('.forms-buttons').attr('disabled',true);
      } 
      else {
        form.find('.forms-buttons').removeAttr('disabled');
      }
    });

  });

})( jQuery );

