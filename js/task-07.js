const controlEl= document.querySelector("#font-size-control");
const spanValue = document.querySelector("#text");

spanValue.style.fontSize = `${controlEl.value}px`;

controlEl.addEventListener("input", () => {
  spanValue.style.fontSize = `${controlEl.value}px`;
});

console.log(controlEl);
console.log(spanValue);
