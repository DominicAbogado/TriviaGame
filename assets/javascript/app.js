$(document).ready(function () {
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
});

    //QUESTIN FUNCTION
    function submitAnswer() {
        var radios = document.getElementsByName("choice");
        var i = 0, len = radios.length;
        var checked = false;
        var userAnswer;
        
        for( ; i < len; i++ ) {
           if(radios[i].checked) {
             checked = true;
             userAnswer = radios[i].value;
             console.log(radios[i].checked)
           }
        } 
        // if user click submit button without selecting any option, alert box should be say "please select choice answer".
        if(!checked) {
          alert("please select choice answer");
          return;
        }
        // Correct answer
        if(userAnswer === "Larry") {
           alert("Answer is correct!");
        }
        // incorrect answer
        else {
           alert("Answer is wrong!");
        }
    }
        