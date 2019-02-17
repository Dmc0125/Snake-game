const rez = 20;
const fRate = 5;

let w;
let wscl;
let snake, apple;

// CUSTOM FUNCTIONS

const getWidth = iw =>
  iw <= 1200 && iw > 720 ? 600 : iw <= 720 && iw > 520 ? 400 : iw <= 520 ? 300 : 800;

const toggle = bool => {
  bool ? noLoop() : loop();
};

// P5 FUNCTIONS

function setup() {
  w = getWidth(window.innerWidth);
  wscl = w / rez;

  createCanvas(w, w);
  frameRate(fRate);

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

// RESIZE CANVAS ON RESIZING WINDOW

function windowResized() {
  w = getWidth(window.innerWidth);
  wscl = w / rez;

  resizeCanvas(w, w);
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
