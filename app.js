//////////////////
//THE QUESTIONS//
/////////////////

//const containing properties for the question
const questionData = [{
        subject: "osteonecrosis",
        question: "Which of the following drugs can cause osteonecrosis of the jaw?",
        choices: ["Amlodipine", "Venlafaxine", "Levothyroxine", "Alendronic acid", "Buspirone"],
        correctAnswer: "Alendronic acid",
    },
    {
        subject: "pregnancyBp",
        question: "Which of the following drugs is used as a first-line treatment for hypertension in pregnancy?",
        choices: ["Labetolol", "Felodipine", "Captopril", "Valsartan", "Indapamide"],
        correctAnswer: "Labetolol",
    },
    {
        subject: "brandSwitching",
        question: "Which of the following drugs is brand-specific (patients should not change brands)?",
        choices: ["Azathioprine", "Ciclosporin", "Prednisolone", "Dexamethasone", "Sirolimus"],
        correctAnswer: "Ciclosporin",
    },
    {
        subject: "firstLineLaxativePregnancy",
        question: "Which of the following drugs is used as a first-line treatment for constipation in pregnancy?",
        choices: ["Macrogols", "Glycerin Suppositories", "Bisacodyl", "Senna", "Bulk-forming laxative"],
        correctAnswer: "Bulk-forming laxative",
    },
    {
        subject: "obeseBmi",
        question: "Obesity is generally classed as a BMI of over...",
        choices: ["20", "25", "30", "35", "40"],
        correctAnswer: "30",
    },
    {
        subject: "howMirtazapineTaken",
        question: "How should Mirtazapine be taken?",
        choices: ["Before food", "At night", "In the morning", "After food", "With food"],
        correctAnswer: "At night",
    },
    {
        subject: "doseAntipsychoticElderly",
        question: "What dose adjustment is generally done when initializing an elderly patient on an antipsychotic?",
        choices: ["Double the dose", "Half the dose", "Quarter the dose", "None, keep the dose the same", "Base the dose adjustment on the patient's weight"],
        correctAnswer: "Half the dose",
    },
    {
        subject: "antipsychoticMonitoring",
        question: "What monitoring would a patient taking an antipsychotic need?",
        choices: ["Full blood count", "Urea and electrolytes", "Liver function test", "Fasting blood glucose", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        subject: "antibioticLymeDisease",
        question: "Which of the following drugs would be most appropriate to treat lyme disease?",
        choices: ["Erythromycin", "Trimethoprim", "Doxycycline", "Metronidazole", "Flucloxacillin"],
        correctAnswer: "Doxycycline",
    },
    {
        subject: "interactTetracyclines",
        question: "Which of the following drugs interacts with tetracyclines?",
        choices: ["Calcium carbonate", "Amlodipine", "Edoxaban", "Memantine", "Theophyline"],
        correctAnswer: "Calcium carbonate",
    },
    {
        subject: "whichNotUsedTuberculosis",
        question: "Which of the following drugs would NOT be used to treat tuberculosis?",
        choices: ["Isoniazid", "Rifampicin", "Pyrazinamide", "Cefuroxime", "Ethambutol"],
        correctAnswer: "Cefuroxime",
    },
    {
        subject: "stressIncontincenceWomen",
        question: "Which of the following drugs is licensed for moderate-severe stress incontincence in women?",
        choices: ["Tolterodine", "Duloxetine", "Flavoxate", "Trospium", "Mirabegron"],
        correctAnswer: "Duloxetine",
    },
    {
        subject: "nocturnalEnuresisChildren",
        question: "Which of the following drugs would be used for nocturnal enuresis in children?",
        choices: ["Solifenacin", "Fesoterodine", "Desmopressin", "Oxybutinin", "Alfuzosin"],
        correctAnswer: "Desmopressin",
    },
    {
        subject: "riskFactorCombinedOralContraceptive",
        question: "Which of these is a risk factor for a patient taking a combined oral contraceptive?",
        choices: ["BMI of 28", "Blood presssure of 137/86", "33 years old", "5 cigarrettes a day", "4 units of alcohol a week"],
        correctAnswer: "5 cigarrettes a day",
    },
    {
        subject: "induceLabour",
        question: "Which of the following drugs would be used to induce labour?",
        choices: ["Gemeprost", "Mifepristone", "Oxytocin", "Ulipristal", "Misoprostol"],
        correctAnswer: "Misoprostol",
    },
    {
        subject: "stimulantLaxative",
        question: "Which of the following drugs is a stimulant laxative?",
        choices: ["Sodium picosulfate", "Lactulose", "Macrogols", "Simeticone", "Ispaghula husk"],
        correctAnswer: "Sodium picosulfate",
    },
    {
        subject: "maxDoseLoperamide",
        question: "What is the maximum licensed daily dose of Loperamide?",
        choices: ["12mg", "16mg", "8mg", "32mg", "40mg"],
        correctAnswer: "16mg",
    },
    {
        subject: "bowelClearanceSurgery",
        question: "Which of the following drugs would be used for bowel clearance before surgery?",
        choices: ["Soldium Picosulfate", "Senna", "Bisacodyl", "Co-danthramer", "Lactulose"],
        correctAnswer: "Bisacodyl",
    },
    {
        subject: "sideEffectsAmiodarone",
        question: "Which of these is NOT a common side effect of Amiodarone?",
        choices: ["Hepatotoxicity", "Hyperthyroidism", "Pulmonary toxicity", "Pancreatitis", "Skin reactions"],
        correctAnswer: "Pancreatitis",
    },
    {
        subject: "signsDigoxinToxicity",
        question: "Which of the following is NOT a common sign of Digoxin toxicity?",
        choices: ["Nausea and vomiting", "Blurred or yellow vision", "Irregular heartbeat", "Abdominal pain", "Earache"],
        correctAnswer: "Earache",
    },
    {
        subject: "blueUrine",
        question: "Which of the following drugs cause blue urine?",
        choices: ["Co-triamterzide", "Senna", "Co-danthramer", "Nefopam", "Rifabutin"],
        correctAnswer: "Co-triamterzide",
    }
];


/////////////////
//WELCOME PAGE//
////////////////
const welcome = document.querySelector("#welcome");
const startQuiz = document.querySelector("#start-quiz");
const quiz = document.querySelector("#quiz");
//startQuiz button when clicked displays the quiz elements
startQuiz.addEventListener("click", function (event) {
    welcome.style.display = "none";
    quiz.style.display = "block";


    //////////////
    //THE TIMER//
    /////////////

    //starts the countdown timer when press start quiz
    const timer = document.querySelector("#timer");
    //30 seconds countdown
    let startTime = 29;
    //every 1 second, countdown startTime by 1
    let setCountdown = setInterval(countdown, 1000);

    //if answer correct then stop setInterval 
    function countdown() {
        if (log.textContent == "Correct" || log.textContent.match(/Incorrect/g)) {
            clearInterval(setCountdown);
        }
        //if not answered and time left in timer, countdown the the timer
        else if (startTime >= 0) {
            timer.textContent = startTime;
            console.log(startTime--);
        }
        //when timer hits 0, users can't pick an answer, they get 0 score and increment attempt counter
        else {
            nextQuestion.style.display = "block";
            for (let j = 0; j < choiceOptions.length; j++) {
                choiceOptions[j].removeAttribute("onclick");
            }
            getAttempts.textContent++;
            log.style.display = "block";
            log.style.backgroundColor = "var(--pale-pink)";
            log.textContent = "You ran out of time";
            //stops the getAttempts continue to be incremented every second
            clearInterval(setCountdown);
        }
    }
})


//////////////////
//SETS QUESTION//
/////////////////

//Variables to store the length of the question data and to randomly pick a question aacording to it's index
//push the random index into an array so we don't get the same question appearing again
const questionDataLength = questionData.length;
let randomQuestionIndex = Math.floor(Math.random() * questionDataLength);
let answeredQuestionsIndexes = [];
answeredQuestionsIndexes.push(randomQuestionIndex);

//function to choose a random question
function randomQuestion() {
    let theRandomQuestion = questionData[randomQuestionIndex];
    return theRandomQuestion;
}

//Inserts the question and choices into the HTML
function setQuestion() {

    const question = document.querySelector(".question");
    const setQuestion = question.textContent = randomQuestion().question;

    const choiceOne = document.querySelector("#choice-one");
    choiceOne.textContent = randomQuestion().choices[0];

    const choiceTwo = document.querySelector("#choice-two");
    choiceTwo.textContent = randomQuestion().choices[1];

    const choiceThree = document.querySelector("#choice-three");
    choiceThree.textContent = randomQuestion().choices[2];

    const choiceFour = document.querySelector("#choice-four");
    choiceFour.textContent = randomQuestion().choices[3];

    const choiceFive = document.querySelector("#choice-five");
    choiceFive.textContent = randomQuestion().choices[4];
};
setQuestion();


///////////////////////////////////////
//REGISTERS IF ANSWER CORRECT OR NOT//
//////////////////////////////////////

//set up the score to show how many questions got correct
//create a counter so user can see how many questions they've attempted attempted
let score = 0;
let attemptCounter = 0;
const getScore = document.querySelector(".score");
const getAttempts = document.querySelector(".attempts");
getScore.textContent = score;
getAttempts.textContent = attemptCounter;

//for loop through the choiceOptions until find the one with the answer's text content.
//then add an onclick event for this choice so when it is clicked we can log "correct"
//add onclick event to say incorrect if not
const choiceOptions = document.querySelectorAll(".choice-options");
const log = document.querySelector(".log");
const nextQuestion = document.querySelector("#next-question");

for (let i = 0; i < choiceOptions.length; i++) {
    if (choiceOptions[i].textContent == randomQuestion().correctAnswer) {
        choiceOptions[i].setAttribute("onclick", "logCorrectAnswer()");
        //This function changes the log to display correct if the user clicks on the correct answer
        //It also increases the score by 1 each time the correct answer is clicked and displays amount of questions attempted      
        function logCorrectAnswer() {
            log.style.display = "block";
            log.style.backgroundColor = "var(--light-green)";
            log.textContent = "Correct";
            getScore.textContent++;
            getAttempts.textContent++;
            //This for loop makes sure that another answer cannot be clicked after the user has already clicked and answer
            for (let j = 0; j < choiceOptions.length; j++) {
                choiceOptions[j].removeAttribute("onclick");
            }
            if (answeredQuestionsIndexes.length !== 5) {
                nextQuestion.style.display = "block";
            }
            //if answered 5 questions, console log that no more questions left (eventually say quiz over and give them their score) 
            else {
                console.log("End of Quiz");
            }
        }
    } else {
        choiceOptions[i].setAttribute("onclick", "logIncorrectAnswer()");
    }

    function logIncorrectAnswer() {
        log.style.display = "block";
        log.style.backgroundColor = "var(--pale-pink)";
        log.textContent = `Incorrect, the answer is ${randomQuestion().correctAnswer}`;
        getAttempts.textContent++;
        for (let k = 0; k < choiceOptions.length; k++) {
            choiceOptions[k].removeAttribute("onclick");
            //if not answered 5 quesitons, show next question button, otherwise console.log saying e3nd of quiz
        }
        if (answeredQuestionsIndexes.length !== 5) {
            nextQuestion.style.display = "block";
        }
        //if answered 5 questions, console log that no more questions left (eventually say quiz over and give them their score) 
        else {
            console.log("End of Quiz");
        }
    }
}


/////////////////////////
//NEXT QUESTION BUTTON//
////////////////////////

//next question button which appears after the user clicks on a choice
nextQuestion.addEventListener("click", function (event) {

    //hides next question button until press answer or run out of time
    nextQuestion.style.display = "none";
    log.style.display = "none";
    //30 seconds countdown
    startTime = 29;
    //every 1 second, countdown startTime by 1
    setCountdown = setInterval(countdown, 1000);

    //if answer correct then stop setInterval 
    function countdown() {
        if (log.textContent == "Correct" || log.textContent.match(/Incorrect/g)) {
            clearInterval(setCountdown);
        }
        //if not answered and time left in timer, countdown the the timer
        else if (startTime >= 0) {
            timer.textContent = startTime;
            console.log(startTime--);
        }
        //when timer hits 0, users can't pick an answer, they get 0 score and increment attempt counter
        else {
            log.style.display = "block";
            log.style.backgroundColor = "var(--pale-pink)"
            log.textContent = "You ran out of time";
            nextQuestion.style.display = "block";
            for (let j = 0; j < choiceOptions.length; j++) {
                choiceOptions[j].removeAttribute("onclick");
            }
            getAttempts.textContent++;
            //stops the getAttempts continue to be incremented every second
            clearInterval(setCountdown);
        }
    }

    //when click button, it fetches another random question that's different to the others
    //works by looping over an array which contains the indexes of the already answered questions and picking another random number if new random number is already in the array
    for (let x = 0; x < questionDataLength; x++) {
        randomQuestionIndex = Math.floor(Math.random() * questionDataLength);
        if (answeredQuestionsIndexes.indexOf(randomQuestionIndex) < 0) {
            answeredQuestionsIndexes.push(randomQuestionIndex);
            //function to choose a random question (same as earlier function)
            function randomQuestion() {
                let theRandomQuestion = questionData[randomQuestionIndex];
                return theRandomQuestion;
            }


            //reset log content
            log.textContent = "";
            //Inserts the question and choices into the HTML (same as earlier function)
            function setQuestion() {
                const question = document.querySelector(".question");
                const setQuestion = question.textContent = randomQuestion().question;
                const choiceOne = document.querySelector("#choice-one");
                choiceOne.textContent = randomQuestion().choices[0];
                const choiceTwo = document.querySelector("#choice-two");
                choiceTwo.textContent = randomQuestion().choices[1];
                const choiceThree = document.querySelector("#choice-three");
                choiceThree.textContent = randomQuestion().choices[2];
                const choiceFour = document.querySelector("#choice-four");
                choiceFour.textContent = randomQuestion().choices[3];
                const choiceFive = document.querySelector("#choice-five");
                choiceFive.textContent = randomQuestion().choices[4];
            };
            setQuestion();
            //for loop to mark the new question set again    
            for (let i = 0; i < choiceOptions.length; i++) {
                if (choiceOptions[i].textContent == randomQuestion().correctAnswer) {
                    choiceOptions[i].setAttribute("onclick", "logCorrectAnswer()");
                } else {
                    choiceOptions[i].setAttribute("onclick", "logIncorrectAnswer()");
                }
            }
            break;
        }
    }
})


/////////////////////
//END QUIZ BUTTION//
////////////////////

//use an end quiz button which alerts the score and if they want to end quiz or start again
const endQuiz = document.querySelector("#end-quiz");
const endAlert = document.querySelector("#end-alert");
const alert = document.querySelector(".alert")
const finalScore = document.querySelector("#final-score");
const tryAgain = document.querySelector("#try-again");
const container = document.querySelector(".container");
const scoreModifierText = document.querySelector("#score-modifier-text");


endQuiz.addEventListener("click", function (event) {
    if (confirm("This will end the quiz. Are you sure?")) {
        endAlert.style.display = "block";
        quiz.style.display = "none";

        finalScore.textContent = getScore.textContent;

        if (getScore.textContent <= 4) {
            container.style.backgroundColor = "var(--pale-pink)";
            scoreModifierText.textContent = "Sorry";
        } else if (getScore.textContent == 5 || getScore.textContent == 6) {
            container.style.backgroundColor = "var(--beige)";
            scoreModifierText.textContent = "Almost";
        } else {
            container.style.backgroundColor = "var(--light-green)";
            scoreModifierText.textContent = "Well done";
        }

        //this reloads the page when try again is pressed
        tryAgain.addEventListener("click", function (event) {
            location.reload();
            return false;
        });
    }
})