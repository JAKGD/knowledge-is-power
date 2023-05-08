
const beginQuizHandler = ()=> {
  window.location.href="/quiz"
}
document
  .querySelector('.begin-quiz-btn')
  .addEventListener('click', beginQuizHandler);
const startButton = document.querySelector("#start-button")
const questionsArr = [
  question1 = {
    question: "1. How can a datatype be declared to be a constant type?",
    choiceA: "Const",
    choiceB: "Var",
    choiceC: "Let",
    choiceD: "Constant",
    rightAnswer: "Const",
  },
  question2 = {
    question: "2. What keyword is used to check whether a given property is valid or not?",
    choiceA: "in",
    choiceB: "is in",
    choiceC: "exist",
    choiceD: "lies",
    rightAnswer: "in",
  },
  question3 = {
    question: "3. When an operator's value is NULL, the typeof returned by the unary operator is?",
    choiceA: "Boolean",
    choiceB: "Undefined",
    choiceC: "Object",
    choiceD: "Integer",
    rightAnswer: "Object",
  },
  question4 = {
    question: "4. Javascript is an _______ language?",
    choiceA: "Object-Oriented",
    choiceB: "Object-Based",
    choiceC: "Procedural",
    choiceD: "None of the above",
    rightAnswer: "Object-Oriented",
  },
  question5 = {
    question: "5. Which of the following are not server-side Javascript objects?",
    choiceA: "Date",
    choiceB: "FileUpload",
    choiceC: "Function",
    choiceD: "All of the above",
    rightAnswer: "All of the above",
  },
  question6 = {
    question: "6. Which function is used to serialize an object into a JSON string in Javascript?",
    choiceA: "stringify()",
    choiceB: "parse()",
    choiceC: "convert()",
    choiceD: "None of the above",
    rightAnswer: "stringify()",
  },
  question7 = {
    question: "7. Which of the following are closures in Javascript?",
    choiceA: "Variables",
    choiceB: "Functions",
    choiceC: "Objects",
    choiceD: "All of the above",
    rightAnswer: "All of the above",
  },
  question8 = {
    question: "8.Which of the following is not a Javascript framework?",
    choiceA: "Node",
    choiceB: "Vue",
    choiceC: "React",
    choiceD: "Cassandra",
    rightAnswer: "React",
  },

  question9 = {
    question: "9. What keyword is used to declare an asynchronous function in Javascript?",
    choiceA: "async",
    choiceB: "await",
    choiceC: "setTimeout",
    choiceD: "None of the above",
    rightAnswer: "async",
  },
  question10 = {
    question: "10. How to stop an interval timer in Javascript?",
    choiceA: "clearInterval",
    choiceB: "clearTimer",
    choiceC: "intervalOver",
    choiceD: "None of the above",
    rightAnswer: "clearInterval",
  },

];


const countDownEl = document.querySelector("#count-down");
// Adding a Start Button //
const buttonEl = document.querySelector("#start-button");
// Adding a div //
const mainWrapperEl = document.querySelector(".message");
// store h3 tag that question will be inserted into
const questionEl = document.querySelector("#message");
// Adding a multichoice //
const multChoiceEl = document.querySelector("#mult-choice");
// Adding a list for multi choice answers //
const choiceA = document.querySelector("#choice-a");
const choiceB = document.querySelector("#choice-b");
const choiceC = document.querySelector("#choice-c");
const choiceD = document.querySelector("#choice-d");
// store div that will show if the answer is right or wrong
const feedbackEl = document.querySelector("#feedback");

// Adding a start timer at 60 seconds //
var startSecondsEl = 60;
// Adding a set increment interval to be 1000 milliseconds //
var incremetInt = 1000;
// Adding a define user score variable  //
var userScore = 0;
// Adding a define 10 sec penalty for wrong answer //
var penalty = 10;
// Adding a define var that will save user's initials and score //
var lastScore;
// Adding a timer var globally available to be able to stop the timer inside askQuestions () 
var timer;

// Adding a function to countdown //
function countDown() {
  timer = setInterval(function () {
    startSecondsEl--;
    countDownEl.textContent = `${startSecondsEl} seconds`;

    if (startSecondsEl < 0) {
      clearInterval(timer);
      saveUserScore();
    };

  }, incremetInt);
};

// Adding a function //
function saveUserScore() {
  feedbackEl.textContent = "";
  document.querySelector("#count-down").textContent = "Finished!";
  questionEl.textContent = `Your score is ${userScore}`;

  // remove multiple choice els when quiz is done //
  var children = document.querySelectorAll(".child");
  for (i = 0; i < children.length; i++) {
    multChoiceEl.removeChild(children[i]);
  }

  // ask if the user wants to save the score //
  var askToSave = document.createElement("p");
  askToSave.textContent = "Would you like to save your score?";
  mainWrapperEl.appendChild(askToSave);

  var userYes = document.createElement("button");
  userYes.textContent = "Yes";
  userYes.setAttribute("class", "choice-btn");
  mainWrapperEl.appendChild(userYes);

  var userNo = document.createElement("button");
  userNo.textContent = "No";
  userNo.setAttribute("class", "choice-btn");
  mainWrapperEl.appendChild(userNo);

  // Adding a Yes button when the user click it you can put the inicials //
  userYes.addEventListener("click", function () {

    feedbackEl.textContent = "";

    var userInitials = document.createElement("input");
    userInitials.setAttribute("placeholder", "Please Enter Your Initials");
    userInitials.setAttribute("class", "style");
    mainWrapperEl.appendChild(userInitials);

    var saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.setAttribute("class", "choice-btn");
    mainWrapperEl.appendChild(saveBtn);

    // Adding a user Score with a story of the previous score //
    lastScore = JSON.parse(localStorage.getItem("userScore"));
    if (lastScore != null) {

      var lastUser = document.createElement("p");
      lastUser.textContent = `Last User: ${lastScore.user}`;
      mainWrapperEl.appendChild(lastUser);

      var lastUserScore = document.createElement("p");
      lastUserScore.textContent = `Last User's Score: ${lastScore.score}`;
      mainWrapperEl.appendChild(lastUserScore);
    };

    // when user clicks "Save" //
    saveBtn.addEventListener("click", function () {
      // Adding a assign "Anonymous" instead of initials //
      if (userInitials.value === "") {
        userInitials.value = "Anonymous";
      };

      var savedUserScores = {
        user: userInitials.value.trim(),
        score: userScore,
      };

      localStorage.setItem("userScore", JSON.stringify(savedUserScores));

      var lastScore = JSON.parse(localStorage.getItem("userScore"));

      // Adding a variable for the most recent user's initials and score
      var yourName = document.createElement("p");
      yourName.textContent = `Your Initials: ${savedUserScores.user}`;
      mainWrapperEl.appendChild(yourName);
      // Adding a Back to home button once the quiz is done you can click it and go back from the begining //
      var yourScore = document.createElement("p");
      yourScore.textContent = `Your Score: ${savedUserScores.score}`;
      mainWrapperEl.appendChild(yourScore);
      var backToHome = document.createElement("button");
      backToHome.textContent = 'Back To Home'
      backToHome.classList.add("start-button");
      mainWrapperEl.appendChild(backToHome);
      backToHome.addEventListener("click", function () {
        window.location.href = "index.html"


      })


    });
  });

  // Adding if user clicks "No" button //
  userNo.addEventListener("click", function () {

    feedbackEl.textContent = "";

    var message = document.createElement("p");
    message.textContent = "Thanks for taking the quiz!";
    mainWrapperEl.appendChild(message);


    var backToHome = document.createElement("button");
    backToHome.textContent = 'Back To Home'
    backToHome.classList.add("start-button");
    mainWrapperEl.appendChild(backToHome);
    backToHome.addEventListener("click", function () {
      window.location.href = "index.html"


    })
  });

};

// Adding a function to insert buttons with mult choice //
function writeQuestions() {
  questionEl.textContent = questionsArr[startIndex].question;
  const buttonChoiceA = choiceA.innerHTML = `<button>${questionsArr[startIndex].choiceA}</button>`;
  const buttonChoiceB = choiceB.innerHTML = `<button>${questionsArr[startIndex].choiceB}</button>`;
  const buttonChoiceC = choiceC.innerHTML = `<button>${questionsArr[startIndex].choiceC}</button>`;
  const buttonChoiceD = choiceD.innerHTML = `<button>${questionsArr[startIndex].choiceD}</button>`;


  const buttons = document.getElementsByTagName("button");

  // Adding a attributes for each button //
  for (index = 1; index < buttons.length; index++) {
    buttons[index].setAttribute("class", "mult-btn");
  }
};

// Adding a funciton that presents questions to user //
let startIndex = 0; // always start with the first question //
function askQuestions() {
  writeQuestions(startIndex);
  multChoiceEl.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("button") === true) {
      if (element.textContent === questionsArr[startIndex].rightAnswer) {
        userScore++;
        feedbackEl.textContent = "correct";
      } else {
        // If the answer is wrong the time decrease by 10 sec//
        var timeNow = document.querySelector("#count-down").textContent.split(" ")[0];
        feedbackEl.textContent = "incorrect";
        var newTime = timeNow - penalty;
        startSecondsEl = newTime;
      };
    };

    // Adding increment index to move on to the next question when any answer is selected //
    startIndex++;

    if (startIndex < questionsArr.length) {
      writeQuestions(startIndex);
    } else {
      // Adding display and save score after the last question is answered //
      saveUserScore();
      clearInterval(timer);
    };
  }
  )
};

// Adding a function calls countDown() and writeQuestions() //
function beginQuiz() {
  buttonEl.classList.add("clickbutton");
  countDown();
  askQuestions();
};

// Adding a event listener to start quiz when the "start button is clicked" //
buttonEl.addEventListener("click", beginQuiz);