const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit",errSubmit);

 function errSubmit(peyn) {
    peyn.preventDefault();
    const emailVal = formEl.elements.email.value.trim();
    const passwordVal = formEl.elements.password.value.trim();

    if (passwordVal === ""||emailVal === "" ) {
        return alert("Всі поля мають бути заповнені!!");
    } 

    const userData ={
        email: emailVal,
        password: passwordVal,
    };

    console.log(userData);
    peyn.currentTarget.reset();
 }
