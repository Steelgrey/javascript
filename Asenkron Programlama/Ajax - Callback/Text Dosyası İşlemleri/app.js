document.querySelector("#button").addEventListener("click",function(){
    // XMLHttpRequest
    const xhr = new XMLHttpRequest();

    xhr.onload = function(){
        if(this.status === 200){
            document.querySelector("#ajax").textContent = this.responseText;
        }
    }
    
    xhr.open("GET","belge.txt",true);
     // True olması async anlamına geliyor
     // Default hali true olduğu için belirtmek şart değil
     
    xhr.send(); 
});