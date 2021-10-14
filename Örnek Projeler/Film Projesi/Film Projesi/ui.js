function UI(){ // 3

}
UI.prototype.addFilmToUI = function(newFilm){ // 7
    const filmList = document.querySelector("#films");
    filmList.innerHTML += `
    <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.title}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
     </tr>
    `
}

UI.prototype.clearInput = function(titleInput,directorInput,urlInput){ // 8
    titleInput.value = "";
    directorInput.value = "";
    urlInput.value = "";
}

UI.prototype.displayMessages = function(type,message){ // 9
    const firstCardBody = document.querySelectorAll(".card-body")[0];
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    setTimeout(function(){
        alert.remove();
    },3000);
}

UI.prototype.loadAllFilms = function(films){
    const filmList = document.querySelector("#films");
    films.forEach(function(film){
        filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
         </tr>
        `
    });
}

UI.prototype.deleteFilmFromUI = function(film){ //16
    film.parentElement.parentElement.remove();
}

UI.prototype.clearAllFilmsFromUI = function(){ // 19
    const filmList = document.querySelector("#films");
    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
    }
}