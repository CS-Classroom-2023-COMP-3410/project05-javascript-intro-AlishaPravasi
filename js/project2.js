const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const filterButtons = document.querySelectorAll(".filter-btn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save tasks to localStorage
const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Render tasks on the page
const renderTasks = (filter = "all") => {
    taskList.innerHTML = "";

    tasks
        .filter((task) => {
            if (filter === "completed") return task.completed;
            if (filter === "pending") return !task.completed;
            return true;
        })
        .forEach((task, index) => {
            const taskItem = document.createElement("li");
            taskItem.className = `task-item ${task.completed ? "completed" : ""}`;
            taskItem.draggable = true;
            taskItem.dataset.index = index;

            taskItem.innerHTML = `
                <span>${task.text}</span>
                <div class="task-actions">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            // Toggle completion
            taskItem.addEventListener("click", (e) => {
                if (!e.target.classList.contains("edit-btn") && !e.target.classList.contains("delete-btn")) {
                    tasks[index].completed = !tasks[index].completed;
                    saveTasks();
                    renderTasks(filter);
                }
            });

            // Edit task
            taskItem.querySelector(".edit-btn").addEventListener("click", () => {
                const newText = prompt("Edit task:", task.text);
                if (newText !== null) {
                    tasks[index].text = newText;
                    saveTasks();
                    renderTasks(filter);
                }
            });

            // Delete task
            taskItem.querySelector(".delete-btn").addEventListener("click", () => {
                tasks.splice(index, 1);
                saveTasks();
                renderTasks(filter);
            });

            // Drag and drop
            taskItem.addEventListener("dragstart", () => {
                taskItem.classList.add("dragging");
            });

            taskItem.addEventListener("dragend", () => {
                taskItem.classList.remove("dragging");
                saveTasks();
            });

            taskList.appendChild(taskItem);
        });

    // Update active filter button
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    document.querySelector(`[data-filter="${filter}"]`).classList.add("active");
};

// Reorder tasks using drag-and-drop
taskList.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    const afterElement = Array.from(taskList.children).find((child) => {
        return e.clientY < child.getBoundingClientRect().top + child.offsetHeight / 2;
    });

    if (afterElement) {
        taskList.insertBefore(dragging, afterElement);
    } else {
        taskList.appendChild(dragging);
    }

    // Update task order in the array
    const updatedTasks = Array.from(taskList.children).map((child) => {
        return tasks[child.dataset.index];
    });

    tasks = updatedTasks;
});

// Add new task
addTaskButton.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text, completed: false });
        taskInput.value = "";
        saveTasks();
        renderTasks();
    }
});

// Filter tasks
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        renderTasks(button.dataset.filter);
    });
});

// Initialize the app
renderTasks();
