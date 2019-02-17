class Apple {
  constructor() {
    this.pos = createVector(floor(random(wscl)), floor(random(wscl)));
  }

  show() {
    fill(255, 9, 9);
    rect(this.pos.x, this.pos.y, 1, 1);
  }

  respawn() {
    this.pos = createVector(floor(random(wscl)), floor(random(wscl)));
  }
}
