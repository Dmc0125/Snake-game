// scale rate and frame rate
const rez = 20;
const fRate = 5;

// canvas width, scaled width
let w;
let wscl;

let snake, apple;

// CUSTOM FUNCTIONS

// get screnn width
const getWidth = w => w <= 720 && w > 520 ? 400 : w <= 520 ? 300 : 600;

// toggle game loop
const toggleGame = bool => {
  bool ? loop() : noLoop();
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

  noLoop();
}

function draw() {
  scale(rez);
  background(0);

  snake.show();
  snake.move();

  apple.show();

  // EATS APPLE
  if (snake.pos[0].x === apple.pos.x && snake.pos[0].y === apple.pos.y) {
    apple.pos = apple.respawn();
    snake.grow();
    showScore();
  }

  if (snake.collision()) {
    gameOver();
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
      if (
        snake.pos[1].x === snake.pos[0].x - snake.vel.x &&
        snake.pos[1].y === snake.pos[0].y - 1
      ) {
        break;
      }
      snake.chngDir(0, -1);
      break;
    case DOWN_ARROW:
      if (
        snake.pos[1].x === snake.pos[0].x - snake.vel.x &&
        snake.pos[1].y === snake.pos[0].y + 1
      ) {
        break;
      }
      snake.chngDir(0, 1);
      break;
    case LEFT_ARROW:
      if (
        snake.pos[1].x === snake.pos[0].x - 1 &&
        snake.pos[1].y === snake.pos[0].y - snake.vel.y
      ) {
        break;
      }
      snake.chngDir(-1, 0);
      break;
    case RIGHT_ARROW:
      if (
        snake.pos[1].x === snake.pos[0].x + 1 &&
        snake.pos[1].y === snake.pos[0].y - snake.vel.y
      ) {
        break;
      }
      snake.chngDir(1, 0);
      break;
  }
}

// CHANGE SNAKE DIR ON SWIPE ON MOBILE
