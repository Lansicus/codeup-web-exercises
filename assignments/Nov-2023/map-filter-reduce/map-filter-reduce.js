"use strict"


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

/*--------------------------------------------------------------------------------------------------------- Task 1: --*/
/* Use '.filter' to create an array of user objects where each user object has at least 3 languages in the
 languages array.*/
const usersWithThreeLanguages = users.filter(user => user.languages.length >= 3);
console.log(usersWithThreeLanguages);
// console.log(`Users with 3 or more languages:`);
//
// usersWithThreeLanguages.forEach(user => {
//     console.log(`${user.name} - Languages: ${user.languages.join(', ')}`)
// });


/*--------------------------------------------------------------------------------------------------------- Task 2: --*/
/*Use .map to create an array of strings where each element is a user's email address*/
const emails = users.map(user => user.email)
console.log('User email addresses:', emails);


/*--------------------------------------------------------------------------------------------------------- Task 3: --*/
/* Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use
 the result to calculate the average.*/
let experience = users.reduce((total, user) => total + user.yearsOfExperience, 0)
console.log('Total years of experience:', experience);
let experienceAverage = experience / users.length
console.log('Average years of experience:', experienceAverage);


/*--------------------------------------------------------------------------------------------------------- Task 4: --*/
/* Use .reduce to get the longest email*/
const longestEmail = users.reduce((longest, user) =>
    (user.email.length > longest.length ? user.email : longest), '');
console.log('Longest email:', longestEmail);
/* Explained: if the user email length is greater than the 'longest' value (initially set to an empty string),
 then that user email will return and become the new value of the accumulation parameter 'longest'. The function will
  continue comparing and reassigning 'email.length's that are larger than the most recent 'longest' value until
  every part of the array is seen. */


/*--------------------------------------------------------------------------------------------------------- Task 5: --*/
/* Use .reduce to get the list of usernames in a single string */
const userNamesString = users.reduce((namesString, user, index, array) => {
    namesString += user.name.toLowerCase();
    if (index < array.length - 1) {
        namesString += ', ';
    }
    return namesString;
}, 'Your instructors are: ');
console.log(userNamesString);