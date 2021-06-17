function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function(){
        console.log("Bilgiler yükleniyor...");
        console.log(`İsim : ${this.name} Yaş ${this.age}`);
}

const emp1 = new Employee("Ibrahim",23)
emp1.showInfos();