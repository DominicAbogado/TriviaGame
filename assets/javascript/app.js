$(document).ready(function () {

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