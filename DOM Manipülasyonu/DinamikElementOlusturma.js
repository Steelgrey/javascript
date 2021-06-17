const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger"
newLink.href = "https://www.instagram.com/ibrahimaykutbas";
newLink.target = "_blank";
newLink.appendChild(document.createTextNode("Dinamik Link"));
cardBody.appendChild(newLink);

console.log(newLink);

// TextContent => Etiketin içindeki bütün textleri değiştiriyor
// CreateTextNode => En son olan child'ın sonuna ekliyor