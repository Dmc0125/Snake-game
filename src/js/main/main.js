const startBtn = document.querySelector('#start');
const scoreHtml = document.querySelector('.score h2');
const highscoreHtml = document.querySelector('.highscore h2');
const timerHtml = document.querySelector('#timer h1');

let highscore;
let score = 0;

// timer at game start
const time = ['3', '2', '1', 'GO'];

function startGame(e) {
  e.preventDefault();

  // setup snake and adjust velocity
  snake.setup();
  snake.vel = createVector(1, 0);

  // show new score, disable start btn
  showScore();
  
  startBtn.classList.add('inactive');

  showTimer();
}

function showTimer() {
  // show timer after clicking on start before game starts
  timerHtml.innerHTML = time[0];
  timerHtml.style.display = '';

  const timer = (i = 0) => {
    timerHtml.innerText = `${time[i]}`;
    
    if (i === 4) {
      toggleGame(true);
      timerHtml.style.display = 'none';

      return;
    }

    setTimeout(() => {
      timer(++i);
    }, 1000);
  }

  timer();
}

function gameOver() {
  toggleGame(false);

  startBtn.classList.remove('inactive');

  const highscore = localStorage.getItem('highscore');

  if (highscore && score < highscore) return;

  localStorage.setItem('highscore', score);
}

function showScore() {
  // score = snake length - 3
  score = snake.pos.length - 3;

  highscore = localStorage.getItem('highscore') || score;

  // show score in html
  scoreHtml.innerText = `Score: ${score}`;
  highscoreHtml.innerText = `Highscore: ${highscore > score ? highscore : score}`;
}

startBtn.addEventListener('click', startGame);
window.addEventListener('load', () => {
  highscore = localStorage.getItem('highscore') || 0;

  highscoreHtml.innerText = `Highscore: ${highscore}`;
});
