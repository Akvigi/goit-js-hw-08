import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const mail = {}

function saveToLocal() {
    const { email, message } = form.elements;
    localStorage.setItem("LOCALSTORAGE_EMAIL", email.value);
    localStorage.setItem("LOCALSTORAGE_MESSAGE", message.value);
}

function submitData(event) {
    if (email.value === "" || message.value === "") {
        return alert("Please enter any field");
    }
    event.preventDefault();
    mail.email = localStorage.getItem("LOCALSTORAGE_EMAIL")
    mail.message = localStorage.getItem("LOCALSTORAGE_MESSAGE")
    console.log(mail);
    localStorage.removeItem("LOCALSTORAGE_EMAIL")
    localStorage.removeItem("LOCALSTORAGE_MESSAGE")
    form.reset();
}
if (localStorage.getItem("LOCALSTORAGE_EMAIL") || localStorage.getItem("LOCALSTORAGE_MESSAGE")) {
    form.elements.email.value = localStorage.getItem("LOCALSTORAGE_EMAIL")
    form.elements.message.value = localStorage.getItem("LOCALSTORAGE_MESSAGE")
}

form.addEventListener("submit", submitData)
form.addEventListener("keydown", throttle(saveToLocal, 500))