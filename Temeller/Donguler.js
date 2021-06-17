let i = 0;
while (i<10) {
    console.log(i);
    i += 1;
}

 let a = 0;
 do {
     console.log(a);
     a += 1;
 } while (a < 10);

 const diller = ["C#","MVC","Javascript"]
 let index = 0;
 while(index<diller.length){
     console.log(diller[index]);
     index += 1;
 } // 1

 const diller = ["C#","MVC","Javascript"]
 for (let item = 0; item < diller.length; item++) {
     const element = diller[item];
     console.log(element);
 } // 2

 const diller = ["C#","MVC","Javascript"]
 diller.forEach(item => {
     console.log(item);
 }); //3 - Otomatik oluşturma -

 const diller = ["C#","MVC","Javascript"]
 diller.forEach(function(diller,index){
    console.log(diller,index);
 }); // 4 - Kursta gösterilen -
 // Dördü de aynı. While - For - Foreach ile yapıldı

 const kullanicilar = [
     {isim : "İbrahim Aykut", yas : 22},
     {isim : "Özlem", yas : 20}
 ];
 const bilgiler = kullanicilar.map(function(kullanicilar) {
    let isimler = kullanicilar.isim;
    let yaslar = kullanicilar.yas;
    return `İsim = ${isimler} Yaş = ${yaslar}`;
    // return kullanicilar.isim;
 });
console.log(bilgiler);

const kullanici = {
    isim : "İbrahim Aykut",
    yas : 22
};
for (let key in kullanici){
    console.log(key,kullanici[key]);
}