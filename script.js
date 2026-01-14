document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const dots = Array.from(document.querySelectorAll('.dot'));

    let currentIndex = 0;

    const updateCarousel = (index) => {
        // Update track position
        track.style.transform = `translateX(-${index * 100}%)`;

        // Update active slide state
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        // Update dots state
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        currentIndex = index;
    };

    nextBtn.addEventListener('click', () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        updateCarousel(nextIndex);
    });

    prevBtn.addEventListener('click', () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(prevIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            updateCarousel(index);
        });
    });

    // Optional: Auto-slide
    let autoSlide = setInterval(() => {
        const nextIndex = (currentIndex + 1) % slides.length;
        updateCarousel(nextIndex);
    }, 5000);

    // Pause auto-slide on interaction
    const resetTimer = () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            const nextIndex = (currentIndex + 1) % slides.length;
            updateCarousel(nextIndex);
        }, 5000);
    };

    nextBtn.addEventListener('click', resetTimer);
    prevBtn.addEventListener('click', resetTimer);
    dots.forEach(dot => dot.addEventListener('click', resetTimer));
});
