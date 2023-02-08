const fieldInput = document.querySelector("#validation-input");
console.log(fieldInput);

fieldInput.addEventListener("blur", onInputBlur);

const refs = {
  type: "text",
  id: "validation-input",
  length: "6",
  placeholder: "Please enter 6 symbols",
};

function onInputBlur(event) {
  console.log("Input потерял фокус - событие blur");

  if (Number(refs.length) === event.currentTarget.value.length) {
    console.log(event.currentTarget.value.length);
    fieldInput.classList = "valid";
  } else {
    fieldInput.classList = "invalid";
  }
}
