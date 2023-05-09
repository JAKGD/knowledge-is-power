const answerForm = document.querySelector('#answer-form');
var beginQuizel = document.querySelector(".begin-quiz-btn")
beginQuizel.addEventListener("click", beginQuiz)

const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const submitButton = document.querySelector('#submit');

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

    // updateQuiz(data);
  });

  // const updateQuiz = (data) => {
  //   const { question, isCorrect, score } = data;

  //   const questionText = document.querySelector('h2');
  //   questionText.textContent = question.question_text;

  //   const answerChoices = document.querySelectorAll('.answer-choice label');
  //   answerChoices.forEach((label, index) => {
  //     label.textContent = question.answers[index].answer_choice;
  //   });

  //   const feedback = document.querySelector('.feedback');
  //   if (isCorrect === true) {
  //     feedback.classList.add('correct');
  //     feedback.classList.remove('incorrect');
  //     feedback.textContent = 'Correct!';
  //   } else if (isCorrect === false) {
  //     feedback.classList.add('incorrect');
  //     feedback.classList.remove('correct');
  //     feedback.textContent = `Sorry, the correct answer was "${question.answers[0].answer_choice}".`;
  //   } else {
  //     feedback.classList.remove('correct');
  //     feedback.classList.remove('incorrect');
  //     feedback.textContent = '';
  //   }

  //   const scoreText = document.querySelector('p');
  //   scoreText.textContent = `Score: ${score}`;
  // };
});


function windowChange() {
  window.location.href = "/quiz"
};

async function beginQuiz() {  
  console.log("Starting Quiz")

  const response = await fetch('/api/quiz', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  // if (response.ok) {console.log("Fetched Response")};
  
  const data = await response.json();

  console.log("data", data);
  
  // quiz_bank = response.slice(-45)

  // console.log(quiz_bank)

  // variable to store the HTML output
  const output = [];

  // for each question...
  quiz_bank.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for (answers.answer_choice in currentQuestion.answers) {

        // ...add an HTML radio button
        answers.push(
          `<label>
           <input type="radio" name="question${questionNumber}" value="${answer_choice}">
           ${choice} :
           ${currentQuestion.answers[answer_choice]}
         </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
       <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
};

function showResults() { }