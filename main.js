// Get all the required elements

const startButton = document.querySelector(".startButton button");
const infoContainer = document.querySelector(".infoContainer");
const welcomeText = document.querySelector(".welcomeText");
const quitQuiz = infoContainer.querySelector(".navButtons .quitQuiz");
const continueButton = infoContainer.querySelector(".navButtons .continueButton");
const quizContainer = document.querySelector(".quizContainer");
const timeCounter = quizContainer.querySelector(".timer .timerSec");
const timerBar = quizContainer.querySelector("header .timerBar");
const timeoff = quizContainer.querySelector("header .timeText");

const ans_list = document.querySelector(".answerList");

// If the start button is clicked
startButton.onclick = () => {
    infoContainer.classList.add("activeInfo"); //show the info container
    welcomeText.classList.remove("activeWelcome"); //hide the welcome text
    userScore = 0;
}

// If the quit quiz button is clicked
quitQuiz.onclick = () => {
    infoContainer.classList.remove("activeInfo"); //hide the info container
}

// If the continue button is clicked
continueButton.onclick = () => {
    infoContainer.classList.remove("activeInfo"); //hide the info container
    quizContainer.classList.add("activeQuiz"); //show the quiz container
    welcomeText.classList.remove("activeWelcome"); //hide the welcome text

    showQuestions(0);
    questionStatus(1);
    startTimer(15);
    startTimerLine(0);
}

let questionCount = 0;
let quesNumb = 48;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const nextButton = quizContainer.querySelector(".nextBtn");
const resultContainer = document.querySelector(".resultContainer");
const restartQuiz = resultContainer.querySelector(".navButtons .continueButton");
const lquitQuiz = resultContainer.querySelector(".navButtons .lquitQuiz");

restartQuiz.onclick = () =>{
    quizContainer.classList.add("activeQuiz");
    resultContainer.classList.remove("activeResult");

    questionCount = 0;
    quesNumb = 48;
    timeValue = 15;
    widthValue = 0;
    userScore = 0;

    showQuestions(questionCount);
    questionStatus(quesNumb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    nextButton.style.display = "none";
    timeoff.textContent = "Time Left";
    userScore = 0;
}
lquitQuiz.onclick = () =>{
    window.location.reload();
    userScore = 0;
    showQuestions(0);
    questionStatus(1);
}
// Next button click

nextButton.onclick = () =>{
    if(questionCount < questions.length - 1){
        questionCount++;
        quesNumb++;
        showQuestions(questionCount);
        questionStatus(quesNumb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        nextButton.style.display = "none";
        timeoff.textContent = "Time Left";
    } else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("Test completed");
        showResultContainer();
    }

}

// Getting the questions and answers from the array
function showQuestions(index){
    const questionTxt = document.querySelector(".questionText");
    const ans_list = document.querySelector(".answerList");
    let questionTag = '<span>' + questions[index].QuestionNumber+ ". " + questions[index].question + '</span>';
    let optionTag = '<div class="option">' + questions[index].optionlist[0] + '<span></span></div>'
                    + '<div class="option">' + questions[index].optionlist[1] + '<span></span></div>'
                    + '<div class="option">' + questions[index].optionlist[2] + '<span></span></div>'
                    + '<div class="option">' + questions[index].optionlist[3] + '<span></span></div>';
    questionTxt.innerHTML = questionTag;
    ans_list.innerHTML = optionTag;

    const option = ans_list.querySelectorAll(".option");
    for(let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = ans_list.children.length;
    userScore += 1;
    if(userAnswer == correctAnswer){
        userScore += 1;
        answer.classList.add("correct");
        console.log("Answer is correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else{
        answer.classList.add("incorrect");
        console.log("Answer is incorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        // once user selects the wrong answer, auto select the correct answer
        for(let i = 0; i < allOptions; i++){
            if( ans_list.children[i].textContent == correctAnswer){
                ans_list.children[i].setAttribute("class", "option correct");
                ans_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    // once the user selects one answer, disable all options
    for(let i = 0; i < allOptions; i++){
        ans_list.children[i].classList.add("disabled");
    }
    nextButton.style.display = "block";
}

function showResultContainer(){
    infoContainer.classList.remove("activeInfo"); //hide the info container
    quizContainer.classList.remove("activeQuiz"); //hide the quiz container
    resultContainer.classList.add("activeResult"); //show the result container
    const scoreText = resultContainer.querySelector(".scoreText");
    if(userScore > 45){
        let scoreTag = '<span>You are such a genius!, you got <p>' + userScore + '</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 40){
        let scoreTag = '<span>Nice one, you got <p>' + userScore + '</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 30){
        let scoreTag = '<span>You tried your best, you got <p>' + userScore + '</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 20){
        let scoreTag = '<span>You can do better! trust me. You got <p>' + userScore + '</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 10){
        let scoreTag = '<span>and sorry, you got <p>' + userScore + '</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>Try again, you got <p>' + userScore + '</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
};

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCounter.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCounter.textContent;
            timeCounter.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCounter.textContent = "00";
            timeoff.textContent = "Time Out";

            let correctAnswer = questions[questionCount].answer;
            let allOptions = ans_list.children.length;
            for(let i = 0; i < allOptions; i++){
                if( ans_list.children[i].textContent == correctAnswer){
                    ans_list.children[i].setAttribute("class", "option correct");
                    ans_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for(let i = 0; i < allOptions; i++){
                ans_list.children[i].classList.add("disabled");
            }
            nextButton.style.display = "block";
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        timerBar.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}

function questionStatus(index){
    const bottomQuestionCounter = quizContainer.querySelector(".questionStat");
    let totalQuestionsCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottomQuestionCounter.innerHTML = totalQuestionsCountTag;
}
