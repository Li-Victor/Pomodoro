var breakLength = 1;
var sessionLength = 2;

var timeForBreak = false;
var pause = false;
var timer;
var seconds;

function incrementBreakLength() {
    if(pause) {
        breakLength++;
        pause = false;
    }

}

function incrementSessionLength() {
    if(pause) {
        sessionLength++;
        pause = false;
    }
}

function decrementBreakLength() {
    if(pause) {
        breakLength = breakLength == 1 ? 1 : breakLength--;
        pause = false;

    }
}

function decrementSessionLength() {
    if(pause) {
        sessionLength = sessionLength == 1 ? 1 : sessionLength--;
        pause = false;
    }
}

//start break after session
//start session after break
function startTimer() {

    if(!pause) {
        //seconds = timeForBreak ? getSeconds(breakLength) : getSeconds(sessionLength);
        seconds = timeForBreak ? 10 : 15;
    }
    console.log(displayTime(seconds));
    timer = setInterval(function () {
        seconds--;
        console.log(displayTime(seconds));
        if(seconds == 0) {
            clearInterval(timer);
            timeForBreak = !timeForBreak;
            pause = false;
            startTimer();
        }
    }, 1000);
}

function pauseTimer() {
    if(timer) {
        pause = true;
        clearInterval(timer);
    }
}


function displayTime(secondsToShow) {
    var minutes = 60;
    var hours = 60 * minutes;

    var hoursDisplay = Math.floor(secondsToShow / hours);
    var minutesDisplay = Math.floor( (secondsToShow - (hoursDisplay * hours)) / minutes);
    var secondsDisplay = Math.floor(secondsToShow - (hoursDisplay * hours) - (minutesDisplay * minutes));

    if(hoursDisplay != 0) {
        return hoursDisplay + ':' + (minutesDisplay < 10 ? '0' + minutesDisplay : minutesDisplay) + ':' + (secondsDisplay < 10 ? '0' + secondsDisplay : secondsDisplay);
    } else {
        return minutesDisplay + ':' + (secondsDisplay < 10 ? '0' + secondsDisplay : secondsDisplay);
    }
}

function getSeconds(minutes) {
    return minutes * 60;
}
