const optionButtons = document.querySelectorAll('options-btn');

const questions = {
  question: 'What job does Peter Parker have?',
  options: [
    'High School Teacher',
    'Professional Photographer',
    'Freelance Journalist',
    'Lab Assistant',
  ],
  correct: 0,
};

const rootElement = document.documentElement;

let CURRENT_ANSWER;

optionButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const clickedButtonId = btn.id;

    const button = btn.querySelector('button');
    optionButtons.forEach((button) => {
      button.querySelector('button').classList.remove('btn-options-clicked');
    });

    if (clickedButtonId == 'submit') {
      if (CURRENT_ANSWER !== undefined && CURRENT_ANSWER == questions.correct) {
        const correctBtn = document
          .getElementById(CURRENT_ANSWER)
          .querySelector('button');
        correctBtn.classList.toggle('btn-options-clicked');
        correctBtn.setAttribute('isCorrect', 'true');
        correctBtn.setAttribute('option', 'Changed');
        console.log('True');
      }
    }

    CURRENT_ANSWER = clickedButtonId;

    button.classList.toggle('btn-options-clicked');

    console.log('Clicked button ID:', clickedButtonId);
  });
});
