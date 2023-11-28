/*GO HERE FOR MORE TOKENS https://github.com/settings/tokens/new
THIS TOKEN WILL NOT WORK AFTER DEC, 27, 2023*/


/*Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of
 the last commit that user made. Reference the GitHub api documentation to achieve this.*/
function getLastCommitDate(username) {
    // GitHub API URL for user events
    const GITHUB_API_URL = `https://api.github.com/users/${username}/events`;

    // Return a new Promise
    return new Promise((resolve, reject) => {
        // Fetch data from the GitHub API
        fetch(GITHUB_API_URL)
            .then(response => {
                // Checks if the response is successful. if not will 'throw' custom error response.
                if (!response.ok) {
                    throw new Error(`Failed to fetch data. Status: ${response.status}`);
                }
                // Parse the response as JSON
                return response.json();
            })
            .then(events => {
                // Filter events to only include PushEvents
                const pushEvents = events.filter(event => event.type === 'PushEvent');

                // Check if there are any push events
                if (pushEvents.length > 0) {
                    // Get the date of the first (which is the latest) push event
                    const lastCommitDate = new Date(pushEvents[0].created_at);
                    // Resolve the promise with the formatted date string
                    resolve(lastCommitDate.toDateString());
                } else {
                    // Reject the promise with an error if no push events are found
                    reject(new Error('No push events found for the specified user.'));
                }
            })
            .catch(error => {
                // Reject the promise with an error if there's any issue during the process
                reject(new Error(`Error fetching data: ${error.message}`));
            });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting and page reload

        let username = document.getElementById("searchBar").value;

        getLastCommitDate(username)
            .then(lastCommitDate => {
                alert(`Last commit date for ${username}: ${lastCommitDate}`);
            })
            .catch(error => {
                console.error(error.message);
            });
        // Reset the input field value to an empty string
        document.getElementById("searchBar").value = "";    });
});







/*---------------------------------------------------------------------------------------------------- EXAMPLE -------*/
// /*make an Ajax call to return the height and weight of rattata*/
// fetch("https://pokeapi.co/api/v2/pokemon/rattata")
//     .then(response => {
//         if (!response.ok) {
//             console.log("The request did not succeed!");
//         }
//         return response.json();
//     })
//     .then(data =>
//         console.log(`This height is: ${data.height}\nThis weight is: ${data.weight}`))
//     .catch(err => console.log(err.message))
//
