const quizData = [
  {
    question: "When was python launched?",
    a: "1991",
    b: "2000",
    c: "1986",
    d: "none of the above",
    correct: "a",
  },
  {
    question: "Who is the president of US?",
    a: "Bindu Bhatoy",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Joe Biden",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason object notation",
    d: "Helicopter Terminals Motorboats Lamborgins",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "2020",
    b: "1995",
    c: "2018",
    d: "1990",
    correct: "b",
  },
  {
    question: "For what purpose css is used?",
    a: "Database Management",
    b: "Backend",
    c: "Frontend style",
    d: "Game development",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");

const answerEls = document.querySelectorAll(".answer");
const currQuestion = document.getElementById("currentQuestion");
const optionAText = document.getElementById("optionA");
const optionBText = document.getElementById("optionB");
const optionCText = document.getElementById("optionC");
const optionDText = document.getElementById("optionD");

const answerSubmit = document.getElementById("submit-answer");
// console.log(answerSubmit)
let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  currQuestion.innerText = currentQuizData.question;
  optionAText.innerText = currentQuizData.a;
  optionBText.innerText = currentQuizData.b;
  optionCText.innerText = currentQuizData.c;
  optionDText.innerText = currentQuizData.d;
  console.log("loadQuiz");
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

answerSubmit.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions</h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
