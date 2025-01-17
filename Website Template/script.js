document.addEventListener("DOMContentLoaded", function () {
  const sliderInner = document.querySelector(".slider-inner");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;
  const slideInterval = 3000;

  // Ensure no transition at the start
  sliderInner.style.transition = "none";
  sliderInner.style.transform = `translateX(0%)`;

  // Add transition after initial setup
  setTimeout(() => {
    sliderInner.style.transition = "transform 0.5s ease-in-out";
  }, 50);

  function updateSlider() {
    sliderInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  nextButton.addEventListener("click", () => {
    nextSlide();
    restartAutoplay();
  });

  prevButton.addEventListener("click", () => {
    prevSlide();
    restartAutoplay();
  });

  let autoplay = setInterval(nextSlide, slideInterval);

  function restartAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(nextSlide, slideInterval);
  }
});
