const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[current];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => {
      if (option === q.answer) score++;
      nextQuestion();
    };
    answersDiv.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML =
      `<h2>Your Score: ${score}</h2>
       <button onclick="location.reload()">Restart</button>`;
  }
}

loadQuestion();