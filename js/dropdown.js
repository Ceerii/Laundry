$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/Booking/ 
$('.dropdowns').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menus').slideToggle(300);
});
$('.dropdowns').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menus').slideUp(300);
});
$('.dropdowns .dropdown-menus li').click(function () {
    $(this).parents('.dropdowns').find('span').text($(this).text());
    $(this).parents('.dropdowns').find('input').attr('value', $(this).attr('id'));
});
// Custom
$('.dropdowns1').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menus1').slideToggle(300);
});
$('.dropdowns1').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menus1').slideUp(300);
});
$('.dropdowns1 .dropdown-menus1 li').click(function () {
    $(this).parents('.dropdowns1').find('span').text($(this).text());
    $(this).parents('.dropdowns1').find('input').attr('value', $(this).attr('id'));
});