function displayTimer() {
    var timer = document.querySelector('.timer');
    if(timeForBreak) timer.innerText = 'Break ' + breakLength;
    else timer.innerText = 'Session ' + sessionLength;
}

function displayBreak() {
    var p = document.querySelector('.break__p');
    p.innerText = breakLength;
}

function displaySession() {
    var p = document.querySelector('.session__p');
    p.innerText = sessionLength;
}

function controlBreakDecrement() {
    decrementBreakLength(document.querySelector('.timer'));
    displayBreak();
}

function controlBreakIncrement() {
    incrementBreakLength(document.querySelector('.timer'));
    displayBreak();
}

function controlSessionIncrement() {
    incrementSessionLength(document.querySelector('.timer'));
    displaySession();
}

function controlSessionDecrement() {
    decrementSessionLength(document.querySelector('.timer'));
    displaySession();
}

var toggle = false;
var buttonToggle = document.querySelector('.toggle__button');
function controlTimer() {
    if(!toggle) {
        startTimer(document.querySelector('.timer'));
        buttonToggle.innerText = 'STOP';
    } else {
        pauseTimer();
        buttonToggle.innerText = 'START';

    }
    toggle = !toggle;
}
