/* This js file is responsible for hiding and showing the navigation links 
on the hamburger menu. */

// get the navigation links
let navLinks = document.querySelectorAll(".nav_links");

// set a boolean to determine if the hamburger has been clicked, default to false
let hamburgerClicked = false;

/* This is a function that allows shows and hides the navigation links, 
when the user clicks on the hamburger menu icon. */
function triggerMenuView() {

    // if the hamburgerClicked bool is false, show the menu links
    if (hamburgerClicked === false) {
        for (link of navLinks) {
            link.style.display = "block";
        }
        hamburgerClicked = true; // change flag
    }
    // if the hamburgerClicked bool is true, hide the menu links
    else {
        for (link of navLinks) {
            link.style.display = "none";
        }
        hamburgerClicked = false; // change flag
    }
}
