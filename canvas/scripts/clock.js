document.addEventListener("DOMContentLoaded", () => {
  let cvs = document.querySelector(".clock");
  let context = cvs.getContext("2d");

  function drawHourClockHand(hour) {
    context.rotate((Math.PI / 180) * 30 * hour);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -40);
    context.lineWidth = 8;
    context.closePath();
    context.stroke();
    context.rotate((-Math.PI / 180) * 30 * hour);
  }

  function drawCircle() {
    context.translate(250, 250);
    context.beginPath();
    let endAngle = (Math.PI / 180) * 360;
    context.arc(0, 0, 100, 0, endAngle);
    context.closePath();

    context.stroke();
    drawHourClockHand(6);
  }

  drawCircle();
});
