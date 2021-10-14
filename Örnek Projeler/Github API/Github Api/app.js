// 1
const githubForm = document.querySelector("#github-form");
const nameInput = document.querySelector("#githubname");
const clearLastUsers = document.querySelector("#clear-last-users");
const lastUsers = document.querySelector("#last-users");

// 5
const github = new Github();

// 8
const ui = new UI();

// 2
eventListener();

function eventListener(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

// 3
function getData(e){
    let username = nameInput.value.trim();

    if(username === ""){
        alert("Lütfen geçerli bir kullanıcı adı girin!");
    }
    else{
        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found" ){
                ui.showError("Kullanıcı bulunamadı!");
            }
            else{
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);

                ui.addSearchedUserToUI(username);

                Storage.addSearchedUsersToStorage(username);
            }
        })
        .catch(err => ui.showError(err));
    }

    ui.clearInput();
    e.preventDefault();
}

// 15
function clearAllSearched(){
    if(confirm("Emin misin?")){
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }
}

// 14
function getAllSearched(){
    let users = Storage.getSearchedUsersFromStorage();
    
    let result = "";

    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li>`;
    });

    lastUsers.innerHTML = result;
}