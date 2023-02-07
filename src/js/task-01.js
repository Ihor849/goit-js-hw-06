// НАХОДИМО  ARRAY listItem
const listItem = document.querySelectorAll(".item");
console.log(listItem);
// НАХОДИМО  ДОВЖИНУ ARRAY  listItem
console.log(`Number of categories: ${listItem.length}`); // 3

listItem.forEach((item) => {
  console.log(item);
  console.log(`Category: ${item.children[0].textContent}`);
  console.log(`Element: ${item.lastElementChild.children.length}`);

});
