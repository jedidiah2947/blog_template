let currentCarouselSlide = 0;
const carousel = document.querySelector(".carousel");
const carouselPrevButton = document.querySelector(".carousel-prev-button");
const carouselNextButton = document.querySelector(".carousel-next-button");
const carouselSlideCount = document.querySelectorAll(".cover").length;
const carouselSlideWidth = 100; // Adjust this value to match your cover image width

function showCarouselSlide(n) {
    currentCarouselSlide = (n + carouselSlideCount) % carouselSlideCount;
    const translateX = -currentCarouselSlide * carouselSlideWidth;
    carousel.style.transform = `translateX(${translateX}%)`;
}

function changeCarouselSlide(n) {
    showCarouselSlide(currentCarouselSlide + n);
}

carouselPrevButton.addEventListener("click", function () {
    changeCarouselSlide(-1);
});

carouselNextButton.addEventListener("click", function () {
    changeCarouselSlide(1);
});

showCarouselSlide(currentCarouselSlide);