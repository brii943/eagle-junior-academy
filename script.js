// Global variable to keep track of the active slide index
let currentSlideIndex = 0;

// Function called directly by the HTML carousel button onclick handlers
function changeSlide(direction) {
    const slides = document.querySelectorAll(".slide-img");
    
    if (slides.length === 0) return;

    // Remove active class from current slide
    slides[currentSlideIndex].classList.remove("active");

    // Calculate new slide index with looping
    currentSlideIndex += direction;

    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; // Wrap to first slide
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; // Wrap to last slide
    }

    // Add active class to the new current slide
    slides[currentSlideIndex].classList.add("active");
}

// DOM content load handler
document.addEventListener("DOMContentLoaded", function () {

    // Mobile Menu Toggle Logic
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    } else {
        console.warn("Menu elements not found!");
    }

});
