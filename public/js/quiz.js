document.addEventListener('DOMContentLoaded', () => {
  const answerForm = document.querySelector('#quiz-form');

  answerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(answerForm);
    const answerId = formData.get('answer');

    const response = await fetch('/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ answerId })
    });

    const data = await response.json();

    answerForm.reset();

    updateQuiz(data);
  });

  const updateQuiz = (data) => {
    const { question, isCorrect, score } = data;

    const questionText = document.querySelector('h2');
    questionText.textContent = question.question_text;

    const answerChoices = document.querySelectorAll('.answer-choice label');
    answerChoices.forEach((label, index) => {
      label.textContent = question.answers[index].answer_choice;
    });

    const feedback = document.querySelector('.feedback');
    if (isCorrect === true) {
      feedback.classList.add('correct');
      feedback.classList.remove('incorrect');
      feedback.textContent = 'Correct!';
    } else if (isCorrect === false) {
      feedback.classList.add('incorrect');
      feedback.classList.remove('correct');
      feedback.textContent = `Sorry, the correct answer was "${question.answers[0].answer_choice}".`;
    } else {
      feedback.classList.remove('correct');
      feedback.classList.remove('incorrect');
      feedback.textContent = '';
    }

    const scoreText = document.querySelector('p');
    scoreText.textContent = `Score: ${score}`;
  };
});

function beginQuiz() {
  window.location.href="/quiz";
};

const beginQuizBtn = document.querySelector('.begin-quiz-btn');
if (beginQuizBtn) {
  beginQuizBtn.addEventListener("click", beginQuiz);
};
