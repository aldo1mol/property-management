$(document).ready(function() {
    // Initialize variables
    var currentIndex = 0;
    var testimonials = $('.testimonial-inner');
    var totalTestimonials = testimonials.length;
    
    // Show the first testimonial
    testimonials.hide().eq(currentIndex).show();
    
    // Function to update the carousel state
    function updateCarousel() {
        if (currentIndex === 0) {
            $('.bx-caret-left').hide(); // Hide left caret if first testimonial is shown
        } else {
            $('.bx-caret-left').show(); // Show left caret if not on first testimonial
        }

        if (currentIndex === totalTestimonials - 1) {
            $('.bx-caret-right').hide(); // Hide right caret if last testimonial is shown
        } else {
            $('.bx-caret-right').show(); // Show right caret if not on last testimonial
        }
    }

    // Click event for the left caret
    $('.bx-caret-left').on('click', function() {
        if (currentIndex > 0) {
            testimonials.hide().eq(--currentIndex).fadeIn(); // Show previous testimonial
            updateCarousel(); // Update carousel state
        }
    });

    // Click event for the right caret
    $('.bx-caret-right').on('click', function() {
        if (currentIndex < totalTestimonials - 1) {
            testimonials.hide().eq(++currentIndex).fadeIn(); // Show next testimonial
            updateCarousel(); // Update carousel state
        }
    });

    // Initial update of carousel state
    updateCarousel();
});
