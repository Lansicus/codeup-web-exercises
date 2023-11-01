
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    /* use curly brackets to establish an object in a variable */
    const person = {
        firstName: "Lance",
        lastName: "Burk"
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return (`Hello from ${this.firstName} ${this.lastName}`);
    };
    console.log(person.sayHello())
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
shoppers.forEach((people) => people.amount > 200 ? console.log(`Your old price was $${(people.amount).toFixed(2)}. With a 12% discount of $${(people.amount * .12).toFixed(2)} you'll now be paying $${(people.amount * .88).toFixed(2)}`) : console.log(`With a total of $${(people.amount).toFixed(2)}, you will not receive a discount`));

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    const books = [
        {
            title: ["2920, The Last Year Of The First Era"],
            Book: 1,
            author: {
                firstName: "Peter",
                lastName: "Reuben",
                age: 48
            }
        },
        {
            title: ["The Wolf Queen"],
            Book: 2,
            author: {
                firstName: "John",
                lastName: "Simeon",
                age: 73
            }
        },
        {
            title: ["The Adventures of Eslaf Erol"],
            Book: 3,
            author: {
                firstName: "James",
                lastName: "Issachar",
                age: 26
            }
        },
        {
            title: ["Mannimarco, King Of Worms"],
            Book: 4,
            author: {
                firstName: "Matthew",
                lastName: "Judah",
                age: 19
            }
        },
        {
            title: ["The Great War"],
            Book: 5,
            author: {
                firstName: "Luke",
                lastName: "Benjamin",
                age: 32
            }
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

// for(let i = 0; i < 5; i++) {
//     console.log(books[i].title, books[i].Book, books[i].author.firstName, books[i].author.lastName);
// }
//------------------------
    for(let i = 0; i < 5; i++){
        console.log(`Book # ${[i+1]}
    Titled: ${books[i].title}
    Author: ${books[i].author.firstName} ${books[i].author.lastName}`)
    }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


// const createBook = (title, author) => books{title, author}
// const showBookInfo = (bookObject) =>