//
//
//
/*--------------------------------------------------------------------------------------------------------------------*/
// Counter to keep track of the number of to-do items made/ deleted
let toDoCount = 0;

/* This event listener waits for when the element with the id of 'to-do-form' to be submitted */
document.getElementById('to-do-form').addEventListener('submit', function (event) {

    /* This prevents the default form submission behavior in the event of a 'submit',
     which is normally to send off the user input to a backend api and refresh the page */
    event.preventDefault();

    // Assigns the value of the element with the id 'to-do' to the variable 'toDoInput'
    const toDoInput = document.getElementById('to-do');

    /* Gets the current value that the user has entered into the input field with the id "to-do" and
     assigns it to the variable toDoText.  */
    const toDoText = toDoInput.value;

    // Checks if the input text isn't empty and that it's not only whitespace
    if (toDoText.trim() !== '') {
        if (toDoCount < 10) {

            /* The function 'createToDoItem' will add a new to-do item = to 'toDoText */
            createToDoItem(toDoText);

            /* After a new element is added the counter will increase by 1 */
            toDoCount++;

        } else {
            /* If there was no applicable input an alert will appear */
            alert("Complete one or more to-dos before adding new ones.");
        }
        // The form input field is then cleared by being set to a blank quote
        toDoInput.value = '';
    } else {
        /*  This alert will appear if there was no applicable input in the submitted form. */
        alert("text cannot be blank")
        toDoInput.value = '';
    }
});


/*------------------------------------------------------------------------------------------------ DONE BUTTON -------*/
/* This event listener waits for a click on the newly created element with the id 'to-do-list */
document.getElementById('to-do-list').addEventListener('click', function (event) {

    // Checks if the clicked element has a class of 'btn-danger'
    if (event.target.classList.contains('btn-danger')) {

        // Finds the closest parent with the 'to-do-item' class and removes it
        const toDoItem = event.target.closest('.to-do-item');
        toDoItem.remove();
        toDoCount--;
    }
});


/*---------------------------------------------------------------------------------- APPEND USER INPUT TO HTML -------*/

// Function to create a new to-do item
function createToDoItem(text) {
    // assigns the 'toDolist' variable to the element with the id 'to-do-list'
    const toDoList = document.getElementById('to-do-list');

    // Creates a new list item element
    const toDoItem = document.createElement('li');

    // Sets the class of the new list item
    toDoItem.className = 'to-do-item list-group-item d-flex justify-content-between align-items-center mx-3';

    // Sets the inner HTML of the new list item
    toDoItem.innerHTML = `<p class="m-0">${text}</p>
        <button class="btn btn-danger">Done</button>`;

    // Append the new list item to the to-do list
    toDoList.appendChild(toDoItem);
}
