// Destructing
arr = [100,200,300,400];
const [number1,number2] = arr;
console.log(number1,number2);


// Obje Destructing
const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};
const {a:number1,c:number2,e:number3} = numbers;
console.log(number1,number2,number3);

// Function Destructing
const getLangs = () => ["C#","JS","Python"];
const [lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3);

const person = {
    name:"İbrahim Aykut",
    year:1997,
    salary:4000,
    showInfos : () => console.log("Bilgiler Gösteriliyor")
}
const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;
console.log(isim,yil,maas);
bilgileriGoster();