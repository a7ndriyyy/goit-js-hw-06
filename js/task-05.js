const inputValue = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputValue.addEventListener("input", onInput);

function onInput(peyn) {
if (peyn.currentTarget.value.trim() === "") {
        spanEl.textContent = "Anonymous";
    } else {
        spanEl.textContent = peyn.currentTarget.value;
    }
}