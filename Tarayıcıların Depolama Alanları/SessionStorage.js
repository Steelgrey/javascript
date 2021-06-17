// Session Storage - Key ve Value

// Butonları Seçmek
const add = document.querySelector("#add");
const dell = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputları Seçmek

const addKey =  document.querySelector("#addkey");
const addValue =  document.querySelector("#addvalue");
const deleteKey =  document.querySelector("#deletekey");

add.addEventListener("click",addItem);
dell.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItems);

function addItem(e){
    sessionStorage.setItem(addKey.value,addValue.value);
    // Aynı key değeri varsa yeni bir key eklemiyor value değerini değiştiriyor
}

function deleteItem(e){
    sessionStorage.removeItem(deleteKey.value);
}

function clearItems(e){
    sessionStorage.clear();
}