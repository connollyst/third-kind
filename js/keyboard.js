// Initialize virtual keyboard
$(document).ready(function () {
    $('.keyboard .key').each(function (index) {
        var keycode = 97 + index;
        $(this).addClass('key' + keycode);
    });
});
// Handle keybaord input
$(function () {
    $(window).keypress(function (e) {
        var keycode = e.which;
        var key = '.keyboard .key' + keycode;
        $(key).addClass('pressed');
    });
    $(window).keyup(function (e) {
        $('.keyboard .key').each(function() {
            $(this).removeClass('pressed');
        });
    });
});