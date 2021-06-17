const person = {
    name:"İbrahim Aykut",
    age:23,
    sallary:4000
};
const langs = ["C#","JS","Java"];
const name = "İbrahim";

// For In
// Objelerde dönüyor
for(let prop in person){
    console.log(prop,person[prop]);
}

for(let index in langs){
    console.log(index,langs[index]);
}

for(let index in person.name){
    console.log(index,person.name[index]);
}

// For Of
// Array üzerinde dönüyor
for(let value of langs){
    console.log(value);
}

for(let character of person.name){
    console.log(character);
}