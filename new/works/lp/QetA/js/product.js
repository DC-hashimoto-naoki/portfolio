window.addEventListener('DOMContentLoaded', ()=>{
    ScrollTrigger.create({
        trigger: "#qeta-main-content",
        start: "bottom 100%",
        pin: "#qeta-main-content",
        pinSpacing: false,
        onEnter: () => fixedFooter(),
        onEnterBack: () => freeFooter(),
    });
    
    ScrollTrigger.create({
        trigger: "#js-ParallaxContents",
        start: "top 100%",
        end: "bottom 0%",
        pinSpacing: false,
        onLeave: () => freeFooter(),
        onEnterBack: () => fixedFooter(),
    });
    
    function fixedFooter() {
        let windowHeight = window.outerHeight;
        document.getElementById('js-fixedFooter').classList.add('fixedFooter--fixed');
        document.getElementById('js-ParallaxContents').style.marginBottom = windowHeight + 'px';
    }
    
    function freeFooter() {
        document.getElementById('js-fixedFooter').classList.remove('fixedFooter--fixed');
        document.getElementById('js-ParallaxContents').style.marginBottom = '0';
    }
})