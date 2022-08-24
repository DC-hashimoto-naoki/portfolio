window.addEventListener('DOMContentLoaded', function () {
    const targets = this.document.querySelectorAll('.target');
    const targets02 = this.document.querySelectorAll('.target02');
    const targets04 = this.document.querySelectorAll('.target04');


    let option02 = {
        root: null,
        rootMargin: '0% 0% -30% 0%',
        threshold: 0.3
    }

    let option03 = {
        root: null,
        rootMargin: '0%',
        threshold: 0
    }

    let option04 = {
        root: null,
        rootMargin: '0% 0% -15% 0%',
        threshold: 0
    }

    function callback(entries) {
        entries.forEach(entry => {
            // それぞれのエントリーは、観測された 1 つの対象要素の交差状態の変化を示している。
            //   entry.boundingClientRect
            //   entry.intersectionRatio
            //   entry.intersectionRect
            //   entry.isIntersecting
            //   entry.rootBounds
            //   entry.target
            //   entry.time

            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // entry.target.classList.remove('active');
            }
        })
    }

    function callback02(entries) {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        })
    }

    let observer01 = new IntersectionObserver(callback, option02);
    let observer02 = new IntersectionObserver(callback02, option03);
    let observer03 = new IntersectionObserver(callback, option04);

    targets.forEach(target => {
        observer01.observe(target)
    })

    targets02.forEach(target => {
        observer02.observe(target)
    })

    targets04.forEach(target => {
        observer03.observe(target)
    })
})