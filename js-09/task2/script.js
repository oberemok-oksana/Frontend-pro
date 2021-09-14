document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll("td");
  const trs = document.querySelectorAll("tr");
  const rowLength = cells.length / trs.length;
  let selectedIndex = 0;
  reColor();

  function reColor() {
    const allColored = document.querySelectorAll(".colored");
    allColored.forEach((item) => item.classList.remove("colored"));
    cells[selectedIndex].classList.add("colored");
  }
  document.querySelector(".table").addEventListener("click", (e) => {
    selectedIndex = Array.from(cells).indexOf(e.target);
    reColor();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      if (selectedIndex % rowLength !== 0) {
        selectedIndex--;
        reColor();
      }
    }
    if (e.key === "ArrowRight") {
      if ((selectedIndex + 1) % rowLength !== 0) {
        selectedIndex++;
        reColor();
      }
    }
    if (e.key === "ArrowDown") {
      if (selectedIndex + rowLength < cells.length) {
        selectedIndex += rowLength;
        reColor();
      }
    }
    if (e.key === "ArrowUp") {
      if (selectedIndex - rowLength >= 0) {
        selectedIndex -= rowLength;
        reColor();
      }
    }
  });
});
