const counter = document.querySelector("#counter");
const counterValue = counter.querySelector("#value");
const decrementBtn = counter.querySelector(`button[data-action="decrement"]`);
const incrementBtn = counter.querySelector(`button[data-action="increment"]`);

let count = 0 ; 
decrementBtn.addEventListener("click", () => {
count -= 1;
counterValue.textContent = count;
});
incrementBtn.addEventListener("click", () => {
    count += 1;
    counterValue.textContent = count;
    });