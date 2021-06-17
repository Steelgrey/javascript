const isim = "İbrahim Aykut BAŞ";
const depertman = "Yazılım";
const maas = 5000;

const bilgiler = `İsim = ${isim}\n Depertman = ${depertman}\n Maaş = ${maas}`
// Değişkenleri stringe çevirirken + koymak yerine daha güzel bir yapıyla oluşturmak
// `` işaretini yapmak için AltGr+,,
console.log(bilgiler);

function karsilama() {
    return "Merhaba";
}
const html = `
    <ul>
        <li> ${isim} </li>
        <li> ${depertman} </li>
        <li> ${maas} </li>
        <li> ${10 * 2} </li>
        <li> ${karsilama()} </li>
    </ul>
`;
document.body.innerHTML = html; // Yazılan listeyi HTML sayfasına ekliyor
// Normal javascript kodu da yazılabilir
// Fonksiyon da çağrılabilir