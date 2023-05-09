
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

