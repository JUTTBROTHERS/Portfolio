$(document).ready(function() {
    /*Sidebar Menu*/
    "use strict";

    $(".preloader-wrap").delay(1500).fadeOut('slow');


    /*Navigation*/
    $('body').scrollspy({
        target: '.navbar'
    })
    $(function() {
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        // skills chart
        $(document).ready(function(e) {
            //var windowBottom = $(window).height();
            var index = 0;
            $(document).scroll(function() {
                var top = $('#skills').height() - $(window).scrollTop();

                if (top < -1200) {
                    if (index == 0) {

                        $('.chart').easyPieChart({
                            easing: 'easeOutBounce',
                            onStep: function(from, to, percent) {
                                $(this.el).find('.percent').text(Math.round(percent));
                            }
                        });

                    }
                    index++;
                }
            })

        });

        /*Swiper*/
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: {
                delay: 4000,
            },
        });

        /*Magnific Popup*/
        $(function() {
            $('div.gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery: {
                    enabled: false
                },
                removalDelay: 300,
                mainClass: 'mfp-fade'
            });
        });

        $(function() {
            $('.image').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: false
                },
                removalDelay: 300,
                mainClass: 'mfp-fade'
            });
        });

        $(document).ready(function() {
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: true
            });
        });


        $(function() {
            $('.selector').animatedHeadline();
        })

    });
});