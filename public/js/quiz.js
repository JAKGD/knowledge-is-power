document.addEventListener('DOMContentLoaded', () => {
  const answerForm = document.querySelector('#quiz-form');

  answerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    nextquestion.classList.remove("hidden")
    const formData = new FormData(answerForm);
    const answerId = formData.get('answer');
    console.log(formData.get("question_id"))
    const questionId = formData.get("question_id")
    console.log(formData)

    const response = await fetch('/api/quiz/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ answerId, questionId })
    });

    const data = await response.json();
    console.log(data)
    answerForm.reset();

    updateQuiz(data);
  });

  const updateQuiz = (data) => {
    console.log(data)
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
  window.location.href = "/quiz";
};

function submitAnswer() {
  var element = document.getElementsByTagName('input');

  for (i = 0; i < element.length; i++) {
    if (element[i].checked)      
      if (element.value = "true") {
        score_value =+ 100;
        document.getElementById("correct-status").innerHTML = "Your Answer was Correct!";
        document.getElementById("score").innerHTML = "Your Score: " + score_value;
      }
      
      else {
        score_value =- 100;
        document.getElementById("correct-status").innerHTML = "Your Answer was Incorrect!";
        document.getElementById("score").innerHTML = "Your Score: " + score_value;
      };  
  };
};

const beginQuizBtn = document.querySelector('.begin-quiz-btn');
const submitAnswerBtn = document.querySelector('.submit-answer-btn')

submitAnswerBtn.addEventListener("click", submitAnswer);

var score_value = 0;

if (beginQuizBtn) {
  beginQuizBtn.addEventListener("click", beginQuiz);
};

nextquestion = document.querySelector(".next-question-btn")
