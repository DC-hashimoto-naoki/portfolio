window.addEventListener('DOMContentLoaded', () => {
const delayElements = document.querySelectorAll('.js-fadeInDelay');
delayElements.forEach(function (elm) {
  elm.style.transitionDelay = elm.dataset.delayTime;
});
  
const options = {
    root: null,
    rootMargin: "0px",
    threshold: [0.25]
};

const targetElements = document.querySelectorAll(".js-inview");
const callback = function(entries,observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("isInViewed");
            observer.unobserve(entry.target);
        }
    });
}

const io = new IntersectionObserver(callback, options);
targetElements.forEach(function (targetElements) {
    io.observe(targetElements);
});

});



$(document).ready(function () {
  $('.js-accordion').click(function(){
    $(this).addClass('active');
    $(this).next().slideDown();
  });
});



//smooth scroll
  var Ease = { easeInOut: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  var duration = 100;
  window.addEventListener('DOMContentLoaded', () => {
    var smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');
    smoothScrollTriggers.forEach(function (smoothScrollTrigger) {
      smoothScrollTrigger.addEventListener('click', function (e) {
        var href = smoothScrollTrigger.getAttribute('href');
        var currentPostion = document.documentElement.scrollTop || document.body.scrollTop;
        var targetElement = document.getElementById(href.replace('#', ''));
        if (targetElement) {
          e.preventDefault();
          e.stopPropagation();
          var targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top - 0;
          var startTime = performance.now();
          var loop = function (nowTime) {
            var time = nowTime - startTime;
            var normalizedTime = time / duration;
            if (normalizedTime < 1) {
              window.scrollTo(0, currentPostion + ((targetPosition - currentPostion) * Ease.easeInOut(normalizedTime)));
              requestAnimationFrame(loop);
            } else {
              window.scrollTo(0, targetPosition);
            }
          }
          requestAnimationFrame(loop);
        }
      });
    });
  });

