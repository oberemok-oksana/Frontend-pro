document.addEventListener("DOMContentLoaded", () => {
  let current = 0;

  const upBtn = document.querySelector(".up");
  const downBtn = document.querySelector(".down");
  const lists = document.querySelectorAll(".item");

  function change() {
    const allItemsWithSelected = document.querySelectorAll(".selected");
    allItemsWithSelected.forEach((item) => {
      item.classList.remove("selected");
    });
    lists[current].classList.add("selected");
  }
  change();

  downBtn.addEventListener("click", () => {
    if (current < lists.length - 1) current++;
    change();
  });

  upBtn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      change();
    }
  });
});
