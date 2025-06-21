$(document).ready(function() {
    // Hide the hidden paragraph initially
    $('.hidden').hide();

    // Toggle the visibility of the hidden paragraph when the "Read more" button is clicked
    $('a[href="#"]').click(function(event) {
      event.preventDefault(); // Prevent the default behavior of the anchor link
      $('.hidden').toggle();
    });
  });