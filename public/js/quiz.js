const answerForm = document.querySelector('#answer-form');
var beginQuizel=document.querySelector(".begin-quiz-btn")
beginQuizel.addEventListener("click", beginQuiz)

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

async function beginQuiz() {
  window.location.href="/quiz"
  // Pseudo Code

  // When we click the "Begin Quiz Button"
  // Then we want a question with four possible answers to appear
  // Then when we click one of the answers, it will load the second question
  // This same process will occur ten times
  // At the end of the quiz, the user's score, determined by their amount of correct answers will be displayed
  // An End Quiz button will return the user to home
  
  const response = await fetch('/api/quiz', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  
  console.log("response", response)
};
