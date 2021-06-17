const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

// Click Event => Basıp Çektikten Sonra Çalışıyor
title.addEventListener("click",run);
function run(e){
    console.log(e.type);
}

// Double Click Event => Çift Tıklamadan Sonra Çalışıyor
title.addEventListener("dblclick",run);
function run(e){
    console.log(e.type);
}

// Mouse Down Event => Basıldığı An Çalışıyor
title.addEventListener("mousedown",run);
function run(e){
    console.log(e.type);
}

// Mouse Up Event => Basıp Çektikten Sonra Çalışıyor
title.addEventListener("mouseup",run);
function run(e){
    console.log(e.type);
}

// Mouse Over Event => Mouse Üzerine Geldiği Zaman Çalışıyor
title.addEventListener("mouseover",run);
function run(e){
    console.log(e.type);
}

// Mouse Out Event => Mouse Üzerine Gelip Çıktıktan Sonra Çalışıyor
title.addEventListener("mouseout",run);
function run(e){
    console.log(e.type);
}

// Mouse Enter ve Mouse Leave
// Mouse Enter Girince Mouse Leave Çıkınca Çalışıyor
cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);
function run(e){
    console.log(e.type);
}

// Mouse Ever-Out ile Mouse Enter-Leave Farkı
// => Mouse Ever-Out üzerine geldiği her şeyde çalışıyor
// => Mouse Enter-Leave sadece içeri girdiği ve çıktığı zaman çalışıyor