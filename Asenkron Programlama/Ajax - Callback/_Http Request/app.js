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
                callback("Hata oluştu",null);
            }
        };

        this.xhr.send();
    }

    post(url,data,callback){
        this.xhr.open("POST",url);
        
        this.xhr.setRequestHeader("Content-type","application/json");

        this.xhr.onload = () =>{
            if(this.xhr.status === 201){
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
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("Hata oluştu!",null);
            }
        };

        this.xhr.send();
    }
}


const request = new Request();

document.querySelector("#get").addEventListener("click",getEvent);
document.querySelector("#post").addEventListener("click",postEvent);
document.querySelector("#put").addEventListener("click",putEvent);
document.querySelector("#delete").addEventListener("click",deleteEvent);

function getEvent(){
    request.get("https://jsonplaceholder.typicode.com/todos",function(err,response){
        if(err === null){
            let list = document.querySelector("#todos");
    
            const todos = JSON.parse(response);

            todos.forEach(function(todo){
                list.innerHTML += `
                    <tr>
                        <td>${todo.userId}</td>
                        <td>${todo.id}</td>
                        <td>${todo.title}</td>
                        <td>${todo.completed}</td>
                    </tr>
                `;
            })
        }
        else{
            console.log(err);
        }
    });
}

function postEvent(){
    request.post("https://jsonplaceholder.typicode.com/todos",{userId:57,title:"Temizlik yap",completed:false},function(err,response){
        if(err === null){

            let list = document.querySelector("#todos");
            
            const newTodo = JSON.parse(response);
            list.innerHTML += `
            <tr>
                <td>${newTodo.userId} </td>
                <td>${newTodo.id} </td>
                <td>${newTodo.title} </td>
                <td>${newTodo.completed} </td>
            </tr>
            `;
        }
        else{
            console.log(err);
        }
    });
}

function putEvent(){
    request.put("https://jsonplaceholder.typicode.com/todos/1",{userId:1,id:1,title:"delectus aut autem",completed:true},function(err,response){
        if(err === null){
            let list = document.querySelector("#todos");
            
            const newTodo = JSON.parse(response);
            list.innerHTML += `
            <tr>
                <td>${newTodo.userId} </td>
                <td>${newTodo.id} </td>
                <td>${newTodo.title} </td>
                <td>${newTodo.completed} </td>
            </tr>
            `;
        }
        else{
            console.log(err);
        }
    });
}

function deleteEvent(){
    request.delete("https://jsonplaceholder.typicode.com/todos/10",function(err,response){
        if(err === null){
            let list = document.querySelector("#todos");
            const newTodo = JSON.parse(response);
            
            list.innerHTML += `
            <tr>
                <td colspan="4" align="center">Silindi!</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            `;
        }
        else{
            console.log(err);
        }
    });
}