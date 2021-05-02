'use strict';

//using clases
const secretNumber = document.querySelector('.secret-number');
const btnCheck = document.querySelector('.check');
const massage = document.querySelector('.guess-start');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
const btnAging = document.querySelector('.againg');
const inputBox = document.querySelector('.input-box');
const secretbox = document.querySelector('.secret-box');

let randomNumber = Math.trunc(Math.random() * 50) + 1;
let scoreDown = 50;
let topScore = 0;

btnCheck.addEventListener('click', function () {
  const guess = Number(inputBox.value);
  if (!guess) {
    massage.textContent = 'NO number!';
  } else if (guess === randomNumber) {
    secretNumber.textContent = randomNumber;
    massage.textContent = '🎉 Correct Number!';
    document.querySelector('body').style.background = '#60b347';
    secretbox.style.width = '200px';
    if (scoreDown > topScore) {
      topScore = scoreDown;
      highScore.textContent = topScore;
    }
  } else if (guess > randomNumber) {
    if (scoreDown > 1) {
      massage.textContent = '🔼 Too high!';
      scoreDown--;
      score.textContent = scoreDown;
    } else {
      massage.textContent = '👎 You looss the game';
      score.textContent = 0;
    }
  } else if (guess < randomNumber) {
    if (scoreDown > 1) {
      massage.textContent = '🔽 Too low!';
      scoreDown--;
      score.textContent = scoreDown;
    } else {
      massage.textContent = '👎 You looss the game';
      score.textContent = 0;
    }
  }
});

//reset

btnAging.addEventListener('click', function () {
  scoreDown = 50;
  randomNumber = Math.trunc(Math.random() * 50) + 1;
  massage.textContent = 'Start Guessing.....';
  score.textContent = scoreDown;
  secretNumber.textContent = '?';
  document.querySelector('body').style.background = '#222';
  inputBox.value = '';
  secretbox.style.width = '150px';
});
