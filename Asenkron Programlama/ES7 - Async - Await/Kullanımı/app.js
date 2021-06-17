/* 
async bir foksiyonun promise döndüreceğini belirtiyor
Promise yoksa değeri kendisi promise şeklinde döndürüyor
await bir promise'in resolve dönmesini bekliyor
await sadece async bir fonksiyon içerisinde çalışır
*/
async function test(data){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Bu bir değerdir!");
        },2000)
    });

    let response = await promise;

    return response;
}

test().then(response => console.log(response));


async function testData(data){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() =>{
            if(typeof data === "string"){
                resolve(data);
            }
            else{
                reject(new Error("String ifade girin!"));
            }
        },2000)
    });

    const response = await promise;

    return response;
}

testData("İbrahim Aykut")
.then(data => console.log(data))
.catch(err => console.log(err));


async function getCurrency(url){
    const response = await fetch(url); // Response object

    const data = await response.json(); // Json object

    return data;
}
getCurrency("https://api.exchangeratesapi.io/latest")
.then(response => console.log(response));