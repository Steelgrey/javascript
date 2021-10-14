// 4
class Github{
    constructor(){
        this.url = "https://api.github.com/users/";
    }

    async getGithubData(username){
        // İstekler
        const responseUser = await fetch(this.url + username);
        const responseRepo = await fetch(this.url + username + "/repos");

        // Response'dan dönen json verileri
        const userData = await responseUser.json();
        const repoData = await responseRepo.json();

        // Dönen verileri app.js'de kullanmak için
        return{
            user:userData,
            repo:repoData
        }
    }
}