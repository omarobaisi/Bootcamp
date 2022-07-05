let names = ["Ashley", "Donovan", "Lucas"]
let ages = [23, 47, 18]
let people = []

for(let i=0; i<names.length; i++) {
    let newObject = {name: names[i], age: ages[i]}
    people.push(newObject)
}

console.log(people)