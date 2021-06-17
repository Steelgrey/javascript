const element = document.querySelector("#clear-todos");

console.log(element.id); // ID'yi getiriyor
console.log(element.className); // Class name'i getiriyor
console.log(element.classList); // Class list'i getiriyor
console.log(element.classList[0]); // Class list'ten 0. elemanı getiriyor
console.log(element.textContent); // Sadece yazıları getiriyor
console.log(element.innerHTML); // HTML etiketleri dahil her şeyi getiriyor
console.log(element.href); // Gideceği adresi gösteriyor
console.log(element.style); // Style'ları getiriyor

element.className = "btn btn-primary"; // Style özelliğini değiştirme
element.style.color = "#000";
element.style.marginLeft = "50px";
element.href = "https://www.google.com.tr";
element.target = "_blank";
element.textContent = "Güncellenmiş Yazı";
element.innerHTML = "<span style='color:yellow'> Güncellenmiş Yazı </span>";

const elements = document.querySelectorAll(".list-group-item");
elements.forEach(function(item){
    item.style.color = "red";
})


let _element = document.querySelector("li:First-child"); // İlk çocuk
let _element1 = document.querySelector("li:Last-child"); // Son çocuk
let _element2 = document.querySelector("li:nth-child(2)"); // İkinci çocuk
let _element3 = document.querySelectorAll("li:nth-child(odd)"); // Tek numaralı çocuklar
let _element4 = document.querySelectorAll("li:nth-child(even)"); // Çift numaralı çocuklar
// 1'den başlıyor saymaya

_element4.forEach(function(item){
    item.style.background = "#ccc";
    item.style.color = "black";
})

console.log(_element);