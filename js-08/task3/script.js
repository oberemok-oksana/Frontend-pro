document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll("td");
  const rows = document.querySelectorAll("tr");
  const rowLength = cells.length / rows.length;
  let horizontalIndex = 0;
  let verticalIndex = 0;

  reColor();

  function reColor() {
    const allColoredCells = document.querySelectorAll(".colored");

    allColoredCells.forEach((item) => item.classList.remove("colored"));
    cells[rowLength * verticalIndex + horizontalIndex].classList.add("colored");
  }

  cells.forEach((cell, i) => {
    cell.addEventListener("click", () => {
      horizontalIndex = i % rowLength;
      verticalIndex = Math.floor(i / rowLength);
      reColor();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      if (horizontalIndex + 1 < rowLength) {
        horizontalIndex++;
        reColor();
      }
    }
    if (e.key === "ArrowLeft") {
      if (horizontalIndex > 0) horizontalIndex--;
      reColor();
    }
    if (e.key === "ArrowDown") {
      if (verticalIndex + 1 < rowLength) {
        verticalIndex++;
        reColor();
      }
    }
    if (e.key === "ArrowUp") {
      if (verticalIndex > 0) {
        verticalIndex--;
        reColor();
      }
    }
  });
});
