var breakDecrement = document.querySelector('.break__decrement');
breakDecrement.addEventListener('click', function () {
    controlBreakDecrement();
});

var breakIncrement = document.querySelector('.break__increment');
breakIncrement.addEventListener('click', function () {
    controlBreakIncrement();
});

var sessionDecrement = document.querySelector('.session__decrement');
sessionDecrement.addEventListener('click', function () {
    controlSessionDecrement();
});

var sessionIncrement = document.querySelector('.session__increment');
sessionIncrement.addEventListener('click', function () {
    controlSessionIncrement();
});

var buttonToggle = document.querySelector('.toggle__button');
buttonToggle.addEventListener('click', function () {
    controlTimer();
});
displayTimer();
