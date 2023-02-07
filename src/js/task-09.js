const bodyColor = document.querySelector("body");
// console.log(bodyColor);

const buttonChangeColor = document.querySelector(".change-color");
// console.log(buttonChangeColor);

const spanBackgroundColor = document.querySelector(".color");
// console.log(spanBackgroundColor);

buttonChangeColor.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  bodyColor.style.background = randomColor;
  spanBackgroundColor.textContent = randomColor;
  return randomColor;
}
