//fourth iteration: dont lose hope. just sit with the mterial and run with it.


var viewHighScores =document.getElementById("viewHighScores");
var header = document.querySelector(".header");

var startButton=document.getElementById("startButton");
var quizHomePage= document.getElementById("quizHomePage");

var quizQuestionHeader = document.getElementById("quizQuestionHeader");
var quizQuestionsPage = document.getElementById("quizQuestionsPage");

var correct = document.getElementById("correct");
var choice1 = document.getElementById("one");
var choice2 = document.getElementById("two");
var choice3 = document.getElementById("three");
var choice4 = document.getElementById("four");
var answerResponse = document.getElementById("answerResponse");

var timer = document.getElementById("timer");

var finalScorePage = document.getElementById("finalScorePage");
var allDone = document.getElementById("allDone");
var saveButton = document.getElementById("saveButton");
var finalScoreIs = document.getElementById("finalScoreIs");
var InitialInput = document.getElementById("InitialInput");
var initials = document.getElementById("initials");


var highScoreList = document.getElementById("highScoreList");
var scoreInitials = document.getElementById("scoreInitials");
var highScorePage = document.getElementById("highScorePage");

var clearHighScore = document.getElementById("clearHighScore");
var goBackButton = document.getElementById("goBackButton");

var highscoreArray = [];

var questionIndex = 0;

var quizQuestions = [


    {
        "quizQuestionHeader": 'Commonly used data types DO NOT include:',
         "one": "1. strings",
         "two": "2. booleans",
         "three":"3. alerts",
         "four": "4. numbers",
         "correct":"3. alerts",
        
      },
      {
        "quizQuestionHeader": 'The condition in an if / else statement is enclosed within ____.',
        "one": "1. quotes",
         "two": "2. curly brackets",
         "three":"3. parentheses",
         "four": "4. square brackets",
         "correct":"3. parentheses",
        
      },
      {
        "quizQuestionHeader": 'Arrays in JavaScript can be used to store ____.',
        "one": "1. numbers and strings",
         "two": "2. other arrays",
         "three":"3. booleans",
         "four": "4. all of the above",
         "correct":"4. all of the above",
        
      },
      {
        "quizQuestionHeader":
          'String values must be enclosed within ____ when being assigned to variables.',

          "one": "1. commas",
         "two": "2. curly Brackets",
         "three":"3. quotes",
         "four": "4. parentheses",
         "correct":"3. quotes",
       
      },
      {
        "quizQuestionHeader":
          'A very useful tool used during development and debugging for printing content to the debugger is:',
          "one": "1. Javascript",
         "two": "2. terminal/bash",
         "three":"3. for loops",
         "four": "4. console.log",
         "correct":"4. console.log",
       
      },











]









function codeQuiz(){
    quizHomePage.style.display = "block";
    header.style.display = "block";
    quizQuestionsPage.style.display ="none";
    finalScorePage.style.display ="none";
    highScorePage.style.display ="none";

    var startScore = 0;
    timer.textContent = "Time left:" + startScore;;

}



function startQuiz (){
    quizHomePage.style.display ="none";
    header.style.display = "block";
    quizQuestionsPage.style.display = "block";
    finalScorePage.style.display = "none";
    highScorePage.style.display = "none";


    secondsLeft =75;

    timerInterval = setInterval(function(){
        secondsLeft--;

        timer.textContent = "Time:"+secondsLeft;
        if(secondsLeft===0|| quizQuestions.length === questionIndex){
            clearInterval(timerInterval);
            showFinalScore();
        }





    },1000)
}









  function showQuestions() {
    var q = quizQuestions[questionIndex];
  
    quizQuestionHeader.innerHTML = (q.quizQuestionHeader);
    choice1.innerHTML = q.one;
    choice1.setAttribute("data-answer", q.one);
    choice2.innerHTML = q.two;
    choice2.setAttribute("data-answer", q.two);
    choice3.innerHTML = q.three;
    choice3.setAttribute("data-answer", q.three);
    choice4.innerHTML = q.four;
    choice4.setAttribute("data-answer", q.four);
  }
      
  
  showQuestions();

choice1.addEventListener("click", function(event){
checkAnswer(event);

})
choice2.addEventListener("click", function(event){
    checkAnswer(event);
  })
  
  
choice3.addEventListener("click", function(event){
 checkAnswer(event);
})
choice4.addEventListener("click", function(event){
    checkAnswer(event);
    
    })

      












function checkAnswer(event){
    event.preventDefault();

    var answer = event.currentTarget.dataset.answer;
    var correctAnswer = null;

    if (quizQuestions[questionIndex].correct===answer){
        correctAnswer= answer;
    }
    if(answer ===correctAnswer){
        answerResponse.textContent = "correct!"
    }else{
        answerResponse.textContent = "incorrect!";
        secondsLeft -=10
        if (secondsLeft <0){
            secondsLeft = 0;
        }
    }if (quizQuestions.length===questionIndex+1){
        showFinalScore();
        timer.innerText = "time:" + secondsLeft;
        return;
    }
    questionIndex++;
    showQuestions();
}





function showFinalScore(){
    quizHomePage.style.display ="none";
    quizQuestionsPage.style.display ="none";
    finalScorePage.style.display ="block";
    finalScoreIs.style.display ="block";
    initials.style.display ="block";
    saveButton.style.display ="block";
    InitialInput.style.display ="block";
    highScorePage.style.display ="none";

    finalScoreIs.textContent = "your final score is"+secondsLeft;
    saveButton.textContent = "Save";
    initials.textContent = "enter your initials:";

    var savedInitials = document.getElementById("initialsInput").value;
    var highscoreArray = JSON.parse(localStorage.getItem("highScore")) || [];
    var localStorageArray = {score: secondsLeft,initials: savedInitials};
    highscoreArray.push(localStorageArray)
    localStorage.setItem("highScore", JSON.stringify(highscoreArray));
    var listItemEl = document.createElement("li");
    listItemEl.innerText= savedInitials + ":"+ secondsLeft;
    listItemEl.id = "listItemE1";
    document.getElementById("highScoreList").append(listItemEl);

}
function resetVariable(){
    questionIndex=0;
}
startButton.addEventListener("click", function(){
    startQuiz()


})
saveButton.addEventListener("click", function(){
    showHighScores();
    header.style.display= "none";
    quizQuestionsPage.style.display = "none";
    finalScorePage.style.display = "none";
    highScorePage.style.display = "block";
    clearInterval(timerInterval);





})
 goBackButton.addEventListener("click", function (){
    document.getElementById("InitialInput").value=("")
    resetVariables()
    codeQuiz();



 })
 

 clearHighScore.addEventListener("click", function() {
    localStorage.clear();
    resetVariables();
    highScoreList.innerHTML = "";
  })

 
 viewHighScores.addEventListener("click", function(){
    header.style.display = "none";
    quizHomePage.style.display ="none";
    quizQuestionsPage.style.display = "none";
    finalScorePage.style.display = "none";
    highScorePage.style.display = "block";

    showHighScores();

 })

 codeQuiz();







