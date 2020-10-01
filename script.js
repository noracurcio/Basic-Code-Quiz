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
        questionTitle: "Question 1: In javascript, a loop that cycles through an array is called a ___  loop.",
        choices: ["for", "four", "fawer", "floor"],
        correctAnswer: "for",
    }, {
        questionTitle: "Question 2: Which of these is the correct braces to use on an array?",
        choices: ["{", "[", "(", "no braces needed"],
        correctAnswer: "[",
    }, {
        questionTitle: "Question 3: What do you put at the end of a function to call it? ",
        choices: ["//", "||", "()", "??"],
        correctAnswer: "()",
    }, {
        questionTitle: "What is the best use of an object?",
        choices: ["To stylize your page", "To return a function", "To hold multiple sets of data", "I don't know"],
        correctAnswer: "To hold multiple sets of data",
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
        alert("Sorry, you're out of time.")
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
    choices.innerHTML = "";
    currentQ.choices.forEach(function (choice, i) {
      console.log(choice, i);
      var button = document.createElement("button");
      button.setAttribute("value", choice);
      button.textContent = choice;
      button.onclick = questionsAnswered;
      choices.appendChild(button);
    });
  }


//Sets off the series of functions and the timer
startQuiz.onclick = start


function questionsAnswered(){


    if (this.value!== questionsArray[index].correctAnswer ){
        alert("incorrect!");
        time -=10;
        timer.textContent = time
        
    } else(
        alert("Correct!")
        )
        index++
        getQuestion()
        
}

// function endQuiz(){
//     if(myCountdown === 0 || index === 4){
//         choices.innerHTML = "";
//         endScreen.removeAttribute("class", "hidden")
//     }
// }



