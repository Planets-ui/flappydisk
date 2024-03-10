const obstacleArray = [];

class Obstacle {
  constructor() {
    this.top = (Math.random() * playground.height) / 2 + 30;
    this.bottom = (Math.random() * playground.height) / 3 + 15;
    this.x = playground.width;
    this.width = 30;
    this.counted = false;
  }
  draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, 0, this.width, this.top);
    ctx.fillRect(
      this.x,
      playground.height - this.bottom,
      this.width,
      this.bottom
    );
  }
  update() {
    this.x -= gamespeed;
    if (!this.counted && this.x < disk.x) {
      score++;
      this.counted = true;
    }
    this.draw();
  }
}
/////////////for loop obstacle///////////////
function handleObstacles() {
  if (frame % 30 === 0) {
    //change the distance of obstacles
    obstacleArray.unshift(new Obstacle());
  }
  for (let i = 0; i < obstacleArray.length; i++) {
    obstacleArray[i].update();
  }
  if (obstacleArray.length > 20) {
    obstacleArray.pop(obstacleArray[0]);
  }
}
