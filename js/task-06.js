const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onBlur);
const id = Number(inputEl.dataset.length);
 function onBlur(peyn) {
    const inputVal = peyn.currentTarget.value.trim(); 
    inputEl.classList.remove("invalid","valid");

    if (inputVal.length !== id) {
         inputEl.classList.add("invalid");
    } else {
        inputEl.classList.add("valid");
    }
 }