// var
// let Aynı isimde değişken olamaz
// const Değişkenin değeri sonradan değiştirilemez
let deger;
const secim = "+";

function topla(sayi,sayi1){
    deger = sayi+sayi1;
    console.log(`${sayi} + ${sayi1} = ${deger}`)
}
function cikart(sayi,sayi1){
    deger = sayi-sayi1;
    console.log(`${sayi} - ${sayi1} = ${deger}`)
}
function carp(sayi,sayi1){
    deger = sayi*sayi1;
    console.log(`${sayi} * ${sayi1} = ${deger}`)
}
function bol(sayi,sayi1){
    deger = sayi/sayi1;
    console.log(`${sayi} / ${sayi1} = ${deger}`)
}
if(secim == "+"){
    topla(10,20);
}
else if(secim == "-"){
    cikart(10,20);
}
else if(secim == "*"){
    carp(10,20);
}
else if(secim == "/"){
    bol(10,20);
}
else {
    console.log("Hatalı Giriş");
}