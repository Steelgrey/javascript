// Local Storage

// SetItem
localStorage.setItem("Iphone SE","5000");

// GetItem
const value = localStorage.getItem("Iphone");
console.log(value);
console.log(typeof value);

// Clear Local Storage
localStorage.clear();

console.log(localStorage.getItem("Iphone")); // Değerin Olup Olmadığını Kontrol Ediyor

if(localStorage.getItem("Iphone SE") === null){
    console.log("Sorguladığınız Veri Bulunmuyor");
}
else {
    console.log("Sorguladığınız Veri Bulunuyor");
}

// Local Storage - Array Yazmak
const todos = ["Todo - 1","Todo - 2","Todo - 3"];
localStorage.setItem("todos",JSON.stringify(todos)); // Arraymiş gibi stringe çeviriyor
const _value = JSON.parse(localStorage.getItem("todos")); // Array olarak almak
console.log(_value);

// Local Storage Eklemek
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoInput.value;
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    
    localStorage.setItem("todos",JSON.stringify(todos));

    e.prevenDefault();
}