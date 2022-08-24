window.addEventListener('DOMContentLoaded', () => {
    // FV text typing animation
    var textTyping = document.querySelector('.textTyping');

    function splitToSpanTags() {
        var element = textTyping.textContent;
        var textBox = "";
        element.split('').forEach(function (t) {
            if (t !== " ") {
                textBox += '<span>' + t + '</span>';
            } else {
                textBox += t;
            }
        })
        textTyping.innerHTML = textBox;
    }

    let hasTextShowed = false;
    function showText() {
        var element = document.querySelectorAll('.textTyping > span');
        var spans = Array.prototype.slice.call(element);

        var newPromise = new Promise((resolve, reject) => {
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('show');
                }, index * 50)
            })
            resolve();
        })

        newPromise.then(() => {
            hasTextShowed = true;
        })
    }

    const fv = document.getElementById('fv');
    fv.classList.add('show');


    window.addEventListener('load', splitToSpanTags);
    window.addEventListener('load', showText);

    function changeBackground(color) {
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = color;
        fv.classList.remove('show');
        fv.remove();
    }

    function pressEnter(e) {
        if (e.keyCode === 13 && hasTextShowed) {
            changeBackground("#fff");
        } else {
            return false;
        }
    }
    function clickText() {
        if(hasTextShowed){
            changeBackground("#fff");
        } else {
            return false;
        }
    }
    window.addEventListener('keypress', pressEnter);
    textTyping.addEventListener('click', clickText);
})