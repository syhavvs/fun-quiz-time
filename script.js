// DOC Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage =document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const correctSound = new Audio("correct_answer.mp3");
const wrongSound = new Audio("wrong_answer.mp3");

const quizQuestions = [
    {
        question: "Which is heavier?",
        answer: [
            {text: "1 kg of iron", correct: false },
            {text: "1 kg of cotton", correct: false },
            {text: "Both weigh the same", correct: true },
            {text: "Depends on gravity", correct: false },
        ],
    },
    {
        question: "If you throw a blue stone into the Red Sea, what happens?",
        answer: [
            {text: "It turns red", correct: false },
            {text: "It turns blue", correct: false },
            {text: "It gets wet", correct: true },
            {text: "It disappears", correct: false },
        ],
    },
    {
        question: "What can you hold without ever touching it?",
        answer: [
            {text: "Your breath", correct: true },
            {text: "Your shadow", correct: false },
            {text: "Your reflection", correct: false },
            {text: "Your thoughts", correct: false },
        ],
    },
    {
        question: "A plane crashes on the border of two countries. Where do they bury the survivors?",
        answer: [
            {text: "Country A", correct: false },
            {text: "Country B", correct: false },
            {text: "Both Countries", correct: false },
            {text: "They don't", correct: true }, 
        ],
    },
    {
        question: "Which animal can sleep standing up?",
        answer: [
            {text: "Horse", correct: true },
            {text: "Penguin", correct: false },
            {text: "Crocodile", correct: false },
            {text: "Rabbit", correct: false },
        ],
    },
    {
        question: "What is the fear of long words called?",
        answer: [
            {text: "Hippopotomonstrosesquippedaliophobia", correct: true },
            {text: "Lipophobia", correct: false },
            {text: "Megalophobia", correct: false },
            {text: "Trypophobia", correct: false },
        ],
    },
    {
        question: "Which of these animals has blue blood?",
        answer: [
            {text: "Elephant", correct: false },
            {text: "Octopus", correct: true },
            {text: "Lion", correct: false },
            {text: "Raccoon", correct: false },
        ],
    },
    {
        question:"Which came first?",
        answer: [
            {text: "The invention of the lighter", correct: true },
            {text: "The invention of the match", correct: false },
            {text: "Both in the same year", correct: false },
            {text: "Neither", correct: false },
        ],
    },
    {
        question: "What goes up but never comes down?",
        answer: [
            {text: "A balloon", correct: false },
            {text: "A rocket", correct: false },
            {text: "Your age", correct: true },
            {text: "Smoke", correct: false },
        ],
    },
    {
        question: "How many letters are in the alphabet?",
        answer: [
            {text: "26", correct: false },
            {text: "24", correct: false },
            {text: "28", correct: false },
            {text: "11", correct: true },
        ],
    },
];

// quiz state vars
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    // reset vars
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    startScreen.classList.remove("active");
    quizScreen.classList.add("active");

    showQuestion();
}

function showQuestion() {
    // reset state
    answersDisabled = false;

    const currentQuestion = quizQuestions[currentQuestionIndex];

    currentQuestionSpan.textContent = currentQuestionIndex + 1;

    const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";

    questionText.textContent = currentQuestion.question;

    answerContainer.innerHTML = "";

    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        button.dataset.correct = answer.correct;

        button.addEventListener("click", selectAnswer);

        answerContainer.appendChild(button);
    });
}

function selectAnswer(event) {
    // optimization check
    if (answersDisabled) return;

    answersDisabled = true;

    const selectedButton = event.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    Array.from(answerContainer.children).forEach((button) => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
        } else if (button === selectedButton) {
          button.classList.add("incorrect");
        }
    });

    setTimeout(() => {
        currentQuestionIndex++;

        // to check if the quiz is over
        if (currentQuestionIndex < quizQuestions.length) {
            showQuestion();
        } else {
          showResults()
        }
    }, 1000);

    if (isCorrect) {
       score++;
       scoreSpan.textContent = score;
         correctSound.play();
        } else {
         wrongSound.play();
         
    }
}

function showResults() {
    quizScreen.classList.remove("active");
    resultScreen.classList.add("active");

    finalScoreSpan.textContent = score;

    const percentage = (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultMessage.textContent = "WOW! That's Perfect!";
    } else if (percentage >= 80) {
        resultMessage.textContent = "Nice work! You did Amazing!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Good effort! Keep learning!";
    } else if (percentage >= 40) {
        resultMessage.textContent = "Not bad! Try again to improve!";
    } else {
        resultMessage.textContent = "Keep working hard! It's okay to make mistakes!";
    }
}

function restartQuiz() {
    resultScreen.classList.remove("active");

    startQuiz();
}