const randomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const createBox = () => {
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  box.style.backgroundColor = randomColor();
  document.body.appendChild(box);
};

for (let i = 0; i < 4; i++) {
  createBox();
}

// Hover

const boxes = document.querySelectorAll(".box");

for (let box of boxes) {
  box.onmouseover = function () {
    this.style.backgroundColor = randomColor();
  };
}
