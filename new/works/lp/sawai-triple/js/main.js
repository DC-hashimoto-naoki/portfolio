window.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer');

    let isOpend = false;

    questions.forEach((question, index) => {
        question.addEventListener('click', () => {
            if (isOpend) {
                question.classList.remove('show')
                answers[index].classList.remove('show')
            } else {
                question.classList.add('show')
                answers[index].classList.add('show')
            }
            isOpend = !isOpend;
        });
    })
})