let red = 0;
let blue = 0;
let green = 0;

const board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];

for (let i = 0; i < board.length; i++) {
  let row = document.createElement("div");
  document.body.appendChild(row);
  row.classList.add("row");

  for (let j = 0; j < board.length; j++) {
    let col = document.createElement("div");
    col.classList.add("col");
    row.append(col);
  }
}



// function to change color randomly
// data type fro 0 to 255
// get random color from r,g,b
function getRandomNumber(x) {
  const b = Math.floor(Math.random() * x);
  return b;
}

function getRandomColor() {
  const r = getRandomNumber(255);
  const g = getRandomNumber(255);
  const b = getRandomNumber(255);

  return `rgb(${r}, ${g}, ${b})`;
}

const background = document.querySelectorAll(".col");

function setBackgroundColor(background) {
  const randomColor = getRandomColor();
  background.style.backgroundColor = randomColor;
}

for (let i = 0; i < background.length; i++) {
  setBackgroundColor(background[i]);
}

setInterval(() => {
  for (let i = 0; i < background.length; i++) {
    setBackgroundColor(background[i]);
  }
}, 1000);
