

$(document).ready(function() {
    // Change navigation item color when scrolled to the About or Contact section
    $(window).scroll(function() {
        var aboutSectionTop = $('#about').offset().top;
        var contactSectionTop = $('#contact').offset().top;
        var testimonialSectionTop = $('#testimonials').offset().top;

        var scrollPosition = $(window).scrollTop();

        if (scrollPosition >= aboutSectionTop && scrollPosition < contactSectionTop && 
            scrollPosition < testimonialSectionTop) {
            // Scrolled to the About section
            $('nav, nav a, nav i').addClass('black-nav');
        } else if (scrollPosition >= contactSectionTop) {
            // Scrolled to the Contact section
            $('nav, nav a, nav i').removeClass('black-nav');
        } else {
            // Scrolled to sections other than About and Contact
            $('nav, nav a, nav i').removeClass('black-nav');
        }
    });
});






// $(document).ready(function() {
//     // Existing code for image slideshow, toggle menu, and smooth scroll

//     // Change navigation item color when scrolled to the About section
//     $(window).scroll(function() {
//         var aboutSectionTop = $('#about').offset().top;
//         var scrollPosition = $(window).scrollTop();

//         if (scrollPosition >= aboutSectionTop) {
//             $('nav,nav a,nav i').addClass('black-nav');
//         } else {
//             $('nav,nav a,nav i').removeClass('black-nav');
//         }
//     });
// });



