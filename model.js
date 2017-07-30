var breakLength = 5;
var sessionLength = 25;

var timeForBreak = false;
var pause = true;
var newTimer = true;
var timer;
var seconds;

function incrementBreakLength(DOMTimer) {

    if(pause) {
        breakLength++;

        if(timeForBreak) {
            newTimer = true;
            DOMTimer.innerText = 'Break ' + breakLength;
        }
    }
}

function decrementBreakLength(DOMTimer) {

    if(pause) {
        breakLength = breakLength == 1 ? 1 : --breakLength;

        if(timeForBreak) {
            newTimer = true;
            DOMTimer.innerText = 'Break ' + breakLength;
        }
    }
}

function incrementSessionLength(DOMTimer) {

    if(pause) {
        sessionLength++;
        if(!timeForBreak) {
            newTimer = true;
            DOMTimer.innerText = 'Session ' + sessionLength;
        }
    }
}

function decrementSessionLength(DOMTimer) {

    if(pause) {
        sessionLength = sessionLength == 1 ? 1 : --sessionLength;
        if(!timeForBreak) {
            newTimer = true;
            DOMTimer.innerText = 'Session ' + sessionLength;
        }
    }
}

//start break after session
//start session after break
function startTimer(DOMTimer) {

    if(newTimer) {
        seconds = timeForBreak ? getSeconds(breakLength) : getSeconds(sessionLength);
    } else {
        if(!pause) {
            seconds = timeForBreak ? getSeconds(breakLength) : getSeconds(sessionLength);

        }
    }

    pause = false;
    DOMTimer.innerText = (timeForBreak ? 'Break ' : 'Session ') + displayTime(seconds);
    timer = setInterval(function () {
        seconds--;
        DOMTimer.innerText = (timeForBreak ? 'Break ' : 'Session ') + displayTime(seconds);

        if(seconds == 0) {
            clearInterval(timer);
            timeForBreak = !timeForBreak;

            setTimeout(function () {
                startTimer(DOMTimer);
            }, 1000);
        }

    }, 1000);
}

function pauseTimer() {
    if(timer) {
        pause = true;
        newTimer = false;
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
