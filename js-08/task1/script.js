document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const paragraphs = document.querySelectorAll(".content");

  tabs.forEach((tab, i) =>
    tab.addEventListener("click", (e) => {
      const allSelected = document.querySelectorAll(".selected");
      allSelected.forEach((item) => item.classList.remove("selected"));
      e.target.classList.add("selected");

      const allActive = document.querySelectorAll(".active");
      allActive.forEach((item) => item.classList.remove("active"));
      paragraphs[i].classList.add("active");
    })
  );
});
