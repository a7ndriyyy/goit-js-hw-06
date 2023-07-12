const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector("#ingredients");
const createEl = ingredients.map((ingredients) => {
  const li = document.createElement("li");
    li.textContent = ingredients;
    li.classList.add("item");
  return li ;
});
console.log(createEl);
ingredientsListEl.append(...createEl);