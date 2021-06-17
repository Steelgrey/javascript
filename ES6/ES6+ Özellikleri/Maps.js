let myMap = new Map();

console.log(typeof myMap);

const key = "İbrahim Aykut";
const key1 = {a:10,b:20};
const key2 = () => 2;

// Set => Eklemek
myMap.set(key,"String Değer");
myMap.set(key1,"Object Literal Değer");
myMap.set(key2,"Function Değer");

// Get => Getirmek
console.log(myMap.get(key));
console.log(myMap.get(key1));
console.log(myMap.get(key2));

console.log(myMap);
console.log(myMap.size); // Map Boyutunu Göstermek


const cities = new Map();
cities.set("Sinop",57);
cities.set("Samsun",55);
cities.set("İstanbul",34);

cities.forEach(function(value,key){
    console.log(key,value);
})

for(let [key,value] of cities){
    console.log(key,value);
}

for(let key of cities.keys()){
    console.log(key);
}

for(let value of cities.values()){
    console.log(value);
}

// Array'den map oluşturmak
const array = [["key","value"],["key1","value1"]];
const lastMap = new Map(array);
console.log(lastMap);

// Map'lerden array oluşturmak
const _cities = new Map();
_cities.set("Sinop",57);
_cities.set("Samsun",55);
_cities.set("İstanbul",34);

const _array = Array.from(_cities);
console.log(_array);