const player = new Image();
player.src = "1.jpg";

class Disk {
  constructor() {
    this.x = 200; //position of
    this.y = 10; //character
    this.vy = 0; //used for jumping method
    this.width = 30; //size of
    this.height = 40; //character
    this.weight = 0.7; ////////////how heavy is the disk
  }
  update() {
    if (this.y > playground.height - this.height * 3) {
      this.y = playground.height - this.height * 3;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.vy *= 0.9; //control jumping speed
      this.y += this.vy;
    }
    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      this.vy = 0;
    }
    if (spacePressed) this.flap();
  }
  draw() {
    (ctx.fillStyle = "transparent"),
      ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(player, this.x - 1, this.y - 35, this.width, this.height);
  } //creating character
  flap() {
    this.vy -= 1.8; //how high jump
  }
}
const disk = new Disk();
