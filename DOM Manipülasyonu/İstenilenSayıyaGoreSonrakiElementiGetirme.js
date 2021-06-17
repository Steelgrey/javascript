let value;

const todo = document.querySelector(".list-group-item:nth-child(1)");

value = todo;

let tekrar = 3;

for (let index = 0; index < tekrar; index++) {
    
    value = value.nextElementSibling;
}

console.log(value);