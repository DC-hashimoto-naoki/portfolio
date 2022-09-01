
$(function () {
    // FV animation

    $('#fv').ready(function () {
        setTimeout(() => {
            $('.fv').removeClass('fv--fade');
        }, 300)

        $(window).on('load', function(){
            // popup_btn
            const fv_h = $('#fv').outerHeight(); 
            const popup_btn_h = $('#popup_btn').outerHeight();
            const popup_active_h = fv_h + popup_btn_h / 2;

        
        
            const popup = function(){
                let total_h = $(window).innerHeight() + $(window).scrollTop();
                if (total_h > popup_active_h){
                    $('#popup_btn').addClass('popup_btn--active')
                }else {
                    $('#popup_btn').removeClass('popup_btn--active')
                }

                //お問い合わせフォームで追走ボタンをフェードアウトする
                // const main_height = $('main').height();
                // if (total_h > main_height){
                //     $('#popup_btn').removeClass('popup_btn--active')
                // }
            }
        
            $(window).scroll(popup);
        })
    });
})

window.addEventListener('DOMContentLoaded', () => {

    const parts = document.querySelectorAll('.parts');
    parts.forEach((part) => {
        part.classList.add('in-active');
    })

    // Inter section observer API 下からふわっとさせるアニメーション

    const options = {
        rootMagin: "0px",
        threshold: [0.5]
    }

    const observer = new IntersectionObserver(callback, options);

    const targets = document.querySelectorAll('.target');

    targets.forEach(function (img) {
        observer.observe(img);
    });

    const activation = function (element) {
        element.classList.remove('in-active');
        element.classList.add('active');
    }


    function callback(entries, object) {
        entries.forEach(function (entry, index) {
            if (!entry.isIntersecting) return;

            const img = entry.target;

            if (img.classList.contains('ranking')) {
                const ranking__parts = img.lastElementChild;
                activation(ranking__parts);
            }

            activation(img);


            object.unobserve(img);
        })
    }


    // Butterfly animation
    $(function () {
        var y = 0, x = 0, sw = 1;

        setInterval(function () {
            x1 = Math.floor(Math.random() * 5) + 0.1 * sw;
            y1 = Math.floor(Math.random() * 1) + 0.1 * sw;
            x2 = Math.floor(Math.random() * 5) + 0.1 * sw;
            y2 = Math.floor(Math.random() * 1) + 0.1 * sw;

            $("#hari").animate({
                "top": 39 + y1 + "rem"
            }, 500);

            $("#uruoi").animate({
                "top": 55 + y2 + "rem"
            }, 700);

            sw *= -1;

        }, 600);

    });

});

lazyload();  //遅延読み込み

// slider animation のみjQueryで実装
$(function () {
    function scroll_effect() {
        let top = $(window).scrollTop();
        let height = $(window).height();

        $('.slider').each(function () {
            let offset = $(this).offset().top + 400;
            if (top > offset - height) {
                $(this).addClass('active');
            }
        })
    }

    $(window).scroll(function () {
        scroll_effect();
    });
})
