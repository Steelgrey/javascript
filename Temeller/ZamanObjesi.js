let value;

const now = new Date(); // Şu anki zamanı alıyor

const dogumGünüm = new Date("07-25-1997");
const dogumGünüm_ = new Date("July 25 1997");
const _dogumGünüm = new Date("07/25/1997");
// Ay-Gün-Yıl şeklinde yazılıyor

value = dogumGünüm;

value = dogumGünüm.getMonth(); // Kaçıncı ay olduğunu gösteriyor. 0'dan saymaya başlar
value = dogumGünüm.getDate(); // Günü gösteriyor
value = dogumGünüm.getDay(); // Günün haftada kaçıncı gün olduğunu gösteriyor
value = dogumGünüm.getHours(); // Saati gösteriyor
value = dogumGünüm.getFullYear(); // Yılı gösteriyor

dogumGünüm.setMonth(1); // Değerleri sonradan değiştirmek
value = dogumGünüm;

console.log(value);