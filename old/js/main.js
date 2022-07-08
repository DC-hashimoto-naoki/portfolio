$(function () {
  // btn action
  var btn = $('.btn');

  btn.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  // end btn action

  // mouse move
  $(window).mousemove(function (e) {
    if (e.clientY < 5) {
      $('header.pc').removeClass('transform');
    }
  });
  // end mousemove

  $(window).scroll(function () {
    $('header.pc').addClass('shadow');
    $('header.pc').toggleClass('transform');
    // top => effect none
    if ($(window).scrollTop() == 0) {
      $('header.pc').removeClass('transform');
      $('header.pc').removeClass('shadow');
      return;
    }
  });
  // end schroll event
  $('#header_close').click(function () {
    $('header').toggleClass('transform');
  });


  $('.modal-open').click(function () {
    $("body").addClass("no_scroll");
    var id = $(this).data('id'); // 何番目のキャプション（モーダルウィンドウ）か認識
    console.log(id);
    $('.modal-bg, .modal-window[data-id="modal' + id + '"]').fadeIn();
  });
  // オーバーレイクリックでもモーダルを閉じるように
  $('.modal-close , .modal-bg').click(function () {
    $('.modal-bg, .modal-window').fadeOut();
  });

  $('.modal-open').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      $(modal).fadeIn();
      $('modal-bg').fadeIn();
      return false;
    });
  });
  $('.modal-close').on('click', function () {
    $("body").removeClass("no_scroll");
    $('.js-modal').fadeOut();
    return false;
  });

  // スクロール処理
  var works = $('#nav_works');
  var sec_work = $('#works');
  works.click(function () {
    $('body,html').animate({
      scrollTop: sec_work.offset().top - 50
    }, 500);
    return false;
  });
  var skills = $('#nav_skills');
  var sec_skill = $('#skills');
  skills.click(function () {
    $('body,html').animate({
      scrollTop: sec_skill.offset().top - 50
    }, 500);
    return false;
  });
  var concept = $('#nav_concept');
  var sec_concept = $('#concept');
  concept.click(function () {
    $('body,html').animate({
      scrollTop: sec_concept.offset().top - 50
    }, 500);
    return false;
  });
  // var contact = $('#nav_contact');
  // var sec_contact = $('#contact');
  // contact.click(function () {
  //   $('body,html').animate({
  //     scrollTop: sec_contact.offset().top - 50
  //   }, 500);
  //   return false;
  // });
});


// first-animation
$(window).on('load', function () {
  // ここに処理内容を書く
  $('#first-animation').click(() => {
    $('#first-animation').hide();
  });
  setTimeout(function () {
    $('#first-animation').hide();
  }, 2500);
});

// bubbly.js
bubbly({
  canvas: document.getElementById('canvas'),
  colorStart: '#1E4974',
  colorStop: '#9AADC0',
  bubbles: 200,
  blur: 1,
  compose: 'source-over',
  // bubbleFunc: () => `hsla(${200 + Math.random() * 50}, 100%, 50%, .3)`,
  bubbleFunc: () => `rgba(255, 255, 255, ${Math.random()})`,
  // angleFunc: () => Math.random() > 0.5 ? Math.PI : 2 * Math.PI,
  angleFunc: () => (Math.random() - 0.5) * 0.5 + Math.PI * 1 / 2,  // アングルをラジアンで計算
  velocityFunc: () =>0.7 + Math.random() * 1,
  radiusFunc: () => 10 + Math.random() * 5
});

// 下からフェードイン
$(function(){
	$(window).on('load scroll',function (){
		$('.skill-item').each(function(){
			//ターゲットの位置を取得
			var target = $(this).offset().top;
			//スクロール量を取得
			var scroll = $(window).scrollTop();
			//ウィンドウの高さを取得
			var height = $(window).height();
			//ターゲットまでスクロールするとフェードインする
			if (scroll > target - height){
				//クラスを付与
				$(this).addClass('active');
			}
		});
	});
});