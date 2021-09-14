document.addEventListener("DOMContentLoaded", () => {
  const spinner = document.querySelector(".spinner");
  const overlay = document.querySelector(".overlay");
  let angle = 0;

  let timer = setInterval(() => {
    angle += 5;
    spinner.style.transform = `rotate(${angle % 360}deg)`;
  }, 1000 / 60);

  window.addEventListener("load", () => {
    clearInterval(timer);
    overlay.style.display = "none";
  });
});
