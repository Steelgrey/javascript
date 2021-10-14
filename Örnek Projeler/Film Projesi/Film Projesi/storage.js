function Storage(){ // 10

}

Storage.prototype.addFilmToStorage = function(newFilm){ // 12
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));
}
Storage.prototype.getFilmsFromStorage = function(){ // 13
    let films;
    if(localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle){ // 17
    let films = this.getFilmsFromStorage();
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films");
}