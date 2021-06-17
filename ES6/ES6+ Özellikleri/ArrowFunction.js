const merhaba = () => {
    console.log("Merhaba");
}
merhaba();

const merhaba_ = (firstName) => {
    console.log(`Merhaba ${firstName}`);
} // Tek parametre varsa parantez koymaya gerek yok
merhaba_("İbrahim Aykut");

const _merhaba = firstName => console.log(`Merhaba ${firstName}`);
_merhaba("İbrahim Aykut");
// Tek işlem varsa süslü paranteze gerek yok

const cube = function(x){
    return x * x *x;
}
console.log(cube(4));

const cube_ = x => x * x * x; 
// Tek bir işlem yapılıyorsa ve return kullanılıyorsa bu şekilde tek satırda yazılabilir
console.log(cube_(4)); // Üsttekiyle aynı