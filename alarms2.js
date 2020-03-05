$(document)
    .ready(function() {
        timeOffset2 = 0;
        // Create a timer object to be able to do set times
        var timer = $.timer(function() {
            timeOffset2 -= 1000;
            updateTime2(timeOffset2);
            if (timeOffset2 == 0) {
                stopTimer();
            }
        }, 1000);
        function stopTimer() {
            document.getElementById("helloThere")
                .play();
            timer.stop();
        }
        $('#pairAlarm')
            .submit(function() {
                // First we grab the number of miliseconds that we want delayed
                second = parseInt($("input[name=second2]")
                    .val()) || 0;
                minute = parseInt($("input[name=minute2]")
                    .val()) || 0;
                hour = parseInt($("input[name=hour2]")
                    .val()) || 0;
                timeOffset2 = getMilliseconds2(hour, minute, second);
                updateTime2(timeOffset2)
                timer.stop();
                timer.play();
                // Return false needed to stop page from reloading
                return false;
            });
        $('#timeRemaining2')
            .html("Pair Partner Timer")
    });
function updateTime2(wantedTime) {
    // Decompose Time
    wantedTime /= 1000;
    seconds = Math.floor((wantedTime) % 60);
    minutes = Math.floor((wantedTime / 60) % 60);
    hours = Math.floor(wantedTime / 3600);
    $('#timeRemaining2')
        .html(hours + "h" + minutes + "m" + seconds + "s");
}
function getMilliseconds2(h, m, s) {
    h *= 3600000;
    m *= 60000;
    s *= 1000;
    return h + m + s;
}
