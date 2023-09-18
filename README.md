# todolist
# Todo list app

### General steps to follow when creating this project

- UI Design
  - Design the user interface to be intuitive and easy to use.
  - Create elements for adding Todos, displaying the Todo list, and showing the total number of tasks.

- Functionality
	- Add a TODO: Allow users to add new tasks to the list.
	- Delete a TODO: Enable users to remove tasks from the list.
	- check task: Allow users to mark tasks as completed or incomplete.
	- total items count: Display the total number of tasks in real-time.

- Data
	- tasks - an array for storing data
	- task - {done, text, id}

- Functions (in code)
	- addTodo: Function to add a new Todo item.
	- deleteTodo: Function to remove a Todo item.
	- toggleTask: Function to toggle the completion status of a task.
	- createTaskElement: Function to create HTML elements for a task.
	- showNoTaskMessage: Function to display a message when there are no tasks.
  - hideNoTaskMessage: Function to hide the message when tasks are present.

- Usage
  - Open index.html in a web browser.
  - Enter a task in the input field and click "Add Todo" to add it to the list.
  - Click on a task to mark it as completed, or click the delete button to remove a task.
  - The total task count is displayed at the bottom.
