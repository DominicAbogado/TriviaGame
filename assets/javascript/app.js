$(document).ready(function () {
})


//Create my array of questions which are objects and contain, Question, Possible Answers, and Correct Answers
var myQuestions = [
    {
        question: '______ is NOT part of the main cast',
        answers: {
            a: 'Joey',
            b: 'Rachel',
            c: 'Monica',
            d: 'Larry'
        },
        correctAnswer: 'd'
    },
    {
        question: '______ is married to Chandler',
        answers: {
            a: 'Joey',
            b: 'Rachel',
            c: 'Monica',
            d: 'Larry'
        },
        correctAnswer: 'c'
    },
]

// QUESTION FUNCTION
function submitAnswer() {
    for (; i < len; i++) {
        if (radios[i].checked) {
            checked = true;
            userAnswer = radios[i].value;
            console.log(radios[i].checked)
        }
    }
    // if user click submit button without selecting any option, alert box should be say "please select choice answer".
    if (!checked) {
        alert("please select choice answer");
        return;
    }
    // Correct answer
    if (userAnswer === "Larry") {
        alert("Answer is correct!");
    }
    // incorrect answer
    else {
        alert("Answer is wrong!");
    }
}

    // var radios = document.getElementsByName("choice");
    // var i = 0, len = radios.length;
    // var checked = false;
    // var userAnswer;

function startQuiz() {
    // for (i = 0; i < myQuestions.length; i++)
        // $('.quizPush').text(myQuestions[0].question)
        // $('.answerPush').text(myQuestions[0].answers.a)
}


startQuiz()

//Display Results




//Create function to push the questions from the question array onto the HTML

//This function should include the question as well as the choices for each. Possibly a for loop to iterate

        //TIMER FUNCTION
        var number = 100;

        var intervalId;

        $("#stop").on("click", stop);

        $("#resume").on("click", run);

        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        function decrement() {

            number--;

            $("#show-number").html("<h2>" + number + "</h2>");

            if (number === 0) {
                stop();
                alert("Time Up!");
            }
        }

        function stop() {
            clearInterval(intervalId);
        }

        run();

    // TODO




//     for (; i < len; i++) {
//         if (radios[i].checked) {
//             checked = true;
//             userAnswer = radios[i].value;
//             console.log(radios[i].checked)
//         }
//     }
//     // if user click submit button without selecting any option, alert box should be say "please select choice answer".
//     if (!checked) {
//         alert("please select choice answer");
//         return;
//     }
//     // Correct answer
//     if (userAnswer === "Larry") {
//         alert("Answer is correct!");
//     }
//     // incorrect answer
//     else {
//         alert("Answer is wrong!");
//     }
// }


// My question Arrays


//Filling in the HTML with my quiz
