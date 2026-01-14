let slideIndex = 1;

// Initialize the carousel
showSlides(slideIndex);

// Next/previous controls
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Thumbnail/Dot image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("ga-slide");
    let dots = document.getElementsByClassName("ga-dot");
    
    // Reset to first slide if we go past the end
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Go to last slide if we go backwards from the first
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }
    
    // Deactivate all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex-1].className += " active";
    dots[slideIndex-1].className += " active";
}

// Auto-play: Switch slide every 5 seconds
setInterval(() => {
    moveSlide(1);
}, 5000);