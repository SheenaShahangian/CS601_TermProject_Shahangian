// get the travel bucket list container (which is a unordered list)
bucketListContainer = document.querySelector(".travel_list");

// url for the JSON file
let locationsUrl = "https://vigilant-allen-c8453f.netlify.app/js/bucketlist.json";

async function fetchBucketList() {
    // fetch the data in the bucket list JSON file
    await fetch(locationsUrl).then(
        (response) => {
            // log the status
            console.log(`Status ${response.status}`);

            if (response.status === 200) {
                // return the JSON object
                return response.json();
            }
            else {
                throw "Apologies, but we could't get your travel data!";
            }
        }
    ).then(
        (data) => {

            // this will hold the list contents
            let locationList = "";

            for (let i = 0; i <= 7; i++) {
                console.log("in loop");
                console.log(data.bucket_list_locations[i].location.name);
                //locationList += `<ul>${data.bucket_list_locations[i].location.name}</ul>`;
            }

            console.log("Locations: " + locationList);

            // write the list of bucket list locations to the page
            bucketListContainer.innerHTML = locationList;
        }
    )
    // error message if there's an issue fetching data
    .catch(error => {
        console.log("Dang it! We had an issue fetching the location info!");
    });
}

fetchBucketList();