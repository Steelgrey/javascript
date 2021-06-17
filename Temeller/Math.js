let value;
value = Math.round(5.7); // Ondalıklı kısma göre aşağı veya yukarı yuvarlıyor
value = Math.ceil(5.7); // Bir yukarı yuvarlıyor
value = Math.floor(5.7); // Bir aşağıya yuvarlıyor
value = Math.sqrt(16); // Karekök
value = Math.abs(-5); // Mutlak Değer
value = Math.pow(5,7); // Üssünü almak. Birinci değer taban ikinci değer üs
value = Math.max(1,2,3,4); // En büyük sayıyı bulmak
value = Math.min(1,2,3,4); // En küçük sayıyı bulmak
value = Math.random(); // 0-1 arasında sayı üretir. Üst sınır dahil değil
value = Math.random() * 20 // 0-20 arasında sayı üretir
value = Math.round(Math.random() *20); // Rasgele üretilen sayıyı yuvarlayarak gösterir
console.log(value);

// Veri tiplerinin dönüştürülmesi
// Stringe çevirme
let value;
value = String(57);
value = (57).toString();
// Sayılara çevirme
value = Number(57);