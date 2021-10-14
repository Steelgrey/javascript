class API{
    constructor(){
        this.url="https://www.songsterr.com/a/ra/songs.json?pattern=";
    }
    async getApiData(artist,title){
        const responseApi = await fetch(this.url + artist + "="+ title);
        const responseData = await responseApi.json();

        return{
            data:responseData
        }
    }
}