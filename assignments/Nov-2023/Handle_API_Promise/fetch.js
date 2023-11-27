/*GO HERE FOR MORE TOKENS https://github.com/settings/tokens/new
THIS TOKEN WILL NOT WORK AFTER DEC, 27, 2023*/

// fetch(url, {headers: {'Authorization': 'token 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'}})
//     .then(r => )

function getLastCommitDate(username, token) {
    const url = `https://api.github.com/users/${username}/received_events/public`;

    return fetch(url, {
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${token}`,
            'X-GitHub-Api-Version': '2022-11-28'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(events => {
            const commitEvents = events.filter(event => event.type === 'PushEvent');
            if (commitEvents.length > 0) {
                return commitEvents[0].created_at;
            } else {
                throw new Error('No commit events found.');
            }
        });
}

const username = prompt(`What is your-github-username?`);
const token = prompt('What is your-personal-access-token?');

getLastCommitDate(username, token)
    .then(date => console.log(`The last commit was made on: ${date}`))
    .catch(error => console.error(error.message));