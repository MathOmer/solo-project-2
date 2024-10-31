let homeScoreEl = document.getElementById("homeScore");
let awayScoreEl = document.getElementById("awayScore");
let homeButtonScore = 0;
let awayButtonScore = 0;

function homeButton1() {
  homeButtonScore += 1;
  homeScoreEl.innerText = homeButtonScore;
}

function homeButton2() {
  homeButtonScore += 2;
  homeScoreEl.innerText = homeButtonScore;
}

function homeButton3() {
  homeButtonScore += 3;
  homeScoreEl.innerText = homeButtonScore;
}

function awayButton1() {
  awayButtonScore += 1;
  awayScoreEl.innerText = awayButtonScore;
}

function awayButton2() {
  awayButtonScore += 2;
  awayScoreEl.innerText = awayButtonScore;
}

function awayButton3() {
  awayButtonScore += 3;
  awayScoreEl.innerText = awayButtonScore;
}

function restartEl() {
  homeScoreEl.innerText = 0;
  awayScoreEl.innerText = 0;
  homeButtonScore = 0;
  awayButtonScore = 0;
}
