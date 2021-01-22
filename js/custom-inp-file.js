
$('.js-file').change(function() {
    if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length).css({
    'background-image':'url(../img/tick.svg)',
    'background-size': '20px',
    'background-position': 'right',
    'background-repeat': 'no-repeat'
    })
    else return false;
});

$('.js-file').on('focus', function(){ $('.js-file').add( 'has-focus' ); });
$('.js-file').on('blur', function(){ $('.js-file').remove( 'has-focus' ); });