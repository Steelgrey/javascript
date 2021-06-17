// Keypress => Sadece harfler ve rakamlar
document.addEventListener("keypress",run);

function run(e){
    console.log(e.which); // Basılan tuşu ASCII kodu ile gösteriyor
    console.log(e.key); // Basılan tuşu gösteriyor
    console.log("Çalıştı");
}

// Keydown => Tuşa basıldığı an çalışıyor
document.addEventListener("keydown",run);

function run(e){
    console.log(e.key);
}

// Keyup => Tuşa basmayı bırakınca çalışıyor
document.addEventListener("keyup",run);

function run(e){
    console.log(e.key);
}

// Keydown ve Keyup bütün tuşlar için geçerli