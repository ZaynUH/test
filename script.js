// script.js
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel img');
    let currentSlide = 0;

    document.querySelector('.next').addEventListener('click', function () {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    });

    document.querySelector('.prev').addEventListener('click', function () {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    });
});
