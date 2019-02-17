const w = 800;
const rez = 20;
const wscl = 800 / rez;
const fRate = 5;

let snake, apple;

const toggle = bool => {
  bool ? noLoop() : loop();
};

function setup() {
  createCanvas(w, w);
  frameRate(fRate);

  snake = new Snake();
  snake.setup();

  apple = new Apple();
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
