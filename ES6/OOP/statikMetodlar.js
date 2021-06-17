class Matematik{
    square(x){
        console.log(x*x);
    }
    static cube(x){ 
        console.log(x*x*x);
    }
}

// const math = new Matematik(); Static yazarak obje oluşturmaya gerek kalmıyor.
Matematik.cube(2);

const math = new Matematik();
math.square(2);