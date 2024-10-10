document.addEventListener("DOMContentLoaded", function () {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is not empty
        if (taskText !== "") {
            // Create a new li element
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText; // Set text content to taskText

            // Create a remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove"; // Set button text
            removeButton.classList.add("remove-btn"); // Add class using classList.add

            // Assign an onclick event to the remove button
            removeButton.onclick = function () {
                taskList.removeChild(taskItem); // Remove li from taskList
            };

            // Append the remove button to the li element
            taskItem.appendChild(removeButton);

            // Append the li to the task list
            taskList.appendChild(taskItem);

            // Clear the task input field
            taskInput.value = ""; // Clear input field
        } else {
            alert("Please enter a task."); // Alert if input is empty
        }
    }

    // Attach event listener to the Add Task button
    addButton.addEventListener("click", addTask);

    // Attach event listener for the Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") { // Check if Enter key is pressed
            addTask(); // Call addTask function
        }
    });
});
