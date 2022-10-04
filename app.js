let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max);
guessesLeft = 3;

const minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.getElementById("guess-btn"),
  guessInput = document.getElementById("guess-input"),
  message = document.querySelector(".message"),
  container = document.querySelector(".container"),
  left = document.querySelector(".guessLeft");

minNum.textContent = min;
maxNum.textContent = max;
container.addEventListener("mousedown", (e) => {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess)) {
    setMessage("Please enter the number");
  }
  if (guess > winningNum) {
    guessesLeft -= 1;
    setMessage(`${guess} is too high! ${guessesLeft} guesses left`);
  }
  if (guess < winningNum) {
    guessesLeft -= 1;
    setMessage(`${guess} is too low! ${guessesLeft} guesses left`);
  }
  if (guess === winningNum) {
    gameOver("You won!");
    document.querySelector("body").style.backgroundColor = "#60b347";
  }

  if (guessesLeft === 0) {
    gameOver(`You lost. Correct number was ${winningNum}`);
    document.querySelector("body").style.backgroundColor = "#ce2020";
  } else {
    guessInput.value = "";
  }
});

function setMessage(msg) {
  message.textContent = msg;
}

function gameOver(msg) {
  guessInput.disabled = true;
  setMessage(msg);

  //play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
