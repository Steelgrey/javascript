let value;

const isim = "İbrahim Aykut";
const soyisim = "BAŞ";
const diller = "C#, MVC, SQL"

value = isim + " " + soyisim;
value = isim.concat(" ",soyisim); // İkisi de aynı sonucu veriyor

value = isim.toLowerCase(); // Harfleri küçültüyor
value = isim.toUpperCase(); // Harfleri büyütüyor

value = isim[0]; // 0. Elemanı gösteriyor
value = isim.length; // Eleman sayısını gösteriyor
value = isim[isim.length - 1]; // Son elemanı gösteriyor

value = isim.indexOf("İ"); // İ elemanının yerini gösteriyor. Eğer ki verilen elamanı içermiyorsa -1 değerini verir

value = isim.charAt(0); // value = isim[0]; Aynı değer

value = diller.split(","); // Virgüle göre bölerek dizi oluşturuyor

value = diller.replace("SQL","Javascript"); // Değer değiştirmek

value = diller.includes("Java"); // Değer olup olmadığına bakıyor. True veya false değerlerini döndürüyor

console.log(value);