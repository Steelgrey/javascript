/* 
    Call fonksiyonu, verilen this anahtar değeriyle (obje) ve bağımtısz
    olarak sağlanan bağımsız argümanlarla bir fonksiyonu çağırır.
    Argümanlar fonksiyona tek tek gönderilir.

    Apply fonksiyonu, verilen this anahtar değeriyle (obje) ve bağımsız
    olarak sağlanan değişkenlerle bir fonksiyonu çağırır.
    Argümanlar fonksiyona argüman listesi şeklinde gönderilir.
    
    Bind fonksiyonu, bir fonksiyonu bir objeye bağlar.

    Call ve apply ekstra bir fonksiyon üretmiyor. Fakat bind
    kopya bir fonksiyon üretiyor.
 */

 const obj = {
     number : 10,
     number1 : 20
};

const obj1 = {
    number : 30,
    number1 : 40
};

function addNumbers(number3,number4){
    console.log(this.number + this.number1 + number3 + number4);
}

addNumbers.call(obj,100,200);
addNumbers.call(obj1,100,200);

addNumbers.apply(obj,[100,200]);
addNumbers.apply(obj1,[100,200]);

function getNumbersTotal(number3,number4){
    return this.number + this.number1 + number3 + number4;
}

const copyFunc = getNumbersTotal.bind(obj);
const copyFunc1 = getNumbersTotal.bind(obj1);

console.log(copyFunc(100,200));
console.log(copyFunc1(100,200));