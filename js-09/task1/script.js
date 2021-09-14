document.addEventListener("DOMContentLoaded", () => {
  const ul = document.querySelector(".tabs");
  const tabs = document.querySelectorAll(".tab");
  const paragraphs = document.querySelectorAll(".content");

  ul.addEventListener("click", (e) => {
    const allSelected = document.querySelectorAll(".selected");
    allSelected.forEach((item) => item.classList.remove("selected"));
    e.target.classList.add("selected");

    const allActive = document.querySelectorAll(".active");
    allActive.forEach((item) => item.classList.remove("active"));
    paragraphsIndex = Array.from(tabs).indexOf(e.target);
    paragraphs[paragraphsIndex].classList.add("active");
  });
});
