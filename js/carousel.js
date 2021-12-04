/* This js file is responsible for creating a carousel of content that can 
be cycled through */

// get all the items in the carousel
const carouselItems = document.querySelectorAll(".carousel_slide");

// create an index to keep track of slides
let slideIndex = 0;

function nextSlide() {
    // when next slide button is clicked, we want to hide the current slide
    carouselItems[slideIndex].className = "hidden_slide";
    
    // increase the index (so we can go to the next slide), allowing for looping
    slideIndex = (slideIndex + 1) % carouselItems.length;

    // make the next slide the currently visible slide
    carouselItems[slideIndex].className = "visible_slide";
}

function previousSlide() {
    // when previous slide button is clicked, we want to hide the current slide and show the previous slide
    carouselItems[slideIndex].className = "hidden_slide";

    // decrease the index (so we can go to the previous slide), allowing for looping
    slideIndex = (slideIndex - 1 + carouselItems.length) % carouselItems.length;

    // make the next slide the currently visible slide
    carouselItems[slideIndex].className = "visible_slide";
}