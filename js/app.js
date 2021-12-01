
/* ---------------------------------- LOGIC FOR TRAVEL FORM ---------------------------------- */

/* This function is used to determine which location the user should travel to. */
function findTravelLocation() {

    // get the user responses from the form
    let desertOrMountainResponse = document.getElementById("desertOrMountain");
    let desertOrMountainText = desertOrMountainResponse.options[desertOrMountainResponse.selectedIndex].text;

    let climateResponse = document.getElementById("humidOrArid");
    let climateResponseText = climateResponse.options[climateResponse.selectedIndex].text;

    let townProximityResponse = document.getElementById("nearTownOrNo");
    let townProximityText = townProximityResponse.options[townProximityResponse.selectedIndex].text;

    // the possible locations that could be recommended to the user
    let locationList = ["Snowy Range Mountains", "North Cascades of Washington", "Leadville, Colorado", "Great Sand Dunes National Park", 
    "Great Smoky Mountains National Park", "Moab, Utah"];

    // the location to be recommended to the user
    let chosenLocation = "";

    // this will be added to the beginning of the result
    let resultIntro = "<h3>You Should Travel To: </h3>";

    // The first question asks if the user prefers desert or mountains. As there are only 
    // two desert locations on the list, we can cancel out the rest.
    // If the user prefers a desert landscape and an arid climate, recommend Moab.
    // If the user prefers a desert landscape, and doesn't prefer arid, recommend Great 
    // Sand Dunes, as it's less arid than Moab
    if (desertOrMountainText === "desert") {
        // if the person also prefers arid climates, recommend Moab
        if (climateResponseText ==="arid") {
            chosenLocation = locationList[5];
        }
        // otherwise recommend Great Sand Dunes, as it gets more humidity
        else {
            chosenLocation = locationList[3];
        }
    }

    // Second question asks the user if they prefer humid or arid climates.
    // There are two mountain options with humid climates: Great Smoky Mountains 
    // and  North Cascades, so we must narrow it down
    else if (climateResponseText == "humid") {
        // check to see if the person said they wanted to be close to a town, and 
        // if so, recommend Great Smoky Mountains
        if (townProximityText === "yes") {
            chosenLocation = locationList[4];
        }
        // otherwise, recommend North Cascades
        else {
            chosenLocation = locationList[1];
        }
    }

    // Third question asks the user if they want to be near a town with things to do.
    // At this point, we're only recommending arid climate locations, since we singled 
    // out all humid climates in the block above.
    // If they do want to be near a town, Leadville will be recommended, as it is a mountain town.
    else if (townProximityText == "yes") {
        chosenLocation = locationList[2];
    }

    // Otherwise recommend Snowy Range Mountains, as there isn't much nearby.
    else {
        chosenLocation = locationList[0];
    }

    // Write the results to the page, replacing the quiz form
    document.getElementById("travel_quiz").innerHTML = resultIntro + "<p>" + chosenLocation + "</p>";
}



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




/* ---------------------------------- LOGIC FOR CONTACT FORM ---------------------------------- */

// get the form
const contactForm = document.getElementById("contact_form");

// get the user's first name input
const firstName = document.getElementById("firstName");

// get the user's last name input
const lastName = document.getElementById("lastName");

// get the user's email address input
const email = document.getElementById("email");

// get the user's phone number input
const phone = document.getElementById("phone");



// event listener for when the user clicks the contact form's submit button
contactForm.addEventListener("submit", (e) => {

    // call function that validates the inputs
    if (validateUserInput() === false) {
        e.preventDefault();
    }
});



/*
Function that validates the user's inputs.
*/
function validateUserInput() {

    // get the contents of the user's inputs and remove whitespace
    const firstNameContents = firstName.value.trim();
    const lastNameContents = lastName.value.trim();
    const emailContents = email.value.trim();
    const phoneContents = phone.value.trim();

    // flags that indicate that whether values are valid, default to true
    let firstNameFlag = true;
    let lastNameFlag = true;
    let emailFlag = true;
    let phoneFlag = true;

    // valid input message to the user, when there are no input problems
    let validMsg = "valid user input";

    // if the first name has a length less than 2 or 
    // it doesn't contain alpha characters, show error message
    if ((firstNameContents.length < 2) || !(/^[A-Z]+$/i.test(firstNameContents))) {

        // first name error message to show the user 
        let firstNameErrorMsg = "First name must include only letters and be longer than 1 character.";
        
        // show invalid message next to first name input field
        showErrorMessage(firstNameErrorMsg, "first_name_error_msg");

        // set flag to show it's invalid
        firstNameFlag = false;
    }
    
    else {
        // show valid message next to first name input field
        showValidMessage(validMsg, "first_name_error_msg");
    }


    // if the last name has a length less than 2 or 
    // it doesn't contain alpha characters, show error message
    if ((lastNameContents.length < 2) || !(/^[A-Z]+$/i.test(lastNameContents))) {

        // last name error message to show the user 
        let lastNameErrorMsg = "Last name must include only letters and be longer than 1 character.";
        
        // show invalid message next to last name input field
        showErrorMessage(lastNameErrorMsg, "last_name_error_msg");

        // set flag to show it's invalid
        lastNameFlag = false;
    }
    else {
        // show valid message next to last name input field
        showValidMessage(validMsg, "last_name_error_msg");
    }


    // if the user's inputted email is not a valid email address, 
    // show an error message
    
    // email regex used for validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(emailContents)) {

        // email error message to show the user 
        let emailErrorMsg = "That's not a valid email.";
        
        // show invalid message next to email input field
        showErrorMessage(emailErrorMsg, "email_error_msg");

        // set flag to show it's invalid
        emailFlag = false;

    }
    else {
        // show valid message next to email input field
        showValidMessage(validMsg, "email_error_msg");
    }


    // if the user's inputted phone number is not a valid number, 
    // show an error message
    
    // phone number regex used for validation
    // This accepts: 000-000-0000 format, 0000000000 format, (000)000-0000, etc.
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (!phoneRegex.test(phoneContents)) {

        // phone number error message to show the user 
        let phoneErrorMsg = "That's not a valid phone number.";
        
        // show invalid message next to email input field
        showErrorMessage(phoneErrorMsg, "phone_error_msg");

        // set flag to show it's invalid
        phoneFlag = false;

    }
    else {
        // show valid message next to phone number input field
        showValidMessage(validMsg, "phone_error_msg");
    }


    // return false if any of the flags are false
    if ((firstNameFlag === false) || (lastNameFlag === false) || (emailFlag === false) || (phoneFlag === false)) {
        return false; // this indicates form should not submit yet
    }

    // otherwise, all fields are valid
    else {
        //return true; // this indicates form can submit now
    }
}



/*
Function that is used to show an error message for an invalid input.
*/
function showErrorMessage(msg, elementId) {

    // get the error message span for the first name
    const errorSpan = document.getElementById(elementId);

    // change class of the span to be the negative feedback
    errorSpan.className = "neg_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}

/*
Function that is used to show an valid message for an valid input.
*/
function showValidMessage(msg, elementId) {

    // get the error message span for the first name
    const errorSpan = document.getElementById(elementId);

    // change class of the span to be the positive feedback
    errorSpan.className = "pos_feedback";

    // show error message
    errorSpan.innerHTML = msg;
}