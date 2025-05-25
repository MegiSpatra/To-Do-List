const todoList = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");

function updateTime() {
    const now = new Date();
    document.getElementById("time").textContent = now.toLocaleString();
}
updateTime();

function addTask() {
    const taskText = document.getElementById("task").value;
    const priority = document.getElementById("priority").value;
    if (!taskText) return;
    const div = document.createElement("div");
    div.className = "todo-item";
    div.innerHTML = `
        <span>[${priority}] ${taskText}</span>
        <input type="checkbox" onchange="markDone(this)">
      `;
    todoList.appendChild(div);
    document.getElementById("task").value = "";
}

function markDone(checkbox) {
    const item = checkbox.parentElement;
    checkbox.remove();
    item.classList.add("done");
    doneList.appendChild(item);
}

function deleteAll() {
    todoList.innerHTML = "";
    doneList.innerHTML = "";
}