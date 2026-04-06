window.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slideshow .slide');
  let currentSlide = 0;

  if (slides.length > 1) {
    setInterval(() => {
      slides[currentSlide].classList.remove('active');

      currentSlide = (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.add('active');
    }, 3000);
  }
});