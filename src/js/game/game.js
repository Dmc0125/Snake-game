// scale rate and frame rate
const rez = 20;
const fRate = 5;

// canvas width, scaled width
let w;
let wscl;

let snake, apple;

// canvas element
let cvEl;
let cv;

// CUSTOM FUNCTIONS

// get screen width
const getWidth = w => (w <= 720 && w > 520 ? 400 : w <= 520 ? 300 : 600);

// toggle game loop
const toggleGame = bool => {
  bool ? loop() : noLoop();
};

// change snake dir
const changeSnakeDir = key => {
  console.log(key);

  switch (key) {
    case 38:
      if (
        snake.pos[1].x === snake.pos[0].x - snake.vel.x &&
        snake.pos[1].y === snake.pos[0].y - 1
      ) {
        break;
      }
      snake.chngDir(0, -1);
      break;
    case 40:
      if (
        snake.pos[1].x === snake.pos[0].x - snake.vel.x &&
        snake.pos[1].y === snake.pos[0].y + 1
      ) {
        break;
      }
      snake.chngDir(0, 1);
      break;
    case 37:
      if (
        snake.pos[1].x === snake.pos[0].x - 1 &&
        snake.pos[1].y === snake.pos[0].y - snake.vel.y
      ) {
        break;
      }
      snake.chngDir(-1, 0);
      break;
    case 39:
      if (
        snake.pos[1].x === snake.pos[0].x + 1 &&
        snake.pos[1].y === snake.pos[0].y - snake.vel.y
      ) {
        break;
      }
      snake.chngDir(1, 0);
      break;
  }
};

// P5 FUNCTIONS
function setup() {
  w = getWidth(window.innerWidth);
  wscl = w / rez;

  // create canvas and append it to #cnv
  cvEl = document.querySelector('#cnv');
  cv = createCanvas(w, w);
  cvEl.appendChild(cv.elt);

  // set framerate
  frameRate(fRate);

  // setup main game elements
  snake = new Snake();
  snake.setup();

  apple = new Apple();

  // add event listener to canvas
  cvCoords = document.querySelector('canvas').getBoundingClientRect();

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
  changeSnakeDir(keyCode);
}

// CHANGE SNAKE DIR ON SWIPE ON MOBILE
