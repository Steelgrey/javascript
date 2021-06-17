function merhaba(isim,yas) {
    if(typeof isim === "undefined") isim = "Bilgi Yok";

    if(typeof yas === "undefined") yas = "Bilgi Yok";
    
    console.log(`İsim = ${isim}\n Yaş = ${yas}`);
}
merhaba();

function merhaba(isim = "Bilgi Yok", yas = "Bilgi Yok") {
    if(typeof isim === "undefined") isim = "Bilgi Yok";

    if(typeof yas === "undefined") yas = "Bilgi Yok";
    
    console.log(`İsim = ${isim}\n Yaş = ${yas}`);
}
merhaba();
// İkisi de aynı. Üsttekinde if ile sorgulama yapılıyor. Alttakinde direkt değer veriliyor

//Return'ün Önemi
//Örnek - 1
function kare(sayi){
    console.log(sayi*sayi);
}
function kup(sayi){
    console.log(sayi*sayi*sayi);
}
let deger = kup(kare(4));
console.log(deger); // Çıktısı 16 ve Nan
//Örnek - 2
function _kare(sayi){
    return sayi*sayi;
}
function _kup(sayi){
    return sayi*sayi*sayi;
}
let sonuc = _kup(_kare(4));
console.log(sonuc); // Çıktısı 4096
// Çünkü Örnek - 1'de değeri hesapladı fakat döndürmedi
// Fakat Örnek - 2'de değeri hesaplayıp değeri döndürdü. Böylece yeniden bir işlem yapılabildi
// Not : return'den sonra yazılanlar görevini yerine getirmez

const _merhaba = function(isim){
    if (isim != null) {
        karsilama = console.log(`Merhaba ${isim}`);
    }
    else{
        isim = "Bilgi Yok";
        karsilamaYok = console.log(isim);
    }
}
_merhaba("İbrahim Aykut");

(function(isim){
    console.log(`Merhaba ${isim}`);
})("İbrahim Aykut"); // IIFE

const database = {
    host:"localhost",
    add:function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
        console.log(`Id = ${id} Güncellendi`);
    },
    delete:function(id){
        console.log(`Id = ${id} Silindi`);
    }
}

console.log(database.host);
database.add();
database.delete(10);