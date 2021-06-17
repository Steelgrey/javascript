function process(callback){
    setTimeout(function(){
        console.log("Process 1");
        callback();
    },3000);
}

function process1(){
    setTimeout(function(){
        console.log("Process 2");
    },2000);
}
process(process1);



const langs = ["C#","MSSQL"];

function addLang(lang,callback){
    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi!");
        callback();
    },2000);
}

function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}

addLang("JavaScript",getAllLangs);

