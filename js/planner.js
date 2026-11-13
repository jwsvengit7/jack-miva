let tasks = [];

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const emptyMessage = document.getElementById("emptyMessage");

function displayTasks() {
  taskList.innerHTML = "";

  taskCount.textContent = tasks.length;

  if (tasks.length === 0) {
    emptyMessage.style.display = "block";

    return;
  }

  emptyMessage.style.display = "none";

  tasks.forEach(function (task, index) {
    const listItem = document.createElement("li");

    listItem.classList.add("task-item");

    if (task.completed) {
      listItem.classList.add("completed");
    }

    const taskName = document.createElement("span");

    taskName.classList.add("task-name");

    taskName.textContent = task.name;

    const actions = document.createElement("div");

    actions.classList.add("task-actions");

    const completeButton = document.createElement("button");

    completeButton.textContent = task.completed ? "Undo" : "Complete";

    completeButton.classList.add("complete-btn");

    completeButton.addEventListener("click", function () {
      tasks[index].completed = !tasks[index].completed;

      displayTasks();
    });

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-btn");

    deleteButton.addEventListener("click", function () {
      tasks.splice(index, 1);

      displayTasks();
    });

    actions.appendChild(completeButton);

    actions.appendChild(deleteButton);

    listItem.appendChild(taskName);

    listItem.appendChild(actions);

    taskList.appendChild(listItem);
  });
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");

    return;
  }

  const newTask = {
    name: taskText,

    completed: false,
  };

  tasks.push(newTask);

  taskInput.value = "";

  displayTasks();
}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

displayTasks();
