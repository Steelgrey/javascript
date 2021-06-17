class calculator {
    // add / subtract / multiply / divide
    static add(value,value1){
        let result = value + value1;
        console.log(`${value} + ${value1} = ${result}`);
        return result;
    }
    static subtract(value,value1){
        let result = value - value1;
        console.log(`${value} - ${value1} = ${result}`);
        return result;
    }
    static multiply(value,value1){
        let result = value * value1;
        console.log(`${value} * ${value1} = ${result}`);
        return result;
    }
    static divide(value,value1){
        if(value1 === 0){
            console.log("Cannot be divided by zero");
        }
        else{
            let result = value / value1;
            console.log(`${value} / ${value1} = ${result}`);
            return result;
        }
    }
    static error(){
        console.log("Error!");
    }
}

let selection = "+";
if(selection === "+"){
    calculator.add(5,7);
}
else if(selection === "-"){
    calculator.subtract(5,7);
}
else if(selection === "*"){
    calculator.multiply(5,7);
}
else if(selection === "/"){
    calculator.divide(5,7);
}
else{
    calculator.error();
}