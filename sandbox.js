/* 
1. Write HTML Code
2. Add styles
3. Select necessary DOM elements
4. Listen to submit event
5. Calculate quiz score
6. Disable form on submit
7. Show and animate quiz score
*/

// Querying DOM elements
const quizApp = document.querySelector("form");
const scoreSection = document.querySelector(".score_section");
const actualScore = document.querySelector(".actual_score");
const submitButton = document.querySelector("button.submit");
const resetButton = document.querySelector("button.reset");

// Declare my variables and data
const correctAnswers = [
  "lagos",
  "russia",
  "reykjavík",
  "luxembourg",
  "mercury",
];

// Create my functions

// Listen to events

quizApp.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;

  const userAnswers = [
    quizApp.question1.value,
    quizApp.question2.value,
    quizApp.question3.value,
    quizApp.question4.value,
    quizApp.question5.value,
  ];

  userAnswers.forEach((userAns, index) => {
    if (userAns === correctAnswers[index]) {
      score += 20;
    }
  });

  scrollTo(0, 0);

  scoreSection.classList.remove("hidden");

  // actualScore.textContent = `${score}%`;
  let scoreOutput = 0;
  const quizAnimation = setInterval(() => {
    actualScore.textContent = `${scoreOutput}%`;
    if (scoreOutput === score) {
      clearInterval(quizAnimation);
    } else {
      scoreOutput++;
    }
  }, 30);

  quizApp.reset();
  submitButton.setAttribute("disabled", "disabled");
  resetButton.classList.remove("hidden");
});

resetButton.addEventListener("click", () => {
  scoreSection.classList.add("hidden");
  submitButton.removeAttribute("disabled");
  resetButton.classList.add("hidden");
});
