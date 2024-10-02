const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalImages = images.length;

// Function to update the carousel position
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to show the next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateCarousel();
}

// Function to show the previous image
function showPrevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateCarousel();
}

// Auto-slide every 3 seconds
let autoSlide = setInterval(showNextImage, 3000);

// Event listeners for manual controls
nextBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  showNextImage();
  autoSlide = setInterval(showNextImage, 3000);
});

prevBtn.addEventListener('click', () => {
  clearInterval(autoSlide);
  showPrevImage();
  autoSlide = setInterval(showNextImage, 3000);
});
