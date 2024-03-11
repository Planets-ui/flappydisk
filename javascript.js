//event listener in login form
const login = document.querySelector(".login");
login.addEventListener("mousemove", (e) => {
  console.log(e.pageX, e.pageY);
});

//username in login form
function enter() {
  let player = document.querySelector(".username").value;
  if (player == "Flappy Disk") {
    window.location.assign("body.html");
    alert("NICEEE");
  } else {
    alert("ENTER: 'Flappy Disk'");
    return;
  }
}
