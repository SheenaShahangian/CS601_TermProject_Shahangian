/* This js file is responsible for fetching bucket list locations from a JSON file and 
putting that information in a list located in an aside on the travel page of the site */

// get the travel bucket list container (which is a unordered list we need to populate)
bucketListContainer = document.querySelector(".travel_list");

// url for the JSON file containing bucket list data
let locationsUrl = "https://vigilant-allen-c8453f.netlify.app/js/bucketlist.json";

async function fetchBucketList() {
    // fetch the data in the bucket list JSON file
    await fetch(locationsUrl).then(
        (response) => {
            // if response status is ok, proceed
            if (response.status === 200) {
                // return the JSON object
                return response.json();
            }
            // otherwise throw an error
            else {
                throw "Apologies, but we could't get your travel data!";
            }
        }
    ).then(
        (data) => {

            // this will hold the list contents
            let locationList = "";

            // iterate over the full number of locations in the JSON file
            for (let i = 0; i < data.bucket_list_locations.length; i++) {
                // add each location as an li element
                locationList += `<li>${data.bucket_list_locations[i].location.name}</li>`;
            }

            // write the list of bucket list locations to the page
            bucketListContainer.innerHTML = locationList;
        }
    )
    // error message if an issue arises when fetching the bucket list data
    .catch(error => {
        console.log("Dang it! We had an issue fetching the location info!");
    });
}

// call the fetch functionality upon js loading, as we want to have this list populated 
// as soon as possible on the page
fetchBucketList();