"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
        button.textContent = "Você pressionou o botão!";
        button.style.backgroundColor = "#ff9900";
    });
});
