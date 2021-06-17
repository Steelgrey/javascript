let element;

element = document.getElementById("todo-form");
// Element id'ye göre seçme

element = document.getElementsByClassName("list-group-item");
element = document.getElementsByClassName("list-group-item")[0];
// Element class'a göre seçme

element = document.getElementsByTagName("li");
// Element tag'e göre seçme

element = document.querySelector("#todo-form");
element = document.querySelector(".list-group-item");
// Sadece ilk elementi getiriyor

element = document.querySelectorAll(".list-group-item");
// Bütün elementleri getiriyor

element.forEach(function(item){
    console.log(item);
})

console.log(element); // Değer yoksa null döner
