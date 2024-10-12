
// Initialize tasks array
let tasks = [];

// Load tasks from Local Storage when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    // Add event listener for adding tasks
    addButton.addEventListener('click', () => {
        addTask(taskInput.value);
    });

    // Add event listener for Enter key to add tasks
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });
});

// Function to load tasks from Local Storage
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = storedTasks;
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Function to add a task
function addTask(taskText, save = true) {
    if (taskText.trim() === '') return; // Ignore empty tasks

    // Create new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';
    removeButton.onclick = () => {
        li.remove(); // Remove from DOM
        removeTaskFromStorage(taskText); // Remove from Local Storage
    };

    // Append button to list item and item to the list
    li.appendChild(removeButton);
    document.getElementById('task-list').appendChild(li);

    if (save) {
        tasks.push(taskText);
        saveTasksToStorage();
    }

    // Clear the input field
    document.getElementById('task-input').value = '';
}

// Function to save tasks to Local Storage
function saveTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to remove a task from Local Storage
function removeTaskFromStorage(taskText) {
    tasks = tasks.filter(task => task !== taskText); // Remove from tasks array
    saveTasksToStorage(); // Update Local Storage
}
