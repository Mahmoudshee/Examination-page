// Set the timer
const timer = document.getElementById('timer');
let time = 3600; // 1 hour in seconds

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimer() {
    timer.textContent = formatTime(time);
    if (time > 0) {
        time--;
    }
    else {
        clearInterval(interval);
        timer.textContent = "00:00:00";
    }
}

updateTimer();
const interval = setInterval(updateTimer, 1000);
