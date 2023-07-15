const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsListEl = document.querySelector("#ingredients");
const createEl = ingredients.map((ingredients) => {
  const itemli = document.createElement("li");
    itemli.textContent = ingredients;
    itemli.classList.add("item");
  return itemli ;
});
console.log(createEl);
ingredientsListEl.append(...createEl);