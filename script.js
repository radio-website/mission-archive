document.addEventListener("DOMContentLoaded", () => {
    const slideshowElements = document.querySelectorAll(".slideshow");

    // Do nothing if the current page has no .slideshow images
    if (slideshowElements.length === 0) {
        return;
    }

    let currentIndex = 0;

    // Show only the first slide initially
    slideshowElements.forEach((img, index) => {
        img.style.display = index === 0 ? "block" : "none";
    });

    function updateSlideshow() {
        slideshowElements[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % slideshowElements.length;
        slideshowElements[currentIndex].style.display = "block";
    }

    // Cycle every 10 seconds
    setInterval(updateSlideshow, 10000);
});