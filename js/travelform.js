/* This js file is responsible for determining which location a user should travel to, 
based on the form quiz at the bottom of the travel page. */

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
    document.getElementById("travel_quiz").innerHTML = `${resultIntro}<p>${chosenLocation}</p>`;
}



