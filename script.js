let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  taskList.forEach((task, index) => {
    list.innerHTML += `<li>${task} <button onclick="removeTask(${index})">X</button></li>`;
  });
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    taskList.push(input.value);
    input.value = "";
    renderTasks();
  }
}

function removeTask(index) {
  taskList.splice(index, 1);
  renderTasks();
}

renderTasks();
