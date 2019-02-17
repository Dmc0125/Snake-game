class Snake {
  constructor() {
    this.pos = [createVector(floor(wscl / 4), floor(wscl / 2))];
    this.vel = createVector(1, 0);
  }

  move() {
    this.pos[0].add(this.vel);
  }

  show() {
    fill(0, 167, 0);
    noStroke();
    rect(this.pos[0].x, this.pos[0].y, 1, 1);
  }

  chngDir(x, y) {
    this.vel.x = x;
    this.vel.y = y;
  }
}
