const playground = document.querySelector(".playground");
const ctx = playground.getContext("2d");
playground.width = 600;
playground.height = 500;
let spacePressed = false;
let frame = 0; //count of animation loop
let score = 0;
let gamespeed = 0;

/////////////////////////Background Image/////////////////////////////
const background = new Image();
background.src = "body.png";

const bg = 0;
function handlebackground() {
  if (bg <= bg.width) bg = bg.width;
  else this.bg -= gamespeed;
}
//////////////////////////////////////////////////////////////////////

function animate() {
  ctx.clearRect(0, 0, playground.width, playground.height);

  handlebackground();
  disk.update();
  disk.draw();
  handleObstacles();
  ctx.fillStyle = "black"; //////////////////////////////
  ctx.font = "90px georgia"; ///////////////////////////
  ctx.fillText(score, 450, 70); /////////////////score system///////////////
  handleCollision();
  if (handleCollision()) return;
  requestAnimationFrame(animate);
  frame++; //add obstacle
}
animate();

//////////////////////event listener for space///////////////
window.addEventListener("keydown", (e) => {
  if (e.code === "Space") spacePressed = true;
});
window.addEventListener("keyup", (e) => {
  if (e.code === "Space") spacePressed = false;
});
/////////////////////////////////////////////////////////////
window.addEventListener("mousedown", (e) => {
  spacePressed = true;
});
window.addEventListener("mouseup", (e) => {
  spacePressed = false;
});
////////////////////event listener to resume the game/////////////////////
window.addEventListener("keydown", (e) => {
  if (button.style.display == "none") {
    if (e.key === "Enter") {
      gamespeed = 2;
    } else gamespeed != 0;
  }
});

//////////////////////collision///////////////

const hit = new Image();
hit.src = "effect.png";
function handleCollision() {
  for (let i = 0; i < obstacleArray.length; i++) {
    if (
      disk.x < obstacleArray[i].x + obstacleArray[i].width &&
      disk.x + disk.width > obstacleArray[i].x &&
      ((disk.y < 0 + obstacleArray[i].top && disk.y + disk.height > 0) ||
        (disk.y > playground.height - obstacleArray[i].bottom &&
          disk.y + disk.height < playground.height))
    ) {
      //collision detected
      ctx.drawImage(hit, disk.x, disk.y, 40, 20);
      ctx.font = "40px Georgia";
      (ctx.fillStyle = "crimson"),
        ctx.fillText("Game over", 225, playground.height / 2 - 10);

      return true;
    }
  }
}

///////////////tutorial button///////////////////////////////
const btn = document.querySelector(".tutor");
const popup = document.querySelector(".popup-wrapper");
const cl = document.querySelector(".popup-close");

btn.addEventListener("click", () => {
  popup.style.display = "block";
  console.log("hasd");
  button.style.display = "none";
});

cl.addEventListener("click", () => {
  popup.style.display = "none";
  button.style.display = "block";
});

function playmusic() {
  let audio = new Audio("super.mp3");
  audio.play();
}

const button = document.querySelector(".bt");

// Add event listener to the button
button.addEventListener("click", function () {
  button.style.display = "none";
  gamespeed = 2;
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") gamespeed = 0;
});
