const todoInput = document.getElementById("todo");
let element;

element = todoInput;
element = todoInput.classList;

todoInput.classList.add("newClass"); // Yeni class ekleme
todoInput.classList.add("newClass2");

todoInput.classList.remove("newClass2"); // Var olan class'ı silme
element = todoInput;

// Özellik Gösterme
element = todoInput.placeholder; // Etiketin placeholder'ını gösteriyor
element = todoInput.getAttribute("placeholder"); // Üsttekiyle aynı

// Özellik Değiştirme
todoInput.setAttribute("placeholder","Yeni Yazı"); // Placeholder text'ini değiştirme
todoInput.setAttribute("title","Input"); // Üsttekine farklı bir örnek

// Özellik Kaldırma
todoInput.removeAttribute("name"); // Name özelliğini kaldırma
element = todoInput;

element = todoInput.hasAttribute("required"); // İstenen özelliğin olup olmadığını kontrol ediyor
console.log(element);