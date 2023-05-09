<<<<<<< HEAD

var beginQuizBtn = document.querySelector('.begin-quiz-btn');


beginQuizBtn?.addEventListener('click', beginQuiz);

async function beginQuiz() {
window.location.href="/quiz"
const response = await fetch('/api/user/quiz'
);

if (response.ok) {
  console.log("startQuiz")
} else {
  alert('Failed to log in.'); 
};

}

=======
const answerForm = document.querySelector('form');

document.addEventListener('DOMContentLoaded', () => {
  const answerForm = document.querySelector('form');

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
=======
function beginQuiz() {
  // your code to start the quiz goes here
};
>>>>>>> 0a6374e235fe3a292addae70426b4951ac94c17e
