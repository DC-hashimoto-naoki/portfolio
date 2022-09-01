  
  let youtubeIframes = [];
  
  window.addEventListener('DOMContentLoaded', function() {
      youtubeIframes = document.getElementsByClassName('youtube_player');
      if(youtubeIframes.length) {
          const tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          const firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
  }, false);
  
  function onYouTubeIframeAPIReady() {
      const players = [];
      for(let i = 0; i < youtubeIframes.length; i++) {
          players[i] = new YT.Player(youtubeIframes[i].id, {
              events: {
                  'onReady': onPlayerReady
              }
          });
      }
  }
  
  function onPlayerReady(event) {
      switchVideo(event.target);
      window.addEventListener('scroll', function() {
          switchVideo(event.target);
      }, false);
  }
  
  function switchVideo(targetPlayer) {
      const playerPosition = targetPlayer.getIframe().getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset + window.innerHeight;
      const endPosition = window.pageYOffset;
      if((playerPosition < startPosition) && (playerPosition > endPosition)) {
          targetPlayer.mute();
          targetPlayer.playVideo();
      }
      else {
          targetPlayer.pauseVideo();
      }
  }
  
  
  //smooth scroll
    var Ease = { easeInOut: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
    var duration = 300;
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
  