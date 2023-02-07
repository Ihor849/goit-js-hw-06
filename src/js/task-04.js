const counterButton = document.querySelector("#counter");
console.log(counterButton);
const counterValueButton = document.querySelector("#value");
console.log(counterValueButton);
const buttonDecrement = counterButton.firstElementChild;
console.log(buttonDecrement);
const buttonIncrement = counterButton.lastElementChild;
console.log(buttonIncrement);

buttonDecrement.addEventListener("click", (event) => {
  //   console.log("Вешаю слушателя события на Decrement");
  counterPluginDecrement();
});

buttonIncrement.addEventListener("click", (event) => {
  //   console.log("Вешаю слушателя события на Increment");
  counterPluginIncrement();
});

let counterValue = 0;
const counterPluginDecrement = function () {
  counterValue -= 1;
  updatesValueСounter();
};

const counterPluginIncrement = function () {
  counterValue += 1;
  updatesValueСounter();
};

const updatesValueСounter = function () {
  counterValueButton.textContent = counterValue;
};
