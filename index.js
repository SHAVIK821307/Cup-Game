const root = document.querySelector(":root");
function myFunction(element, pos) {
  //     var balls      = document.getElementById("balls");
  // var ballsAfter = window.getComputedStyle(balls, "::after");
  // ballsAfter.style.top=pos;
  // console.log(window.getComputedStyle())

  root.style.setProperty("--pos", "-50%");
}
function myFunction2() {
  root.style.setProperty("--pos", "-10px");
}

function randgenerate() {
  let ball1 = (document.querySelector("#ball1").style.display = "none");
  let ball2 = (document.querySelector("#ball2").style.display = "none");
  let ball3 = (document.querySelector("#ball3").style.display = "none");
  let lball = document.getElementById("lball");
  let rball = document.getElementById("rball");

  lball.classList.toggle("lball");

  rball.classList.toggle("rball");

  const arr = ["#ball1", "#ball2", "#ball3"];
  const randomIndex = Math.floor(Math.random() * arr.length);
  function getRandomItem(arr) {
    // get random index value

    // get random item
    const item = arr[randomIndex];

    return item;
  }
  let id = getRandomItem(arr);
  // console.log(id);
  let randball = document.querySelector(id);
  // console.log(randball);
  randball.style.display = "inline-block";
}
