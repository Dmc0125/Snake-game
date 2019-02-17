const startBtn = document.querySelector('main button');
const scoreHtml = document.querySelector('aside h2');
const timerHtml = document.querySelector('#timer h1');

let score = 0;
let time = 3;

function startGame(e) {
  e.preventDefault();

  snake.setup();
  snake.vel = createVector(1, 0);

  startBtn.style.display = 'none';

  showTimer();
}

function showTimer() {
  timerHtml.innerHTML = time;
  timerHtml.style.display = '';

  const timer = setInterval(() => {
    timerHtml.innerHTML = `${--time}`;
  }, 1000);

  setTimeout(() => {
    toggleGame(true);

    clearInterval(timer);
    timerHtml.style.display = 'none';
    time = 3;
  }, 3000);
}

function gameOver() {
  toggleGame(false);

  startBtn.style.display = '';
}

function showScore() {
  scoreHtml.innerText = `Score: ${++score}`;
}

startBtn.addEventListener('click', startGame);
