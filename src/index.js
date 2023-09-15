// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("create-task-form");
//   const taskList = document.getElementById("tasks");

//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const task = document.createElement("li");
//     task.innerText = e.target[0].value;
//     taskList.appendChild(task);
//     e.target.reset();

//     const deleteButton = document.createElement("button");
//     deleteButton.innerText = "X";
//     task.appendChild(deleteButton);
//     deleteButton.addEventListener("click", function (e) {
//       e.target.parentNode.remove();
//     });
//   });
// });

const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

const handleRemove = (e) => {
  e.target.parentNode.remove();
};

const handleSubmit = (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const btn = document.createElement("button");

  btn.textContent = "X";
  btn.addEventListener("click", () => li.remove());

  li.textContent = e.target["new-task-description"].value;
  li.appendChild(btn);
  taskList.appendChild(li);

  e.target.reset();
};

form.addEventListener("submit", handleSubmit);
