// {
//   const ingredients = [
//     "Potatoes",
//     "Mushrooms",
//     "Garlic",
//     "Tomatos",
//     "Herbs",
//     "Condiments",
//   ];
// }
const ingredientsTitle = document.querySelector(".ingredients");
console.log(ingredients);
const ingredientsPotatoesEl = document.createElement("li");
ingredientsPotatoesEl.classList.add("item");
ingredientsPotatoesEl.textContent = "Potatoes";
console.log(ingredientsPotatoesEl);

const ingredientsMushroomsEl = document.createElement("li");
ingredientsMushroomsEl.classList.add("item");
ingredientsMushroomsEl.textContent = "Mushrooms";
console.log(ingredientsMushroomsEl);

const ingredientsGarlicEl = document.createElement("li");
ingredientsGarlicEl.classList.add("item");
ingredientsGarlicEl.textContent = "Garlic";
console.log(ingredientsGarlicEl);

const ingredientsTomatosEl = document.createElement("li");
ingredientsTomatosEl.classList.add("item");
ingredientsTomatosEl.textContent = "Tomatos";
console.log(ingredientsTomatosEl);

const ingredientsHerbsEl = document.createElement("li");
ingredientsHerbsEl.classList.add("item");
ingredientsHerbsEl.textContent = "Herbs";
console.log(ingredientsHerbsEl);

const ingredientsCondimentsEl = document.createElement("li");
ingredientsCondimentsEl.classList.add("item");
ingredientsCondimentsEl.textContent = "Condiments";
console.log(ingredientsCondimentsEl);

ingredients.append(
  ingredientsPotatoesEl,
  ingredientsMushroomsEl,
  ingredientsGarlicEl,
  ingredientsTomatosEl,
  ingredientsHerbsEl,
  ingredientsCondimentsEl
);
console.log(ingredients);
