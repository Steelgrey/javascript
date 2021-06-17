class Employee {
    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log(`Isim : ${this.name}`);
        console.log(`Yas : ${this.age}`);
        console.log(`Maas : ${this.salary}`);
    }
}

const emp = new Employee("Aykut",23,3000);
console.log(emp);
emp.showInfos();