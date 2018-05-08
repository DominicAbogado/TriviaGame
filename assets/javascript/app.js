$(document).ready(function () {

    var correct = 0
    var wrong = 0




    $('#startGame').click(function () {
        $('.hide').hide()


    })



    var myQuestions = [
        {
            question: '______ is NOT part of the main cast',
            answers: {
                a: 'Joey',
                b: 'Rachel',
                c: 'Monica',
                d: 'Kevin'
            },
            correctAnswer: 'd'
        },
        {
            question: '______ is married to Chandler',
            answers: {
                a: 'Joey',
                b: 'Rachel',
                c: 'Monica',
                d: 'Kevin'
            },
            correctAnswer: 'c'
        },
        {
            question: "______ is NOT the name of someone's sibling",
            answers: {
                a: 'Ursula',
                b: 'Amy',
                c: 'Ross',
                d: 'Kevin'
            },
            correctAnswer: 'd'
        },
        {
            question: "Name the Actress who plays Rachel's Sister 'Jill'",
            answers: {
                a: 'Christina Applegate',
                b: 'Tara Reid',
                c: 'Reese Witherspoon',
                d: 'Denise Richards'
            },
            correctAnswer: 'c'
        },
        {
            question: "Which of these women were NOT married to Ross",
            answers: {
                a: ' Rachel ',
                b: 'Susan',
                c: 'Carol',
                d: 'Emily'
            },
            correctAnswer: 'b'
        },
        {
            question: "______ is the name of one of Phoebe's triplets",
            answers: {
                a: 'Gary Buffay',
                b: 'Chandler Buffay',
                c: 'Alice Buffay',
                d: 'Frank Jr. Buffay'
            },
            correctAnswer: 'b'
        },
        {
            question: "Which of the follow did NOT date Chandler'",
            answers: {
                a: 'Janice',
                b: 'Susie Underpants',
                c: 'Kathy',
                d: 'Angela'
            },
            correctAnswer: 'd'
        },
        {
            question: "Why does ______, the largest friend, not simply eat the other 5?",
            answers: {
                a: 'Ross',
                b: 'Monica',
                c: 'Joey',
                d: 'Kevin'
            },
            correctAnswer: 'a'
        }

    ];

    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');



    function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

        function showQuestions(questions, quizContainer) {
            var output = [];
            var answers;

            // for each question...
            for (var i = 0; i < questions.length; i++) {

                // first reset the list of answers
                answers = [];

                // for each available answer to this question...
                for (letter in questions[i].answers) {

                    // ...add an html radio button
                    answers.push(
                        '<label>'
                        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                        + letter + ': '
                        + questions[i].answers[letter]
                        + '</label>'
                    );
                }

                // add this question and its answers to the output
                output.push(
                    '<div class="question">' + questions[i].question + '</div>'
                    + '<div class="answers">' + answers.join('') + '</div>'
                );
            }

            // finally combine our output list into one string of html and put it on the page
            quizContainer.innerHTML = output.join('');
        }


        function showResults(questions, quizContainer, resultsContainer) {
            // gather answer containers from our quiz
            var answerContainers = quizContainer.querySelectorAll('.answers');

            // keep track of user's answers
            var userAnswer = '';
            var numCorrect = 0;
            // $('.endGame').css('visibility', 'visible')
            $('.endGame').append('<p>Hello World')

            // for each question...
            for (var i = 0; i < questions.length; i++) {

                // find selected answer
                userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

                // if answer is correct
                if (userAnswer === questions[i].correctAnswer) {
                    // add to the number of correct answers
                    numCorrect++;

                    // color the answers green
                    answerContainers[i].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
                else {
                    // color the answers red
                    answerContainers[i].style.color = 'red';
                }
            }

            // show number of correct answers out of total
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;

        }

        // show the questions
        showQuestions(questions, quizContainer);

        //Timer Function
        var number = 30;

        var intervalId;
    
        //   $("#stop").on("click", stop);
    
        $("#startGame").on("click", run);
    
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }
    
        function decrement() {
    
            number--;
    
            $("#show-number").html("<h2>" + number + "</h2>");
    
            if (number === 0) {
                stop();
                alert("Time's Up!")
                showResults(questions, quizContainer, resultsContainer)
            }
        }
    
        function stop() {
            clearInterval(intervalId);
        }
    
    

        // when user clicks submit, show results
        submitButton.onclick = function () {
            showResults(questions, quizContainer, resultsContainer);
        }
    }
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


   
})


