window.addEventListener('DOMContentLoaded', () => {
    const skill_items = document.querySelectorAll('.skills__list__item');
    const career__description_items = document.querySelectorAll('.career__description--inner');

    const options01 = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };
    const options02 = {
        root: null,
        rootMargin: "-50%",
        threshold: 0
    };

    const observer01 = new IntersectionObserver(add_activeClass01, options01);
    const observer02 = new IntersectionObserver(add_activeClass02, options02);

    skill_items.forEach(item => {
        observer01.observe(item);
    });
    career__description_items.forEach(item => {
        observer02.observe(item);
    });


    function add_activeClass01(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, (index % 3) * 300);
            }
        })
    }

    function add_activeClass02(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        })
    }
})