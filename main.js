/*
// Define some constants and variables
const notStartedTasks = document.getElementById("not-started-tasks");
const inProgressTasks = document.getElementById("in-progress-tasks");
const completedTasks = document.getElementById("completed-tasks");

let tasks = {
  "not-started": [],
  "in-progress": [],
  completed: [],
};

// Load tasks from local storage
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  updateTasksUI();
}

// Add event listener for drag and drop functionality
document.querySelectorAll(".tasks").forEach((tasks) => {
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    tasks.addEventListener(
      eventName,
      (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      false
    );
  });

  tasks.addEventListener("drop", handleDrop, false);
});

// Show/hide add task modal
function showAddTaskModal(columnId) {
  const modal = document.getElementById("add-task-modal");
  modal.style.display = "block";
  modal.dataset.columnId = columnId;
  document.getElementById("task-name").focus();
}

function hideAddTaskModal() {
  const modal = document.getElementById("add-task-modal");
  modal.style.display = "none";
  modal.dataset.columnId = "";
  document.getElementById("task-name").value = "";
  document.getElementById("add-task-submit-btn").disabled = false;
}

// Add task functionality
function addTask() {
  const taskNameInput = document.getElementById("task-name");
  const taskName = taskNameInput.value.trim();

  if (!taskName) {
    alert("Please enter a task name.");
    return;
  }

  const columnId = document.getElementById("add-task-modal").dataset.columnId;

  tasks[columnId].push({
    id: generateId(),
    name: taskName,
  });

  updateTasksUI();
  saveTasksToLocalStorage();
  hideAddTaskModal();
}

// Generate unique ID using current timestamp
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Update task functionality
function updateTask(taskId, columnName) {
  const taskName = prompt("Enter new task name:");
  if (!taskName) {
    return;
  }

  const taskIndex = tasks[columnName].findIndex((task) => task.id === taskId);
  tasks[columnName][taskIndex].name = taskName;

  updateTasksUI();
  saveTasksToLocalStorage();
}

// Remove task functionality
function removeTask(taskId, columnName) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (!confirmDelete) {
    return;
  }

  tasks[columnName] = tasks[columnName].filter((task) => task.id !== taskId);

  updateTasksUI();
  saveTasksToLocalStorage();
}

// Save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update UI with current tasks
function updateTasksUI() {
  notStartedTasks.innerHTML = "";
  inProgressTasks.innerHTML = "";
  completedTasks.innerHTML = "";

  Object.entries(tasks).forEach(([columnName, columnTasks]) => {
    columnTasks.forEach((task) => {
      const taskEl = document.createElement("li");
      taskEl.setAttribute("draggable", true);
      taskEl.classList.add("task");
      taskEl.dataset.id = task.id;
      taskEl.dataset.column = columnName;
      taskEl.innerHTML = `
            <span>${task.name}</span>
            <div class="task-icons">
                <svg onclick="updateTask('${task.id}', '${columnName}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M11.354 1.146a.5.5 0 0 1 .708 0l2.792 2.792A.5.5 0 0 1 15 4v7.5a.5.5 0 0 1-.5.5H7.5a.5.5 0 0 1-.5-.5V11a.5.5 0 0 1 .146-.354L11.354 6.5a.5.5 0 0 1 0 .708L7.707 10.854a1.5 1.5 0 0 1-2.121 0L.146 6.146a.5.5 0 0 1 0-.708L3.793 2.146a.5.5 0 0 1 .708 0L8 5.5a.5 0 0 1 0 .708L4.854 8.146a1.5 1.5 0 0 1 0-2.121L8.5 2.146a.5.5 0 0 1 .708 0l2.146 2.146z"/> </svg> 
                    <svg onclick="removeTask('${task.id}', '${columnName}')" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M13.5 4h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zM5.5 6a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5z"/>
                </svg>
             </div> ; `;
      document.getElementById(`${columnName}-tasks`).appendChild(taskEl);
    });
  });
}
// Drag and drop functionality
let currentDraggedTask;

function handleDrop(e) {
  const sourceColumn = currentDraggedTask.dataset.column;
  const targetColumn = e.target.closest(".column").id.replace("-column", "");

  if (sourceColumn !== targetColumn) {
    const taskId = currentDraggedTask.dataset.id;
    const taskIndex = tasks[sourceColumn].findIndex(
      (task) => task.id === taskId
    );
    const task = tasks[sourceColumn][taskIndex];
    tasks[sourceColumn].splice(taskIndex, 1);
    tasks[targetColumn].push(task);
    updateTasksUI();
    saveTasksToLocalStorage();
  }
}

document.addEventListener("dragstart", function (e) {
  if (e.target.classList.contains("task")) {
    currentDraggedTask = e.target;
  }
});

document.addEventListener("dragend", function (e) {
  currentDraggedTask = null;
});
*/

// Define some constants and variables
const notStartedTasks = document.getElementById("not-started-tasks");
const inProgressTasks = document.getElementById("in-progress-tasks");
const completedTasks = document.getElementById("completed-tasks");

let tasks = {
  "not-started": [],
  "in-progress": [],
  completed: [],
};

// Load tasks from local storage
if (localStorage.getItem("tasks")) {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  updateTasksUI();
}

// Add event listener for drag and drop functionality
document.querySelectorAll(".tasks").forEach((tasks) => {
  ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
    tasks.addEventListener(
      eventName,
      (e) => {
        e.preventDefault();
        e.stopPropagation();
      },
      false
    );
  });

  tasks.addEventListener("drop", handleDrop, false);
});

// Show/hide add task modal

function showAddTaskModal(columnId) {
  const modal = document.getElementById("add-task-modal");
  modal.style.display = "block";
  modal.dataset.columnId = columnId;
  document.getElementById("task-name").focus();
}

/*
function showAddTaskModal(columnId) {
  // ... existing code here ...
  const modal = document.getElementById("add-task-modal");
  modal.style.display = "block";
  modal.dataset.columnId = columnId;
  document.getElementById("task-name").focus();

  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.id = "task-name";
  taskInput.placeholder = "Enter task name";
  modal.insertBefore(taskInput, modal.firstChild);
  taskInput.focus();

  // Add event listener for keydown event
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  });
}
*/
function hideAddTaskModal() {
  const modal = document.getElementById("add-task-modal");
  modal.style.display = "none";
  modal.dataset.columnId = "";
  document.getElementById("task-name").value = "";
  document.getElementById("add-task-submit-btn").disabled = false;
}

// Add task functionality
function addTask() {
  const taskNameInput = document.getElementById("task-name");
  const taskName = taskNameInput.value.trim();

  if (!taskName) {
    alert("Please enter a task name.");
    return;
  }

  const columnId = document.getElementById("add-task-modal").dataset.columnId;

  tasks[columnId].push({
    id: generateId(),
    name: taskName,
  });

  updateTasksUI();
  saveTasksToLocalStorage();
  hideAddTaskModal();
}

// Generate unique ID using current timestamp
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Update task functionality
function updateTask(taskId, columnName) {
  const taskEl = document.querySelector(
    `[data-id="${taskId}"][data-column="${columnName}"]`
  );
  const taskNameEl = taskEl.querySelector("span");

  const taskName = taskNameEl.textContent;
  taskNameEl.innerHTML = "";

  const taskInput = document.createElement("input");
  taskInput.type = "text";
  taskInput.id = "update-task-name";
  taskInput.value = taskName;
  taskInput.addEventListener("blur", () => {
    const newTaskName = taskInput.value.trim();
    if (!newTaskName) {
      taskNameEl.textContent = taskName;
    } else {
      const taskIndex = tasks[columnName].findIndex(
        (task) => task.id === taskId
      );
      tasks[columnName][taskIndex].name = newTaskName;
      taskNameEl.textContent = newTaskName;
      saveTasksToLocalStorage();
    }
    taskNameEl.removeChild(taskInput);
  });
  taskNameEl.appendChild(taskInput);
  taskInput.focus();
}

// Remove task functionality
function removeTask(taskId, columnName) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");
  if (!confirmDelete) {
    return;
  }

  tasks[columnName] = tasks[columnName].filter((task) => task.id !== taskId);

  updateTasksUI();
  saveTasksToLocalStorage();
}

// Save tasks to local storage
function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Update UI with current tasks
function updateTasksUI() {
  notStartedTasks.innerHTML = "";
  inProgressTasks.innerHTML = "";
  completedTasks.innerHTML = "";

  Object.entries(tasks).forEach(([columnName, columnTasks]) => {
    columnTasks.forEach((task) => {
      const taskEl = document.createElement("li");
      taskEl.setAttribute("draggable", true);
      taskEl.classList.add("task");
      taskEl.dataset.id = task.id;
      taskEl.dataset.column = columnName;

      const taskNameEl = document.createElement("span");
      taskNameEl.textContent = task.name;
      taskNameEl.addEventListener("dblclick", () => {
        updateTask(task.id, columnName);
      });
      taskEl.appendChild(taskNameEl);

      const taskIconsEl = document.createElement("div");
      taskIconsEl.classList.add("task-icons");

      const updateIconEl = document.createElement("ion-icon");
      updateIconEl.setAttribute("name", "create-outline");
      updateIconEl.addEventListener("click", () => {
        updateTask(task.id, columnName);
      });
      taskIconsEl.appendChild(updateIconEl);

      const deleteIconEl = document.createElement("ion-icon");
      deleteIconEl.setAttribute("name", "trash-outline");
      deleteIconEl.addEventListener("click", () => {
        removeTask(task.id, columnName);
      });
      taskIconsEl.appendChild(deleteIconEl);

      taskEl.appendChild(taskIconsEl);

      if (columnName === "not-started") {
        notStartedTasks.appendChild(taskEl);
      } else if (columnName === "in-progress") {
        inProgressTasks.appendChild(taskEl);
      } else if (columnName === "completed") {
        completedTasks.appendChild(taskEl);
      }
    });
  });
}

///// drag and drop

// Drag and drop functionality
let currentDraggedTask;

function handleDrop(e) {
  const sourceColumn = currentDraggedTask.dataset.column;
  const targetColumn = e.target.closest(".column").id.replace("-column", "");

  if (sourceColumn !== targetColumn) {
    const taskId = currentDraggedTask.dataset.id;
    const taskIndex = tasks[sourceColumn].findIndex(
      (task) => task.id === taskId
    );
    const task = tasks[sourceColumn][taskIndex];
    tasks[sourceColumn].splice(taskIndex, 1);
    tasks[targetColumn].push(task);
    updateTasksUI();
    saveTasksToLocalStorage();
  }
}

document.addEventListener("dragstart", function (e) {
  if (e.target.classList.contains("task")) {
    currentDraggedTask = e.target;
  }
});

document.addEventListener("dragend", function (e) {
  currentDraggedTask = null;
});
