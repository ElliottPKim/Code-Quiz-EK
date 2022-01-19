const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement= document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-buttons")
// const infoBox = document.querySelector(".info-box");
// const exitBtn = infoBox.querySelector(".buttons .quit");
// const continueBtn = document.querySelector(".buttons .restart");
const timer = document.getElementById('timer')
let countDown = document.getElementById('countdown')
const resultBox = document.querySelector("result-box");
const nameInput = document.querySelector("#name");
const submitBtn = document.querySelector("#submit-btn");
const highscoreContainer = document.querySelector('.highscore-container');
const highscoreTable = document.querySelector('.highscore-table');





let shuffledQuestions, currentQuestionIndex

// let timeLeft = 60;
// let score = 0;
// let questionCount = 0;
// let questionNumber = 1;
// let counter; 
// let penalty = false; 

// let gameOver = false; 

// startButton.onclick = () => {
//     infoBox.classList.add("info-box");
// }
startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})



function startGame() {
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
    setInterval(
        function timing () {
        let timerEl=parseInt(countDown.innerHTML)
        //console.log(parseInt(countDown.innerHTML))
        // for(let i=0; i<timerEl; i++) {
        //     console.log(timerEl-i)
        //    //countDown.innerHTML=timerEl-i
        //     if (i==1) {
        //         
        //     }
        // }
        console.log(timerEl--)

        countDown.innerHTML=timerEl--
    
            if (timerEl==0) {
             clearInterval(timing)   

        }
    }, 1000)
    // startTimer(60);
}

function setNextQuestion() {
    resetState()
    showQuestion (shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text  
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Play Again"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false },
            { text: "alerts", correct: true },
            { text: "numbers", correct: false }
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: [
            {text: "quotes", correct: false},
            {text: "curly brackets", correct: false},
            {text: "parantheses", correct: true},
            {text: "square brackets", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: [
            {text: "numbers and strings", correct: false},
            {text: "other arrays", correct: false},
            {text: "booleans", correct: false},
            {text: "all of the above", correct: true}
        ]    
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: [
            {text: "commas", correct: false},
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true},
            {text: "parantheses", correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "javascript", correct: false},
            {text: "terminal/bash", correct: false},
            {text: "for loops", correct: false},
            {text: "console.log", correct: true}
        ]
    },
]