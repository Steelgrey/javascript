/* 
    Kalıtım - Inheritance

    Bir objenin başkadan metodlarını veya özelliklerini miras almasıdır.

*/

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function(){
    console.log(`İsim : ${this.name} Yaş : ${this.age}`);
}

const person = new Person("İbrahim",23);

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    /* 
        Üstteki iki satır ile aynı
        Person.call(this,name,age); 
     */
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
/* 
    Sol taraf miras alan
    Sağ taraf miras veren
 */

Employee.prototype.showInfos = function(){
    console.log(`İsim : ${this.name} Yaş : ${this.age} Maaş : ${this.salary}`);
}
/* 
    Bu işlem ile Persondaki showInfos kullanmıyor. 
    Sonradan yazılan kullanılıyor.
    Buna overriding - iptal etme denir.
 */

const emp = new Employee("İbrahim",23,3000);
emp.showInfos();