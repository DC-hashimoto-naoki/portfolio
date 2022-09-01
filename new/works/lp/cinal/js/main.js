window.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    const answers = document.querySelectorAll('.answer')

    questions.forEach((question, index) => {
        var isOpen = false;
        question.addEventListener('click', () => {
            if (isOpen) {
                question.classList.remove('open');
                answers[index].classList.remove('show');
            } else {
                question.classList.add('open');
                answers[index].classList.add('show');
            }
            isOpen =! isOpen;
        });
    })
});