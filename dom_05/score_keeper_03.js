let p1Button = document.querySelector('#p1');
let p2Button = document.getElementById('p2');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click", function() {
  if (!gameOver) {
    p1Score += 1;
    if (winningScore === p1Score) {
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score += 1;
    if (winningScore === p2Score) {
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});