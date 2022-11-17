$(document).ready(
    function () {
        // stick
        $('.about-section').waypoint(
            function (direction) {
                if (direction == 'down') {
                    $('nav').addClass('stickey');
                }
                else $('nav').removeClass('stickey');
            }, {
            offset: '600px'
        }
        )

        // scroll
        $('a').click(function (event) {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 600);
            event.preventDefault();
        });

        $('.mobile-icon').click(
            function () {
                $('.main-nav').slideToggle(200);

                if ($('.mobile-icon').hasClass('fa-bars')) {
                    $('.mobile-icon').removeClass('fa-bars');
                    $('.mobile-icon').addClass('fa-times');
                }
                else {
                    $('.mobile-icon').removeClass('fa-times');
                    $('.mobile-icon').addClass('fa-bars');
                }
            }
        )
    }
)