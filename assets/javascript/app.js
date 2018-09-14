
$(document).ready(function () {

    var clockCount = 30;
    var interval;
    var $clock = $("#clock");
    var $qDiv = $("#question-div");

    function run() {
        $($clock).text(clockCount);
        interval = setInterval(decrement, 1000);
    }

    function decrement() {
        clockCount--;
        $($clock).text(clockCount);
        if (clockCount === 0) {
            submit();
        }
    }

    function submit() {
        clearInterval(interval);
        var score = 0;
        for (i = 1; i <= 10; i++) {
            if ($("#a" + i).is(":checked")) {
                score++;
            }
        }
        $qDiv.hide();
        $("#result-text").text("You got " + score + " out of 10 correct!");
        var restartBtn = $("<button><h4>Restart</h4></button>");
        restartBtn.on("click", function () {
            location.reload();
        })
        $("#restart-div").append(restartBtn);
    }

    $("#start-btn").on("click", function () {
        $("#start-btn").hide();
        $qDiv.show();
        run();
    });

    $("#submit-btn").on("click", function () {
        submit();
    });

});