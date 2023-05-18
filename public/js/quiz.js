document.addEventListener('DOMContentLoaded', () => {
  let score_value = 0;

  const submitAnswer = () => {
    var element = document.getElementsByClassName('option');

    for (let i = 0; i < element.length; i++) {
      if (element[i].checked) {
        console.log(i, element[i].value, "This is checked");

        if (element[i].value === "true") {
          console.log(i, element[i].value, element[i].checked, "true");
          score_value += 100;
        } else {
          console.log(i, element[i].value, element[i].checked, "false");
          score_value -= 100;
        }
      }
    }

    document.getElementById("score").innerHTML = "Your Score: " + score_value;
  };

  const submitAnswerBtn = document.querySelector('.submit-answer-btn');
  submitAnswerBtn.addEventListener('click', submitAnswer);
});
