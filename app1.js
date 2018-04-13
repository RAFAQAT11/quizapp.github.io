var questions = [
    {

        "question": "How to create alert box?",
        "option1": "alert='hello world'",
        "option2": "aler('hello world')",
        "option3": "alert.('hello world')",
        "option4": "alert('hello world')",
        "answer": "4"
    },
    {

        "question": "How to create variable?",
        "option1": "variable name = 'ali'",
        "option2": "var name = 'ali'",
        "option3": "variable: 'ali'",
        "option4": "variable. 'ali'",
        "answer": "2"
    },
    {

        "question": "How to create function?",
        "option1": "Function(){}",
        "option2": "function.create()",
        "option3": "function(){}",
        "option4": "function{}",
        "answer": "3"
    },
    {

        "question": "How to push value in array?",
        "option1": "arr.push(value)",
        "option2": "arr.push.value",
        "option3": "arr.(value)",
        "option4": "arr.value.push(value)",
        "answer": "1"
    },
    {

        "question": "What is javascript",
        "option1": "programming language",
        "option2": "scripting language",
        "option3": "codding language",
        "option4": "web language",
        "answer": "2"
    }

];

var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

question.innerHTML = questions[0].question;
option1.innerHTML = questions[0].option1;
option2.innerHTML = questions[0].option2;
option3.innerHTML = questions[0].option3;
option4.innerHTML = questions[0].option4;

var load = 0;
var correct = 0;
var timer;
var min=0;
var sec =60;
var score;
function next() {
    var val = document.querySelector("input[name='option']:checked");
    if (val === null)
        alert("select an option please");
    else {
        if (questions[load].answer === val.value) {
            console.log("right");
            correct++;
        }
        else
            console.log("wrong!");
        
        if (questions.length - 1 === load) {
            score = correct*20;
            document.getElementById("quizContainer").style.display = "none";
            document.getElementById("resultContainer").style.display = "block";
            document.getElementById("score").innerHTML = "Your score is "+score+"%";
            clearInterval(timer);
            if(score >50){
                document.getElementById("pf").style.display="block";
                document.querySelector('#pf').innerHTML='Congratulation, Success is the fruit of failure!'
            }
            
            else{
                document.getElementById("pf").style.display="block";
                document.querySelector('#pf').innerHTML='Congratulation, failures are the pillers to success!'
            }
            
        }   
        load++; 
        question.innerHTML = questions[load].question;
        option1.innerHTML = questions[load].option1;
        option2.innerHTML = questions[load].option2;
        option3.innerHTML = questions[load].option3;
        option4.innerHTML = questions[load].option4;
    }
}


function timer(){
        timer=setInterval(function(){
        if(sec==0){
            clearInterval(timer);
            document.getElementById("pf").style.display="block";
                document.querySelector('#pf').innerHTML='Congratulation, failures are the pillers to success!'
        }
        
        else
        sec--;
        document.querySelector('#timer').innerHTML="0"+min+":"+sec;
    },1000);
    
}