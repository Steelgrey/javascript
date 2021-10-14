const artistAlbumForm = document.querySelector("#artist-album-form");
const artistInput = document.querySelector("#artist");
const titleInput = document.querySelector("#title");

const ui = new UI();
const api = new API();
eventListener();

function eventListener() {
  artistAlbumForm.addEventListener("submit", getData);
}

function getData(e) {
  const artist = artistInput.value.trim();
  const title = titleInput.value;

  api
    .getApiData(artist, title)
    .then((response) => {
      ui.showDataList(response.data);
      ui.clearInputs();
    })
    .catch((err) => console.log(err));

  e.preventDefault();
}
