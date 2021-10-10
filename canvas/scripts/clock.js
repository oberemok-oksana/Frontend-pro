document.addEventListener("DOMContentLoaded", () => {
  let cvs = document.querySelector(".clock");
  let context = cvs.getContext("2d");
  context.translate(250, 250);

  function drawClockHand(value, config) {
    context.rotate((Math.PI / 180) * config.angle * value);
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, -config.length);
    context.lineWidth = config.lineWidth;
    context.closePath();
    context.stroke();
    context.rotate((-Math.PI / 180) * config.angle * value);
  }

  function drawHourClockHand(hour) {
    drawClockHand(hour, { angle: 30, length: 40, lineWidth: 8 });
  }

  function drawMinuteClockHand(minute) {
    drawClockHand(minute, { angle: 6, length: 75, lineWidth: 5 });
  }

  function drawSecondClockHand(second) {
    drawClockHand(second, { angle: 6, length: 85, lineWidth: 3 });
  }

  function drawCircle() {
    let endAngle = (Math.PI / 180) * 360;
    context.fillStyle = "white";
    context.lineWidth = 1;
    context.arc(0, 0, 100, 0, endAngle);
    context.fill();

    context.beginPath();
    context.fillStyle = "black";
    context.arc(0, 0, 100, 0, endAngle);
    context.closePath();

    context.stroke();
  }

  function drawClock() {
    let date = new Date();
    drawCircle();
    drawHourClockHand(date.getHours());
    drawMinuteClockHand(date.getMinutes());
    drawSecondClockHand(date.getSeconds());
  }

  setInterval(() => drawClock(), 1000);

  // function startAnimation() {
  //   requestAnimationFrame(() => {
  //     drawCircle();
  //     startAnimation();
  //   });
  // }

  // startAnimation();
});
