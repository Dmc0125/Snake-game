class Snake {
  constructor() {
    this.pos = [createVector(floor(wscl / 4), floor(wscl / 2))];
    this.vel = createVector(1, 0);
  }

  grow() {
    const prevX = this.pos[this.pos.length - 1].x - this.vel.x;
    const prevY = this.pos[this.pos.length - 1].y - this.vel.y;

    this.pos.push(createVector(prevX, prevY));
  }

  move() {
    const movedHeadX = this.pos[0].x + this.vel.x;
    const movedHeadY = this.pos[0].y + this.vel.y;

    const newHead = createVector(movedHeadX, movedHeadY);

    const newBody = this.pos.slice(1).map((_, i) => {
      const prevx = this.pos[i].x;
      const prevy = this.pos[i].y;

      return createVector(prevx, prevy);
    });

    this.pos = [newHead, ...newBody];
  }

  show() {
    fill(0, 167, 0);
    noStroke();
    rect(this.pos[0].x, this.pos[0].y, 1, 1);

    for (let i = 1; i < this.pos.length; i++) {
      fill(0, 120, 0);
      noStroke();
      rect(this.pos[i].x, this.pos[i].y, 1, 1);
    }
  }

  chngDir(x, y) {
    this.vel.x = x;
    this.vel.y = y;
  }
}
