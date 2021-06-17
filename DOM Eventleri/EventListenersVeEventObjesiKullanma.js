const filterInput = document.getElementById("filter");
const todoForm = document.getElementById("todo-form");

// Birinci Yöntem
filterInput.onfocus = function(){
    console.log("Çalıştı");
}

// İkinci Yöntem
filterInput.addEventListener("focus",function(e){

    console.log(e); // Function çalıştığı zaman çalışan event objelerini gösteriyor
    console.log(e.type); // Tipi
    console.log(e.target); // Çalıştığı yer
    console.log(e.target.placeholder);
    console.log(e.target.className);
    console.log("Çalıştı");
});

todoForm.addEventListener("submit",submitForm);
function submitForm(e){
    console.log("Subtmit Eventi");
    e.preventDefault(); // Sayfanın yenilenmesini engelliyor. Son satıra yazmakta fayda var
}


console.log(filterInput);