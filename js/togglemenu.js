$(document).ready(function() {
    // Toggle navigation links and menu button
    $('.toggle-button').click(function() {
        $('nav ul').toggleClass('show');
    });

    // Toggle navigation links when a link is clicked
    $('nav ul li a').click(function() {
        if ($(window).width() < 1027) {
            $('nav ul').removeClass('show');
        }
    });

    // Hide navigation links on window resize if screen width is less than 1027px
    $(window).resize(function() {
        if ($(window).width() >= 1208) {
            $('nav ul').removeClass('show');
        }
    });
});