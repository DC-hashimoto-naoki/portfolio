
$(function () {
    var jsTargets = $('.js-target');

    function callback() {
        $(jsTargets).each(function () {
            var offset = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();

            // scroll area 01
            var paddingTop_inScrollArea01 = windowHeight * 0.2;
            if (
                $(this).hasClass('scroll-area-01')
                && scroll > offset - windowHeight + paddingTop_inScrollArea01
            ) {
                $(this).addClass("show");
            }

            // when scrolling 40% of windows' height
            var paddingTop = windowHeight * 0.4;
            if (scroll > offset - windowHeight + paddingTop) {
                // if ($(this).hasClass("concept-texts")) { fadeInAnimationOnConceptText($(this)); }
                $(this).addClass("show");
                if ($(this).hasClass("cosmetic-image")) { removeTransittion($(this)); }
            }
        })
    }

    function fadeInAnimationOnConceptText(element) {
        var children = element.children();
        children.each((index, child) => {
            setTimeout(() => {
                child.classList.add('show')
            }, index * 300)
        })
    }

    function removeTransittion(element) {
        setTimeout(() => {
            element.addClass('transition-0');
        }, 700)
    }

    $(window).on('scroll', callback);

    // fade in animation
    $('.js-fadeIn').hide();
    $('.js-fadeIn').delay(1000).fadeIn();

    $('.js-slideIn').addClass('show');

    $('.js-fadeIn-scroll').hide();
    $('.js-fadeIn-scroll').delay(1500).fadeIn();
    $(window).on('scroll', () => {
        $('.js-fadeIn-scroll').fadeOut(300);
    })


    // parallax animation in cosmetic section
    var cosmeticImages = $('.cosmetic-image');
    $(window).on('scroll', () => {
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();

        $(cosmeticImages).each(function () {
            var offsetTop = $(this).offset().top;
            var objectHeight = $(this).height();

            var now_percent = 0;
            if (scroll > offsetTop - windowHeight &&
                scroll < offsetTop + objectHeight) {
                var min = (offsetTop - windowHeight);
                var max = (offsetTop + objectHeight);
                var percent = (scroll - min) / (max - min) * 100;
                $(this).css('background-position-y', percent + '%');
                now_percent = percent;
            }

            // when start parallax in product section
            var productTop = $('#product').offset().top;
            if (scroll > productTop - windowHeight) {
                var scrollInProduct = scroll - (productTop - windowHeight);
                var elementTop = $(this).offset().top;
                var elementInProduct = scroll + windowHeight - elementTop;
                var max = elementInProduct;
                var diff = elementInProduct - scrollInProduct;
                var percentInProduct = (1 - diff / max);
                var percent = now_percent + (100 - now_percent) * percentInProduct;

                $(this).css('background-position-y', percent + '%')
            }
        })



    })

    // faq accordion

    $('.faq-list-answer').each(function () {
        $(this).hide();
    })

    $('.faq-list-title').each(function () {
        var next = $(this).next();
        $(this).on('click', () => {
            $(this).next().slideToggle();
            $(this).toggleClass('open');
        })
    })


    // modal window
    $('.product-btn-more').each(function (index) {
        $('.modal-list-item').hide();

        $(this).on('click', function () {
            $('.modal-list-item').eq(index).show();
            $('#product-modal-window').fadeIn();
            $('body').addClass('overflow-y-hidden');
        })
    })

    $('.modal-back').on('click', function () {
        $(this).parent().fadeOut();
        $('#product-modal-window').fadeOut();
        $('body').removeClass('overflow-y-hidden');
    });

    $('.modal-close').on('click', function () {
        $(this).parent().fadeOut();
        $('#product-modal-window').fadeOut();
        $('body').removeClass('overflow-y-hidden');
    })
});