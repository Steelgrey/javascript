// Promise objesi döndüren fonksiyon
function getData(data){
    return new Promise(function(resolve,reject){
        /* 
            Resolve = > Olumlu
            Reject = > Olumsuz
        */
       setTimeout(function(){
           if(typeof data === "string"){
               resolve(data);
           }
           else{
               reject("String ifade girin!");
           }
       },1000);
    });
}

getData("Merhaba")
.then(response => console.log(`Gelen Değer '${response}'`))
.catch(err => console.log(err));


function addTwo(number){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof number === "number"){
                resolve(number + 2);
            }
            else{
                reject(new Error("Bir Sayı Girin!"));
            }
        },1000);
    });
}

addTwo(10)
.then(response => {
    console.log(response);
    return response + 2;
}).then(response2 => console.log(response2))
.catch(err => console.error(err))

/*
    Birden fazla then kullanılabilir
    Ama catch bir defa kullanılır
    Birden fazla then yapısına promise chain denir
*/