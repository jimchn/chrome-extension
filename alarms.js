$(document)
    .ready(function() {
        timeOffset = 0;
        // Create a timer object to be able to do set times
        var timer = $.timer(function() {
            timeOffset -= 1000;
            updateTime(timeOffset);
            if (timeOffset == 0) {
                stopTimer();
            }
        }, 1000);
        function stopTimer() {
            document.getElementById("tuturu")
                .play();
            timer.stop();
        }
        $('#breakAlarm')
            .submit(function() {
                // First we grab the number of miliseconds that we want delayed
                second = parseInt($("input[name=second]")
                    .val()) || 0;
                minute = parseInt($("input[name=minute]")
                    .val()) || 0;
                hour = parseInt($("input[name=hour]")
                    .val()) || 0;
                timeOffset = getMilliseconds(hour, minute, second);
                updateTime(timeOffset)
                timer.stop();
                timer.play();
                // Return false needed to stop page from reloading
                return false;
            });
        $('#timeRemaining')
            .html("Break Time Timer")
            
    });
function updateTime(wantedTime) {
    // Decompose Time
    wantedTime /= 1000;
    seconds = Math.floor((wantedTime) % 60);
    minutes = Math.floor((wantedTime / 60) % 60);
    hours = Math.floor(wantedTime / 3600);
    $('#timeRemaining')
        .html(hours + "h" + minutes + "m" + seconds + "s");
}
function getMilliseconds(h, m, s) {
    h *= 3600000;
    m *= 60000;
    s *= 1000;
    return h + m + s;
}
