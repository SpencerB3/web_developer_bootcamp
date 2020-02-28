let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  // mode button event listeners
  for (let idx = 0; idx < modeButtons.length; idx += 1) {
    modeButtons[idx].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setupSquares() {
  for (let idx = 0; idx < squares.length; idx += 1) {
    squares[idx].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!"
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!"
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = '';
  for (let idx = 0; idx < squares.length; idx += 1) {
    if (colors[idx]) {
      squares[idx].style.display = "block";
      squares[idx].style.backgroundColor = colors[idx];
    } else {
      squares[idx].style.display = "none";
    }
    
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  for (let idx = 0; idx < squares.length; idx += 1) {
    squares[idx].style.backgroundColor = color;
  }
}

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  let arr = [];

  for (let idx = 0; idx < num; idx += 1) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}