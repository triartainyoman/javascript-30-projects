const sliderImage = document.getElementById("slider-image");
const images = [
  "image-1.png",
  "image-2.png",
  "image-3.png",
  "image-4.png",
  "image-5.png",
];

let currentIndex = 0;
const path = "./img/";

const slideNext = () => {
  if (currentIndex != images.length - 1) {
    currentIndex = currentIndex + 1;
    sliderImage.classList.add("slider-image-hidden");
    setTimeout(() => {
      sliderImage.src = path + images[currentIndex];
      sliderImage.classList.remove("slider-image-hidden");
    }, 500);
  }
};

const slidePrev = () => {
  if (currentIndex != 0) {
    currentIndex = currentIndex - 1;
    sliderImage.classList.add("slider-image-hidden");
    setTimeout(() => {
      sliderImage.src = path + images[currentIndex];
      sliderImage.classList.remove("slider-image-hidden");
    }, 500);
  }
};
