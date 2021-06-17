const emp = {
    name : "İbrahim Aykut",
    age: 23
}; // Object Literal

// *** \\

function Employee(name,age,salary){ // Fonksiyon adının ilk harfi büyük 
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
} // Yapıcı Fonksiyon - Constructor

const emp1 = new Employee("Ibrahim",23,3000);
const emp2 = new Employee("Aykut",23,3000);
console.log(emp1);
console.log(emp2);
emp1.showInfos();
emp2.showInfos();