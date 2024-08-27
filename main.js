// Get all the required elements

const startButton = document.querySelector(".startButton button");
const infoContainer = document.querySelector(".infoContainer");
const welcomeText = document.querySelector(".welcomeText");
const quitQuiz = infoContainer.querySelector(".navButtons .quitQuiz");
const continueButton = infoContainer.querySelector(".navButtons .continueButton");
const quizContainer = document.querySelector(".quizContainer");

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
}