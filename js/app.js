
function findTravelLocation() {

    // get the user responses from the form
    let desertOrMountainResponse = document.getElementById("desertOrMountain");
    let desertOrMountainText = desertOrMountainResponse.options[desertOrMountainResponse.selectedIndex].text;

    let climateResponse = document.getElementById("humidOrArid");
    let climateResponseText = climateResponse.options[climateResponse.selectedIndex].text;

    let townProximityResponse = document.getElementById("nearTownOrNo");
    let townProximityText = townProximityResponse.options[townProximityResponse.selectedIndex].text;

    // the possible locations that could be recommended to the user
    let locationList = ["Snowy Range Mountains", "North Cascades of Washington", "Leadville, Colorado", "Great Sand Dunes National Park"];

    // the location to be recommended to the user
    let chosenLocation = "";

    // this will be added to the beginning of the result
    let resultIntro = "<h3>You Should Travel To: </h3>";

    // First question asks the user if they prefer desert landscapes or mountain landscapes.
    // If the user responded that they prefer the desert, immediately recommend sand dunes
    if (desertOrMountainText === "desert") {
        chosenLocation = locationList[3];
    }

    // Second question asks the user if they prefer humid or arid climates.
    // If they prefer humid, how recommend North Cascades, as it's the only mountain location 
    // on the list with a humid climate.
    else if (climateResponseText == "humid") {
        chosenLocation = locationList[1];
    }

    // Third question asks the user if they want to be near a town with things to do.
    // If they do, Leadville will be recommended, as it is a mountain town.
    else if (townProximityText == "yes") {
        chosenLocation = locationList[2];
    }

    // Otherwise recommend Snowy Range Mountains, as there isn't much nearby.
    else {
    }

    // Write the results to the page
    document.getElementById("quizResult").innerHTML = resultIntro + "<p>" + chosenLocation + "</p>";
}