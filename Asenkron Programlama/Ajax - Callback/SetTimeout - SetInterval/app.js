// Verilen süre dolduktan sonra içerideki kod bloğu çalışıyor
setTimeout(function(){
    console.log("Deneme");
},2000)

// Verilen süre kadar aralıklarla içerideki kod bloğu çalışıyor 
setInterval(function(){
    console.log("Deneme");
},2000);

let i = 0;
let value = setInterval(function(){
    i++;
    console.log(`Sayi = ${i}`);
},1000);
document.querySelector("#button").addEventListener("click",function(){
    clearInterval(value);
})