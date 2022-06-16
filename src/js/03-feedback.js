import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const areaMes = document.querySelector("#message");

function saveToLocal(event) {
    event.preventDefault();
    const { email, message } = form.elements;
    if (email.value !== "" && message.value !== "") {
        localStorage.setItem("LOCALSTORAGE_EMAIL", email.value);
        localStorage.setItem("LOCALSTORAGE_MESSAGE", message.value);
    } else { 
        return alert("Please enter fields");
    }
    console.log(localStorage.getItem("LOCALSTORAGE_EMAIL"),
        localStorage.getItem("LOCALSTORAGE_MESSAGE"));
    form.reset();
}
if (localStorage.getItem("LOCALSTORAGE_EMAIL") && localStorage.getItem("LOCALSTORAGE_MESSAGE")) {
    form.elements.email.value = localStorage.getItem("LOCALSTORAGE_EMAIL")
    form.elements.message.value = localStorage.getItem("LOCALSTORAGE_MESSAGE")
}

form.addEventListener("submit", throttle(saveToLocal, 500))