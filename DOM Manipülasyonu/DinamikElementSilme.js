const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

todos[0].remove(); // Seçilen itemi kaldırma
todoList.removeChild(todoList.lastElementChild); // Son elementi silme
todoList.removeChild(todos[2]);

console.log(todos);
console.log(todoList);