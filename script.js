const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Loop back to the first slide
  const offset = -currentIndex * 100; // Calculate offset percentage
  slides.style.transform = `translateX(${offset}%)`;
}

// Start auto-sliding
setInterval(autoSlide, 4000); // Slide every 3 seconds
