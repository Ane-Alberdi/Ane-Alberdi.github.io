$('.js-menu').on('click', function() {
    $('html').addClass('menu-open');
});

$('.js-closeMenu').on('click', function() {
    $('html').removeClass('menu-open');
});


$('.menu').on('click', function() {
    $('html').toggleClass('menu-open');
});


$('.menu-toggle').click(function(){
    $('.navigation__list').toggleClass('active')
})



