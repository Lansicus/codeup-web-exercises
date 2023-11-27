

********************** THE HTML REFERENCES BOOTSTRAP VERSION 5.3.0 **********************


# To-Do List App

## Description
A to-do app that allows users to add and complete their tasks. Users can submit new tasks through a form,
each task is then displayed as a list item. The app provides a "Done" button to mark tasks as completed and
remove them from the list.


## Usage
1. Enter a to-do item in the input field.
2. Click the "Add To-Do" button to add the task to the list.
3. To mark a task as done, click the "Done" button next to the task.
4. The task will be removed from the list.


-------------------------------------------------------------------------------


### Explaining the Code

Form Submission Handling:

The code starts by selecting the form with the id 'to-do-form'.
It adds an event listener for the 'submit' event.
The event listener prevents the default form submission behavior using event.preventDefault().
It retrieves the value from the input field (to-do) and trims any leading or trailing whitespace.
If the trimmed text is not empty, it calls the createToDoItem function to add a new to-do item to the list.
To-Do List Click Handling:

The code listens for clicks on the to-do list (to-do-list).
It checks if the clicked element has the class btn-danger, which indicates a click on the "Done" button.
If the condition is met, it finds the closest ancestor with the class to-do-item (parent list item) and removes it from the DOM.
createToDoItem Function:

This function is responsible for creating a new to-do item.
It takes the text parameter as the content for the to-do item.
It creates a new list item element and sets its class and inner HTML.
The inner HTML includes a paragraph (<p>) for the to-do text and a "Done" button (<button>).
The new list item is then appended to the to-do list.