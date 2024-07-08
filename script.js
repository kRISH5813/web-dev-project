const questions = [
  {
    question: "Under which category of games does COC comes?",
    options: ["Board", "Arcade", "Racing", "Strategy"],
    answer: "Strategy",
  },
  {
    question: "Which hero can fly in COC main village?",
    options: [
      "Barbarian King",
      "Archer Queen",
      "Grand Warden",
      "Royal Champion",
    ],
    answer: "Grand Warden",
  },
  {
    question: "How many villages are there in COC?",
    options: ["4", "3", "2", "1"],
    answer: "3",
  },
  {
    question: "Which is the parent company of COC?",
    options: ["Supercell", "Tencent", "Miniclip", "Gameloft"],
    answer: "Supercell",
  },
];

function loadQuiz() {
  const quizContainer = document.getElementById("quiz-container");

  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = `Question ${index + 1}: ${q.question}`;
    questionDiv.appendChild(questionText);

    q.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(index, option);
      questionDiv.appendChild(button);
    });

    const result = document.createElement("p");
    result.classList.add("result");
    result.id = `result-${index}`;
    questionDiv.appendChild(result);

    quizContainer.appendChild(questionDiv);
  });
}

function checkAnswer(questionIndex, answer) {
  const resultElement = document.getElementById(`result-${questionIndex}`);
  if (answer === questions[questionIndex].answer) {
    resultElement.textContent = "Correct!";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "Incorrect!";
    resultElement.style.color = "red";
  }
}

document.addEventListener("DOMContentLoaded", loadQuiz);

// const hamburger = document.getElementById('hamburger');
// const nav = document.querySelector('nav');

// hamburger.addEventListener('click', () => {
//     nav.classList.toggle('open');
//     hamburger.classList.toggle('open');
// });
