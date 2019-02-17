const w = 800;
const rez = 20;
const wscl = 800 / rez;

let snake;

function setup() {
  createCanvas(w, w);
  frameRate(5);

  snake = new Snake();
}

function draw() {
  scale(rez);
  background(0);

  snake.show();
  snake.move();
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
