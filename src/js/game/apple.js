class Apple {
  constructor() {
    this.pos = this.respawn();
  }

  show() {
    fill(255, 9, 9);
    rect(this.pos.x, this.pos.y, 1, 1);
  }

  respawn() {
    const newPos = () => createVector(floor(random(wscl)), floor(random(wscl)));

    let pos = newPos();

    while (snake.pos.findIndex(({ x, y }) => x === pos.x && y === pos.y) > -1) {
      pos = newPos();
    }

    return pos;
  }
}
