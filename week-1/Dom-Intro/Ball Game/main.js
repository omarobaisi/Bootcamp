// Change playing field color
const playingField = document.getElementById("playing-field");
playingField.style.backgroundColor = "blue";

// Change down button color
const down = document.getElementById("down");
down.innerHTML = "Down";

// Change ball color
const ball = document.getElementById("ball");
ball.style.backgroundColor = "yellow";

// Add a header
const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
document.body.appendChild(header);

// Add second header
const subHeader = document.createElement("h2");
subHeader.innerHTML = "Games by: ~The Creator~";
subHeader.setAttribute("class", "subHeader");
document.body.appendChild(subHeader);

// Change color after clicking on playing field

const box = document.getElementById("box");
box.onclick = function () {
  playingField.style.backgroundColor = "#8e44ad";
  box.innerHTML = "clicked";
};

// Moving Buttons

const right = document.getElementById("right");
const left = document.getElementById("left");
const up = document.getElementById("up");

const goRight = () => {
  if (!ball.style.left || parseInt(ball.style.left) <= 390) {
    let left = parseInt(ball.style.left) || 0;
    left += 15;
    ball.style.left = left + "px";
    console.log(ball.style.left);
  }
};

const goLeft = () => {
  if (!ball.style.left || parseInt(ball.style.top) >= 15) {
    let left = parseInt(ball.style.left) || 0;
    left -= 15;
    ball.style.left = left + "px";
  }
};

const goUp = () => {
  if (!ball.style.top || parseInt(ball.style.top) >= 15) {
    let top = parseInt(ball.style.top) || 0;
    top -= 15;
    ball.style.top = top + "px";
  }
};

const goDown = () => {
  if (!ball.style.top || parseInt(ball.style.top) <= 390) {
    let top = parseInt(ball.style.top) || 0;
    top += 15;
    ball.style.top = top + "px";
    console.log(ball.style.top);
  }
};

// Button Press

right.onclick = function () {
  goRight();
};

left.onclick = function () {
  goLeft();
};

up.onclick = function () {
  goUp();
};

down.onclick = function () {
  goDown();
};

// Key Press

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    goUp();
  } else if (e.keyCode == "40") {
    goDown();
  } else if (e.keyCode == "37") {
    goLeft();
  } else if (e.keyCode == "39") {
    goRight();
  }
}

document.onkeydown = checkKey;
