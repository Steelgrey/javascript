class UI {
  constructor() {
    this.dataList = document.querySelector("#values");
    this.artistInput = document.querySelector("#artist");
    this.titleInput = document.querySelector("#title");
  }

  showDataList(data) {
    this.dataList.innerHTML = "";
    data.forEach((dataItem) => {
      this.dataList.innerHTML += `
        <tr>
        <td>${dataItem.artist.name}</td>

            <td>${dataItem.title}</td>
        </tr>
        
        `;
    });
  }

  clearInputs(){
      this.artistInput.value = "";
      this.titleInput.value = "";
  }
}
