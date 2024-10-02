const questions = [
  {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris"
  },
  {
      question: "What is 2 + 2?",
      choices: ["3", "4", "5", "6"],
      answer: "4"
  },
  {
      question: "What is the largest planet in our solar system?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.classList.remove('hidden');
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  quizContainer.innerHTML = `
      <h2>${question.question}</h2>
      ${question.choices.map(choice => `
          <button class="choice">${choice}</button>
      `).join('')}
  `;

  const choices = document.querySelectorAll('.choice');
  choices.forEach(choice => {
      choice.addEventListener('click', selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedChoice = e.target.innerText;
  if (selectedChoice === questions[currentQuestionIndex].answer) {
      score++;
  }

  if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion(questions[currentQuestionIndex]);
  } else {
      showResult();
  }
}

function showResult() {
  quizContainer.classList.add('hidden');
  nextButton.classList.add('hidden');
  resultContainer.classList.remove('hidden');
  resultContainer.innerHTML = `
      <h2>Your Score: ${score} / ${questions.length}</h2>
      <button onclick="startQuiz()">Restart Quiz</button>
  `;
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
      showQuestion(questions[currentQuestionIndex]);
  }
});

startQuiz();
