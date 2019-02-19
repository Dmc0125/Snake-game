const startBtn = document.querySelector('main button');
const scoreHtml = document.querySelector('.score h2');
const highscoreHtml = document.querySelector('.highscore h2');
const timerHtml = document.querySelector('#timer h1');

let game;

let score = 0;
const highScore = [0];

const time = ['3', '2', '1', 'GO'];

function startGame(e) {
  e.preventDefault();

  game = game++ || 0;

  snake.setup();
  snake.vel = createVector(1, 0);

  score = 0;

  scoreHtml.innerText = `Score: ${score}`;
  startBtn.style.display = 'none';

  showTimer();
}

function showTimer() {
  timerHtml.innerHTML = time[0];
  timerHtml.style.display = '';

  let i = 0;

  const timer = setInterval(() => {
    timerHtml.innerHTML = `${time[++i]}`;
  }, 1000);

  setTimeout(() => {
    toggleGame(true);

    clearInterval(timer);
    timerHtml.style.display = 'none';
  }, 4000);
}

function gameOver() {
  toggleGame(false);

  highScore.push(score);
  startBtn.style.display = '';
}

function showScore() {
  ++score;
  highScore[game] = score;
  console.log(highScore);
  scoreHtml.innerText = `Score: ${score}`;
  highscoreHtml.innerText = `Highscore: ${Math.max(...highScore)}`;
}

startBtn.addEventListener('click', startGame);
