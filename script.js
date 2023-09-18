let totalTasks = 0;
const taskList = document.getElementById('todo-list');
const taskInput = document.getElementById('task-input');
const taskCount = document.getElementById('taskCount');
const tasks = []; // Array to store tasks
const noTaskMessage = document.getElementById('no-task-msg');

// Function to hide the "no tasks" message
function showNoTaskMessage() {
    noTaskMessage.style.display = 'none';
}

// Function to hide the "no tasks" message
function hideNoTaskMessage() {
    noTaskMessage.style.display = 'block';
}


// Handle Enter key press in the input field to add a task
taskInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        addTodo();
    }
});

function createTaskElement(task) {
    // Create a new list item element
    const li = document.createElement('li');
    // Set the inner HTML of the list item to include task information and delete button.
    li.innerHTML = `
        <div class="task-info">
            <input type="checkbox" class="checkbox" onclick="toggleTask(${task.id})" ${task.completed ? 'checked' : ''}>
            <span>${task.title}</span>
        </div>
        <button class="delete-button" onclick="deleteTodo(${task.id})">
            <img src="assets/delete.png" alt="delete-sign">
        </button>`;

    // Add the completed class to the list item if the task is completed.
    if (task.completed) {
        li.classList.add('completed');
    }
    li.id = task.id;
    return li;
}

function addTodo() {
    const text = taskInput.value.trim();
    // check if the input is empty
    if (text === '') {
        alert('Please enter a task');
        return;
    }
    if (totalTasks === 1) {
        hideNoTaskMessage();
    }
    // Creating a task object
    const task = {
        id: Date.now(),
        title: text,
        completed: false,
    };

    // Add task to the tasks array
    tasks.push(task);
    const li = createTaskElement(task);
    taskList.appendChild(li);
    totalTasks++;
    taskCount.innerText = totalTasks
    taskInput.value = '';

    // No message if there is a task present in the list
    if (totalTasks > 0) {
        showNoTaskMessage();
    }
}

function deleteTodo(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        // Remove task from the tasks array
        tasks.splice(taskIndex, 1);
        const taskElement = document.getElementById(taskId);

        // Removing the task item if it is present
        if (taskElement) {
            taskList.removeChild(taskElement);
            totalTasks--;
            taskCount.innerText = totalTasks
        }
        // Display the message if no task is created yet
        if (totalTasks === 0) {
            hideNoTaskMessage();
        }
    }
}

// function to toggle the state of the created task
function toggleTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        // Toggling the state
        tasks[taskIndex].completed = !tasks[taskIndex].completed; // Update completed status
        const taskElement = document.getElementById(taskId);

        // Changing the state if the taskElement is present
        if (taskElement) {
            const checkbox = taskElement.querySelector('.checkbox');
            checkbox.checked = tasks[taskIndex].completed;
            taskElement.classList.toggle('completed', tasks[taskIndex].completed);
        }
    }
}

