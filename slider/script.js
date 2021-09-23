// let offset = 0;
// const sliderLine = document.querySelector(".slider-line");
// const nextBtn = document.querySelector("#nextBtn");
// const imgWidth = document.querySelector(".slider-line img").clientWidth;
// const allImages = document.querySelectorAll(".slider-line img");
// let imgIndex;
// const dots = document.querySelectorAll(".dots i");

// let inTransition = false;

// nextBtn.addEventListener("click", () => {
//   if (inTransition) return;

//   inTransition = true;
//   offset = offset + imgWidth;
//   if (offset > imgWidth * allImages.length - 1) {
//     offset = 0;
//   }
//   sliderLine.style.left = -offset + "px";
//   imgIndex = offset / imgWidth;
//   const allSelectedDots = document.querySelectorAll(".dots i.active");
//   allSelectedDots.forEach((selected) => {
//     selected.classList.remove("active");
//   });
//   dots[imgIndex].classList.add("active");
// });

// prevBtn.addEventListener("click", () => {
//   if (inTransition) return;

//   inTransition = true;
//   offset = offset - imgWidth;
//   if (offset < 0) {
//     offset = imgWidth * (allImages.length - 1);
//   }
//   sliderLine.style.left = -offset + "px";
//   imgIndex = offset / imgWidth;
//   const allSelectedDots = document.querySelectorAll(".dots i.active");
//   allSelectedDots.forEach((selected) => {
//     selected.classList.remove("active");
//   });
//   dots[imgIndex].classList.add("active");
// });

// sliderLine.addEventListener("transitionend", () => {
//   inTransition = false;
// });

// dots.forEach((dot, i) => {
//   dot.addEventListener("click", () => {
//     if (inTransition) return;
//     offset = i * imgWidth;
//     sliderLine.style.left = -offset + "px";
//     const allSelectedDots = document.querySelectorAll(".dots i.active");
//     allSelectedDots.forEach((selected) => {
//       selected.classList.remove("active");
//     });
//     dot.classList.add("active");
//   });
// });

let offset = 0;
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const imgWidth = document.querySelector(".pic").clientWidth;
const sliderLine = document.querySelector(".slider-line");
const allImages = document.querySelectorAll(".pic");
let inAnimation = false;
const dots = document.querySelectorAll(".dots i");
let imgIndex;

nextBtn.addEventListener("click", () => {
  if (inAnimation) return;
  animation = true;
  offset = offset + imgWidth;
  if (offset > (allImages.length - 1) * imgWidth) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
  imgIndex = offset / imgWidth;

  const selectedDots = document.querySelectorAll(".dots i.active");
  selectedDots.forEach((selected) => selected.classList.remove("active"));
  dots[imgIndex].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  if (inAnimation) return;
  animation = true;
  offset = offset - imgWidth;
  if (offset < 0) {
    offset = imgWidth * (allImages.length - 1);
  }

  sliderLine.style.left = -offset + "px";
  imgIndex = offset / imgWidth;
  const selectedDots = document.querySelectorAll(".dots i.active");
  selectedDots.forEach((selected) => selected.classList.remove("active"));
  dots[imgIndex].classList.add("active");
});

sliderLine.addEventListener("transitionend", () => {
  animation = false;
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    if (inAnimation) return;
    offset = i * imgWidth;
    sliderLine.style.left = -offset + "px";
    const selectedDots = document.querySelectorAll(".dots i.active");
    selectedDots.forEach((selected) => selected.classList.remove("active"));
    dot.classList.add("active");
  });
});
