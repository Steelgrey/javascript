const langs = ["C#","JS","Swift"];
console.log(...langs); // Yan yana yazdırmak

const langs_ = ["Python","Java",...langs]; // İki diziyi birleştiriyor
console.log(...langs_);

const numbers  = [1,2,3,4,5,6,7,8,9];
const [a,b,...numbers2] = numbers; // İlk iki elemanı alıyor. Gerisini yeni bir dizi yapıyor
console.log(a,b);
console.log(numbers2);

const addNumbers = (x,y,z) => console.log(x+y+z);
const numbers_ = [100,200,300];
addNumbers(...numbers_);