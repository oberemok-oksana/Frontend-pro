class Slider {
  constructor(selector) {
    this.selector = selector;
    this.timer = null;
    this.currentIndex = 0;
  }

  init() {
    this.slider = document.querySelector(this.selector);
    this.wrapper = this.slider.querySelector(".slider__wrapper");
    this.arrowLeft = this.slider.querySelector(".slider__arrow-left");
    this.arrowRight = this.slider.querySelector(".slider__arrow-right");
    this.dots = this.slider.querySelectorAll(".dots i");
    this.bindEvents();
    this.autoAnimation();
  }

  autoAnimation() {
    this.autoInterval = setInterval(() => {
      this.nextSlide(Slider.SLIDE_TIME);
    }, 3000);
  }

  bindEvents() {
    this.arrowRight.addEventListener("click", () =>
      this.nextSlide(Slider.SLIDE_TIME)
    );

    this.arrowLeft.addEventListener("click", () => {
      this.previousSlide(Slider.SLIDE_TIME);
    });

    this.slider.addEventListener("mouseover", () => {
      clearInterval(this.autoInterval);
    });

    this.slider.addEventListener("mouseleave", () => {
      this.autoAnimation();
    });

    this.dots.forEach((dot, i) => {
      dot.addEventListener("click", () => this.showImg(i));
    });
  }

  showImg(index) {
    let amount = index - this.currentIndex;
    if (amount > 0) {
      for (let i = 0; i < amount; i++) {
        this.wrapper.append(this.wrapper.firstElementChild);
      }
    } else {
      for (let i = amount; i < 0; i++) {
        this.wrapper.prepend(this.wrapper.lastElementChild);
      }
    }

    this.currentIndex = index;
    this.showActiveDot();
  }

  showActiveDot() {
    this.dots.forEach((dot) => {
      const allSelected = document.querySelectorAll(".dots i.active");
      allSelected.forEach((selected) => {
        selected.classList.remove("active");
      });
      this.dots[this.currentIndex].classList.add("active");
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
    if (this.currentIndex === 0) {
      this.currentIndex = 4;
    } else {
      this.currentIndex--;
    }

    this.showActiveDot();
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

    if (this.currentIndex < 4) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.showActiveDot();
  }
}
Slider.FRAME_TIME = 1000 / 60;
Slider.SLIDE_TIME = 1000;

document.addEventListener("DOMContentLoaded", function () {
  let slider = new Slider(".slider");
  slider.init();
});
