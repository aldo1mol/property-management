$(document).ready(function() {
    $('.carousel').each(function() {
        var $carousel = $(this);
        var $cards = $carousel.find('.card');
        var cardWidth = $cards.eq(0).outerWidth(true);
        var cardCount = $cards.length;
        var visibleCards = getVisibleCards();
        var currentIndex = 0;


        // Hide extra cards initially
        $cards.filter(':gt(' + (visibleCards - 1) + ')').hide();

        // Function to update the number of visible cards based on screen width
        function getVisibleCards() {
            var screenWidth = $(window).width();
            if (screenWidth <= 700) {
                return 1; // Show 1 card for screens <= 700px
            } else if (screenWidth <= 1027) {
                return 2; // Show 2 cards for screens <= 1027px
            } else {
                return 3; // Show 3 cards for larger screens
            }
        }

        // Function to update the carousel buttons based on current index
        function updateButtons() {
            if (currentIndex === 0) {
                $carousel.find('.bxs-caret-left-circle').addClass('disabled');
            } else {
                $carousel.find('.bxs-caret-left-circle').removeClass('disabled');
            }
            if (currentIndex + visibleCards >= cardCount) {
                $carousel.find('.bxs-caret-right-circle').addClass('disabled');
            } else {
                $carousel.find('.bxs-caret-right-circle').removeClass('disabled');
            }
        }

        // Function to move the cards within the carousel
        function moveCards() {
            var leftPosition = -currentIndex * cardWidth;
            $cards.hide().slice(currentIndex, currentIndex + visibleCards).show();
            $carousel.find('.card:lt(' + currentIndex + '), .card:gt(' + (currentIndex + visibleCards - 1) + ')').hide();
            $carousel.find('.carousel-inner').css('transform', 'translateX(' + leftPosition + 'px)');

            
      
        }

        // Initial setup
        updateButtons();

        // Handle click on 'previous' carousel control
        $carousel.find('.bxs-caret-left-circle').on('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
                moveCards();
                updateButtons();
            }
        });

        // Handle click on 'next' carousel control
        $carousel.find('.bxs-caret-right-circle').on('click', function() {
            if (currentIndex + visibleCards < cardCount) {
                currentIndex++;
                moveCards();
                updateButtons();
            }
        });

        // Update visible cards when the window is resized
        $(window).resize(function() {
            visibleCards = getVisibleCards();
            moveCards();
            updateButtons();
        });
    });
});

