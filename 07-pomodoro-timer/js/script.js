let timer;
let timeLeft = 1500;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("btn-start");

function startTimer() {
  timer = setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay();
    } else {
      timerDisplay.textContent = "Time's up!";
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

startButton.addEventListener("click", startTimer);
