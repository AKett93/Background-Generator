var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// style background and write style to h3
function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

// randomise color1/color2 then trigger
function randomise() {
  color1.value = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  color2.value = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  setGradient();
}

// EventListener, trigger setGradient function on input(color) selection
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
