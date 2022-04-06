const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const startBtn = document.querySelector("#start");

let result = 0;
let hitPosition;
let timerId = null;
let currentTime = 59;

startBtn.addEventListener("click", startGame);

function startGame() {
  
  startBtn.classList.add("playing")
  
  function randomSquare() {
    squares.forEach((square) => {
      square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.id;
  }

  squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id == hitPosition) {
        result++;
        score.textContent = result;
        hitPosition = null;
      }
    });
  });

  function moveMole() {
    timerId = setInterval(randomSquare, 700);
  }

  moveMole();

  function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      alert(
        `Game Over 👾. Your final score is ${result} 🎊 ! Reload to play again 🎮`
      );
    }
  }

  let countDownTimerId = setInterval(countDown, 1000);
  startBtn.removeEventListener("click", startGame);
}
