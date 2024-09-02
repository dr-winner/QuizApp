// Get all the required elements

const startButton = document.querySelector(".startButton button");
const infoContainer = document.querySelector(".infoContainer");
const welcomeText = document.querySelector(".welcomeText");
const quitQuiz = infoContainer.querySelector(".navButtons .quitQuiz");
const continueButton = infoContainer.querySelector(".navButtons .continueButton");
const quizContainer = document.querySelector(".quizContainer");

const ans_list = document.querySelector(".answerList");

// If the start button is clicked
startButton.onclick = () => {
    infoContainer.classList.add("activeInfo"); //show the info container
    welcomeText.classList.remove("activeWelcome"); //hide the welcome text
}

// If the quit quiz button is clicked
quitQuiz.onclick = () => {
    infoContainer.classList.remove("activeInfo"); //hide the info container
}

// If the continue button is clicked
continueButton.onclick = () => {
    infoContainer.classList.remove("activeInfo"); //hide the info container
    quizContainer.classList.add("activeQuiz"); //show the quiz container
    showQuestions(0);
    questionStatus(1);
}

let questionCount = 0;
let quesNumb = 1;

const nextButton = quizContainer.querySelector(".nextBtn");

// Next button click

nextButton.onclick = () =>{
    if(questionCount < questions.length - 1){
        questionCount++;
        quesNumb++
        showQuestions(questionCount);
        questionStatus(quesNumb)
    } else{
        console.log("Test completed!");
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
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = ans_list.children.length;
    if(userAnswer == correctAnswer){
        answer.classList.add("correct");
        console.log("Answer is correct");
    } else{
        answer.classList.add("incorrect");
        console.log("Answer is incorrect");      
        
        // once user selects the wrong answer, auto select the correct answer
        for(let i = 0; i < allOptions; i++){
            if( ans_list.children[i].textContent == correctAnswer){
                ans_list.children[i].setAttribute("class", "option correct");
            }            
        }
    }

    // once the user selects one answer, disable all options
    for(let i = 0; i < allOptions; i++){
        ans_list.children[i].classList.add("disabled");
    }
}




function questionStatus(index){
    const bottomQuestionCounter = quizContainer.querySelector(".questionStat");
    let totalQuestionsCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
    bottomQuestionCounter.innerHTML = totalQuestionsCountTag;
}