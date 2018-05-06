$(document).ready(function () {

    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    function buildQuiz() { }

    function showResults() { }

    //Display Quiz Right Away
    buildQuiz()

    //On submit, show results
    $('submit').on('click', showResults())

    //Time to Build Questions
    var myQUestions = [
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
        {
            question: "______ is NOT the name of someone's sibling",
            answers: {
                a: 'Ursula',
                b: 'Amy',
                c: 'Ross',
                d: 'Larry'
            },
            correctAnswer: 'd'
        },
        {
            question: "Name the Actress who plays Rachel's Sister 'Jill'",
            answers: {
                a: 'Christina Applegate',
                b: 'Tara Reid',
                c: 'Larry the Cable Guy',
                d: 'Reese Witherspoon'
            },
            correctAnswer: 'd'
        },
        {
            question: "Name the Actress who plays Rachel's Sister 'Jill'",
            answers: {
                a: 'Christina Applegate',
                b: 'Tara Reid',
                c: 'Larry the Cable Guy',
                d: 'Reese Witherspoon'
            },
            correctAnswer: 'd'
        },
        {
            question: "Why does ______, the largest friend, not simply eat the other 5?",
            answers: {
                a: 'Ross',
                b: 'Monica',
                c: 'Joey',
                d: 'Larry'
            },
            correctAnswer: 'a'
        }
    ]




})