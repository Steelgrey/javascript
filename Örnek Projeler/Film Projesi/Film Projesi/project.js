const form = document.querySelector("#film-form"); // 2
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

// UI Objesini Başlatma
const ui = new UI(); // 4
// Storage Objesi Üretme
const storage = new Storage(); // 11

// Tüm Eventleri Yükleme
eventListeners();

function eventListeners(){ // 5 
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){ // 14
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){ // 6
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === ""){
       ui.displayMessages("danger","Lütfen bütün alanları doldurun!");
    }
    else{
        // Yeni Film
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("info","Film başarılı bir şekilde eklendi!");
        
    }
    ui.clearInput(titleElement,directorElement,urlElement);
    e.preventDefault();
}

function deleteFilm(e){ // 15
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("info","Film başarılı bir şekilde silindi!");
    }
}

function clearAllFilms(){ // 18
    if(confirm("Emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
        ui.displayMessages("info","Filmler başarılı bir şekilde silindi!");
    }

}