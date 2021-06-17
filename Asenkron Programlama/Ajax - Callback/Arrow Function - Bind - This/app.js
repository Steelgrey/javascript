const person = {
    age:23,

    // Bind
    tellAge : function(){
        console.log(this);
        console.log(this.age);
    }.bind(this),

    // Arrow Function
    tellAge : () => {
        console.log(this);
        console.log(this.age);
    }

    /* 
    İkisi de aynı işlemi yapıyor
    Arrow fuction yazıldığı zaman sistem arka planda bunu
    Bind'a döndürüyor 
    */
}

person.tellAge();
