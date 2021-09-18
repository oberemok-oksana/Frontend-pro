class Slider {
  constructor(selector) {
    this.selector = selector;
    this.timer = null;
  }

  init() {
    this.slider = document.querySelector(this.selector);
    this.wrapper = this.slider.querySelector(".slider__wrapper");
    this.arrowLeft = this.slider.querySelector(".slider__arrow-left");
    this.arrowRight = this.slider.querySelector(".slider__arrow-right");
    this.bindEvents();
  }

  bindEvents() {
    this.arrowRight.addEventListener("click", () =>
      this.nextSlide(Slider.SLIDE_TIME)
    );

    this.arrowLeft.addEventListener("click", () => {
      this.previousSlide(Slider.SLIDE_TIME);
    });
  }

  previousSlide(time) {
    if (this.timer !== null) return;
    let frameCount = time / Slider.FRAME_TIME;
    let step = 100 / frameCount;
    let currentMargin = -100;

    this.wrapper.prepend(this.wrapper.lastElementChild);
    this.wrapper.style.marginLeft = "-100%";

    this.timer = setInterval(() => {
      if (currentMargin >= 0) {
        clearInterval(this.timer);
        this.timer = null;
      }
      currentMargin += step;
      this.wrapper.style.marginLeft = currentMargin + "%";
    }, Slider.FRAME_TIME);
  }

  nextSlide(time) {
    if (this.timer !== null) return;
    let frameCount = time / Slider.FRAME_TIME;
    let step = 100 / frameCount;
    let currentMargin = 0;

    this.timer = setInterval(() => {
      if (currentMargin <= -100) {
        clearInterval(this.timer);
        this.timer = null;
        this.wrapper.append(this.wrapper.firstElementChild);
        this.wrapper.style.marginLeft = 0;
        return;
      }

      currentMargin -= step;
      this.wrapper.style.marginLeft = currentMargin + "%";
    }, Slider.FRAME_TIME);
  }
}
Slider.FRAME_TIME = 1000 / 60;
Slider.SLIDE_TIME = 1000;

document.addEventListener("DOMContentLoaded", function () {
  let slider = new Slider(".slider");
  slider.init();
});
