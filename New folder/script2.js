document.addEventListener("DOMContentLoaded", function () {
  const downBtn = document.querySelector(".down");
  const upBtn = document.querySelector(".up");
  const lists = document.querySelectorAll(".item");
  lists[0].classList.add("selected");

  downBtn.addEventListener("click", () => {
    const selectedItem = document.querySelector(".selected");
    const nextItem = selectedItem.nextElementSibling;
    if (nextItem) {
      selectedItem.classList.remove("selected");
      nextItem.classList.add("selected");
    }
  });

  upBtn.addEventListener("click", () => {
    const selectedItem = document.querySelector(".selected");
    const previousItem = selectedItem.previousElementSibling;
    if (previousItem) {
      selectedItem.classList.remove("selected");
      previousItem.classList.add("selected");
    }
  });
});
