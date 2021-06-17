alert("Merhaba");

const cevap = confirm("Emin Misiniz?");
if (cevap) {
    console.log("İşlem Tamamlandı");
}
else {
    console.log("İşlem İptal Edildi");
} // Kullanıcıya Soruyor

const _cevap = prompt("2 + 2 = ?");
console.log(_cevap);
if(_cevap == 4){
    console.log("İşlem Devam Ediyor");
}
else {
    console.log("Cevap Yanlış");
} // Kullanıcıya Input Sunmak 

let value;
value = window; // Konsol ekranında windows objesini gösteriyor
value = window.location; // Konsol ekranında location özelliklerini gösteriyor
value = window.location.host; // Konsol ekranında host bilgilerini gösteriyor - 127.0.0.1:5500 -
value = window.location.hostname; // Konsol ekranında ilk bölümü alıyor - 127.0.0.1 -
value = window.location.port; // Konsol ekranında ikinci bölümü alıyor. - 5500 -
value = window.location.href; // Konsol ekranında bütün bilgileri gösteriyor. - http://127.0.0.1:5500/index.html -
console.log(value);

if(confirm("Sayfa Yenilensin mi?")){
    window.location.reload();
}
else {
    alert("Yenileme İşlemi İptal Edildi");
} 

let value;
value = window.outerHeight; // Yükseklik piksel uzunluğu
value = window.outerWidth; // Genişlik piksel uzunluğu
// Bütün çerçeveyi alıyor
value = window.innerHeight; // Yükseklik piksel uzunluğu
value = window.innerWidth; // Genişlik piksel uzunluğu
// Sadece sayfa içerisini alıyor
console.log(value);

let value;
value = window.scrollX; // Scrollun kenardan ne kadar uzaklaştığı. Yatay
value = window.scrollY; // Scrollun kenardan ne kadar uzaklaştığı. Dikey
console.log(value);