const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2,
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1,
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: 2,
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2,
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        answer: 0,
    },
];

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

const questionContainer = document.getElementById("question-container");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result-container");
const scoreDisplay = document.getElementById("score-display");
const reviewContainer = document.getElementById("review-container");
const restartButton = document.getElementById("restart-button");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.options
                .map(
                    (option, index) =>
                        `<li>
                            <label>
                                <input type="radio" name="option" value="${index}">
                                ${option}
                            </label>
                        </li>`
                )
                .join("")}
        </ul>
    `;
    feedback.textContent = "";
    nextButton.disabled = true;

    const options = document.querySelectorAll('input[name="option"]');
    options.forEach((option) => {
        option.addEventListener("change", () => {
            nextButton.disabled = false;
        });
    });
}

function showFeedback(isCorrect) {
    feedback.textContent = isCorrect ? "Correct!" : "Wrong!";
    feedback.style.color = isCorrect ? "green" : "red";
}

function showResults() {
    resultContainer.classList.remove("hidden");
    document.getElementById("quiz-container").classList.add("hidden");

    scoreDisplay.textContent = `You scored ${score} out of ${questions.length}.`;

    reviewContainer.innerHTML = userAnswers
        .map((answer, index) => {
            const question = questions[index];
            const correct = question.answer === answer;
            return `
                <li>
                    <p><strong>Q: ${question.question}</strong></p>
                    <p>Your answer: ${question.options[answer]} ${
                correct ? "(Correct)" : "(Incorrect)"
            }</p>
                    <p>Correct answer: ${
                        question.options[question.answer]
                    }</p>
                </li>
            `;
        })
        .join("");
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    document.getElementById("quiz-container").classList.remove("hidden");
    resultContainer.classList.add("hidden");
    loadQuestion();
}

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const userAnswer = parseInt(selectedOption.value);
    userAnswers.push(userAnswer);

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = userAnswer === currentQuestion.answer;

    if (isCorrect) {
        score++;
    }

    showFeedback(isCorrect);

    if (currentQuestionIndex < questions.length - 1) {
        nextButton.disabled = true;
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1000);
    } else {
        setTimeout(showResults, 1000);
    }
});

restartButton.addEventListener("click", resetQuiz);

// Initialize the quiz
loadQuestion();
