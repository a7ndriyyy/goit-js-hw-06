const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onBlur);
const id = Number(inputEl.dataset.length);
 function onBlur(peyn) {
    const inputVal = peyn.currentTarget.value ; 
    inputEl.classList.remove("invalid","valid");

    if (inputVal.length !== id) {
       return inputEl.classList.add("invalid");
    } else {
       return inputEl.classList.add("valid");
    }
 }