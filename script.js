// Variables to track time
var ms = 0, s = 0, m = 0, h = 0;
var timer;

// Arrays to store lap times
var lapTimes = [];

// Elements
var display = document.querySelector(".timer-Display");
var lapList = document.querySelector(".laps");

// Start the timer
function start() {
    if (!timer) {
        timer = setInterval(run, 10);
    }
}

// Run the timer
function run() {
    display.innerHTML = getTimer();
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
    if (h == 24) {
        h = 1;
    }
}

// Get formatted timer string
function getTimer() {
    return (h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s) + " : " + (ms < 10 ? "0" + ms : ms);
}

// Pause the timer
function pause() {
    stopTimer();
}

// Stop the timer
function stopTimer() {
    clearInterval(timer);
    timer = null;
}

// Record lap time
function lap() {
    if (timer) {
        lapTimes.push(getTimer());
        updateLapDisplay();
    }
}

// Update the lap time display
function updateLapDisplay() {
    lapList.innerHTML = ""; // Clear the existing lap times
    lapTimes.forEach(function (lapTime, index) {
        var lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    });
}

// Reset the timer and lap times
function reset() {
    stopTimer();
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    display.innerHTML = getTimer();
    lapTimes = [];
    updateLapDisplay();
}

// Reset lap times
function resetLap() {
    lapTimes = [];
    updateLapDisplay();
}
