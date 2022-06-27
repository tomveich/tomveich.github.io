"use strict";

const form = document.querySelector("#mainform");
const input = document.querySelector("#maininput");

const message = document.querySelector("#message");
const messagetext = document.querySelector("#messagetext");

form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(input.value);

    message.classList.add("shown");
    message.classList.add("red");

    messagetext.innerText = "Access denied";

    setTimeout(() => {
        message.classList.remove("shown");
        message.classList.remove("green");

    }, 3000)
})