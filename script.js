var timer = document.getElementById("time");
var startScreen = document.getElementById("startScreen");
var startQuiz = document.getElementById("startQuiz");
var questions = document.getElementById("questions");
var title = document.getElementById("title");
var choices = document.getElementById("choices");
var endScreen = document.getElementById("endScreen");
var submitName = document.getElementById("submitName");

var index = 0
var time = 60
var myCountdown;






//An object that holds all of the questions and answers in the quiz.
var questionsArray = [
    {
        questionTitle: "Question 1",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: "answer1",
    }, {
        questionTitle: "Question 2",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: "answer2",
    }, {
        questionTitle: "Question 3",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: "answer3",
    }, {
        questionTitle: "Question 4",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: "answer4",
    } 
    
]

//Need to add event listeners on every button



//a function that starts the quiz by removing the attribute "hidden"
function startCountDown(){
myCountdown = setInterval(function(){
    time--;
    timer.textContent = time
    if(time === 0 ){
        clearInterval(myCountdown);
    }

    
},1000)


}

function start() {
    console.log("test")
    startScreen.setAttribute("class", "hidden")
    questions.removeAttribute("class")
    
    startCountDown()
    getQuestion()
}




//a function that gets the next question in the array 
function getQuestion() {
    var currentQ = questionsArray[index];
    console.log(currentQ);
    title.textContent = currentQ.questionTitle;
    currentQ.choices.forEach(function (choice, i) {
      console.log(choice, i);
      var button = document.createElement("button");
      button.setAttribute("value", choice);
      button.textContent = choice;
      button.onclick = questionsAnswered;
      choices.appendChild(button);
    });
  }




// event listener for the buttons 
//is the button clicked correct or not
//if correct one function for correct answers
// one function for incorrect 




startQuiz.onclick = start




function questionsAnswered(){
    // var correctAnswer = questionsArray[index].correctAnswer
    // console.log(correctAnswer)
    // var userAnswer = e.target.getAttribute("data-answer")
    // console.log(userAnswer)
    

    if (this.value!== questionsArray[index].correctAnswer ){
        alert("incorrect!");
        time -=10;
        timer.textContent = time
        
        

    } else(
    alert("Correct!")
    )

    index++;

    getQuestion()


}

function endQuiz(){
    clearInterval(timer)

// }

choices.addEventListener("click", function(e){
    e.preventDefault();


    
    questionsAnswered();

    

})
}
