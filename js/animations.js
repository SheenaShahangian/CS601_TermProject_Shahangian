/* ----------- GET THE CONTENTS OF THE ITEM WE NEED TO ANIMATE ------------ */

// get the element that requires animation (of class .animated_heading)
const animatedHeading = document.querySelector(".animated_heading");

// get the text of that element and split it to apply animations per letter
const animatedHeadingContents = animatedHeading.innerText.split("");

// set the original text content to be nothing so we don't have a duplicate heading
animatedHeading.innerText = "";

// get the current character/letter index
let currentLetterIndex = 0;



/* ------------------ LOGIC TO MAKE EACH LETTER A SPAN ------------------- */


/* Function that wraps each letter in a string inside a span element, 
so that we can animate each letter eventually */
function eachLetterInSpan(textToConvert) {

    // start at index 0 (to be used in the for...of loop)
    let index = 0;
    
    // iterate over each letter and make each one into a span so we can animate
    for (letter of textToConvert) {
        animatedHeading.innerHTML += `<span class='letter_span'>${textToConvert[index]}</span>`;
        index++; // increment index, as for...of loop doesn't keep tabs
    }
}


/* ------------------------------------------------------------------------ */



/* This function is actually responsible for making the animation */
function makeAnimation() {

    // we need to get all the letters (that are contained in the spans of class .letter_span)
    let letterSpans = animatedHeading.querySelectorAll(".letter_span")[currentLetterIndex];

    // we need to change the styles, so add class of fade to the letter spans, 
    // so those styles can be applied
    letterSpans.className += " fading_animation";


    // we want to stop after going through all letters, so it's the length of the heading
    const stoppingPoint = animatedHeadingContents.length;

    // stop once we get to the end of all the characters/letters in the heading,
    // then we want to stop
    if (currentLetterIndex === stoppingPoint) {

        // clears the timer we set up earlier
        clearInterval(animationIntervalTimer);
        return;
    }

    // otherwise increase the index
    else {
        currentLetterIndex++;
    }
}


/* ------------------ CALLS TO START THE ANIMATIONS ------------------- */

// call the function that wraps each letter from the string passed in into a span
eachLetterInSpan(animatedHeadingContents);

// the time between animations will be 80 ms
let animationIntervalTimer = setInterval(makeAnimation, 85);
