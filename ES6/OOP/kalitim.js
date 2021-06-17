class Person { // SuperClass, BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log(`Isim : ${this.name}`);
        console.log(`Yas : ${this.age}`);
    }
}

class Employee extends Person { // DerivedClass, SubClass, ChildClass
    constructor(name,age,salary){
        super(name,age); // Üst sınıfın constructor'ını kullanıyor.
        this.salary = salary; 
        super.showInfos();
    }
    showInfos(){ // Overriding
        console.log(`Isim : ${this.name}`);
        console.log(`Yas : ${this.age}`);
        console.log(`Maas : ${this.salary}`);
    }
    raiseSalar(amount){
        this.salary += amount;
    }
    
}

const emp = new Employee("Aykut",23,3000);
emp.raiseSalar(1000);
console.log(emp);
emp.showInfos();
