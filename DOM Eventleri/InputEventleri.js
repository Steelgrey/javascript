const filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded",load);
function load(e){
    console.log("Sayfa Yüklendi");
}

// Focus => Input'a Tıklandığı Zaman Çalışır
filter.addEventListener("focus",run);
function run(e){
    console.log(e.type);
}

// Bluer => Input'a Tıkladıktan Sonra Başka Yere Tıklandığı Zaman Çalışır
filter.addEventListener("blur",run);
function run(e){
    console.log(e.type);
}

// Paste => Input'a Bir Yazı Yapıştırıldığı Zaman Çalışır
filter.addEventListener("paste",run);
function run(e){
    console.log(e.type);
}

// Copy => Inputtaki Yazı Kopyalandığı Zaman Çalışır
filter.addEventListener("copy",run);
function run(e){
    console.log(e.type);
}

// Cut => Inputtaki Yazı Kesildiği Zaman Çalışır
filter.addEventListener("cut",run);
function run(e){
    console.log(e.type);
}

// Select => Inputtaki Yazı Seçildiği Zaman Çalışır
filter.addEventListener("select",run);
function run(e){
    console.log(e.type);
}