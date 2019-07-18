class Snake {
  constructor() {
    this.pos;
    this.vel = createVector(1, 0);
  }

  setup() {
    this.pos = Array.from({ length: 3 }, (_, i) =>
      createVector(floor(wscl / 4 - i), floor(wscl / 2))
    );
  }

  grow() {
    const { pos } = this;
    
    const tailx = pos[pos.length - 1].x;
    const taily = pos[pos.length - 1].y;
    const prevTailx = pos[pos.length - 2].x;
    const prevTaily = pos[pos.length - 2].y;

    const subx = prevTailx - tailx;
    const suby = prevTaily - taily;

    const newx = tailx - subx;
    const newy = taily - suby;

    this.pos.push(createVector(newx, newy));
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
    fill(0, 120, 0);
    noStroke();
    rect(this.pos[0].x, this.pos[0].y, 1, 1);

    for (let i = 1; i < this.pos.length; i++) {
      fill(0, 167, 0);
      noStroke();
      rect(this.pos[i].x, this.pos[i].y, 1, 1);
    }
  }

  chngDir(x, y) {
    this.vel.x = x;
    this.vel.y = y;
  }

  collision() {
    const { x, y } = this.pos[0];

    const collided = () => x < 0 || x >= wscl || y < 0 || y >= wscl
      || (this.pos.slice(1).findIndex(p => p.x === x && p.y === y) > -1);

    return collided() ? true : false;
  }
}
