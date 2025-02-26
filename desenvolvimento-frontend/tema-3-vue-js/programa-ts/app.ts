document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".button") as HTMLButtonElement;

  button.addEventListener("click", () => {
    button.textContent = "Você pressionou o botão!";
    button.style.backgroundColor = "#ff9900";
  });
});
