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

var questionsArray = [
    {
        questionTitle: "test question",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correctAnswer: "answer1"
    } 
]

function start() {
    console.log("test")
    startScreen.setAttribute("class", "hidden")
    questions.removeAttribute("class")
    // setInterval(timer,1000)
    timer.textContent = time
    getQuestion()
}

function timer(){
    time --
    timer.textContent = time
}

function getQuestion(){
    var currentQ = questionsArray[index]
    title.textContent = currentQ.questionTitle
    currentQ.choices.forEach(function(choice,i){
        console.log(choice,i)
        var button = document.createElement("button")
        choices.appendChild(button)
    })
}


startQuiz.onclick = start