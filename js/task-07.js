const controlEl = document.querySelector("#font-size-control");
console.dir(controlEl);

const spanEl = document.querySelector("#text");
controlEl.addEventListener("input",onRange);
  function onRange (peyn){
    const value = peyn.currentTarget.value;
    spanEl.style.fontsize = `${value}px`; 
  }