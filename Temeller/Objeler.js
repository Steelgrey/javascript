let value;
const programmer = {
    isim : "İbrahim Aykut BAŞ",
    yas : 22,
    email : "ibrahimaykutt@gmail.com",
    diller : ["C#,MVC,SQL"],
    adres :{
        sehir : "İstanbul",
        ilce : "Bahçelievler"
    },
    work : function() {
        console.log("Programcı Çalışıyor");
    }
}

value = programmer; // Bütün bilgileri göstermek

value = programmer.email; // Seçili veriyi göstermek
value = programmer["email"]; // Üstekiyle aynı. Ama bence kullanışlı değil

value = programmer.diller;

value = programmer.adres.sehir;

programmer.work(); // Seçili fonksiyonu çalıştırmak

const programmers = [
    {name : "İbrahim Aykut BAŞ",age:22},
    {name : "Özlem DAĞLI",age:20}
];

value = programmers[0].name;

console.log(value);