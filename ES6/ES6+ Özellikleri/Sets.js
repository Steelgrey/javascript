const mySet = new Set();
mySet.add(100);
mySet.add("ibrahim Aykut");
mySet.add({a:1,b:2});
console.log(mySet);

const mySet1 = new Set([100,"İbrahim Aykut"]);
console.log(mySet1);

console.log(mySet1.size); // Boyutunu gösteriyor

mySet1.delete(100);
console.log(mySet1);

console.log(mySet1.has("İbrahim Aykut"));

mySet1.forEach(function(value){
    console.log(value);
})

for(let value of mySet1){
    console.log(value);
}

const array = Array.from(mySet1);
console.log(array);