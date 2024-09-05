const root = document.documentElement;

function setPosVariable(pos="-50%") {
  root.style.setProperty("--pos", pos);
}

function resetPosVariable() {
  root.style.setProperty("--pos", "-10px");
}

function hideAllBalls() {
  document.querySelector("#ball1").style.display = "none";
  document.querySelector("#ball2").style.display = "none";
  document.querySelector("#ball3").style.display = "none";
}

function toggleAnimationClasses() {
  document.getElementById("lball").classList.toggle("lball");
  document.getElementById("rball").classList.toggle("rball");
}

function getRandomBallId() {
  const ballIds = ["#ball1", "#ball2", "#ball3"];
  const randomIndex = Math.floor(Math.random() * ballIds.length);
  return ballIds[randomIndex];
}

function showRandomBall() {
  const randomBallId = getRandomBallId();
  document.querySelector(randomBallId).style.display = "inline-block";
}

function randgenerate() {
  hideAllBalls();
  toggleAnimationClasses();
  showRandomBall();
}

// Example usage:
// setPosVariable("-50%");
// resetPosVariable();
// randgenerate();
