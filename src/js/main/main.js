const startBtn = document.querySelector('#start');
const scoreHtml = document.querySelector('.score h2');
const highscoreHtml = document.querySelector('.highscore h2');
const timerHtml = document.querySelector('#timer h1');

// games counter
let game = -1;

// array of all scores
const score = [];

// timer at game start
const time = ['3', '2', '1', 'GO'];

function startGame(e) {
  e.preventDefault();

  game++;

  // stup snake and adjsut velocity
  snake.setup();
  snake.vel = createVector(1, 0);

  // push init snake length which is 0
  score.push(snake.pos.length - 3);

  // show new score, disable start btn
  scoreHtml.innerText = `Score: ${score[game]}`;
  startBtn.classList.add('inactive');

  showTimer();
}

function showTimer() {
  // show timer after clicking on start before game starts
  timerHtml.innerHTML = time[0];
  timerHtml.style.display = '';

  let i = 0;

  const timer = setInterval(() => {
    timerHtml.innerHTML = `${time[++i]}`;
  }, 1000);

  setTimeout(() => {
    // start game after 4 secs
    toggleGame(true);

    clearInterval(timer);

    // hide timer
    timerHtml.style.display = 'none';
  }, 4000);
}

function gameOver() {
  toggleGame(false);

  startBtn.classList.remove('inactive');
}

function showScore() {
  // score = snake length - 3
  score[game] = snake.pos.length - 3;

  // show score in html
  scoreHtml.innerText = `Score: ${score[game]}`;
  highscoreHtml.innerText = `Highscore: ${Math.max(...score)}`;
}

startBtn.addEventListener('click', startGame);
