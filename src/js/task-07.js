const inputFontSizeControl = document.querySelector("#font-size-control");
console.log(inputFontSizeControl);

const textSpan = document.querySelector("#text");
console.log(textSpan);

inputFontSizeControl.addEventListener("input", onInputFontSizeControl);

function onInputFontSizeControl(event) {
  console.log("kontrol");
  text.style.fontSize = event.currentTarget.value + "px";
}
