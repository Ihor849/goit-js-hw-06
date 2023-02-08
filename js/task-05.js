const fieldInput = document.querySelector("#name-input");
console.log(fieldInput);

const textOutput = document.querySelector("#name-output");
console.log(textOutput);

fieldInput.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (!event.currentTarget.value) {
    textOutput.textContent = "Anonymous";
    return textOutput.textContent;
  } else {
    textOutput.textContent = event.currentTarget.value;
    return textOutput.textContent;
  }
}
