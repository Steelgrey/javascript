let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;


// Child Nodes => Text Dahil Alıyor
value = todoList.childNodes; // 9 tane bulmasının sebebi etiketler arasında boşluk bırakılması
value = todoList.childNodes[0];

// Children => Elementleri Alıyor Sadece
value = todoList.children;
value = todoList.children[0];
value = todoList.children[2].textContent = "Değişti"; // Elementin text kısmını değiştirme

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent="Yeni Başlık"; // Çocuğunun tekrar çocuğuna erişmek

value = todoList;
value = todoList.firstElementChild; // İlk çocuğa erişmek
value = todoList.lastElementChild; // Son çocuğa erişmek
value = todoList.children.length; // Kaç tane çocuk olduğunu gösteriyor
value = todoList.childElementCount; // Üsttekiyle aynı

// Ebeveynler
value = cardrow;
value = cardrow.parentElement; // Ebeveynini gösteriyor
value = cardrow.parentElement.parentElement; // Ebeveynin ebeveynini gösteriyor

// Element Kardeşleri
value = todo;
value = todo.previousElementSibling; // Seçilen elementin bir öncekine gidiyor
value = todo.nextElementSibling; // Seçilen elementin bir sonrakine gidiyor
value = todo.nextElementSibling.nextElementSibling; // Seçilen elementin 2 sonrakine gidiyor

value = todo.previousElementSibling.previousElementSibling; // Sonuç null. Çünkü seçilen 2. elementin bir önceki elementi var fakat başka yok.
console.log(value);