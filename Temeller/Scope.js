// Global Scope -> Bu sayfada fonksiyon ve if koşulu dışında kalanlar

// Function Scope -> Fonksiyonun içerisi

// Block Scope -> İf For While içerisi

var value = 10;
let value1 = 20;
const value2 = 30;

function func(){
    var value = 40;
    let value1 = 50;
    const value2 = 60;

    console.log(value,value1,value2);
}
func();

if(true){
    var value = 80;
    let value1 = 90;
    const value2 = 100;
    // Blok içerisinde var ile tanımlanan değişken dışarıda da bulunuyor
    // Fakat let bulunmuyor.
    // Let ve const kullanıldığı zaman aynı isimde oluşturulan değişkenlerin değerleri karışmıyor
}
console.log(value,value1,value2);