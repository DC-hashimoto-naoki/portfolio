// $(function () {
//     $('.js-inView').addClass('hide');
//     $('.js-inView').on('inview', function () {
//         $(this).delay(1000).removeClass('hide')
//             .addClass('show');
//     })
// })

window.addEventListener('DOMContentLoaded', function () {
    const inviews = document.querySelectorAll('.js-inView');

    inviews.forEach(inview => {
        inview.classList.add('hide');
    })

    const options = {
        root: null,
        rootMargin: "-25% 0px", // ビューポートの中心を判定基準にする
        threshold: 0
    };

    const observer = new IntersectionObserver(doWhenIntersect, options);
    // それぞれのboxを監視する
    inviews.forEach(inview => {
        observer.observe(inview);
    });

    function doWhenIntersect(entries) {
        entries.forEach(enrty => {
            if (enrty.isIntersecting) {
                console.log('intersect')
                enrty.target.classList.remove('hide');
                enrty.target.classList.add('show');
            }
        })
    }

})