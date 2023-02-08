const form = document.querySelector(".login-form");
const buttonSubmit = form.querySelector(".login-form button");

form.addEventListener("submit", onFormSubmit);
console.log(form);

function onFormSubmit(event) {
  event.preventDefault();
  const elementsForm = event.currentTarget;
  let formData = {};
  console.dir(elementsForm.elements);
  if (elementsForm.password.value === "" || elementsForm.email.value === "") {
    alert("Всі поля повинні бути заповнені");
  } else {
    formData = {
      email: elementsForm.elements.email.value,
      password: elementsForm.elements.password.value,
    };
    console.log(formData);

    onResetFormData();
  }
}

function onResetFormData() {
  form.reset();
}
