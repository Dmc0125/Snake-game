const w =
  window.innerWidth <= 1200 && window.innerWidth > 720
    ? 600
    : window.innerWidth <= 720 && window.innerWidth > 520
    ? 400
    : window.innerWidth <= 520
    ? 300
    : 800;
const rez = 20;
const wscl = w / rez;
const fRate = 5;

let snake, apple;

const toggle = bool => {
  bool ? noLoop() : loop();
};

function setup() {
  createCanvas(w, w);
  frameRate(fRate);

  console.log(window.innerWidth, wscl);

  snake = new Snake();
  snake.setup();

  apple = new Apple();

  // const cnv = document.querySelector('canvas');

  // cnv.addEventListener('mousedown', e => alert(e));
}

function draw() {
  scale(rez);
  background(0);

  snake.show();
  snake.move();

  apple.show();

  if (snake.pos[0].x === apple.pos.x && snake.pos[0].y === apple.pos.y) {
    apple.respawn();
    snake.grow();
  }

  if (snake.collision()) {
    toggle(true);
    console.log('Game over!');
  }
}

// RESIZE CANVSA ON RESIZING WINDOW

function windowResized() {
  window.innerWidth <= 1200 && window.innerWidth > 720
    ? resizeCanvas(600, 600)
    : window.innerWidth <= 720 && window.innerWidth > 520
    ? resizeCanvas(400, 400)
    : window.innerWidth <= 520
    ? resizeCanvas(300, 300)
    : resizeCanvas(800, 800);
}

// CHANGE SNAKE DIR ON ARROW PRESSED

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      snake.chngDir(0, -1);
      break;
    case DOWN_ARROW:
      snake.chngDir(0, 1);
      break;
    case LEFT_ARROW:
      snake.chngDir(-1, 0);
      break;
    case RIGHT_ARROW:
      snake.chngDir(1, 0);
      break;
  }
}

// CHANGE SNAKE DIR ON SWIPE ON MOBILE
