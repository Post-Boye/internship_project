// JavaScript in a separate file (script.js)
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
}

showSlides(); // Start the slideshow
// JavaScript (script.js)

function plusSlides(n) {
    showSlides((slideIndex += n));
}

// Rest of your showSlides function remains the same...
