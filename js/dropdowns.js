/* This js file is responsible for animating the Q&A dropdowns that allow answers for certain 
questions to be expanded and hidden. This helps the page feel more clean and less content-heavy, 
while still containing important information. */

/* ---------------------------------- LOGIC FOR Q&A DROPDOWN ---------------------------------- */

// flag that indicates whether the question is clicked on, default to false
let toggleFlag = false;

/* This is a function that allows shows and hides and FAQ question's answer, 
when the user clicks. */
function toggleDropdownAccordion(question) {

    const answer = question.nextElementSibling;

    // if the toggle flag is false, show the contents when clicked on
    // get the question's answer
    if (toggleFlag === false) {
        answer.className = "visible";
        toggleFlag = true; // change toggle flag
    }
    // if the toggle flag is true, hide the contents when the user clicks 
    // on the question
    else {
        answer.className = "invisible";
        toggleFlag = false;
    }
}