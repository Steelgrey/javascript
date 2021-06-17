class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    get(url,callback){
        this.xhr.open("GET",url);

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                // Hata Durumu
                callback("Hata oluştu!",null);
            }
        };

        this.xhr.send();
    }

    post(url,data,callback){
        this.xhr.open("POST",url);
        // JSON Verisi Olarak Almak
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 201 ){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Hata oluştu!",null);
            }
        };

        this.xhr.send(JSON.stringify(data));
    }

    put(url,data,callback){
        this.xhr.open("PUT",url);

        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Hata oluştu!",null);
            }
        };

        this.xhr.send(JSON.stringify(data));
    }

    delete(url,callback){
        this.xhr.open("DELETE",url);

        this.xhr.onload = () => {
            if(this.xhr.status == 200){
                callback(null,"Silindi!");
            }
            else{
                callback("Hata oluştu!",null);
            }
        };

        this.xhr.send();
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if(err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});

request.post("https://jsonplaceholder.typicode.com/albums",{userID:57,title:"İbrahim Aykut"},function(err,response){
    if(err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});

request.put("https://jsonplaceholder.typicode.com/albums/100",{userID:57,title:"İbrahim Aykut BAŞ"},function(err,response){
    if(err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});

request.delete("https://jsonplaceholder.typicode.com/albums/100",function(err,response){
    if(err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});