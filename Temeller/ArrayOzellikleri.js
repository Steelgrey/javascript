let value;

const dizi = [10,20,30,40,50,60,70];

const dizi2 = new Array(1,2,3,4,5,6,7); // İkisi de dizi oluşturuyor

const diller = ["C#","MVC","SQL","Javascript"];

const diller2 = ["C#","MVC","SQL","Javascript", 57];

value = dizi.length;

value = dizi[0];

value = dizi[dizi.length - 1];

dizi[0] = 1; // 0. Elemanın değerini değiştirmek
value = dizi;

value = dizi.indexOf(1); // Kaçıncı sırada olduğunu gösteriyor

dizi.push(80); // Dizinin sonuna ekliyor
value = dizi;

dizi.unshift(0); // Dizinin başına ekliyor
value = dizi;

dizi.pop(); // Dizinin sonundan çıkartma yapıyor
value = dizi;

dizi.shift(); // Dizinin başından çıkartma yapıyor
value = dizi;

value.splice(0,3); // İki değer arasındaki sayıları çıkartma. Üst değer dahil değil
value = dizi;

value.reverse(); // Diziyi ters çeviriyor
value = dizi;

value = dizi.sort(); // Küçüktük büyüğüe sıralıyor. Fakat ilk rakama bakıyor sadece

value = dizi.sort(function (x,y) {
    return x - y;
}); // Küçükten büyüğe sıralamak

value = dizi.sort(function (x,y) {
    return y - x;
}); // Büyükten küçüğe sıralamak
console.log(value);

// Değişken const ile tanımlıykan diziye sonradan nasıl eleman eklenir?
const dizi = [0,1,2,3];
console.log(dizi);
dizi.push(4);
console.log(dizi);