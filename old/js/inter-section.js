//監視したい要素を取得
// const target = document.querySelectorAll('.target')
const targetArray = Array.prototype.slice.call(target);

//オプション設定
const options = {
    root: null,
    rootMargin: '0px 0px',
    threshold: 0
};

//Intersection Observerのおっさんを呼ぶ
const observer = new IntersectionObserver(callback, options)
targetArray.forEach((tgt) => {
  observer.observe(tgt)
});

//要素が交差したとき、おっさんにする命令
function callback(entries) {
  entries.forEach(function(entry, i) {
    const target = entry.target;
    if (entry.isIntersecting && !target.classList.contains('is-active')) {
      const delay = i * 100
      setTimeout(function(){
        target.classList.add('is-active');
      },delay);
    }
  });
};