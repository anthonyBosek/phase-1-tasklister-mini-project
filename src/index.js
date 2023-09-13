document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = document.createElement("li");
    task.innerText = e.target[0].value;
    taskList.appendChild(task);
    e.target.reset();

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    task.appendChild(deleteButton);
    deleteButton.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });
  });
});
